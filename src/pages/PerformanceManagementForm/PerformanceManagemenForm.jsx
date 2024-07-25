import React from "react";
import HeaderTitle from "./components/HeaderTitle";
import "./styles/performanceManagementForm.css";
import TaskCategoryName from "./components/TaskCategoryName";
import Information from "./components/Information";
import ObjectiveAndKpis from "./components/ObjectiveAndKpis";
import CompetenciesTable from "./components/CompetenciesTable";
import LearningAndDevelopmentPlanTable from "./components/LearningAndDevelopmentPlanTable";
import EmployeeComents from "./components/EmployeeComents";
import ActionButtons from "./components/ActionButtons";

const PerformanceManagemenForm = () => {
  return (
    <div className="px-4 py-16">
      <HeaderTitle />
      <div className=" mx-auto">
        <TaskCategoryName />
        <Information />
        <ObjectiveAndKpis />
        <CompetenciesTable />
        <LearningAndDevelopmentPlanTable />
        <EmployeeComents />
        <ActionButtons />
      </div>
    </div>
  );
};

export default PerformanceManagemenForm;
