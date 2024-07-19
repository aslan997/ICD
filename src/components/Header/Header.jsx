import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import YearButton from "../YearButton/YearButton";

const Header = () => {
  const [activeYear, setActiveYear] = useState(2022); // Default active year

  const handleYearClick = (year) => {
    setActiveYear(year);
  };

  const years = [2022, 2023, 2024, 2025, 2026, 2027, 2028];

  return (
    <header className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex space-x-2">
          <Dropdown />
          <div className="flex space-x-2 hidden xl:flex">
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
        <div className="flex space-x-2 items-center">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-600">
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
          <div>
            <img
              src="https://icd.gov.ae/wp-content/themes/ICD/assets/images/logo.png"
              alt="ICD Logo"
              className="h-8"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
