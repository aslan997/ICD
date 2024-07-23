import React, { useRef, useState } from "react";
import Arrow from "../../../assets/arrow-accordion.png";

const TaskCategoryName = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="border rounded-lg p-4 mb-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-semibold text-gold">
          Task Category Name Here
        </p>
        <span
          className="bg-gold w-26 h-26 rounded-full flex items-center justify-center transform transition-transform duration-300"
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
        <div className="mt-4 text-sm flex flex-wrap">
          <p className="text-14">
            Employee ID: <span className="font-bold mr-2">9876</span>
          </p>{" "}
          <p>
            &mdash; Employee Name:{" "}
            <span className="font-bold mr-2">John Smith</span>
          </p>{" "}
          <p>
            &mdash; Job Title:{" "}
            <span className="font-bold mr-2">John Williams</span>
          </p>{" "}
          <p>
            &mdash; Line Manager:{" "}
            <a href="#" className="font-bold underline mr-2">
              Doc.pdf
            </a>{" "}
          </p>
          <p>
            &mdash; Grade: <span className="font-bold mr-2">John Williams</span>
          </p>
          <p>
            &mdash; Department:{" "}
            <a href="#" className="font-bold underline mr-2">
              Doc.pdf
            </a>{" "}
          </p>
          <p>
            &mdash; Stage:{" "}
            <a href="#" className="font-bold underline mr-2">
              Doc.pdf
            </a>{" "}
          </p>
          <p>
            &mdash; Process Status:{" "}
            <a href="#" className="font-bold underline">
              Doc.pdf
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskCategoryName;
