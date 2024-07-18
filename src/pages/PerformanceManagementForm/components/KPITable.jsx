import React from "react";
import KPIInformationTable from "./KPIInformationTable";
import MYRTable from "./MYRTable";
import YERTable from "./YERTable";

const KPITable = () => {
  return (
    <div className="rounded-md overflow-hidden">
      <table className="min-w-full">
        <thead>
          <tr className="bg-cayon">
            <th className="w-35 px-4 py-2 text-center text-14 font-head">
              KPI Information
            </th>
            <th className="w-24 px-4 py-2 text-center text-14 font-head bg-fringyFlower">
              MYR
            </th>
            <th className="w-41 px-4 py-2 text-center text-14 font-head bg-pineGlade">
              YER
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="align-top p-0">
              <KPIInformationTable />
            </td>
            <td className="align-top p-0">
              <MYRTable />
            </td>
            <td className="align-top p-0">
              <YERTable />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default KPITable;
