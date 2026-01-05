import { useNavigate } from "react-router-dom";

export default function ServerTable({data}){
     const navigate = useNavigate();
return <div className="bg-white dark:bg-slate-800 p-4 rounded shadow">
<h3 className="font-semibold mb-2">Server Status</h3>
<table className="w-full text-sm">
<thead><tr><th>Host</th><th>Status</th><th>CPU%</th><th>Mem%</th></tr></thead>
<tbody>{data.map((s,i)=>(
<tr key={i} className="border-t">
<td 
  className="text-blue-600 cursor-pointer underline"
  onClick={() => navigate(`/servers/${s.host}`)}
>{s.host}</td>
<td className={s.status==="UP"?"text-green-600":"text-red-600"}>{s.status}</td>
<td>{s.cpu||"-"}</td>
<td>{s.mem||"-"}</td>
</tr>
))}</tbody>
</table>
</div>
}