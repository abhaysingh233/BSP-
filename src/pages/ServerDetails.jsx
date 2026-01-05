import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { api } from "../services/api";

import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

export default function ServerDetails() {
  const { ip } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  // 🔁 FETCH SERVER DETAILS
  const fetchData = () => {
    api.get(`/servers/${ip}`)
      .then(res => setData(res.data))
      .catch(() => console.log("Server not reachable"));
  };

  // 🔁 AUTO REFRESH EVERY 30 SEC
  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, [ip]);

  if (!data) {
    return <div className="p-4">Loading server details...</div>;
  }

  // 🔹 CHART DATA
  const chartData = [
    { name: "CPU", value: data.cpu },
    { name: "Memory", value: data.mem }
  ];

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <div className="p-4 space-y-4">

          {/* 🔙 BACK BUTTON */}
          <button
            onClick={() => navigate("/servers")}
            className="px-3 py-1 bg-blue-600 text-white rounded"
          >
            ← Back to Servers
          </button>

          <h2 className="text-xl font-bold">
            Server Details : {ip}
          </h2>

          {/* 📊 CPU & MEMORY CHART */}
          <div className="bg-white p-4 rounded shadow h-64">
            <h3 className="font-semibold mb-2">CPU & Memory Usage</h3>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line dataKey="value" stroke="#2563eb" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* 📁 FILESYSTEM */}
          <Section title="Filesystem">
            <Table
              headers={["Filesystem", "Size", "Available", "Used %", "Mounted"]}
              rows={data.filesystems}
              keys={["filesystem", "size", "available", "used", "mounted"]}
            />
          </Section>

          {/* 🗄 TABLESPACE */}
          <Section title="Tablespace Capacity">
            <Table
              headers={["Name", "Allocated", "Free", "Used %"]}
              rows={data.tablespaces}
              keys={["name", "allocated", "free", "used"]}
            />
          </Section>

          {/* 👥 ACTIVE SESSIONS */}
          <Section title="Active Sessions">
            <Table
              headers={["SID", "User", "Status", "Machine", "Program"]}
              rows={data.sessions}
              keys={["sid", "user", "status", "machine", "program"]}
            />
          </Section>
        </div>
      </div>
    </div>
  );
}

/* ---------- REUSABLE UI ---------- */

function Section({ title, children }) {
  return (
    <div className="bg-white rounded shadow p-4">
      <h3 className="font-semibold mb-2">{title}</h3>
      {children}
    </div>
  );
}

function Table({ headers, rows, keys }) {
  return (
    <table className="w-full text-sm border">
      <thead>
        <tr className="bg-slate-100">
          {headers.map(h => (
            <th key={h} className="p-2 text-left">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} className="border-t">
            {keys.map(k => (
              <td key={k} className="p-2">{r[k]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
