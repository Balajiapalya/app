import styles from '../../styles/settings.module.css';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { memo, useContext } from "react";
import Api from '../api/api'
import NextNProgress from "nextjs-progressbar";

function Navbar() {

    let activeState
    if (process.browser) {
        activeState = localStorage.getItem('toggle')
    }

    const [opendropdown, setdropdown] = useState(false);
    const [ownername, setownername] = useState([]);
    const [local, setLocal] = useState(null)
    const [toggle, setToggle] = useState({
        initial: activeState,
        activeObject: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    })

    const handleActive = (index) => {
        setToggle({ ...toggle, initial: toggle.activeObject[index] })
    }
    const toggleStyle = (index) => {
        if (toggle.initial === toggle.activeObject[index]) {
            return `${styles.activate}`
        }
    }
    const handlelogout = () => {
        window.localStorage.clear();
        document.cookie = 'Jwt-token=;expires=' + new Date().toUTCString()
    }

    useEffect(() => {
        setownername(
            localStorage.getItem("ownername")
        )
        localStorage.setItem('defaultState', activeState)
        localStorage.setItem('toggle', toggle.initial)
        setLocal(localStorage.getItem('toggle'))
    }, [toggle.initial])

    let name;
    let orgnames;
    if (process.browser) {
        name = localStorage.getItem("ownername");
        orgnames = localStorage.getItem("orgName")
    }
    const OrgName = orgnames;
    const ownerName = name;
    const toggleImg = (ind) => {
        if (toggle.initial === toggle.activeObject[ind]) {
            return true
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.containercomponents}>
                <NextNProgress
                    color="#2863eb"
                    startPosition={0.3}
                    stopDelayMs={200}
                    height={2}
                    showOnShallow={true}
                />
                <Link href='/'><a className={local == 12 || local == 'null' ? `${styles.activate}` : `${toggleStyle(11)}`} onClick={() => handleActive(11)}><h2>Videograph</h2></a></Link>
                <div className={styles.uppercomponents}>
                    <ul>
                        <li>

                            <Link href="/environments"><a className={local == 2 ? `${styles.activate}` : `${toggleStyle(1)}`} onClick={() => handleActive(1)}><img src={toggleImg(1) || local == 2 ? '/Images/Icon material-home(white).png' : '/Images/Icon material-home.png'} alt='icon'></img> Environments</a></Link>
                        </li>
                        <li>
                            <Link href='/videos'><a className={local == 3 ? `${styles.activate}` : `${toggleStyle(2)}`} onClick={() => handleActive(2)}>{styles.activate ? <img src={toggleImg(2) || local == 3 ? '/Images/Icon material-video-library(white).png' : '/Images/Icon material-video-library.png'} alt='icon'></img> : <img src="/Images/Icon material-video-library.png" alt='icon'></img>}Videos</a></Link>
                        </li>
                        <li>
                            <Link href='/analytics'><a className={local == 4 ? `${styles.activate}` : `${toggleStyle(3)}`} onClick={() => handleActive(3)}><img src={toggleImg(3) || local == 4 ? '/Images/Icon simple-googleanalytics.png' : '/Images/Icon simple-googleanalytics.png'} alt='icon'></img>Analytics</a></Link>
                        </li>
                        <li style={opendropdown ? { backgroundColor: "#262b36", color: 'white' } : { backgroundColor: null }} className={styles.tools}>
                            <a className={styles.list_heading} onClick={() => setdropdown(!opendropdown)}><img src={opendropdown ? "/Images/Icon awesome-tools(white).png" : "/Images/Icon awesome-tools.png"} alt="icon"></img>Tools</a>
                            {opendropdown ? <div><ul className={styles.list}>
                                <li><Link href="/tools/streammonitor"><a className={toggleStyle(5)} onClick={() => handleActive(5)}>Stream Monitor</a></Link></li>
                                <li><a className={toggleStyle(6)} onClick={() => handleActive(6)}>Image Optimization</a></li>
                                <li><Link href="/tools/subtitleconverter"><a className={toggleStyle(7)} onClick={() => handleActive(7)}>Subtitle Converter</a></Link></li>
                                <li><a className={toggleStyle(8)} onClick={() => handleActive(8)}>Video player</a></li>
                                <li><a className={toggleStyle(9)} onClick={() => handleActive(9)}>Player Validator</a></li>
                            </ul></div> : null}
                        </li>
                    </ul>
                </div>
                <div className={styles.lowercomponents}>
                    <ul>
                        <li>
                            <Link href="/events_logs"><a className={local == 11 ? `${styles.activate}` : `${toggleStyle(10)}`} onClick={() => handleActive(10)}><img src={toggleImg(10) || local == 11 ? "/Images/Icon awesome-file-alt(white).png" : "/Images/Icon awesome-file-alt.png"} alt='icon'></img>Events  logs</a></Link>
                        </li>
                        <li>
                            <Link href="/"><a className={local == 12 || local == 'null' ? `${styles.activate}` : `${toggleStyle(11)}`} onClick={() => handleActive(11)}><img src={toggleImg(11) || local == 12 ? "/Images/Icon ionic-ios-settings.png" : "/Images/Icon ionic-ios-settings.png"} alt='icon'></img>Settings</a></Link>
                        </li>
                        <li>
                            <Link href="/account"><a onClick={() => handleActive(12)}><img src={toggleImg(12) || local == 13 ? "/Images/Icon awesome-user-alt(white).png" : "/Images/Icon awesome-user-alt.png"} alt='icon'></img><p className={local == 13 ? `${styles.user_detail} ${styles.activate}` : `${styles.user_detail} ${toggleStyle(12)}`}>{ownername} <br />{OrgName}</p></a></Link>
                        </li>
                        <li>
                            <Link href="/signin"><a className={styles.logout} onClick={() => handlelogout()}><img src={toggleImg(13) ? "/Images/Icon feather-log-out.png" : "/Images/Icon feather-log-out.png"} alt='icon'></img>Logout</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default memo(Navbar);