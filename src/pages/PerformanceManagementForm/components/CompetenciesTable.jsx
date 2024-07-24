import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";

const CompetenciesTable = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef(null);

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
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => updateHeight();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="p-4 mb-4 rounded shadow-card">
      <div
        className="flex items-center font-bold text-lg cursor-pointer"
        onClick={toggleTable}
      >
        <span className="text-lg font-semibold text-gold">Competencies </span>{" "}
        <span className="text-gold font-normal text-base ml-2">
          Proficiency Level: Applying{" "}
        </span>
        <span className="ml-1 cursor-pointer" onClick={toggleTable}>
          <Icon
            icon={isOpen ? "fe:arrow-up" : "fe:arrow-down"}
            className="transition-transform duration-300 text-arrowIconColor"
          />
        </span>
      </div>

      <div
        className={`min-w-full overflow-x-auto overflow-y-hidden transition-height duration-500 ease-in-out`}
        style={{
          height: isOpen ? `${height}` : "0px",
        }}
      >
        <table
          ref={contentRef}
          className="min-w-[700px] md:min-w-full bg-white border divide-y divide-gray-200  overflow-scroll mt-3"
        >
          <thead>
            <tr className="bg-tableHeader">
              <th
                colSpan={3}
                className="text-14 font-head px-4 py-2 border border-tableBorder"
              >
                Competencies
              </th>
              <th
                colSpan={6}
                className="text-14 font-head px-4 py-2  border border-tableBorder"
              >
                Mid Year Review
              </th>
            </tr>
            <tr className="bg-tableHeader min-w-full ">
              <th className="px-4 py-2 text-14 font-head text-left border border-tableBorder">
                #
              </th>
              <th className="px-4 py-2 text-14 font-head text-left border border-tableBorder">
                Competency
              </th>
              <th className="px-4 py-2 text-14 font-head text-left border border-tableBorder">
                Weightage
              </th>
              <th className="px-4 py-2 text-14 font-head text-left border border-tableBorder">
                Employee Comments
              </th>
              <th className="px-4 py-2 text-14 font-head text-left border border-tableBorder">
                LM Comments
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-100">
              <td className="px-4 py-2 text-14 border border-tableBorder">2</td>
              <td className="px-4 py-2 text-14 border border-tableBorder">
                Build the Business
              </td>
              <td className="px-4 py-2 text-14 border border-tableBorder">
                20%
              </td>

              <td className="px-4 py-2 text-14 border border-tableBorder">
                ASDAD
              </td>
              <td className="px-4 py-2 text-14 border border-tableBorder">
                {" "}
                ASDADF
              </td>
            </tr>
            <tr className="border-b hover:bg-gray-100">
              <td className="px-4 py-2 text-14 border border-tableBorder">2</td>
              <td className="px-4 py-2 text-14 border border-tableBorder">
                Build the Business
              </td>
              <td className="px-4 py-2 text-14 border border-tableBorder">
                20%
              </td>

              <td className="px-4 py-2 text-14 border border-tableBorder">
                ASDAD
              </td>
              <td className="px-4 py-2 text-14 border border-tableBorder">
                {" "}
                ASDADF
              </td>
            </tr>
            <tr className="border-b hover:bg-gray-100">
              <td className="px-4 py-2 text-14 border border-tableBorder">2</td>
              <td className="px-4 py-2 text-14 border border-tableBorder">
                Build the Business
              </td>
              <td className="px-4 py-2 text-14 border border-tableBorder">
                20%
              </td>

              <td className="px-4 py-2 text-14 border border-tableBorder">
                ASDAD
              </td>
              <td className="px-4 py-2 text-14 border border-tableBorder">
                {" "}
                ASDADF
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td
                colSpan="2"
                className="px-4 py-2 font-bold border-t border-gray-200 text-14 font-head"
              >
                Total Competencies Weightage
              </td>
              <td className="px-4 py-2 font-bold border-t border-gray-200 text-14 font-head">
                100%
              </td>
              <td
                colSpan="2"
                className="px-4 py-2 border-t border-gray-200"
              ></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default CompetenciesTable;
