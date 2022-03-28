import styles from '../../styles/settings.module.css';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { memo } from "react";


function Navbar() {
    const [opendropdown, setdropdown] = useState(false);
    const [orgname,setorgname]=useState([]);
    const [ownername,setownername]=useState([]);
    const [toggle,setToggle]=useState({
        initial:null,
        activeObject:[1,2,3,4,5,6,7,8,9,10,11,12,13]
    })
    let toolRef=useRef()

    const handleActive=(index)=>{
       
        setToggle({...toggle,initial:toggle.activeObject[index]})
    }
    const toggleStyle=(index)=>{
        if(toggle.initial===toggle.activeObject[index]){
            return `${styles.activate}`
        }
    }

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
        let handler=(e)=>{
            if(toolRef && toolRef.current && !toolRef.current.contains(e.target)){
                setdropdown(false)
            }
         
        }
        document.addEventListener('mousedown',handler)
        return()=>{
            document.removeEventListener('mousedown',handler)
        }
    })

    return (
        <div className={styles.container}>
            <div className={styles.containercomponents}>
                <Link href='/'><a><h2>Videograph</h2></a></Link>
                <div className={styles.uppercomponents}>
                    <ul>
                        <li>
                           <Link href="/environments"><a className={toggleStyle(1)} onClick={()=>handleActive(1)}><img src="/Images/Icon material-home.png" alt='icon'></img>Environments</a></Link>
                        </li>
                        <li>
                            <Link href='/videos'><a className={toggleStyle(2)} onClick={()=>handleActive(2)}><img src="/Images/Icon material-video-library.png" alt='icon'></img>Videos</a></Link>
                        </li>
                        <li>
                            <a className={toggleStyle(3)} onClick={()=>handleActive(3)} href="#"><img src="/Images/Icon simple-googleanalytics.png" alt='icon'></img>Analytics</a>
                        </li>
                        <li style={opendropdown?{backgroundColor:"#262b36",color:'white'}:{backgroundColor:null}} className={styles.tools}>
                            <a className={`${styles.list_heading} ${toggleStyle(4)}`} onClick={() => `${setdropdown(!opendropdown)} ${handleActive(4)}`}><img src="/Images/Icon awesome-tools.png" alt="icon"></img>Tools</a>
                            {opendropdown ? <div><ul ref={toolRef} className={styles.list}>
                                <li><Link href="/tools/streammonitor/stream_monitor"><a className={toggleStyle(5)} onClick={()=>handleActive(5)}>Stream Monitor</a></Link></li>
                                <li><a className={toggleStyle(6)} onClick={()=>handleActive(6)}>Image Optimization</a></li>
                                <li><Link href="/tools/subtitleconverter/subtitleconvertor"><a className={toggleStyle(7)} onClick={()=>handleActive(7)}>Subtitle Converter</a></Link></li>
                                <li><a className={toggleStyle(8)} onClick={()=>handleActive(8)}>Video player</a></li>
                                <li><a className={toggleStyle(9)} onClick={()=>handleActive(9)}>Player Validator</a></li>
                            </ul></div> : null}
                        </li>
                    </ul>
                </div>
                <div className={styles.lowercomponents}>
                    <ul>
                        <li>
                          <Link href="/events_logs"><a className={toggleStyle(10)} onClick={()=>handleActive(10)}><img src="/Images/Icon awesome-file-alt.png" alt='icon'></img>Events  logs</a></Link> 
                        </li>
                        <li>
                            <Link href="/"><a className={toggleStyle(11)} onClick={()=>handleActive(11)}><img src="/Images/Icon ionic-ios-settings.png" alt='icon'></img>Settings</a></Link>
                        </li>
                        <li>
                            <Link href="/account"><a onClick={()=>handleActive(12)}><img src="/Images/Icon awesome-user-alt.png" alt='icon'></img><p className={`${styles.user_detail} ${toggleStyle(12)}`}>{ownername} <br/>{orgname}</p></a></Link>
                        </li>
                        <li>
                            <Link href="/signin"><a className={toggleStyle(13)}  onClick={()=>`${handlelogout} ${handleActive(13)}`}><img src="/Images/Icon feather-log-out.png" alt='icon'></img>Logout</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default memo(Navbar);
