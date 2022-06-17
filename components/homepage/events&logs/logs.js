import styles from '../../../styles/events&logs.module.css';
import Api from '../../../components/api/api'
import { useState,useEffect } from 'react';
import LogDetails from './LogDetails'

function Logs({close,set_close,set_open,open}) {
const [logsData,setLogsData]=useState([])
    useEffect(()=>{
        Api.Get_Logs_data().then(res=>{
            return(
                <>
                    {setLogsData(res.data.data)}
                </>
            )
        })
      },[])
     const dateCreated= (d)=>{
        var dateNew = new Date(+d).toLocaleString('en-US', { timeZone: 'Indian/Christmas' })
        return dateNew
     }
     const handleComponent=()=>{
        set_close(false)
        set_open(true)
     }
    return (

        <div className={styles.events}>
            {close && <><p>Logs show every API action taken.Logs will be stored up to 30 days.</p>
            <div className={styles.events_data}>
                <table className={styles.events_logs_table}>
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Description</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {logsData.map((data,ind)=><>
                            <tr key={ind} onClick={()=>handleComponent()}>
                                <td>{data.status}</td>
                                <td><p>FRANE FREEZE</p>{data.url}</td>
                                <td>{dateCreated(data.occurredOn)}</td>
                            </tr>
                        </>)}
                    </tbody>
                    
                </table>

            </div> </>}
            {open && <LogDetails/>}

        </div>


    )
}
export default Logs;