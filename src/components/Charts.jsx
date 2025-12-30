import {useEffect,useState} from 'react'
import api from '../api/api'
import {BarChart,Bar,XAxis,Tooltip,ResponsiveContainer} from 'recharts'
export default ()=>{
 const [d,set]=useState([])
 useEffect(()=>{api.get('/api/servers?db=rundb1').then(r=>set(r.data.map(s=>({name:s.host,cpu:s.cpu||0,mem:s.mem||0}))))},[])
 return(<div className="chart-box"><h4>CPU / MEM</h4>
 <ResponsiveContainer width="100%" height={150}>
 <BarChart data={d}><XAxis dataKey="name" hide/><Tooltip/>
 <Bar dataKey="cpu" fill="#ef5350"/><Bar dataKey="mem" fill="#42a5f5"/></BarChart>
 </ResponsiveContainer></div>)}