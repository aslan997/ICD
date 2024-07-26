import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import PerformanceManagemenForm from "./pages/PerformanceManagementForm/PerformanceManagemenForm";
import Login from "./pages/Login/Login";
import Employees from "./pages/Employees/Employees";
import Profile from "./pages/Profile/Profile";
import Prospective from "./pages/Prospectives/Prospectives";
import EmployeeStages from "./pages/EmployeeStages/EmployeeStages";
import ProxyAccessManagement from "./pages/ProxyAccessManagement/ProxyAccessManagement";

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

        {/** Route for proxy access management */}
        <Route
          path="/manage-proxy-access"
          element={
            <ProtectedRoute>
              <ProxyAccessManagement />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
