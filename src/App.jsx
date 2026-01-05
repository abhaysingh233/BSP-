import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Dashboard from "./pages/Dashboard";
import Servers from "./pages/Servers";
import ServerDetails from "./pages/ServerDetails";
import Database from "./pages/Database";
import Alerts from "./pages/Alerts";
import ProtectedRoute from "./auth/ProtectedRoute";

export default function App() {
  const isLoggedIn = !!localStorage.getItem("role");

  if (!isLoggedIn) {
    return <Login onLogin={() => window.location.reload()} />;
  }

  return (
    <BrowserRouter>
      <Routes>

        {/* Dashboard */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Server List (IMAGE 1 & 2) */}
        <Route
          path="/servers"
          element={
            <ProtectedRoute>
              <Servers />
            </ProtectedRoute>
          }
        />

        {/* Server Details (IMAGE 3) */}
        <Route
          path="/servers/:ip"
          element={
            <ProtectedRoute>
              <ServerDetails />
            </ProtectedRoute>
          }
        />

        {/* Admin only */}
        <Route
          path="/database"
          element={
            <ProtectedRoute roles={["admin"]}>
              <Database />
            </ProtectedRoute>
          }
        />

        <Route
          path="/alerts"
          element={
            <ProtectedRoute roles={["admin"]}>
              <Alerts />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}
