import { Icon } from "@iconify/react/dist/iconify.js";
import SearchBar from "../../../components/SearchBar/SearchBar";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";

// Employee Data
const employees = [
  {
    employee_name: "Abdul Razzak Sharbudeen",
    stage_name: "Objective Setting",
    status: "Pending with Employee",
  },
  {
    employee_name: "Abdul Razzak Sharbudeen",
    stage_name: "Objective Setting",
    status: "Pending with Employee",
  },
  {
    employee_name: "Abdul Razzak Sharbudeen",
    stage_name: "Objective Setting",
    status: "Completed",
  },
  {
    employee_name: "Abdul Razzak Sharbudeen",
    stage_name: "Objective Setting",
    status: "Pending with Employee",
  },
  {
    employee_name: "Abdul Razzak Sharbudeen",
    stage_name: "Objective Setting",
    status: "Pending with Employee",
  },
  {
    employee_name: "Abdul Razzak Sharbudeen",
    stage_name: "Objective Setting",
    status: "Pending with Employee",
  },
  {
    employee_name: "Abdul Razzak Sharbudeen",
    stage_name: "Objective Setting",
    status: "Pending with Employee",
  },
  {
    employee_name: "Abdul Razzak Sharbudeen",
    stage_name: "Objective Setting",
    status: "Pending with Employee",
  },
  {
    employee_name: "Abdul Razzak Sharbudeen",
    stage_name: "Objective Setting",
    status: "Pending with Employee",
  },
  {
    employee_name: "Abdul Razzak Sharbudeen",
    stage_name: "Objective Setting",
    status: "Submitted; Pending with Line Manager",
  },
  // Add more employee objects here (up to 96 more)
];

const StateManagementTable = () => {
  const pageNames = ["Dashboard", "Stage Management"];
  const pageUrls = ["/dashboard", "/manage-employee-stages"];

  return (
    <div className="bg-white px-4 py-24 ">
      <Breadcrumb pageNames={pageNames} pageUrls={pageUrls} />
      <h2 className="text-lg text-gold font-bold mt-4 mb-2">
        Stage Management
      </h2>
      <SearchBar />
      <div className="rounded shadow-card overflow-x-auto p-5">
        <table className="min-w-[1450px] lg:min-w-full border-collapse table">
          <thead className="">
            <tr className="border border-gray-300 table-row">
              {["Employee Name", "Stage Name", "Status", "Action"].map(
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
                  {employee.employee_name}
                </td>
                <td className="p-1.5 text-14 font-normal hover:bg-tableHeader border border-gray-300 table-cell">
                  {employee.stage_name}
                </td>
                <td className="p-1.5 text-14 font-normal hover:bg-tableHeader border border-gray-300 table-cell">
                  {employee?.status}
                </td>
                <td className="p-1.5 text-14 font-normal hover:bg-tableHeader border border-gray-300 table-cell">
                  <div className="flex items-center space-x-2">
                    <button className="px-2 inline-flex items-center bg-btnMoveBackPrimary text-white shadow-button  p-1 rounded">
                      <Icon
                        icon="pepicons-pop:reload"
                        className="mr-1 rotate-180"
                      />{" "}
                      Move Back to Employee
                    </button>
                    <button className="px-2 inline-flex items-center bg-green text-white shadow-button  p-1 rounded">
                      <Icon
                        icon="pepicons-pop:reload"
                        className="mr-1 rotate-180"
                      />{" "}
                      Move Back to LM Mid-Year
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

export default StateManagementTable;
