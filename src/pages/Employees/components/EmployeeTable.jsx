import React from "react";
import Braeadcrumb from "../../../components/Breadcrumb/Braeadcrumb";

// Employee Data
const employees = [
  {
    name: "Abdul Razzak Sharbuddeen",
    email: "hr@icd.gov.ae",
    id: "RE 0185",
    grade: "A1",
    manager: "Monaliza Dias",
    status: "Active",
  },
  {
    name: "Fatima Zahra Hassan",
    email: "fzahra@xyz.com",
    id: "FH 3251",
    grade: "B2",
    manager: "Abdul Razzak Sharbuddeen",
    status: "Active",
  },
  {
    name: "Omar Khalid Mohammed",
    email: "okmohammed@mycompany.ae",
    id: "OM 7890",
    grade: "C3",
    manager: "Monaliza Dias",
    status: "Active",
  },
  // Add more employee objects here (up to 96 more)
];

const EmployeeTable = () => {
  const pageNames = ["Dashboard", "Employees"];
  const pageUrls = ["/dashboard", "/employee"];

  return (
    <div className="bg-white px-4 py-24 rounded-md shadow-md">
      <Braeadcrumb pageNames={pageNames} pageUrls={pageUrls} />
      <h2 className="text-2xl font-bold mb-4">Employees</h2>
      <table className="min-w-full border-collapse block md:table">
        <thead className="block md:table-header-group">
          <tr className="border border-gray-300 md:table-row">
            {[
              "Full Name",
              "Email Address",
              "Employee ID",
              "Grade",
              "Line Manager",
              "Status",
              "Action",
            ].map((header) => (
              <th
                key={header}
                className="p-2 border border-gray-300 text-left block md:table-cell"
              >
                <div className="flex flex-col">
                  <span>{header}</span>
                  <input
                    type="text"
                    className="mt-1 p-1 border border-gray-300 rounded"
                    placeholder="Search..."
                  />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {employees.map((employee, index) => (
            <tr key={index} className="border border-gray-300 md:table-row">
              <td className="p-2 border border-gray-300 block md:table-cell">
                {employee.name}
              </td>
              <td className="p-2 border border-gray-300 block md:table-cell">
                {employee.email}
              </td>
              <td className="p-2 border border-gray-300 block md:table-cell">
                {employee.id}
              </td>
              <td className="p-2 border border-gray-300 block md:table-cell">
                {employee.grade}
              </td>
              <td className="p-2 border border-gray-300 block md:table-cell">
                {employee.manager}
              </td>
              <td className="p-2 border border-gray-300 block md:table-cell">
                <span className="text-green-600">{employee.status}</span>
              </td>
              <td className="p-2 border border-gray-300 block md:table-cell">
                <div className="flex items-center space-x-2">
                  <button className="bg-blue-500 text-white p-1 rounded">
                    Edit
                  </button>
                  <button className="bg-gray-300 p-1 rounded">Info</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
