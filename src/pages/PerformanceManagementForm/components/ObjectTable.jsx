import React, { useState } from "react";
import KPITable from "./KPITable";
import { Icon } from "@iconify/react/dist/iconify.js";

const ObjectTable = () => {
  const [isTbodyVisible, setIsTbodyVisible] = useState(true); // State to manage visibility of tbody

  const toggleTbodyVisibility = () => {
    setIsTbodyVisible(!isTbodyVisible);
  };
  return (
    <div className="overflow-x-auto mb-4">
      <table className="min-w-full ">
        <thead>
          <tr className="bg-cayon border-b relative">
            <th className="px-4 py-2 text-left text-14 font-head">
              Object Code
            </th>
            <th className="px-4 py-2 text-left text-14 font-head">
              LM Object Code
            </th>
            <th className="px-4 py-2 text-left text-14 font-head">
              Object Text
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
            isTbodyVisible ? "opacity-100 max-h-full" : "opacity-1 max-h-full"
          }`}
        >
          <tr className="bg-alabaster">
            <td className="px-4 py-2 text-sm">43623</td>
            <td className="px-4 py-2 text-sm">98763</td>
            <td className="px-4 py-2 text-sm">
              ed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud
            </td>
          </tr>
          {isTbodyVisible && (
            <>
              <tr className="bg-alabaster border-b">
                <td colSpan="3" className=" p-4">
                  <KPITable />
                  <KPITable />
                </td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ObjectTable;
