import { Icon } from "@iconify/react/dist/iconify.js";
import SearchBar from "../../../components/SearchBar/SearchBar";
import Braeadcrumb from "../../../components/Breadcrumb/Braeadcrumb";

// Employee Data
const employees = [
  {
    year: "2024",
    description: "",
    status: "",
  },
  {
    year: "2022",
    description: "",
    status: "",
  },
  {
    year: "2023",
    description: "",
    status: "",
  },
  {
    year: "2021",
    description: "",
    status: "",
  },
  {
    year: "2020",
    description: "",
    status: "",
  },
  // Add more employee objects here (up to 96 more)
];

const PMSYearTable = () => {
  const pageNames = ["Dashboard", "PMS Cycles"];
  const pageUrls = ["/dashboard", "/pms_year"];

  return (
    <div className="bg-white px-4 pt-24 pb-4 ">
      <Braeadcrumb pageNames={pageNames} pageUrls={pageUrls} />
      <h2 className="text-lg text-gold font-bold mt-4 mb-2">PMS Years</h2>
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
              {["Year", "Description", "Status", "Action"].map((header) => (
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
              ))}
            </tr>
          </thead>
          <tbody className="table-row-group">
            {employees.map((employee, index) => (
              <tr key={index} className="border border-gray-300 md:table-row">
                <td className="p-1.5 text-14 font-normal hover:bg-tableHeader border border-gray-300 table-cell">
                  {employee.year}
                </td>
                <td className="p-1.5 text-14 font-normal hover:bg-tableHeader border border-gray-300 table-cell">
                  {employee.description}
                </td>
                <td className="p-1.5 text-14 font-normal hover:bg-tableHeader border border-gray-300 table-cell">
                  <Icon icon="fa-solid:check" className="text-green" />
                </td>
                <td className="p-1.5 text-14 font-normal hover:bg-tableHeader border border-gray-300 table-cell">
                  <div className="flex items-center space-x-2">
                    <button className="bg-white shadow-button  p-1 rounded">
                      <Icon icon={"mage:edit-fill"} />
                    </button>
                    <button className="bg-white shadow-button  p-1 rounded">
                      <Icon icon={"akar-icons:info-fill"} />
                    </button>
                    <button className="px-2 inline-flex items-center bg-white shadow-button  p-1 rounded">
                      <Icon icon="fa-solid:copy" className="mr-1" /> Skip
                      Mid-Year
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

export default PMSYearTable;
