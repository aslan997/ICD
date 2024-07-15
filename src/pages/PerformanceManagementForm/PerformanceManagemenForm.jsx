import React from "react";
import HeaderTitle from "./components/HeaderTitle";
import "./styles/performanceManagementForm.css";
import TaskCategoryName from "./components/TaskCategoryName";
import Information from "./components/Information";

const PerformanceManagemenForm = () => {
  return (
    <div className="container mx-auto">
      <HeaderTitle />
      <TaskCategoryName />
      <Information/>
    </div>
  );
};

export default PerformanceManagemenForm;
