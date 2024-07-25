import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

function EmployeeComents() {
  const [isOpen, setIsOpen] = useState(true);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef(null);

  const toggleTable = () => {
    setIsOpen(!isOpen);
  };

  const updateHeight = () => {
    if (contentRef?.current) {
      setHeight(isOpen ? `${200 + 20}px` : "0px");
    }
  };

  useLayoutEffect(() => {
    updateHeight();
    // Ensure that the height is recalculated when `employees` change
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => updateHeight();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="p-4 mt-4  shadow-card rounded">
      <div
        className="flex items-center font-bold text-lg cursor-pointer"
        onClick={toggleTable}
      >
        <span className="text-lg font-semibold text-gold">
          Employee Comments{" "}
        </span>{" "}
        <span className="ml-1 cursor-pointer" onClick={toggleTable}>
          <Icon
            icon={isOpen ? "fe:arrow-up" : "fe:arrow-down"}
            className="transition-transform duration-300 text-arrowIconColor"
          />
        </span>
      </div>

      <div
        className={`per-emp-com-editor min-w-full overflow-x-auto transition-height duration-500 ease-in-out`}
        style={{
          height: isOpen ? `${height}` : "0px",
        }}
      >
        <div className="mt-3">
          <Editor
            ref={contentRef}
            apiKey="ymt5zm95gau7yhvnx01rqdt6rpyigimdru05sq0b3u353bje"
            initialValue="<p>This is the initial content of the editor.</p>"
            init={{
              height: 200,
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
    </div>
  );
}

export default EmployeeComents;
