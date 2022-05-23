import { Fragment } from "react";
import styles from '../../../styles/model.module.css';
import Link from "next/link";

function Logs() {
  return (

    <div className={styles.activities_logs}>


      <p>Logs show every API action taken.Logs will be stored up to 30 days.</p>

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