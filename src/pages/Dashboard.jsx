import {useEffect,useState} from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import ServerTable from "../components/ServerTable";
import Tablespace from "../components/Tablespace";
import Sessions from "../components/Sessions";
import {data as fallback} from "../data/fallback";

export default function Dashboard(){
const [dark,setDark]=useState(false);
const [servers,setServers]=useState(fallback.servers);
const [tablespaces,setTablespaces]=useState(fallback.tablespaces);
const [sessions,setSessions]=useState(fallback.sessions);

useEffect(()=>{
const interval=setInterval(()=>{
// placeholder fetch
console.log("auto refresh");
},30000);
return()=>clearInterval(interval);
},[]);

return <div className={dark?"dark":""}>
<div className="flex bg-gray-100 dark:bg-slate-900 min-h-screen text-black dark:text-white">
<Sidebar/>
<div className="flex-1">
<Header dark={dark} setDark={setDark}/>
<div className="p-4 space-y-4">
<div className="grid grid-cols-4 gap-4">
<StatCard label="Total Servers" value={servers.length}/>
<StatCard label="UP" value={servers.filter(s=>s.status==="UP").length}/>
<StatCard label="DOWN" value={servers.filter(s=>s.status!=="UP").length}/>
<StatCard label="DB Alerts" value={tablespaces.filter(t=>t.used>85).length}/>
</div>
<div className="grid grid-cols-2 gap-4">
<ServerTable data={servers}/>
<Tablespace data={tablespaces}/>
</div>
<Sessions data={sessions}/>
</div>
</div>
</div>
</div>
}