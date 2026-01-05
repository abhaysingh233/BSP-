import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../services/api";

export default function ServerDetails() {
  const { ip } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/servers/${ip}`)
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [ip]);

  if (loading) return <div className="p-4">Loading...</div>;
  if (!data) return <div className="p-4 text-red-500">Server not reachable</div>;

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-xl font-bold">
        Server Details : {ip}
      </h2>

      {/* CPU & MEMORY */}
      <div className="grid grid-cols-2 gap-4">
        <StatusCard title="CPU Usage" value={data.cpu} />
        <StatusCard title="Memory Usage" value={data.memory} />
      </div>

      {/* FILESYSTEM */}
      <Section title="Filesystem Usage">
        <Table
          headers={["Filesystem", "Size", "Available", "Used %", "Mounted"]}
          rows={data.filesystems.map(fs => [
            fs.filesystem,
            fs.size,
            fs.available,
            <Progress percent={fs.usedPercent} />,
            fs.mounted
          ])}
        />
      </Section>

      {/* TABLESPACE */}
      <Section title="Tablespace Capacity">
        <Table
          headers={["Name", "Allocated MB", "Free MB", "Used %"]}
          rows={data.tablespaces.map(ts => [
            ts.name,
            ts.allocated,
            ts.free,
            <Progress percent={ts.usedPercent} />
          ])}
        />
      </Section>

      {/* ACTIVE SESSIONS */}
      <Section title="Active Sessions">
        <Table
          headers={["SID", "User", "Status", "Machine", "Program"]}
          rows={data.sessions.map(s => [
            s.sid,
            s.user,
            <StatusBadge status={s.status} />,
            s.machine,
            s.program
          ])}
        />
      </Section>
    </div>
  );
}

/* ------------------ COMPONENTS ------------------ */

function Section({ title, children }) {
  return (
    <div className="bg-white rounded shadow p-4">
      <h3 className="font-semibold mb-3">{title}</h3>
      {children}
    </div>
  );
}

function Table({ headers, rows }) {
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b">
          {headers.map(h => (
            <th key={h} className="text-left p-2">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} className="border-b hover:bg-slate-50">
            {r.map((c, j) => (
              <td key={j} className="p-2">{c}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Progress({ percent }) {
  return (
    <div>
      <div className="h-2 bg-gray-200 rounded">
        <div
          className={`h-2 rounded ${
            percent > 90 ? "bg-red-500" : percent > 70 ? "bg-yellow-500" : "bg-green-500"
          }`}
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="text-xs">{percent}%</span>
    </div>
  );
}

function StatusBadge({ status }) {
  return (
    <span
      className={`px-2 py-1 rounded text-xs font-semibold ${
        status === "ACTIVE"
          ? "bg-green-100 text-green-700"
          : status === "KILLED"
          ? "bg-red-100 text-red-700"
          : "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
}

function StatusCard({ title, value }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h4 className="text-sm text-gray-500">{title}</h4>
      <div className="mt-2">
        <Progress percent={value} />
      </div>
    </div>
  );
}
