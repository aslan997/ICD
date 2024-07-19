import React, { useState, useRef } from "react";
import Arrow from "../../../assets/arrow-accordion.png";

const Information = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="border rounded-lg p-4 mb-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-semibold text-yellow-600">Information</p>
        <span
          className="bg-accordionArrowSpanBtn w-26 h-26 rounded-full flex items-center justify-center transform transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}
        >
          <img src={Arrow} className="h-2.5 w-2.5" />
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
