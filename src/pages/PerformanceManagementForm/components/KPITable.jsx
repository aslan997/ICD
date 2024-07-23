import React, { useState } from "react";
import KPIInformationTable from "./KPIInformationTable";
import MYRTable from "./MYRTable";
import YERTable from "./YERTable";
import { Icon } from "@iconify/react/dist/iconify.js";

const KPITable = () => {
  const [isTbodyVisible, setIsTbodyVisible] = useState(true); // State to manage visibility of tbody

  const toggleTbodyVisibility = () => {
    setIsTbodyVisible(!isTbodyVisible);
  };
  return (
    <div className="rounded-md mb-4">
      <table className="min-w-full">
        <thead>
          <tr className="bg-cayon relative">
            <th className="w-35 px-4 py-2 text-center text-14 font-head">
              KPI Information
            </th>
            <th className="w-24 px-4 py-2 text-center text-14 font-head bg-fringyFlower">
              MYR
            </th>
            <th className="w-41 px-4 py-2 text-center text-14 font-head bg-pineGlade">
              YER
            </th>
            <th className="absolute right-4 top-2 cursor-pointer">
              {isTbodyVisible ? (
                <Icon
                  icon="iconamoon:arrow-down-2-light"
                  onClick={toggleTbodyVisibility}
                />
              ) : (
                <Icon
                  icon="iconamoon:arrow-up-2-light"
                  onClick={toggleTbodyVisibility}
                />
              )}
            </th>
          </tr>
        </thead>

        <tbody
          className={`transition-all duration-500 ${
            isTbodyVisible ? "opacity-100 max-h-full" : "opacity-0 max-h-0"
          }`}
        >
          {isTbodyVisible && (
            <tr>
              <KPIInformationTable />
              <MYRTable />
              <YERTable />
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default KPITable;
