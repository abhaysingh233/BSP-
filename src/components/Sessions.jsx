export default function Sessions({data}){
return <div className="bg-white dark:bg-slate-800 p-4 rounded shadow">
<h3 className="font-semibold mb-2">Active Sessions</h3>
<table className="w-full text-xs">
<thead><tr><th>SID</th><th>User</th><th>Status</th><th>Machine</th><th>Program</th></tr></thead>
<tbody>{data.map((s,i)=>(
<tr key={i} className="border-t">
<td>{s.sid}</td>
<td>{s.user}</td>
<td className={s.status==="ACTIVE"?"text-green-600":"text-red-600"}>{s.status}</td>
<td>{s.machine}</td>
<td>{s.program}</td>
</tr>
))}</tbody>
</table>
</div>
}