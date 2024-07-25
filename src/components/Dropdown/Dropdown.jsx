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

  const closeDropdown = () => {
    setIsOpen(false);
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
        <div className="absolute z-1 left-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg">
          <Link
            to="#"
            className="block px-4 py-2 text-14 hover:bg-gray-100"
            onClick={closeDropdown}
          >
            Dashboard
          </Link>
          <Link
            to="/objective/form"
            className="block px-4 py-2 text-14 hover:bg-gray-100"
            onClick={closeDropdown}
          >
            Performance Form
          </Link>
          <Link
            to="#"
            className="block px-4 py-2 text-14 hover:bg-gray-100"
            onClick={closeDropdown}
          >
            HR Report
          </Link>
          <Link
            to="#"
            className="block px-4 py-2 text-14 hover:bg-gray-100"
            onClick={closeDropdown}
          >
            Calibration
          </Link>
          <hr />
          <Link
            to="/employee"
            className="block px-4 py-2 text-14 hover:bg-gray-100"
            onClick={closeDropdown}
          >
            Employees
          </Link>
          <Link
            to="#"
            className="block px-4 py-2 text-14 hover:bg-gray-100"
            onClick={closeDropdown}
          >
            Grades
          </Link>
          <Link
            to="#"
            className="block px-4 py-2 text-14 hover:bg-gray-100"
            onClick={closeDropdown}
          >
            Prospectives
          </Link>
          <Link
            to="#"
            className="block px-4 py-2 text-14 hover:bg-gray-100"
            onClick={closeDropdown}
          >
            Competencies
          </Link>
          <Link
            to="#"
            className="block px-4 py-2 text-14 hover:bg-gray-100"
            onClick={closeDropdown}
          >
            PMS Cycles
          </Link>
          <Link
            to="#"
            className="block px-4 py-2 text-14 hover:bg-gray-100"
            onClick={closeDropdown}
          >
            Employee Stages
          </Link>
          <Link
            to="#"
            className="block px-4 py-2 text-14 hover:bg-gray-100"
            onClick={closeDropdown}
          >
            Employee Submissions
          </Link>
          <Link
            to="#"
            className="block px-4 py-2 text-14 hover:bg-gray-100"
            onClick={closeDropdown}
          >
            Stage Management
          </Link>
          <Link
            to="#"
            className="block px-4 py-2 text-14 hover:bg-gray-100"
            onClick={closeDropdown}
          >
            Proxy Access Management
          </Link>
          <Link
            to="#"
            className="block px-4 py-2 text-14 hover:bg-gray-100"
            onClick={closeDropdown}
          >
            Audit Log
          </Link>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
