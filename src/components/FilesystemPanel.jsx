import {useEffect,useState} from 'react'
import api from '../api/api'
export default ()=>{
 const [d,set]=useState([])
 useEffect(()=>{api.get('/api/filesystem/10.145.8.23').then(r=>set(r.data))},[])
 return(<div><h4>Filesystem</h4><div className="table-scroll">
 <table className="table-candy"><thead><tr><th>FS</th><th>Used%</th></tr></thead>
 <tbody>{d.map((f,i)=>(<tr key={i}><td>{f.Filesystem}</td>
 <td className={f.Usage_Pct?.includes('9')?'alert':''}>{f.Usage_Pct}</td></tr>))}
 </tbody></table></div></div>)}