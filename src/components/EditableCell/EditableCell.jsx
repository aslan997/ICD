import React, { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { Icon } from "@iconify/react";
import { Editor } from "@tinymce/tinymce-react";

const EditableCell = ({ initialValue, onSave, title, type }) => {
  // State to track if the cell is in editing mode
  const [isEditing, setIsEditing] = useState(false);
  // State to store the current value of the cell
  const [value, setValue] = useState(initialValue);
  // State to temporarily store the value during editing
  const [tempValue, setTempValue] = useState(initialValue);
  // State to store the position of the editor popup
  const [position, setPosition] = useState({ left: 0, top: 0 });

  const inputRef = useRef(null); // Reference to the input element
  const wrapperRef = useRef(null); // Reference to the cell wrapper element
  const spanRef = useRef(null); // Reference to the span inside cell
  const editorRef = useRef();
  const contentRef = useRef();

  const portalRoot = document.getElementById("portal-root"); // Reference to the portal root element

  // Function to update the position of the editor popup
  const updatePosition = useCallback(() => {
    if (!spanRef?.current) return;

    const rect = spanRef?.current?.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Calculate left and top position based on cell's position and viewport size
    let left = rect.left + rect.width;
    let top = rect.top;

    // Adjust position if the popup overflows the viewport
    if (left + 200 > viewportWidth) {
      left = rect.left - 200;
    }
    if (top + 200 > viewportHeight) {
      top = rect.top - 115;
    }

    setPosition({ left, top });
  }, []);

  // Function to handle the click event for editing the cell
  const handleEdit = (e) => {
    updatePosition();
    setIsEditing(true);
    setTempValue(value);
  };

  // Function to handle the save action
  const handleSave = () => {
    setValue(tempValue);
    setIsEditing(false);
    if (onSave) {
      onSave(tempValue);
    }
  };

  // Function to handle the cancel action
  const handleCancel = () => {
    setIsEditing(false);
    setTempValue(value);
  };

  // Function to handle clicks outside the editor popup
  const handleClickOutside = (event) => {
    if (editorRef?.current && !editorRef?.current.contains(event.target)) {
      setIsEditing(false);
    }
  };

  // Effect to add/remove event listeners for scroll, resize, and click outside events
  useEffect(() => {
    if (isEditing) {
      window.addEventListener("scroll", updatePosition);
      window.addEventListener("resize", updatePosition);
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isEditing, updatePosition]);

  // Options for radio buttons (for testing purposes)
  const radioOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  // Options for select dropdown (for testing purposes)
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  // Function to render the appropriate input based on the type prop
  const renderInput = () => {
    switch (type) {
      case "field":
        return (
          <input
            ref={inputRef}
            type="text"
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            className="border p-1 mr-2 mb-4"
          />
        );
      case "textarea":
        return (
          <div
            className={`per-emp-com-editor min-w-full overflow-x-auto transition-height duration-500 ease-in-out`}
          >
            <div className="mt-3 mb-3">
              <Editor
                ref={contentRef}
                apiKey="ymt5zm95gau7yhvnx01rqdt6rpyigimdru05sq0b3u353bje"
                initialValue="<p>This is the initial content of the editor.</p>"
                init={{
                  height: 300,
                  width: 400,
                  menubar: false,
                  selector: "textarea", // Not required if directly replacing <textarea>
                  plugins: "lists textcolor colorpicker",
                  toolbar: " bold | numlist bullist",
                  content_style:
                    "body { font-family: 'Poppins', sans-serif; font-size: 14px }",
                }}
              />
            </div>
          </div>
        );
      case "select":
        return (
          <select
            ref={inputRef}
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            className="border p-1 mr-2 mb-4"
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      case "radio":
        return (
          <div className="flex items-center flex flex-col mb-4">
            {radioOptions.map((option) => (
              <label key={option.value} className="mr-4">
                <input
                  type="radio"
                  value={option.value}
                  checked={tempValue === option.value}
                  onChange={(e) => setTempValue(e.target.value)}
                />
                {option.label}
              </label>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative" ref={wrapperRef}>
      {/* Cell value that can be clicked to edit */}
      <span onClick={handleEdit} className="cursor-pointer" ref={spanRef}>
        {value}
      </span>
      {isEditing &&
        portalRoot &&
        createPortal(
          // Editor popup positioned based on state
          <div
            className="fixed z-1 min-w-36 bg-white border border-gray-300 rounded shadow-lg flex flex-col items-start text-14"
            style={{ left: position.left, top: position.top }}
            ref={editorRef}
          >
            <div className="w-full border-b mb-2 py-1 px-4 bg-gray-200">
              <p>{`Please enter ${title}`}</p>
            </div>
            <div className="p-2 px-4">
              {renderInput()}
              <div>
                {/* Save button */}
                <button
                  onClick={handleSave}
                  className="bg-green text-white p-1 rounded mr-1"
                >
                  <Icon icon="material-symbols:check" />
                </button>
                {/* Cancel button */}
                <button
                  onClick={handleCancel}
                  className="bg-red-500 text-white p-1 rounded"
                >
                  <Icon icon="material-symbols:close" />
                </button>
              </div>
            </div>
          </div>,
          portalRoot
        )}
    </div>
  );
};

export default EditableCell;
