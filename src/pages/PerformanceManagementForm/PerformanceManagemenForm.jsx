import React from "react";
import HeaderTitle from "./components/HeaderTitle";
import "./styles/performanceManagementForm.css";
import TaskCategoryName from "./components/TaskCategoryName";
import Information from "./components/Information";
import ObjectiveAndKpis from "./components/ObjectiveAndKpis";

const PerformanceManagemenForm = () => {
  return (
    <div className="px-4">
      <HeaderTitle />
      <div className=" mx-auto">
        <TaskCategoryName />
        <Information />
        <ObjectiveAndKpis />
      </div>
    </div>
  );
};

export default PerformanceManagemenForm;
