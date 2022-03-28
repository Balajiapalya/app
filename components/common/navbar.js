import styles from '../../styles/settings.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { memo } from "react";


function Navbar() {
    const [opendropdown, setdropdown] = useState(false);
    const [orgname,setorgname]=useState([]);
    const [ownername,setownername]=useState([]);
    const handlelogout = () => {
        window.localStorage.clear();
        document.cookie= 'Jwt-token=;expires=' + new Date().toUTCString()
    }
    useEffect(()=>{
        setorgname(
            localStorage.getItem("orgName")
        )
        setownername(
            localStorage.getItem("ownername")
        )
        
    })
    let name;
    if(process.browser){
        name=localStorage.getItem("ownername");
    }
    const ownerName = name;
    return (
        <div className={styles.container}>
            <div className={styles.containercomponents}>
                <Link href='/'><a><h2>Videograph</h2></a></Link>
                <div className={styles.uppercomponents}>
                    <ul>
                        <li>
                           <Link href="/environments"><a><img src="/Images/Icon material-home.png" alt='icon'></img>Environments</a></Link>
                        </li>
                        <li>
                            <Link href='/videos'><a ><img src="/Images/Icon material-video-library.png" alt='icon'></img>Videos</a></Link>
                        </li>
                        <li>
                            <a href="#"><img src="/Images/Icon simple-googleanalytics.png" alt='icon'></img>Analytics</a>
                        </li>
                        <li style={opendropdown?{backgroundColor:"#262b36"}:{backgroundColor:null}} className={styles.tools}>
                            <a className={styles.list_heading} onClick={() => setdropdown(!opendropdown)} ><img src="/Images/Icon awesome-tools.png" alt="icon"></img>Tools</a>
                            {opendropdown ? <ul className={styles.list}>
                                <li><Link href="/tools/streammonitor"><a>Stream Monitor</a></Link></li>
                                <li><a>Image Optimization</a></li>
                                <li><Link href="/tools/subtitleconverter"><a>Subtitle Converter</a></Link></li>
                                <li><a>Video player</a></li>
                                <li><a>Player Validator</a></li>
                            </ul> : null}
                        </li>
                    </ul>
                </div>
                <div className={styles.lowercomponents}>
                    <ul>
                        <li>
                          <Link href="/events_logs"><a ><img src="/Images/Icon awesome-file-alt.png" alt='icon'></img>Events  logs</a></Link> 
                        </li>
                        <li>
                            <Link href="/"><a><img src="/Images/Icon ionic-ios-settings.png" alt='icon'></img>Settings</a></Link>
                        </li>
                        <li>
                            <Link href="/account"><a><img src="/Images/Icon awesome-user-alt.png" alt='icon'></img><p className={styles.user_detail}>{ownername} <br />{orgname}</p></a></Link>

                        </li>
                        <li>
                            <Link href="/signin"><a onClick={handlelogout}><img src="/Images/Icon feather-log-out.png" alt='icon'></img>Logout</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default memo(Navbar);