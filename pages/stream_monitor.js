import Stream_tabs from '../components/homepage/Stream_tabs'
import styles from '../styles/stream_monitor.module.css'
import Link from 'next/link'
import { useState } from 'react'
import Newstream from './newstream';



export default function Stream_monitor() {
    const[opennewstream,setnewstream]=useState(false);
    return (
        <div className={styles.container}>
            <div className={styles.containercomponents}>
                <Link href="settings"><a> <h2>Videograph</h2></a></Link>
                <div className={styles.uppercomponents}>
                    <ul>
                        <li>
                            <a href="#"><img src="/Icon material-home.png" alt='icon'></img>Environments</a>
                        </li>
                        <li>
                            <a href="#"><img src="/Icon material-video-library.png" alt='icon'></img>Videos</a>
                        </li>
                        <li>
                            <a href="#"><img src="Icon simple-googleanalytics.png" alt='icon'></img>Analytics</a>
                        </li>
                        <li className={styles.tools}>
                            <a href="#" className={styles.list_heading}><img src="Icon awesome-tools.png" alt='icon'></img>Tools</a>
                            <ul className={styles.list}>
                                <li><a>Stream Monitor</a></li>
                                <li><a>Image Optimization</a></li>
                                <li><a>Subtitle Converter</a></li>
                                <li><a>Video player</a></li>
                                <li><a>Player Validator</a></li>
                            </ul>
                        </li>

                    </ul>
                </div>
                <div className={styles.lowercomponents}>
                    <ul>
                        <li>
                            <a href="#"><img src="Icon awesome-file-alt.png" alt='icon'></img>Events & logs</a>
                        </li>
                        <li>
                            <a href="#"><img src="Icon ionic-ios-settings.png" alt='icon'></img>Settings</a>
                        </li>
                        <li>
                            <a href="#"><img src="Icon awesome-user-alt.png" alt='icon' className={styles.user_icon}></img><p>Anil <br />Yupp TV</p></a>

                        </li>
                        <li>
                            <a href="#"><img src="Icon feather-log-out.png" alt='icon'></img>Logout</a>
                        </li>
                    </ul>
                </div>
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
                            <img src='/plus-icon.png' alt='icon' ></img>
                        </a>
                        
                    </div>
                    {opennewstream && < Newstream closestream={setnewstream}/>}
                    <Stream_tabs />
                </div>
            </div>
        </div>
    )
}