import {useEffect,useState} from 'react'
import api from '../api/api'
export default ()=>{
 const [d,set]=useState([])
 useEffect(()=>{api.get('/api/sessions?db=rundb1').then(r=>set(r.data))},[])
 return(<><h4>Active Sessions</h4><div className="table-scroll">
 <table className="table-candy"><thead><tr><th>SID</th><th>User</th><th>Status</th></tr></thead>
 <tbody>{d.map((s,i)=>(<tr key={i}><td>{s.sid}</td><td>{s.username}</td><td>{s.status}</td></tr>))}
 </tbody></table></div></>) }