import { useNavigate } from "react-router-dom";

export default function Header({ dark, setDark }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="flex justify-between items-center bg-white dark:bg-slate-800 p-3 shadow">
      <h1 className="font-semibold">Server Health Monitoring</h1>

      <div className="flex gap-3">
        <button
          onClick={() => setDark(!dark)}
          className="border px-3 py-1 rounded text-sm"
        >
          {dark ? "Light" : "Dark"}
        </button>

        <button
          onClick={logout}
          className="bg-red-600 text-white px-3 py-1 rounded text-sm"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
