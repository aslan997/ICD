import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

function EmployeeComents() {
  const [isOpen, setIsOpen] = useState(true);
  const contentRef = useRef(null);

  const toggleTable = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-4 mt-4  shadow-md rounded-md">
      <div
        className="flex items-center font-bold text-lg cursor-pointer"
        onClick={toggleTable}
      >
        <span className="text-lg font-semibold text-gold">Employee Comments </span>{" "}
   
        <Icon
          icon={isOpen ? "fe:arrow-up" : "fe:arrow-down"}
          className="ml-2 font-bold  hover:text-gold text-arrowIconColor"
        />
      </div>

      <div
        ref={contentRef}
        className={`per-emp-com-editor min-w-full mt-4 overflow-x-auto transition-height duration-500 ease-in-out`}
        style={{
          height: `max-content`,
        }}
      >
        {isOpen && (
          <Editor
            apiKey="ymt5zm95gau7yhvnx01rqdt6rpyigimdru05sq0b3u353bje"
            initialValue="<p>This is the initial content of the editor.</p>"
            init={{
              height: 200,
              menubar: false,
              selector: "textarea", // Not required if directly replacing <textarea>
              plugins: "lists textcolor colorpicker",
              toolbar:
                " bold | numlist bullist",
              content_style:
                "body { font-family: 'Poppins', sans-serif; font-size: 14px }",
            }}
          />
        )}
      </div>
    </div>
  );
}

export default EmployeeComents;
