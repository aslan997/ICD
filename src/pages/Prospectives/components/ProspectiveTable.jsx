import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import { Icon } from "@iconify/react/dist/iconify.js";
import SearchBar from "../../../components/SearchBar/SearchBar";

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

// Perspective Data
const perspectiveData = [
  {
    perspectiveName: "People Management",
    perspectiveCode: "PEO",
    status: "",
  },
  {
    perspectiveName: "Process",
    perspectiveCode: "PEO",
    status: "",
  },
  {
    perspectiveName: "Stakeholder",
    perspectiveCode: "PEO",
    status: "",
  },
  {
    perspectiveName: "Financial",
    perspectiveCode: "PEO",
    status: "",
  },
  // Add more employee objects here (up to 96 more)
];

const ProspectiveTable = () => {
  const pageNames = ["Dashboard", "Perspectives"];
  const pageUrls = ["/dashboard", "/perspectives"];

  return (
    <div className="bg-white px-4 py-24 ">
      <Breadcrumb pageNames={pageNames} pageUrls={pageUrls} />
      <h2 className="text-2xl text-gold font-bold my-4 ">Perspectives</h2>
      <SearchBar />
      <div className="rounded shadow-card overflow-x-auto p-5">
        <table className="min-w-[1450px] lg:min-w-full border-collapse table">
          <thead className="">
            <tr className="border border-gray-300 table-row">
              {["Perspective Name", "Perspective Code", "Status", "Action"].map(
                (header) => (
                  <th
                    key={header}
                    className={`border border-gray-300 text-left table-cell bg-tableHeader relative ${
                      header === "Action" ? "w-10" : "w-30"
                    }`}
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
            {perspectiveData.map((perspective, index) => (
              <tr key={index} className="border border-gray-300 md:table-row">
                <td className="p-1.5 text-14 font-normal hover:bg-tableHeader border border-gray-300 table-cell">
                  {perspective.perspectiveName}
                </td>
                <td className="p-1.5 text-14 font-normal hover:bg-tableHeader border border-gray-300 table-cell">
                  {perspective.perspectiveCode}
                </td>

                <td className="p-1.5 text-14 font-normal hover:bg-tableHeader border border-gray-300 table-cell">
                  <Icon icon="fa-solid:check" className="text-green" />
                </td>
                <td className="p-1.5 text-14 font-normal hover:bg-tableHeader border border-gray-300 table-cell">
                  <div className="flex items-center space-x-2">
                    <button className="bg-white shadow-md  p-1 rounded">
                      <Icon icon={"mage:edit-fill"} />
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

export default ProspectiveTable;
