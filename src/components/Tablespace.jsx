export default function Tablespace({data}){
return <div className="bg-white dark:bg-slate-800 p-4 rounded shadow">
<h3 className="font-semibold mb-2">Tablespace Capacity</h3>
{data.map((t,i)=>(
<div key={i} className="mb-2">
<div className="flex justify-between text-xs">
<span>{t.name}</span><span>{t.used}%</span>
</div>
<div className="h-2 bg-gray-200 rounded">
<div className={t.used>85?"bg-red-600":"bg-blue-600"} style={{width:t.used+"%"}}></div>
</div>
</div>
))}
</div>
}