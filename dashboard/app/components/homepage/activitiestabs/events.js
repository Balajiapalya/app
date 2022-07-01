import { Fragment, useEffect, useState } from "react";
import styles from '../../../styles/model.module.css';
import Link from "next/link";
import { useRouter } from "next/router";
import Api from "../../api/api";
function Events() {
  const [activitiesData, setactivitiesData] = useState([]);
  const router = useRouter();
  const query = router.query.videoId
  useEffect(() => {
    getEventData();
  },[])
  const getEventData = () => {
    Api.Get_Activities_Events(query)
      .then(res => {
        if (res && res.data && res.data.data && res.data.data.length>0) {
          setactivitiesData(res.data.data)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
  const createdOn = (date) =>{
    var dateNew = new Date(+date).toLocaleString('en-In',{day:"2-digit",month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit',second:'2-digit'})
    return dateNew
  }
  return (

    <div className={styles.activities_events}>
      <p className={styles.activites_details}>Events let you know when something ha happened in your system.<br></br>Events will be stored up to 30 days.</p>
      {activitiesData !== "" ?<table className={styles.activities_events_logs_table}>
        <thead>
          <tr>
            <th>EVENTS</th>
            <th  className={styles.Id_head}>ID</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {activitiesData.map((data, key) =>
            <tr key={key}>
              <td>{data.messageType}</td>
              <td className={styles.Id}>{data.uuid}</td>
              <td>{createdOn(data.occurredOn)}</td>
            </tr>
          )}
        </tbody>
      </table>:<p className={styles.data_not_found}>No data found</p>}
    </div>
  )
}
export default Events;