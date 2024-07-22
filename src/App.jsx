import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import PerformanceManagemenForm from "./pages/PerformanceManagementForm/PerformanceManagemenForm";
import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/** Route for login form */}
        <Route path="/login" element={<Login />} />

        {/** Route for performance management page */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <PerformanceManagemenForm />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
