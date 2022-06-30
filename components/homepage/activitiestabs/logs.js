import { Fragment, useEffect, useState } from "react";
import styles from '../../../styles/model.module.css';
import Link from "next/link";
import Api from "../../api/api";
import { useRouter } from "next/router";
function Logs() {
  const router = useRouter();
  const query = router.query.videoId
  useEffect(() => {
    getEventData();
  }, [])
  const getEventData = () => {
    Api.Get_Activities_Logs(query)
      .then(res => {
        if (res && res.data && res.data.data) {
          console.Log(res.data.data)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (

    <div className={styles.activities_logs}>


      <p className={styles.activites_details}>Logs show every API action taken.Logs will be stored up to 30 days.</p>

      <table className={styles.activities_events_logs_table}>
        <thead>
          <tr>
            <th>Status</th>
            <th>Description</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Video.detect.framefreeze</td>
            <td>abae8ba0-0970-41a6-834c-667110b861031</td>
            <td>11/11/2021 3:57PM</td>
          </tr>
          <tr>
            <td>Video.detect.framefreeze</td>
            <td>abae8ba0-0970-41a6-834c-667110b861031</td>
            <td>11/11/2021 3:57PM</td>
          </tr>
          <tr>
            <td>Video.detect.framefreeze</td>
            <td>abae8ba0-0970-41a6-834c-667110b861031</td>
            <td>11/11/2021 3:57PM</td>
          </tr>
        </tbody>
      </table>

    </div>





  )
}
export default Logs;