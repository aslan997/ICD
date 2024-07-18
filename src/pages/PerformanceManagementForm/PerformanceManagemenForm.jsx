import React from "react";
import HeaderTitle from "./components/HeaderTitle";
import "./styles/performanceManagementForm.css";
import TaskCategoryName from "./components/TaskCategoryName";
import Information from "./components/Information";
import ObjectiveAndKpis from "./components/ObjectiveAndKpis";

const PerformanceManagemenForm = () => {
  return (
    <div className="container mx-auto">
      <HeaderTitle />
      <TaskCategoryName />
      <Information />
      <ObjectiveAndKpis />
    </div>
  );
};

export default PerformanceManagemenForm;
