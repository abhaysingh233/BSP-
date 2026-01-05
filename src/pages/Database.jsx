import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function Database() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Database</h2>
          <p>Tablespace, sessions, DB health.</p>
        </div>
      </div>
    </div>
  );
}
