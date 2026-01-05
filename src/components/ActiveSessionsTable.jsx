export default function ActiveSessionsTable({data}){
return <table className="w-full bg-white shadow rounded">
<thead><tr><th>SID</th><th>User</th><th>Status</th></tr></thead>
<tbody>{data.map((s,i)=>(
<tr key={i}><td>{s.sid}</td><td>{s.user}</td><td>{s.status}</td></tr>
))}</tbody>
</table>;
}