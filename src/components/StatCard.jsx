export default function StatCard({label,value}){
return <div className="bg-white dark:bg-slate-800 p-4 rounded shadow text-center">
<p className="text-xs text-gray-500">{label}</p>
<p className="text-2xl font-bold">{value}</p>
</div>
}