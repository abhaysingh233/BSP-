import '../styles/dashboard.css'
import Header from '../components/Header'
import ServerTable from '../components/ServerTable'
import FilesystemPanel from '../components/FilesystemPanel'
import TablespacePanel from '../components/TablespacePanel'
import ActiveSessions from '../components/ActiveSessions'
import Charts from '../components/Charts'

export default function Dashboard(){
 return(<div className="dashboard-wrapper">
  <Header/>
  <div className="main-grid">
    <div className="section-container">
      <ServerTable/><FilesystemPanel/>
    </div>
    <div className="section-container">
      <Charts/><TablespacePanel/><ActiveSessions/>
    </div>
  </div>
  <footer className="footer"><span>Auto Refresh</span><span>© 2025 C&IT</span></footer>
 </div>)
}