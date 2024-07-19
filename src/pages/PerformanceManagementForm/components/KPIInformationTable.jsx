import React from "react";

const KPIInformationTable = () => {
  return (
    <table className="min-w-full">
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
            43623
          </td>
          <td className="px-4 py-2 text-14 border border-c9edfb" rowSpan="4">
            ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud
          </td>
          <td className="px-4 py-2 text-14 border border-c9edfb">
            Target Type
          </td>
          <td className="px-4 py-2 text-14 border border-c9edfb">Lorem</td>
        </tr>
        <tr className="">
          <td className="px-4 py-2 text-14 border border-c9edfb">Threshold</td>
          <td className="px-4 py-2 text-14 border border-c9edfb">Lorem</td>
        </tr>
        <tr className="">
          <td className="px-4 py-2 text-14 border border-c9edfb">Target</td>
          <td className="px-4 py-2 text-14 border border-c9edfb">Lorem</td>
        </tr>
        <tr className="">
          <td className="px-4 py-2 text-14 border border-c9edfb">Stretch</td>
          <td className="px-4 py-2 text-14 border border-c9edfb">Lorem</td>
        </tr>
      </tbody>
    </table>
  );
};

export default KPIInformationTable;
