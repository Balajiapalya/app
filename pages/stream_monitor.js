import Stream_tabs from '../components/homepage/Stream_tabs'
import styles from '../styles/stream_monitor.module.css'
import Link from 'next/link'
import { useState } from 'react'
// import Newstream from './newstream';
import Navbar from '../components/common/navbar';
import Stream_unlockfeatures from './stream_unlockfeatures';



export default function Stream_monitor() {
    const[opennewstream,setnewstream]=useState(false);
    return (
        <div className={styles.container}>
            <div>
                <Navbar/>
            </div>
            <div className={styles.stream_Monitor}>
                <div className={styles.padding}>
                    <div className={styles.header}>
                        <h2>
                            Stream Monitor
                        </h2>
                    </div>
                    <div className={styles.stream_details}>
                        <p>
                            Our straem monitoring tool provides uptime of your HLS streams and performance of the streams measured at diffrent GEO&apos;s
                        </p>
                        <a onClick={()=>setnewstream(true)}>
                            <button className='btn'>Add New stream</button>
                            <img src="Images/Icon feather-plus.png"alt='icon' ></img>
                        </a>
                        
                    </div>
                    {opennewstream && < Stream_unlockfeatures closestream={setnewstream}/>}
                    <Stream_tabs />
                </div>
            </div>
        </div>
    )
}