import React from "react";
import PMSYearTable from "./components/PMSYearTable";
import PMSStagesTable from "./components/PMSStagesTable";

const PMSCycles = () => {
  return (
    <>
      <PMSYearTable />
      <hr className="mx-4 mt-2" />
      <PMSStagesTable />
    </>
  );
};

export default PMSCycles;
