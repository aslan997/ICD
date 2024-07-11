import React, { useState } from "react";

const TaskCategoryName = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg p-4">
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
          ⌃
        </span>
      </div>
      {isOpen && (
        <div className="mt-4 text-sm">
          <p>
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
      )}
    </div>
  );
};

export default TaskCategoryName;
