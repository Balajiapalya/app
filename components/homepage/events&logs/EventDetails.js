import styles from '../../../styles/events&logs.module.css';
import Api from '../../../components/api/api';
import { useState,useEffect } from 'react';

const EventDetails = (uuidEvnt) => {
    const [event,setEvent] = useState([]);
    const [eventData,setEventData]=useState()
    
    useEffect(()=>{
        
        Api.Get_Events_details(uuidEvnt.uuidEvnt).then(res=>{
            return(
                <>
               
                    {setEvent(res.data.data)}
                    {res.data.data.eventData && setEventData(JSON.parse(res.data.data.eventData))}
                </>
            )
           
        })
        return()=>{
            setEventData([]);
            setEvent([])
        }
        
      },[])
     
    const handleDate=(date)=>{
        return new Date(+date).toLocaleString('en-US', { timeZone: 'Indian/Christmas' })
    }
    const handleComponent=()=>{
        uuidEvnt.setCloseEvt(true);
        uuidEvnt.setOpenEvent(false);
           
    }
    return (
        <div className={styles.evtDetailMain} onClick={()=>handleComponent()}>
            <h2 className={styles.videoHeading}>video.asset.deleted</h2>
            <div className={styles.eventsDetail}>
                <table>
                    <tbody>
                        <tr>
                            <td>Event Id</td>
                            <td>{event.contentId}</td>
                        </tr>
                        <tr>
                            <td>Date</td>
                            <td>{handleDate(event.occurredOn)}</td>
                        </tr>
                        <tr>
                            <td>Type</td>
                            <td>{event.messageType}</td>
                        </tr>
                        <tr>
                            <td>Source</td>
                            <td>ui</td>
                        </tr>
                        <tr>
                            <td>Environment</td>
                            <td>Production</td>
                        </tr>
                    </tbody>
                </table>
            </div>
                <div className={styles.textArea}>
                <h2>Event Data</h2>
                <textarea  defaultValue={eventData && `${JSON.stringify(eventData,undefined,2)}`}
    className={styles.codeEvent}/>
                </div>
        </div>
    )
}
export default EventDetails