export default function TablespaceTable({data}){
return <table className="w-full bg-white shadow rounded">
<thead><tr><th>Name</th><th>Used %</th></tr></thead>
<tbody>{data.map((t,i)=>(
<tr key={i}><td>{t.name}</td><td>{t.used}%</td></tr>
))}</tbody>
</table>;
}