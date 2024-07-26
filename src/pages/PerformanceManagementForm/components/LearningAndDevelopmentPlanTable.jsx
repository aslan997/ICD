import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState, useRef, useEffect, useLayoutEffect } from "react";

const LearningAndDevelopmentPlanTable = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef(null);

  const [employees, setEmployees] = useState([
    {
      priorityNumber: "1",
      submissionStage: "Objective Selling",
      learningAndDevelopmentNeed: "test",
      learningAndDevelopmentActionPlan: "test",
      timelineForCompletion: "Q1",
      attachment: "Empty",
      employeeComments: "Empty",
      lmComments: "",
      action: "@+",
    },
  ]);

  const handleAddRow = () => {
    setEmployees([
      ...employees,
      {
        priorityNumber: employees?.length + 1,
        submissionStage: "Objective Selling",
        learningAndDevelopmentNeed: "Empty",
        learningAndDevelopmentActionPlan: "Empty",
        timelineForCompletion: "Empty",
        attachment: "",
        employeeComments: "Empty",
        lmComments: "",
        action: "",
      },
    ]);
  };

  const toggleTable = () => {
    setIsOpen(!isOpen);
  };

  const updateHeight = () => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight + 20}px` : "0px");
    }
  };

  useLayoutEffect(() => {
    updateHeight();
    // Ensure that the height is recalculated when `employees` change
  }, [isOpen, employees]);

  useEffect(() => {
    const handleResize = () => updateHeight();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="rounded shadow-card py-4">
      <div className="flex flex-col sm:flex-row justify-between px-4">
        <h1 className="text-lg font-semibold text-gold inline-flex items-center">
          Learning and Development Plan{" "}
          <span className="ml-1 cursor-pointer" onClick={toggleTable}>
            <Icon
              icon={isOpen ? "fe:arrow-up" : "fe:arrow-down"}
              className="transition-transform duration-300 text-arrowIconColor"
            />
          </span>
        </h1>
        <button
          className="w-100 h-7 bg-gold text-white rounded text-14 flex items-center justify-center mt-2 sm:mt-0 shadow-button"
          onClick={handleAddRow}
        >
          <Icon icon="mingcute:add-fill" className="text-white mr-1" />
          L&D Plan
        </button>
      </div>
      <div
        className={`mx-4 overflow-x-auto overflow-y-hidden h-max transition-height duration-500 ease-in-out`}
        style={{
          height: isOpen ? `${height}` : "0px",
        }}
      >
        <table
          className="min-w-full divide-y divide-gray-200 mt-3"
          ref={contentRef}
        >
          <thead>
            <tr className="bg-tableHeader">
              <th
                className="bg-tableHeader text-14 font-head py-2 border border-tableBorder"
                colSpan={6}
              >
                Learning and Development Plan
              </th>
              <th
                className="bg-tableHeader text-14 font-head py-2 border border-tableBorder"
                colSpan={3}
              >
                Mid-Year Review
              </th>
            </tr>
            <tr>
              <th className="bg-tableHeader px-4 py-2 text-left text-14 font-head border border-tableBorder">
                Priority Number
              </th>
              <th className="bg-tableHeader px-4 py-2 text-left text-14 font-head border border-tableBorder">
                Submission Stage
              </th>
              <th className="bg-tableHeader px-4 py-2 text-left text-14 font-head border border-tableBorder">
                Learning & Development Need
              </th>
              <th className="bg-tableHeader px-4 py-2 text-left text-14 font-head border border-tableBorder">
                Learning & Development Action Plan
              </th>
              <th className="bg-tableHeader px-4 py-2 text-left text-14 font-head border border-tableBorder">
                Timeline for Completion
              </th>
              <th className="bg-tableHeader px-4 py-2 text-left text-14 font-head border border-tableBorder">
                Attachment
              </th>
              <th className="bg-tableHeader px-4 py-2 text-left text-14 font-head border border-tableBorder">
                Employee Comments
              </th>
              <th className="bg-tableHeader px-4 py-2 text-left text-14 font-head border border-tableBorder">
                LM Comments
              </th>
              <th className="bg-tableHeader px-4 py-2 text-left text-14 font-head border border-tableBorder">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="px-4 py-2 text-14 border border-tableBorder">
                  {employee.priorityNumber}
                </td>
                <td className="px-4 py-2 text-14 border border-tableBorder">
                  {employee.submissionStage}
                </td>
                <td className="px-4 py-2 text-14 border border-tableBorder">
                  {employee.learningAndDevelopmentNeed}
                </td>
                <td className="px-4 py-2 text-14 border border-tableBorder">
                  {employee.learningAndDevelopmentActionPlan}
                </td>
                <td className="px-4 py-2 text-14 border border-tableBorder">
                  {employee.timelineForCompletion}
                </td>
                <td className="px-4 py-2 text-14 border border-tableBorder">
                  <span className="inline-flex items-center">
                    {employee.attachment ? (
                      <Icon icon="entypo:attachment" className="mr-1" />
                    ) : (
                      ""
                    )}
                    <Icon icon="mingcute:add-fill" />
                  </span>
                </td>
                <td className="px-4 py-2 text-14 border border-tableBorder">
                  {employee.employeeComments}
                </td>
                <td className="px-4 py-2 text-14 border border-tableBorder">
                  {employee.lmComments}
                </td>
                <td className="px-4 py-2 text-14 border border-tableBorder">
                  <Icon icon="ic:baseline-delete" className="h-5 w-5"></Icon>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LearningAndDevelopmentPlanTable;
