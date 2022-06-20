import styles from '../../../styles/events&logs.module.css';
import { useState,useEffect } from 'react';
import EventDetails from './EventDetails'
import Api from '../../../components/api/api';
function Events({closeEvt,setCloseEvt,openEvent,setOpenEvent}) {
  
  const [event,setEvent] = useState([]);
  const [uuidEvnt,setUuid]=useState()
  let uuid
  if(process.browser){
      uuid=localStorage.getItem('uuid')
  }
  useEffect(()=>{
    Api.Get_Events_data(uuid).then(res=>{
        return(
            <>
                {setEvent(res.data.data)}
            </>
        )
    })
  },[])
  const dateCreated= (d)=>{
    var dateNew = new Date(+d).toLocaleString('en-US', { timeZone: 'Indian/Christmas' })
    return dateNew
 }
 const handleComponent=(data)=>{
  setCloseEvt(false);
  setOpenEvent(true);
  setUuid(data.uuid)
}

  return (
    <>
      {closeEvt  ?
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
              {event.map((data,ind)=><>
                            <tr key={ind} onClick={()=>handleComponent(data)}>
                                <td>{data.messageType}</td>
                                <td>{data.uuid}</td>
                                <td>{dateCreated(data.occurredOn)}</td>
                            </tr>
                        </>)}
              </tbody>
              
            </table>
          </div>
        </div> : ""}        
        {openEvent && <EventDetails uuidEvnt={uuidEvnt} setCloseEvt={setCloseEvt} setOpenEvent={setOpenEvent}/>}
    </>

  )
}
export default Events;