import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import PerformanceManagemenForm from "./pages/PerformanceManagementForm/PerformanceManagemenForm";
import Login from "./pages/Login/Login";
import Employees from "./pages/Employees/Employees";
import Profile from "./pages/Profile/Profile";
import Prospective from "./pages/Prospectives/Prospectives";
import EmployeeStages from "./pages/EmployeeStages/EmployeeStages";
import Submissions from "./pages/Submissions/Submissions";
import Grades from "./pages/Grades/Grades";
import ProxyAccessManagement from "./pages/ProxyAccessManagement/ProxyAccessManagement";
import Competencies from "./pages/Competencies/Competencies";
import PMSCycles from "./pages/PMSCycles/PMSCycles";
import StateManagement from "./pages/StateManagement/StateManagement";
import AuditLog from "./pages/AuditLog/AuditLog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/** Route for login form */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        {/** Route for performance management page */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/** Route for performance management page */}
        <Route
          path="/objective/form"
          element={
            <ProtectedRoute>
              <PerformanceManagemenForm />
            </ProtectedRoute>
          }
        />

        {/** Route for employees */}
        <Route
          path="/employee"
          element={
            <ProtectedRoute>
              <Employees />
            </ProtectedRoute>
          }
        />

        {/** Route for employees stages */}
        <Route
          path="/employee_stages"
          element={
            <ProtectedRoute>
              <EmployeeStages />
            </ProtectedRoute>
          }
        />

        {/** Route for prospectives */}
        <Route
          path="/perspectives"
          element={
            <ProtectedRoute>
              <Prospective />
            </ProtectedRoute>
          }
        />

        {/** Route for submissions */}
        <Route
          path="/submissions"
          element={
            <ProtectedRoute>
              <Submissions />
            </ProtectedRoute>
          }
        />

        {/** Route for grade management */}
        <Route
          path="/grades"
          element={
            <ProtectedRoute>
              <Grades />
            </ProtectedRoute>
          }
        />

        {/** Route for proxy access management */}
        <Route
          path="/manage-proxy-access"
          element={
            <ProtectedRoute>
              <ProxyAccessManagement />
            </ProtectedRoute>
          }
        />

        {/** Route for proxy access management */}
        <Route
          path="/competencies"
          element={
            <ProtectedRoute>
              <Competencies />
            </ProtectedRoute>
          }
        />

        {/** Route for pms cycles */}
        <Route
          path="/pms_year"
          element={
            <ProtectedRoute>
              <PMSCycles />
            </ProtectedRoute>
          }
        />

        {/** Route for state management */}
        <Route
          path="/manage-employee-stages"
          element={
            <ProtectedRoute>
              <StateManagement />
            </ProtectedRoute>
          }
        />

        {/** Route for audit logs */}
        <Route
          path="/hr-dashboard"
          element={
            <ProtectedRoute>
              <AuditLog />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
