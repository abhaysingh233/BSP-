import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const role = localStorage.getItem("role");

  const linkClass = ({ isActive }) =>
    isActive
      ? "block px-3 py-2 bg-blue-600 rounded text-white"
      : "block px-3 py-2 hover:bg-slate-700 rounded";

  return (
    <div className="w-64 bg-slate-900 text-white p-4 min-h-screen">
      <h2 className="text-lg font-bold mb-6">BSP MONITOR</h2>

      <nav className="space-y-2 text-sm">
        <NavLink to="/" className={linkClass}>
          Dashboard
        </NavLink>

        <NavLink to="/servers" className={linkClass}>
          Servers
        </NavLink>

        {role === "admin" && (
          <>
            <NavLink to="/database" className={linkClass}>
              Database
            </NavLink>

            <NavLink to="/alerts" className={linkClass}>
              Alerts
            </NavLink>
          </>
        )}
      </nav>
    </div>
  );
}
