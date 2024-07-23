import React, { useEffect, useRef, useState } from "react";
import EditableCell from "../../../components/EditableCell/EditableCell";

const KPIInformationTable = () => {
  const contentRef = useRef(null);
  const [minHeight, setMinHeight] = useState(0);

  // Update minimum height of table as per parent td element
  const updateMinHeight = () => {
    if (contentRef?.current) {
      setMinHeight(contentRef?.current?.scrollHeight);
    }
  };

  useEffect(() => {
    updateMinHeight();

    window.addEventListener("resize", updateMinHeight);
    return () => window.removeEventListener("resize", updateMinHeight);
  }, []);

  // Save value after editing
  const handleSave = (newValue) => {
    console.log("Value saved:", newValue);
  };

  return (
    <td className="align-top p-0" ref={contentRef}>
      <table
        className="min-w-full"
        style={{
          minHeight: `${minHeight}px`,
        }}
      >
        <thead>
          <tr className="bg-lilyWhite">
            <th className="px-4 py-2 text-left text-14 font-head border border-c9edfb">
              KPI Code
            </th>
            <th className="px-4 py-2 text-left text-14 font-head border border-c9edfb">
              KPI
            </th>
            <th className="px-4 py-2 text-left text-14 font-head border border-c9edfb">
              Weightage
            </th>
            <th className="px-4 py-2 text-left text-14 font-head border border-c9edfb">
              15%
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td className="px-4 py-2 text-14 border border-c9edfb" rowSpan="4">
              <EditableCell
                initialValue="43623"
                onSave={handleSave}
                title="KPI Code"
                type="field"
              />
            </td>
            <td className="px-4 py-2 text-14 border border-c9edfb" rowSpan="4">
              <EditableCell
                initialValue=" ed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud"
                onSave={handleSave}
                title="KPI"
                type="textarea"
              />
            </td>
            <td className="px-4 py-2 text-14 border border-c9edfb">
              <EditableCell
                initialValue="Target Type"
                onSave={handleSave}
                title="Weightage"
                type="field"
              />
            </td>
            <td className="px-4 py-2 text-14 border border-c9edfb">
              {" "}
              <EditableCell
                initialValue="Lorem"
                onSave={handleSave}
                title="15%"
                type="field"
              />
            </td>
          </tr>
          <tr className="">
            <td className="px-4 py-2 text-14 border border-c9edfb">
              <EditableCell
                initialValue="Threshold"
                onSave={handleSave}
                title="Weightage"
                type="field"
              />
            </td>
            <td className="px-4 py-2 text-14 border border-c9edfb">
              {" "}
              <EditableCell
                initialValue="Lorem"
                onSave={handleSave}
                title="15%"
                type="field"
              />
            </td>
          </tr>
          <tr className="">
            <td className="px-4 py-2 text-14 border border-c9edfb">
              {" "}
              <EditableCell
                initialValue="Target"
                onSave={handleSave}
                title="Weightage"
                type="field"
              />
            </td>
            <td className="px-4 py-2 text-14 border border-c9edfb">
              {" "}
              <EditableCell
                initialValue="Lorem"
                onSave={handleSave}
                title="15%"
                type="field"
              />
            </td>
          </tr>
          <tr className="">
            <td className="px-4 py-2 text-14 border border-c9edfb">
              {" "}
              <EditableCell
                initialValue="Stretch"
                onSave={handleSave}
                title="Weightage"
                type="field"
              />
            </td>
            <td className="px-4 py-2 text-14 border border-c9edfb">
              {" "}
              <EditableCell
                initialValue="Lorem"
                onSave={handleSave}
                title="15%"
                type="field"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  );
};

export default KPIInformationTable;
