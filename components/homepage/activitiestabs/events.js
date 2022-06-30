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
        if (res && res.data && res.data.data) {
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
      <table className={styles.activities_events_logs_table}>
        <thead>
          <tr>
            <th>EVENTS</th>
            <th >ID</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {activitiesData.flatMap((data, key) =>
            <tr key={key}>
              <td>{data.messageType}</td>
              <td className={styles.Id}>{data.uuid}</td>
              <td>{createdOn(data.occurredOn)}</td>
            </tr>
          )}

          {/* <tr>
            <td>Video.detect.framefreeze</td>
            <td>abae8ba0-0970-41a6-834c-667110b861031</td>
            <td>11/11/2021 3:57PM</td>
          </tr>
          <tr>
            <td>Video.detect.framefreeze</td>
            <td>abae8ba0-0970-41a6-834c-667110b861031</td>
            <td>11/11/2021 3:57PM</td>
          </tr> */}
        </tbody>
      </table>




    </div>


  )
}
export default Events;