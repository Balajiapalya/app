import { Fragment, useEffect, useState } from "react";
import styles from '../../../styles/model.module.css';
import Link from "next/link";
import Api from "../../api/api";
import { useRouter } from "next/router";
import LogDetailActivity from './LogDetailActivity'
function Logs({setLogDetail,logDetail}) {
  const [LogsData, setLogsData] = useState([]);
  const [clickDetail,setClickedDetail]=useState();
  const router = useRouter();
  const query = router.query.videoId
  useEffect(() => {
    getEventData();
  }, [])
  const getEventData = () => {
    Api.Get_Activities_Logs(query)
      .then(res => {
        if(res && res.data && res.data.data && res.data.data.length>0)
        setLogsData(res.data.data)
        
      })
      .catch(error => {
        console.log(error)
      })
  }
  const createdOn = (date) =>{
    var dateNew = new Date(+date).toLocaleString('en-In',{day:"2-digit",month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit',second:'2-digit'})
    return dateNew
  }

  const handleClick=(data)=>{
    setLogDetail(true)
    setClickedDetail(data.uuid)
  }
 
  return (
<>
    {LogsData.length!==0 && logDetail==false && <div className={styles.activities_logs}>


      <p className={styles.activites_details}>Logs show every API action taken.Logs will be stored up to 30 days.</p>

      {LogsData !== "" ?
        <table className={styles.activities_events_logs_table}>
          <thead>
            <tr>
              <th className={styles.status}>Status</th>
              <th>Description</th>
              <th className={styles.date_header}>Date</th>
            </tr>
          </thead>
          <tbody>
            {LogsData.map((logs, key) =>
              <tr key={key} onClick={()=>handleClick(logs)}>
                <td className={styles.status}>{logs.status}</td>
                <td className={styles.description_content}><span>{logs.url}</span><br/><span>{logs.uuid}</span></td>
                <td>{createdOn(logs.occurredOn)}</td>
              </tr>)}
          </tbody>
        </table> : <p className={styles.data_not_found}>No data found</p>}

    </div>}
    {LogsData.length===0 && <div className={styles.noLogs}>No logs available</div>}
 {logDetail && <LogDetailActivity clickDetail={clickDetail} logDetail={logDetail} setLogDetail={setLogDetail}/>}
</>



  )
}
export default Logs;