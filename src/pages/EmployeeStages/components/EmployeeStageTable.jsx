import { Icon } from "@iconify/react/dist/iconify.js";

import SearchBar from "../../../components/SearchBar/SearchBar";
import Braeadcrumb from "../../../components/Breadcrumb/Braeadcrumb";

// Employee Data
const employees = [
  {
    name: "Abdul Razzak Sharbuddeen",
    stage: "Year-End Review",
    startDate: "27-Dec-2023",
    endDate: "27-Dec-2023",
  },
  {
    name: "Abdul Razzak Sharbuddeen",
    stage: "Year-End Review",
    startDate: "27-Dec-2023",
    endDate: "27-Dec-2023",
  },

  // Add more employee objects here (up to 96 more)
];

const EmployeeStageTable = () => {
  const pageNames = ["Dashboard", "Employees Stages"];
  const pageUrls = ["/dashboard", "/employee_stages"];

  return (
    <div className="bg-white px-4 py-24 ">
      <Braeadcrumb pageNames={pageNames} pageUrls={pageUrls} />
      <h2 className="text-2xl text-gold font-bold my-4 ">Employee Stages</h2>
      <SearchBar />
      <div className="rounded shadow-card overflow-x-auto p-5">
        <table className="min-w-[1450px] lg:min-w-full border-collapse table">
          <thead className="">
            <tr className="border border-gray-300 table-row">
              {["Employee", "Stage", "Start Date", "End Date", "Action"].map(
                (header) => (
                  <th
                    key={header}
                    className=" border border-gray-300 text-left table-cell bg-tableHeader relative"
                  >
                    <div className="flex flex-col">
                      <span className="text-black border-b text-14 font-semibold p-1.5 border-tableBorder">
                        {header}
                      </span>
                      <input
                        type="text"
                        className="m-1 p-1 border border-gray-300  rounded text-14 font-normal"
                        placeholder="Search..."
                      />
                    </div>
                    {header !== "Action" && (
                      <div className="absolute top-0 bottom-0 right-0 px-2 py-2 flex -space-x-0.5">
                        <Icon icon="icon-park:arrow-up" />
                        <Icon icon="icon-park-outline:arrow-down" />
                      </div>
                    )}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody className="table-row-group">
            {employees.map((employee, index) => (
              <tr key={index} className="border border-gray-300 md:table-row">
                <td className="p-1.5 text-14 font-normal hover:bg-tableHeader border border-gray-300 table-cell">
                  {employee.name}
                </td>
                <td className="p-1.5 text-14 font-normal hover:bg-tableHeader border border-gray-300 table-cell">
                  {employee.stage}
                </td>
                <td className="p-1.5 text-14 font-normal hover:bg-tableHeader border border-gray-300 table-cell">
                  {employee.startDate}
                </td>
                <td className="p-1.5 text-14 font-normal hover:bg-tableHeader border border-gray-300 table-cell">
                  {employee.endDate}
                </td>

                <td className="p-1.5 text-14 font-normal hover:bg-tableHeader border border-gray-300 table-cell">
                  <div className="flex items-center space-x-2">
                    <button className="bg-white shadow-md  p-1 rounded">
                      <Icon icon={"mage:edit-fill"} />
                    </button>
                    <button className="bg-white shadow-md  p-1 rounded">
                      <Icon icon={"akar-icons:info-fill"} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeStageTable;
