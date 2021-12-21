import Stream_tabs from '../components/homepage/Stream_tabs'
import styles from '../styles/stream_monitor.module.css'




export default function Stream_monitor() {
    return (
        <div className={styles.container}>
            <div className={styles.containercomponents}>
                <h2>Videograph</h2>
                <div className={styles.uppercomponents}>
                    <ul>
                        <li>
                            {/* <span><img src="/Icon material-home.png"></img></span> */}
                            <a href="#"><img src="/Icon material-home.png"></img>Environments</a>
                        </li>
                        <li>
                            {/* <span><img src="/Icon material-video-library.png"></img></span> */}
                            <a href="#"><img src="/Icon material-video-library.png"></img>Videos</a>
                        </li>
                        <li>
                            {/* <span><img src="Icon simple-googleanalytics.png"></img></span> */}
                            <a href="#"><img src="Icon simple-googleanalytics.png"></img>Analytics</a>
                        </li>
                        <li>
                            {/* <span><img src="Icon awesome-tools.png"></img></span> */}
                            <a href="#"><img src="Icon awesome-tools.png"></img>Tools</a>
                        </li>

                    </ul>
                </div>
                <div className={styles.lowercomponents}>
                    <ul>
                        <li>
                            {/* <span><img src="Icon awesome-file-alt.png"></img></span> */}
                            <a href="#"><img src="Icon awesome-file-alt.png"></img>Events & logs</a>
                        </li>
                        <li>
                            {/* <span><img src="Icon ionic-ios-settings.png"></img></span> */}
                            <a href="#"><img src="Icon ionic-ios-settings.png"></img>Settings</a>
                        </li>
                        <li>
                            {/* <span><img src="Icon awesome-user-alt.png"></img></span> */}
                            <a href="#"><img src="Icon awesome-user-alt.png" className={styles.user_icon}></img><p>Anil <br />Yupp TV</p></a>

                        </li>
                        <li>
                            {/* <span><img src="Icon feather-log-out.png"></img></span> */}
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
                        Our straem monitoring tool provides uptime of your HLS streams and performance of the streams measured at diffrent GEO's
                    </p>
                    <a><button className='btn'>
                        <img></img>
                        Add New stream
                    </button></a>
                
                

                </div>
                <Stream_tabs/>


                


            </div>
        </div>
    )

}