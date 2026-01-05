import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ServerTable from "../components/ServerTable";
import { data as fallback } from "../data/fallback";

export default function Servers() {
  const [servers] = useState(fallback.servers);

  return (
    <div className="flex bg-gray-100 dark:bg-slate-900 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <div className="p-4 space-y-4">
          <h2 className="text-xl font-bold">
            Servers
          </h2>

          {/* ✅ SAME SERVER TABLE AS DASHBOARD */}
          <ServerTable data={servers} />
        </div>
      </div>
    </div>
  );
}
