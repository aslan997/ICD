import React, { useState, useRef } from "react";

const Information = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="border rounded-lg p-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-semibold text-yellow-600">Information</p>
        <span
          className={`text-yellow-600 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
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
            ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Information;
