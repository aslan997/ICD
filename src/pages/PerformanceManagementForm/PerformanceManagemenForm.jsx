import React from "react";
import HeaderTitle from "./components/HeaderTitle";
import "./styles/performanceManagementForm.css";
import TaskCategoryName from "./components/TaskCategoryName";
import Information from "./components/Information";
import ObjectiveAndKpis from "./components/ObjectiveAndKpis";
import LearningAndDevelopmentPlanTable from "./components/LearningAndDevelopmentPlanTable";

const PerformanceManagemenForm = () => {
  return (
    <div className="px-4">
      <HeaderTitle />
      <div className=" mx-auto">
        <TaskCategoryName />
        <Information />
        <ObjectiveAndKpis />
        <LearningAndDevelopmentPlanTable/>
      </div>
    </div>
  );
};

export default PerformanceManagemenForm;
