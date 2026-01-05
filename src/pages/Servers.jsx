import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export default function Servers() {
  const [servers, setServers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/servers")
      .then(res => setServers(res.data))
      .catch(() => console.log("Backend down"));
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold mb-3">Server Status</h3>

      <table className="w-full text-sm border">
        <thead>
          <tr className="bg-slate-100">
            <th className="p-2 text-left">Host</th>
            <th className="p-2">Status</th>
            <th className="p-2">CPU%</th>
            <th className="p-2">Mem%</th>
          </tr>
        </thead>

        <tbody>
          {servers.map((s, i) => (
            <tr key={i} className="border-t">
              <td
                className="p-2 text-blue-600 cursor-pointer underline"
                onClick={() => navigate(`/servers/${s.host}`)}
              >
                {s.host}
              </td>

              <td className={`p-2 font-semibold ${
                s.status === "UP" ? "text-green-600" : "text-red-600"
              }`}>
                {s.status}
              </td>

              <td className="p-2 text-center">{s.cpu ?? "-"}</td>
              <td className="p-2 text-center">{s.mem ?? "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
