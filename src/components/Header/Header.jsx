import React, { useEffect, useRef, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import YearButton from "../YearButton/YearButton";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

const Header = () => {
  const [activeYear, setActiveYear] = useState(2024); // Default active year
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleYearClick = (year) => {
    setActiveYear(year);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const years = [2022, 2023, 2024, 2025, 2026, 2027, 2028];

  return (
    <header className="bg-white p-4 shadow-md fixed min-w-full z-10">
      <div className=" mx-auto flex items-center justify-between">
        <div className="flex space-x-2">
          <Dropdown />
          <div className="space-x-2 hidden lg:flex">
            {years?.map((year) => (
              <YearButton
                key={year}
                year={year}
                isActive={year === activeYear}
                onClick={() => handleYearClick(year)}
              />
            ))}
          </div>
        </div>
        {/* <div className="flex items-center"> */}
        <div
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-600 cursor-pointer"
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4a4 4 0 100 8 4 4 0 000-8zM4 20a8 8 0 0116 0H4z"
            />
          </svg>
        </div>
        {isOpen && (
          <div
            ref={dropdownRef}
            className="absolute z-1 top-16 right-4 w-44 bg-white border border-gray-200 rounded-md shadow-lg"
          >
            <div
              className="py-1"
              role="listbox"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
              <Link
                to="/profile"
                className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 inline-flex items-center"
                role="option"
                onClick={() => setIsOpen(false)}
              >
                <Icon
                  icon="heroicons:user-circle-16-solid"
                  className="mr-2 text-viewProfileIcon"
                />
                View Profile
              </Link>
              <hr />
              <Link
                to="/login"
                className="w-full px-4 py-2 text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700 inline-flex items-center"
                role="option"
                onClick={() => setIsOpen(false)}
              >
                <Icon icon="tdesign:poweroff" className="mr-2" />
                Logout
              </Link>
            </div>
          </div>
        )}
      </div>
      {/* </div> */}
    </header>
  );
};

export default Header;
