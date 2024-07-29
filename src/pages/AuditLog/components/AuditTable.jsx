import { Icon } from "@iconify/react/dist/iconify.js";
import SearchBar from "../../../components/SearchBar/SearchBar";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import AuditFilter from "./AuditFilter";

// Employee Data
const employees = [
  {
    updated_at: "2024-07-25 10:47 AM",
    logged_in_user: "Michael Cheng",
    form_user: "Michael Cheng",
    year: 2024,
    event: "Created",
    old_values: `<ul>
  <li>id: 823</li>
  <li>employee_ad_id: michael.cheng</li>
  <li>status: Submitted</li>
  <li>stage_id: 10</li>
  <li>year_id: 2024</li>
  <li>approved_by:</li>
  <li>remarks: LGTM</li>
</ul>`,
    new_values: "",
  },
  {
    updated_at: "2024-07-25 10:47 AM",
    logged_in_user: "Michael Cheng",
    form_user: "Michael Cheng",
    year: 2024,
    event: "Created",
    old_values: "",
    new_values: "",
  },
  {
    updated_at: "2024-07-25 10:47 AM",
    logged_in_user: "Michael Cheng",
    form_user: "Michael Cheng",
    year: 2024,
    event: "Updated",
    old_values: "remarks : L",
    new_values: "remarks: LG",
  },
  {
    updated_at: "2024-07-25 10:47 AM",
    logged_in_user: "Michael Cheng",
    form_user: "Michael Cheng",
    year: 2024,
    event: "Created",
    old_values: `<ul>
  <li>id: 823</li>
  <li>employee_ad_id: michael.cheng</li>
  <li>status: Submitted</li>
  <li>stage_id: 10</li>
  <li>year_id: 2024</li>
  <li>approved_by:</li>
  <li>remarks: LGTM</li>
</ul>`,
    new_values: "",
  },
  {
    updated_at: "2024-07-25 10:47 AM",
    logged_in_user: "Michael Cheng",
    form_user: "Michael Cheng",
    year: 2024,
    event: "Created",
    old_values: "",
    new_values: `<ul>
  <li>id: 823</li>
  <li>employee_ad_id: michael.cheng</li>
  <li>status: Submitted</li>
  <li>stage_id: 10</li>
  <li>year_id: 2024</li>
  <li>approved_by:</li>
  <li>remarks: LGTM</li>
</ul>`,
  },
];

const AuditTable = () => {
  const pageNames = ["Dashboard", "Audit Trail"];
  const pageUrls = ["/dashboard", "/hr-dashboard"];

  return (
    <div className="bg-white px-4 py-24 ">
      <Breadcrumb pageNames={pageNames} pageUrls={pageUrls} />
      <AuditFilter />
      <h2 className="text-lg text-gold font-bold mt-4 mb-2">
        PMS - Audit Trail
      </h2>
      <SearchBar />
      <div className="rounded shadow-card overflow-x-auto p-5">
        <table className="min-w-[1450px] lg:min-w-full border-collapse table">
          <thead className="">
            <tr className="border border-gray-300 table-row">
              {[
                "Updated At",
                "Logged-In User",
                "Form User",
                "Year",
                "Event",
                "Old Values",
                "New Values",
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
            {employees.map((employee, index) => (
              <tr key={index} className="border border-gray-300 md:table-row">
                <td className="p-1.5 text-14 font-normal hover:bg-tableHeader border border-gray-300 table-cell">
                  {employee.updated_at}
                </td>
                <td className="p-1.5 text-14 font-normal hover:bg-tableHeader border border-gray-300 table-cell">
                  {employee.logged_in_user}
                </td>
                <td className="p-1.5 text-14 font-normal hover:bg-tableHeader border border-gray-300 table-cell">
                  {employee?.form_user}
                </td>
                <td className="p-1.5 text-14 font-normal hover:bg-tableHeader border border-gray-300 table-cell">
                  {employee?.year}
                </td>
                <td className="p-1.5 text-14 font-normal hover:bg-tableHeader border border-gray-300 table-cell">
                  <div className="flex items-center space-x-2">
                    <button className="px-2 inline-flex items-center bg-green text-white shadow-button  p-1 rounded">
                      {employee?.event}
                    </button>
                  </div>
                </td>
                <td className="p-1.5 text-14 font-normal hover:bg-tableHeader border border-gray-300 table-cell">
                  <ul
                    dangerouslySetInnerHTML={{ __html: employee?.old_values }}
                  />
                </td>
                <td className="p-1.5 text-14 font-normal hover:bg-tableHeader border border-gray-300 table-cell">
                  <ul
                    dangerouslySetInnerHTML={{ __html: employee?.new_values }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AuditTable;
