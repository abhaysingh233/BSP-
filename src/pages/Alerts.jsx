import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function Alerts() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Alerts</h2>
          <p>Critical alerts & warnings.</p>
        </div>
      </div>
    </div>
  );
}
