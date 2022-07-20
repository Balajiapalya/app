import styles from '../../../styles/events&logs.module.css';
import Api from '../../../components/api/api';
import { useState,useEffect } from 'react';

const EventDetailActivity = ({clickDetail,setDetail}) => {
    const [event,setEvent] = useState([]);
    const [eventData,setEventData]=useState()
    
    useEffect(()=>{
        
        Api.Get_Events_details(clickDetail).then(res=>{
            if (res && res.data && res.data.data) {
                    {setEvent(res.data.data)}
                    {res.data.data.event.eventData && setEventData(JSON.parse(res.data.data.event.eventData))}
            }
           
        }).catch(err=>console.log(err))
        return()=>{
            setEventData([]);
            setEvent([])
        }
        
      },[])
    
    const handleDate=(date)=>{
        // return new Date(+date).toLocaleString('en-US', { timeZone: 'Indian/Christmas' })
        var dateNew = new Date(+date).toLocaleString('en-In',{day:"2-digit",month:'2-digit',year:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'})
        return dateNew
    }
    const handleComponent=()=>{
        setDetail(false)
    }

    return (
        <div className={styles.detailActivity} onClick={()=>handleComponent()}>
            <h2 className={styles.videoHeading}>video.asset.deleted</h2>
            <div className={styles.eventsDetail}>
                <table>
                    <tbody>
                        <tr>
                            <td>Event Id</td>
                            <td>{event.event && event.event.uuid}</td>
                        </tr>
                        <tr>
                            <td>Date</td>
                            <td>{handleDate(event.event && event.event.occurredOn)}</td>
                        </tr>
                        <tr>
                            <td>Type</td>
                            <td>{event.event && event.event.messageType}</td>
                        </tr>
                        {/* <tr>
                            <td>Source</td>
                            <td>ui</td>
                        </tr>
                        <tr>
                            <td>Environment</td>
                            <td>Production</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
            {eventData && <div className={styles.textArea}>
                <h2>Event Data</h2>
                 <textarea  defaultValue={eventData && `${JSON.stringify(eventData,undefined,2)}`}
    className={styles.codeEvent} readOnly/>
                </div>}
        </div>
    )
}
export default EventDetailActivity