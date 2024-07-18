import React from "react";
import KPITable from "./KPITable";

const ObjectTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full ">
        <thead>
          <tr className="bg-cayon border-b">
            <th className="px-4 py-2 text-left text-14 font-head">
              Object Code
            </th>
            <th className="px-4 py-2 text-left text-14 font-head">
              LM Object Code
            </th>
            <th className="px-4 py-2 text-left text-14 font-head">
              Object Text
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-alabaster">
            <td className="px-4 py-2 text-sm">43623</td>
            <td className="px-4 py-2 text-sm">98763</td>
            <td className="px-4 py-2 text-sm">
              ed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud
            </td>
          </tr>
          <tr className="bg-alabaster border-b">
            <td colSpan="3" className=" p-4">
              <KPITable />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ObjectTable;
