import React from "react";

const YERTable = () => {
  return (
    <table className="min-w-full">
      <thead>
        <tr>
          <th className="bg-ecruWhite p-2 text-left text-14 font-head">AA</th>
          <th className="bg-ecruWhite p-2 text-left text-14 font-head">
            Calculated Score
          </th>
          <th className="bg-ecruWhite p-2 text-left text-14 font-head">
            EMP Updated Score
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 text-14">ed do eiusmod tempor incididunt</td>
          <td className="p-2 text-14"></td>
          <td className="p-2 text-14"></td>
        </tr>
        <tr>
          <td className="bg-pineGlade p-2 text-14 font-head" colSpan={3}>
            EMP Comments
          </td>
        </tr>
        <tr>
          <td colSpan={3} className="text-14 p-2">
            ed do eiusmod tempor incididunt ed do eiusmod tempor incididunt
          </td>
        </tr>
        <tr>
          <td className="bg-pineGlade p-2 text-14 font-head" colSpan={2}>
            LM Comments
          </td>
          <td className="bg-pineGlade p-2 text-14 font-head" colSpan={1}>
            LM Score
          </td>
        </tr>
        <tr>
          <td colSpan={2} className="text-14 p-2">
            ed do eiusmod tempor incididunt ed do eiusmod tempor incididunt
          </td>
          <td colSpan={1}></td>
        </tr>
      </tbody>
    </table>
  );
};

export default YERTable;
