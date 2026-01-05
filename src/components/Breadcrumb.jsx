import { useLocation, Link } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  return (
    <div className="text-sm text-gray-500 mb-3">
      <Link to="/">Dashboard</Link>
      {paths.map((p, i) => (
        <span key={i}>
          {" > "}
          {p.charAt(0).toUpperCase() + p.slice(1)}
        </span>
      ))}
    </div>
  );
}
