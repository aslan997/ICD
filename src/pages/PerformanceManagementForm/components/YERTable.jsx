import React from "react";

const YERTable = () => {
  return (
    <table className="min-w-full">
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
            ed do eiusmod tempor incididunt
          </td>
          <td className="p-2 text-14 border border-cace91"></td>
          <td className="p-2 text-14 border border-cace91"></td>
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
            ed do eiusmod tempor incididunt ed do eiusmod tempor incididunt
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
            ed do eiusmod tempor incididunt ed do eiusmod tempor incididunt
          </td>
          <td colSpan={1} className="border border-cace91"></td>
        </tr>
      </tbody>
    </table>
  );
};

export default YERTable;
