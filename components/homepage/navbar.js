import styles from '../../styles/settings.module.css'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
    const[opendropdown,setdropdown]=useState(false);
    return (
        <div className={styles.container}>
            <div className={styles.containercomponents}>
                <Link href='settings'><h2>Videograph</h2></Link>
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
                            <a  className={styles.list_heading} onClick={()=>setdropdown(!opendropdown)} ><img src="Icon awesome-tools.png"></img>Tools</a>
                            {opendropdown?<ul className={styles.list}>
                                <li><Link href="stream_monitor"><a>Stream Monitor</a></Link></li>
                                <li><a>Image Optimization</a></li>
                                <li><a>Subtitle Converter</a></li>
                                <li><a>Video player</a></li>
                                <li><a>Player Validator</a></li>
                            </ul>:null}
                        </li>
                    </ul>
                </div>
                <div className={styles.lowercomponents}>
                    <ul>
                        <li>
                            <a href="#"><img src="Icon awesome-file-alt.png" alt='icon'></img>Events  logs</a>
                        </li>
                        <li>
                            <a href="#"><img src="Icon ionic-ios-settings.png" alt='icon'></img>Settings</a>
                        </li>
                        <li>
                            <a href="#"><img src="Icon awesome-user-alt.png" alt='icon'></img><p className={styles.user_detail}>Anil <br />Yupp TV</p></a>

                        </li>
                        <li>
                            <a href="#"><img src="Icon feather-log-out.png" alt='icon'></img>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )

}