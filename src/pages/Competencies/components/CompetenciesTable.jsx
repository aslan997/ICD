import { Icon } from "@iconify/react/dist/iconify.js";
import SearchBar from "../../../components/SearchBar/SearchBar";
import Braeadcrumb from "../../../components/Breadcrumb/Braeadcrumb";

// Employee Data
const employees = [
  {
    competencyName: "Build the Business",
    description:
      "Understands the business implications and risks of one's own work and actions, manages resources in a prudent manner while performing own work and ensures compliance with relevant policies and regulations.",
    level: 1,
  },
  {
    competencyName: "Communicate with Others",
    description:
      "Understands the business implications and risks of one's own work and actions, manages resources in a prudent manner while performing own work and ensures compliance with relevant policies and regulations.",
    level: 1,
  },
  {
    competencyName: "Drive For Results",
    description:
      "Understands the business implications and risks of one's own work and actions, manages resources in a prudent manner while performing own work and ensures compliance with relevant policies and regulations.",
    level: 2,
  },
  {
    competencyName: "Lead the Way",
    description:
      "Understands the business implications and risks of one's own work and actions, manages resources in a prudent manner while performing own work and ensures compliance with relevant policies and regulations.",
    level: 1,
  },
  {
    competencyName: "Living ICD Values",
    description:
      "Understands the business implications and risks of one's own work and actions, manages resources in a prudent manner while performing own work and ensures compliance with relevant policies and regulations.",
    level: 2,
  },
  // Add more employee objects here (up to 96 more)
];

const CompetenciesTable = () => {
  const pageNames = ["Dashboard", "Competencies"];
  const pageUrls = ["/dashboard", "/competencies"];

  return (
    <div className="bg-white px-4 pt-24 pb-4 ">
      <Braeadcrumb pageNames={pageNames} pageUrls={pageUrls} />
      <h2 className="text-lg text-gold font-bold mt-4 mb-2">Competencies</h2>
      <div className="w-full justify-end flex flex-col items-start space-x-0 xs:inline-flex xs:flex-row xs:items-center xs:space-x-2">
        <SearchBar />
        <button className="text-14 h-btnAdd text-white rounded shadow-button px-2 bg-btnAdd hover:bg-btnAddHover mb-4">
          Add New
        </button>
      </div>
      <div className="rounded shadow-card overflow-x-auto p-5">
        <table className="min-w-[1450px] lg:min-w-full border-collapse table">
          <thead className="">
            <tr className="border border-gray-300 table-row">
              {["CompetencyName", "Description", "Level", "Action"].map(
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
                  {employee.competencyName}
                </td>
                <td className="p-1.5 text-14 font-normal hover:bg-tableHeader border border-gray-300 table-cell">
                  {employee.description}
                </td>
                <td className="p-1.5 text-14 font-normal hover:bg-tableHeader border border-gray-300 table-cell">
                  {employee.level}
                </td>
                <td className="p-1.5 text-14 font-normal hover:bg-tableHeader border border-gray-300 table-cell">
                  <button className="bg-white shadow-md  p-1 rounded">
                    <Icon icon={"mage:edit-fill"} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompetenciesTable;
