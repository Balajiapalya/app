import styles from '../../../styles/events&logs.module.css';
import { useState } from 'react';
import EventDetails from './EventDetails'
function Events() {
  const [close, set_close] = useState(true);
  const [open, set_open] = useState(false)
  const handleClick = ()=>{
    set_close(false)
    set_open(true)
  }
  return (
    <>
      {close ?
        <div className={styles.events}>
          <p>Events let you know when something ha happened in your system.<br></br>Events will be stored up to 30 days.</p>
          <div className={styles.events_data}>
            <table className={styles.events_logs_table}>
              <thead>
                <tr>
                  <th>Event</th>
                  <th>ID</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td onClick={() => handleClick()}>Video.detect.framefreeze</td>
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
                <tr>
                  <td>Video.detect.framefreeze</td>
                  <td>abae8ba0-0970-41a6-834c-667110b861031</td>
                  <td>11/11/2021 3:57PM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> : ""}
        {/* {open?<div onClick={()=>`${set_close(true)} ${set_open(false)}`}>hii</div>:''} */}
        {open && <EventDetails/>}
    </>

  )
}
export default Events;