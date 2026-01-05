export default function ServerStatusTable({data}){
return <table className="w-full bg-white shadow rounded">
<thead><tr><th>IP</th><th>Status</th></tr></thead>
<tbody>{data.map((s,i)=>(
<tr key={i}><td>{s.ip}</td><td className={s.status==="UP"?"text-green-600":"text-red-600"}>{s.status}</td></tr>
))}</tbody>
</table>;
}