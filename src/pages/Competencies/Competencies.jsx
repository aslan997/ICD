import React from "react";
import CompetenciesTable from "./components/CompetenciesTable";
import ProficiencyTable from "./components/ProficiencyTable";

const Competencies = () => {
  return (
    <>
      <CompetenciesTable />
      <hr className="mx-4 mt-2"/>
      <ProficiencyTable />
    </>
  );
};

export default Competencies;
