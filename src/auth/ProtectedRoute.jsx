import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, roles }) {
  const role = localStorage.getItem("role");

  if (!role) return <Navigate to="/" />;

  if (roles && !roles.includes(role)) {
    return <div className="p-6">Access Denied</div>;
  }

  return children;
}
