import { Icon } from "@iconify/react/dist/iconify.js";
import SearchBar from "../../../components/SearchBar/SearchBar";
import Braeadcrumb from "../../../components/Breadcrumb/Braeadcrumb";

// Employee Data
const employees = [
  {
    year: "2027",
    stage: 3,
    stageName: "Year-End Review",
    description:
      "Year-End Review is the final phase in the performance cycle. This phase is a period of introspection and involves a final discussion between employees and Line Managers for assessing the level of performance accomplishment against each Objective, KPI, Competency, and Learning and Development plan, as well as for highlighting areas to improve while deriving the final Individual Objectives Rating and Individual Competencies Rating. Year-End Review also enables constructive dialogue between employees and Line Managers to discuss employees' career growth aspirations and identify potential learning and development needs.",
    status: "",
    startDate: "15-May-2024",
    endDate: "30-Dec-2028",
  },
  {
    year: "2026",
    stage: 1,
    stageName: "Objective Setting",
    description:
      "Performance objectives are critical and quantifiable outputs of a job contributing to the Company's and in turn to an employee's success. Your Individual Objectives and Key Performance Indicators (KPIs) should be aligned to those of your Line Manager and Head of Department, and the Corporate Objectives. Objectives and KPIs should also be quantifiable, as much as possible, in order to ensure that they meet defined business objectives as well as facilitate an effective review during the course of the year.",
    status: "",
    startDate: "15-May-2024",
    endDate: "30-Dec-2028",
  },
  {
    year: "2025",
    stage: 2,
    stageName: "Mid-Year Review",
    description:
      "Mid-Year Review is to ensure that Line Managers and employees have a formal conversation to assess the progress of the employee against set objectives and competencies, as well as discuss corrective measures to be taken (if any). Line Manager should provide constructive feedback to the employee on year-to-date performance and behaviours, and assess whether the employee is on track to meet expectations.",
    status: "",
    startDate: "15-May-2024",
    endDate: "30-Dec-2028",
  },
  {
    year: "2027",
    stage: 3,
    stageName: "Year-End Review",
    description:
      "Year-End Review is the final phase in the performance cycle. This phase is a period of introspection and involves a final discussion between employees and Line Managers for assessing the level of performance accomplishment against each Objective, KPI, Competency, and Learning and Development plan, as well as for highlighting areas to improve while deriving the final Individual Objectives Rating and Individual Competencies Rating. Year-End Review also enables constructive dialogue between employees and Line Managers to discuss employees' career growth aspirations and identify potential learning and development needs.",
    status: "",
    startDate: "15-May-2024",
    endDate: "30-Dec-2028",
  },
  {
    year: "2026",
    stage: 1,
    stageName: "Objective Setting",
    description:
      "Performance objectives are critical and quantifiable outputs of a job contributing to the Company's and in turn to an employee's success. Your Individual Objectives and Key Performance Indicators (KPIs) should be aligned to those of your Line Manager and Head of Department, and the Corporate Objectives. Objectives and KPIs should also be quantifiable, as much as possible, in order to ensure that they meet defined business objectives as well as facilitate an effective review during the course of the year.",
    status: "",
    startDate: "15-May-2024",
    endDate: "30-Dec-2028",
  },
  // Add more employee objects here (up to 96 more)
];

const PMSStagesTable = () => {
  return (
    <div className="bg-white px-4 pb-24">
      <h2 className="text-lg text-gold font-bold mt-4 mb-2">Stages</h2>
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
              {[
                "Year",
                "Stage",
                "Stage Name",
                "Stage Description",
                "Status",
                "Start Date",
                "End Date",
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
            {employees.map((employee, index) => (
              <tr key={index} className="border border-gray-300 md:table-row">
                <td className="p-1.5 text-14 font-normal hover:bg-tableHeader border border-gray-300 table-cell">
                  {employee.year}
                </td>
                <td className="p-1.5 text-14 font-normal hover:bg-tableHeader border border-gray-300 table-cell">
                  {employee.stage}
                </td>
                <td className="p-1.5 text-14 font-normal hover:bg-tableHeader border border-gray-300 table-cell">
                  {employee.stageName}
                </td>
                <td className="p-1.5 text-14 font-normal hover:bg-tableHeader border border-gray-300 table-cell">
                  {employee.description}
                </td>
                <td className="p-1.5 text-14 font-normal hover:bg-tableHeader border border-gray-300 table-cell">
                  <Icon icon="fa-solid:check" className="text-green" />
                </td>
                <td className="p-1.5 text-14 font-normal hover:bg-tableHeader border border-gray-300 table-cell">
                  {employee.startDate}
                </td>
                <td className="p-1.5 text-14 font-normal hover:bg-tableHeader border border-gray-300 table-cell">
                  {employee.endDate}
                </td>
                <td className="p-1.5 text-14 font-normal hover:bg-tableHeader border border-gray-300 table-cell">
                  <div className="flex items-center space-x-2">
                    <button className="bg-white shadow-button  p-1 rounded">
                      <Icon icon={"mage:edit-fill"} />
                    </button>
                    {/* <button className="bg-white shadow-button  p-1 rounded">
                      <Icon icon={"akar-icons:info-fill"} />
                    </button>
                    <button className="px-2 inline-flex items-center bg-white shadow-button  p-1 rounded">
                      <Icon icon="fa-solid:copy" className="mr-1" /> Skip
                      Mid-Year
                    </button> */}
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

export default PMSStagesTable;
