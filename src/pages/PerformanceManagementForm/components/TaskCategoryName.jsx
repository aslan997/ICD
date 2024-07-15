import React, { useRef, useState } from "react";

const TaskCategoryName = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="border rounded-lg p-4 mb-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-semibold text-yellow-600">
          Task Category Name Here
        </p>
        <span
          className="text-yellow-600 transform transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 12.707a1 1 0 010-1.414L10 6.586l4.707 4.707a1 1 0 01-1.414 1.414L10 9.414l-3.293 3.293a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
      <div
        ref={contentRef}
        className="transition-all duration-300 overflow-hidden"
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : "0",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="mt-4 text-sm">
          <p className="text-14">
            Employee ID: <span className="font-semibold">9876</span> &mdash;
            Employee Name: <span className="font-semibold">John Smith</span>{" "}
            &mdash; Job Title:{" "}
            <span className="font-semibold">John Williams</span> &mdash; Line
            Manager:{" "}
            <a href="#" className="text-blue-600">
              Doc.pdf
            </a>{" "}
            &mdash; Grade: <span className="font-semibold">John Williams</span>{" "}
            &mdash; Department:{" "}
            <a href="#" className="text-blue-600">
              Doc.pdf
            </a>{" "}
            &mdash; Stage:{" "}
            <a href="#" className="text-blue-600">
              Doc.pdf
            </a>{" "}
            &mdash; Process Status:{" "}
            <a href="#" className="text-blue-600">
              Doc.pdf
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskCategoryName;
