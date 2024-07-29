import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const AuditFilter = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleSearch = () => {
    // Implement search functionality here
    console.log("Searching from", startDate, "to", endDate);
  };

  return (
    <div className="p-4 my-4 bg-white shadow-card rounded max-w-full mx-auto mb-6">
      <div className="text-lg font-bold text-gold mb-4">Filter</div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-2">
        <div>
          <label className="block font-500 text-14 mb-2">Date From</label>
          <div className="relative">
            <input
              type="date"
              className="w-full text-14 border rounded p-2 h-9"
              value={startDate}
              onChange={handleStartDateChange}
            />
            {/* <Datepicker
              asSingle={true} 
              value={startDate}
              onChange={handleStartDateChange}
              className="border"
            /> */}
            {/* <Icon icon="uil:calender"/> */}
          </div>
        </div>
        <div>
          <label className="block font-500 text-14 mb-2">Date To</label>
          <div className="relative">
            <input
              type="date"
              className="w-full text-14 border rounded p-2 h-9"
              value={endDate}
              onChange={handleEndDateChange}
            />
            {/* <Icon icon="uil:calender"/> */}
          </div>
        </div>
        <div className="flex items-end">
          <button
            className="bg-gold h-9 shadow-button text-14 inline-flex items-center text-white rounded px-4 py-2"
            onClick={handleSearch}
          >
            <Icon icon="fa:search" className="mr-1" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuditFilter;
