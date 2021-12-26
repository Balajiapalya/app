import Stream_tabs from '../components/homepage/Stream_tabs'
import styles from '../styles/stream_monitor.module.css'
import Link from 'next/link'




export default function Stream_monitor() {
    return (
        <div className={styles.container}>
            <div className={styles.containercomponents}>
               <Link href="settings"><a> <h2>Videograph</h2></a></Link>
                <div className={styles.uppercomponents}>
                    <ul>
                        <li>
                            <a href="#"><img src="/Icon material-home.png"></img>Environments</a>
                        </li>
                        <li>
                            <a href="#"><img src="/Icon material-video-library.png"></img>Videos</a>
                        </li>
                        <li>
                            <a href="#"><img src="Icon simple-googleanalytics.png"></img>Analytics</a>
                        </li>
                        <li className={styles.tools}>
                            <a href="#" className={styles.list_heading}><img src="Icon awesome-tools.png"></img>Tools</a>
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
                            <a href="#"><img src="Icon awesome-file-alt.png"></img>Events & logs</a>
                        </li>
                        <li>
                            <a href="#"><img src="Icon ionic-ios-settings.png"></img>Settings</a>
                        </li>
                        <li>
                            <a href="#"><img src="Icon awesome-user-alt.png" className={styles.user_icon}></img><p>Anil <br />Yupp TV</p></a>

                        </li>
                        <li>
                            <a href="#"><img src="Icon feather-log-out.png"></img>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.stream_Monitor}>
                <div className={styles.header}>
                    <h2>
                        Stream Monitor
                    </h2>
                </div>
                <div className={styles.stream_details}>
                    <p>
                        Our straem monitoring tool provides uptime of your HLS streams and performance of the streams measured at diffrent GEO&apos;s
                    </p>
                    <a>
                        <button className='btn'>Add New stream</button>
                        <img src='/plus-icon.png' ></img>
                    </a>
                </div>
                <Stream_tabs />
            </div>
        </div>
    )
}