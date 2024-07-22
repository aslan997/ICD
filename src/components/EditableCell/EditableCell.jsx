import React, { useState, useRef } from "react";
import { Icon } from "@iconify/react";

const EditableCell = ({ initialValue, onSave, title, type }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);
  const [tempValue, setTempValue] = useState(initialValue);
  const inputRef = useRef(null);

  const handleEdit = () => {
    setIsEditing(true);
    setTempValue(value);
  };

  const handleSave = () => {
    setValue(tempValue);
    setIsEditing(false);
    if (onSave) {
      onSave(tempValue);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setTempValue(value);
  };

  // Radio options for testing
  const radioOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  // Select options for testing
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

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
          <textarea
            ref={inputRef}
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            className="border p-1 mr-2 mb-4 h-24" // Adjust height as needed
          />
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
    <div className="relative">
      <span onClick={handleEdit} className="cursor-pointer">
        {value}
      </span>
      {isEditing && (
        <div className="absolute top-0 left-full min-w-36 ml-2 bg-white border border-gray-300 rounded shadow-lg flex flex-col items-start">
          <div className="w-full border-b mb-2 py-1 px-4 bg-gray-200">
            <p>{`Please enter ${title}`}</p>
          </div>
          <div className="p-2 px-4">
            {renderInput()}
            <div>
              <button
                onClick={handleSave}
                className="bg-green-500 text-white p-1 rounded mr-1"
              >
                <Icon icon="material-symbols:check" />
              </button>
              <button
                onClick={handleCancel}
                className="bg-red-500 text-white p-1 rounded"
              >
                <Icon icon="material-symbols:close" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditableCell;
