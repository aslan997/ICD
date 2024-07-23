import React, { useEffect, useRef, useState } from "react";
import EditableCell from "../../../components/EditableCell/EditableCell";

const YERTable = () => {
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
          <tr>
            <th className="bg-ecruWhite p-2 text-left text-14 font-head border border-cace91">
              AA
            </th>
            <th className="bg-ecruWhite p-2 text-left text-14 font-head border border-cace91">
              Calculated Score
            </th>
            <th className="bg-ecruWhite p-2 text-left text-14 font-head border border-cace91">
              EMP Updated Score
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 text-14 border border-cace91">
              <EditableCell
                initialValue="ed do eiusmod tempor incididunt"
                onSave={handleSave}
                title="AA"
                type="textarea"
              />
            </td>
            <td className="p-2 text-14 border border-cace91">
              <EditableCell
                initialValue="0"
                onSave={handleSave}
                title="Calculated Score"
                type="field"
              />
            </td>
            <td className="p-2 text-14 border border-cace91">
              <EditableCell
                initialValue="0"
                onSave={handleSave}
                title="EMP Updated Score"
                type="field"
              />
            </td>
          </tr>
          <tr>
            <td
              className="bg-pineGlade p-2 text-14 font-head border border-cace91"
              colSpan={3}
            >
              EMP Comments
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="text-14 p-2 border border-cace91">
              <EditableCell
                initialValue="ed do eiusmod tempor incididunt ed do eiusmod tempor incididunt"
                onSave={handleSave}
                title="EMP Comments"
                type="textarea"
              />
            </td>
          </tr>
          <tr>
            <td
              className="bg-pineGlade p-2 text-14 font-head border border-cace91"
              colSpan={2}
            >
              LM Comments
            </td>
            <td
              className="bg-pineGlade p-2 text-14 font-head border border-cace91"
              colSpan={1}
            >
              LM Score
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-14 p-2 border border-cace91">
              <EditableCell
                initialValue="ed do eiusmod tempor incididunt ed do eiusmod tempor incididunt"
                onSave={handleSave}
                title="LM Comments"
                type="textarea"
              />
            </td>
            <td colSpan={1} className="border border-cace91 p-2 text-14">
              <EditableCell
                initialValue="0"
                onSave={handleSave}
                title="LM Score"
                type="field"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  );
};

export default YERTable;
