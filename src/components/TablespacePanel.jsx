import {useEffect,useState} from 'react'
import api from '../api/api'
export default ()=>{
 const [d,set]=useState([])
 useEffect(()=>{api.get('/api/tablespaces?db=rundb1').then(r=>set(r.data))},[])
 return(<><h4>Tablespaces</h4><div className="table-scroll">
 <table className="table-candy"><thead><tr><th>Name</th><th>Used%</th></tr></thead>
 <tbody>{d.map((t,i)=>(<tr key={i}><td>{t.name}</td>
 <td className={t.usedPct>80?'alert':''}>{t.usedPct}%</td></tr>))}
 </tbody></table></div></>) }