import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className="relative dropdown" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center bg-white text-14 py-2 px-4 rounded-md shadow-md focus:outline-none"
      >
        <span className="mr-1">
          <Icon icon="charm:menu-hamburger" />
          {/* <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2z"
              clipRule="evenodd"
            />
          </svg> */}
        </span>
        Menu
        <Icon icon="solar:alt-arrow-down-bold" className="mt-1 ml-1" />
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg">
          <Link to="#" className="block px-4 py-2 text-14 hover:bg-gray-100">
            Dashboard
          </Link>
          <Link to="#" className="block px-4 py-2 text-14 hover:bg-gray-100">
            Performance Form
          </Link>
          <Link to="#" className="block px-4 py-2 text-14 hover:bg-gray-100">
            HR Report
          </Link>
          <Link to="#" className="block px-4 py-2 text-14 hover:bg-gray-100">
            Calibration
          </Link>
          <hr />
          <Link
            to="/employee"
            className="block px-4 py-2 text-14 hover:bg-gray-100"
          >
            Employees
          </Link>
          <Link to="#" className="block px-4 py-2 text-14 hover:bg-gray-100">
            Grades
          </Link>
          <Link to="#" className="block px-4 py-2 text-14 hover:bg-gray-100">
            Prospectives
          </Link>
          <Link to="#" className="block px-4 py-2 text-14 hover:bg-gray-100">
            Competencies
          </Link>
          <Link to="#" className="block px-4 py-2 text-14 hover:bg-gray-100">
            PMS Cycles
          </Link>
          <Link to="#" className="block px-4 py-2 text-14 hover:bg-gray-100">
            Employee Stages
          </Link>
          <Link to="#" className="block px-4 py-2 text-14 hover:bg-gray-100">
            Employee Submissions
          </Link>
          <Link to="#" className="block px-4 py-2 text-14 hover:bg-gray-100">
            Stage Management
          </Link>
          <Link to="#" className="block px-4 py-2 text-14 hover:bg-gray-100">
            Proxy Access Management
          </Link>
          <Link to="#" className="block px-4 py-2 text-14 hover:bg-gray-100">
            Audit Log
          </Link>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
