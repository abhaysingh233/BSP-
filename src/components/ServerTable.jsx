import {useEffect,useState} from 'react'
import api from '../api/api'
export default function(){
 const [d,set]=useState([])
 useEffect(()=>{api.get('/api/servers?db=rundb1').then(r=>set(r.data))},[])
 return(<><span className="pill-label">Server Performance</span>
 <div className="table-scroll"><table className="table-candy"><thead><tr>
 <th>Host</th><th>Status</th><th>CPU%</th><th>Mem%</th></tr></thead><tbody>
 {d.map((s,i)=>(<tr key={i}><td>{s.host}</td>
 <td className={s.status==='UP'?'status-up':'status-down'}>{s.status}</td>
 <td className={s.cpu>80?'alert':''}>{s.cpu||'-'}</td>
 <td className={s.mem>80?'alert':''}>{s.mem||'-'}</td></tr>))}
 </tbody></table></div></>) }