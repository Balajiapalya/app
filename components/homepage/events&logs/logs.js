import styles from '../../../styles/events&logs.module.css';
import Api from '../../../components/api/api'
import { useState,useEffect } from 'react';

function Logs() {
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
    return (

        <div className={styles.events}>
            <p>Logs show every API action taken.Logs will be stored up to 30 days.</p>
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
                            <tr key={ind}>
                                <td>{data.status}</td>
                                <td><p>FRANE FREEZE</p>{data.url}</td>
                                <td>{dateCreated(data.occurredOn)}</td>
                            </tr>
                        </>)}
                    </tbody>
                    
                </table>

            </div>


        </div>


    )
}
export default Logs;