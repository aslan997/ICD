import React from "react";

const KPIInformationTable = () => {
  return (
    <table className="min-w-full">
      <thead>
        <tr className="bg-lilyWhite">
          <th className="px-4 py-2 text-left text-14 font-head">KPI Code</th>
          <th className="px-4 py-2 text-left text-14 font-head">KPI</th>
          <th className="px-4 py-2 text-left text-14 font-head">Weightage</th>
          <th className="px-4 py-2 text-left text-14 font-head">15%</th>
        </tr>
      </thead>
      <tbody>
        <tr className="">
          <td className="px-4 py-2 text-sm" rowSpan="4">
            43623
          </td>
          <td className="px-4 py-2 text-sm" rowSpan="4">
            ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud
          </td>
          <td className="px-4 py-2 text-sm">Target Type</td>
          <td className="px-4 py-2 text-sm">Lorem</td>
        </tr>
        <tr className="border-b">
          <td className="px-4 py-2 text-sm">Threshold</td>
          <td className="px-4 py-2 text-sm">Lorem</td>
        </tr>
        <tr className="border-b">
          <td className="px-4 py-2 text-sm">Target</td>
          <td className="px-4 py-2 text-sm">Lorem</td>
        </tr>
        <tr className="border-b">
          <td className="px-4 py-2 text-sm">Stretch</td>
          <td className="px-4 py-2 text-sm">Lorem</td>
        </tr>
      </tbody>
    </table>
  );
};

export default KPIInformationTable;
