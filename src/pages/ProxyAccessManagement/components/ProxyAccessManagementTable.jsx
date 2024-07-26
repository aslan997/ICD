import { Icon } from "@iconify/react/dist/iconify.js";
import SearchBar from "../../../components/SearchBar/SearchBar";
import Braeadcrumb from "../../../components/Breadcrumb/Braeadcrumb";

// Proxy Data
const proxyData = [
  {
    year: "2024",
    employeeId: "RE 0185",
    department: "Operations",
    employeeName: "Abdul Shamsi",
    proxyAccess: false,
    proxyAccessStatus: "",
  },
  {
    year: "2024",
    employeeId: "RE 0185",
    department: "Operations",
    employeeName: "Abdul Shamsi",
    proxyAccess: false,
    proxyAccessStatus: "",
  },
  {
    year: "2024",
    employeeId: "RE 0185",
    department: "Operations",
    employeeName: "Abdul Shamsi",
    proxyAccess: false,
    proxyAccessStatus: "",
  },
  {
    year: "2024",
    employeeId: "RE 0185",
    department: "Operations",
    employeeName: "Abdul Shamsi",
    proxyAccess: false,
    proxyAccessStatus: "",
  },
  {
    year: "2024",
    employeeId: "RE 0185",
    department: "Operations",
    employeeName: "Abdul Shamsi",
    proxyAccess: false,
    proxyAccessStatus: "",
  },
  {
    year: "2024",
    employeeId: "RE 0185",
    department: "Operations",
    employeeName: "Abdul Shamsi",
    proxyAccess: false,
    proxyAccessStatus: "",
  },
  {
    year: "2024",
    employeeId: "RE 0185",
    department: "Operations",
    employeeName: "Abdul Shamsi",
    proxyAccess: false,
    proxyAccessStatus: "",
  },
  {
    year: "2024",
    employeeId: "RE 0185",
    department: "Operations",
    employeeName: "Abdul Shamsi",
    proxyAccess: false,
    proxyAccessStatus: "",
  },
  {
    year: "2024",
    employeeId: "RE 0185",
    department: "Operations",
    employeeName: "Abdul Shamsi",
    proxyAccess: false,
    proxyAccessStatus: "",
  },
  {
    year: "2024",
    employeeId: "RE 0185",
    department: "Operations",
    employeeName: "Abdul Shamsi",
    proxyAccess: false,
    proxyAccessStatus: "",
  },
];

const ProxyAccessManagementTable = () => {
  const pageNames = ["Dashboard", "Proxy Access Management"];
  const pageUrls = ["/dashboard", "/manage-proxy-access"];

  return (
    <div className="bg-white px-4 py-24 ">
      <Braeadcrumb pageNames={pageNames} pageUrls={pageUrls} />
      <h2 className="text-lg text-gold font-bold mt-4 mb-2">
        Proxy Access Management
      </h2>
      <SearchBar />
      <div className="rounded shadow-card overflow-x-auto p-5">
        <table className="min-w-[1450px] lg:min-w-full border-collapse table">
          <thead className="">
            <tr className="border border-gray-300 table-row">
              {[
                "Year",
                "Employee ID",
                "Department",
                "Employee Name",
                "Proxy Access",
                "Proxy Access Status",
                "Action",
              ].map((header) => (
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
            {proxyData.map((data, index) => (
              <tr key={index} className="border border-gray-300 md:table-row">
                <td className="p-1.5 text-14 font-normal hover:bg-tableHeader border border-gray-300 table-cell">
                  {data.year}
                </td>
                <td className="p-1.5 text-14 font-normal hover:bg-tableHeader border border-gray-300 table-cell">
                  {data.employeeId}
                </td>
                <td className="p-1.5 text-14 font-normal hover:bg-tableHeader border border-gray-300 table-cell">
                  {data.department}
                </td>
                <td className="p-1.5 text-14 font-normal hover:bg-tableHeader border border-gray-300 table-cell">
                  {data.employeeName}
                </td>
                <td className="p-1.5 text-14 font-normal hover:bg-tableHeader border border-gray-300 table-cell">
                  <label className="custom-checkbox">
                    <input
                      type="checkbox"
                      id="customControlInline"
                      className="form-check-input h-4 w-4 transition duration-150 ease-in-out"
                    />
                    <span></span>
                  </label>
                </td>
                <td className="p-1.5 text-14 font-normal hover:bg-tableHeader border border-gray-300 table-cell">
                  <span className="text-green-600">
                    {data.proxyAccessStatus}
                  </span>
                </td>
                <td className="p-1.5 text-14 font-normal hover:bg-tableHeader border border-gray-300 table-cell">
                  {/* <div className="flex items-center space-x-2">
                    <button className="bg-white shadow-md  p-1 rounded">
                      <Icon icon={"mage:edit-fill"} />
                    </button>
                    <button className="bg-white shadow-md  p-1 rounded">
                      <Icon icon={"akar-icons:info-fill"} />
                    </button>
                    <button className="bg-white shadow-md  p-1 rounded">
                      Edit Performance Form
                    </button>
                  </div> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProxyAccessManagementTable;
