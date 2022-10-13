import React, { useState, useEffect, useRef } from 'react'
import styles from '../styles/livestream.module.css'
import { useRouter } from "next/router";
import Image from 'next/image'


const RecordingList = ({ i, create_On, created_time }) => {
    const router = useRouter();
    const ref = useRef();
    const [videoId, setVideoId] = useState([]);
    const [videotitle, setvideotitle] = useState([]);
    const [thumbnail, setthumbnail] = useState([]);
    const [dropdown, setdropdown] = useState(false);
    const [hover, setHover] = useState(false)
    const handleChange = (status) => {
        setVideoId(i.contentId)
        setvideotitle(i.title)
        setthumbnail(i.thumbnailUrl)
        localStorage.setItem('status', status)
        router.push({ pathname: `./Live_recording/liverecordingtabs`, query: { 'videoId': i.contentId, 'path': 1 } });
    }
    const handleVideoClips = () => {
        setVideoId(i.contentId)
        setvideotitle(i.title)
        setthumbnail(i.thumbnailUrl)
        localStorage.setItem('status', i.status)
        router.push({ pathname: './Live_recording/liverecordingtabs', query: { 'videoId': i.contentId, 'path': 2 } });

    }

    const handleStreaming = () => {
        // setVideoId(i.contentId)
        // setvideotitle(i.title)
        // setthumbnail(i.thumbnailUrl)
        // localStorage.setItem('status', i.status)
        // router.push({ pathname: './Live_recording/liverecordingtabs', query: { 'videoId': i.contentId, 'path': 2 } });

    }
    

    localStorage.setItem('asset_title', videotitle)
    localStorage.setItem('videoId', videoId)
    localStorage.setItem('thumbnail', thumbnail)



    let domnode = useRef();

    useEffect(() => {

        let maybehandler = (e) => {

            if (!domnode.current.contains(e.target)) {
                setdropdown(false);
            };
        };
        document.addEventListener('mouseup', maybehandler);
        return () => {
            document.removeEventListener('mouseup', maybehandler);
        };

    }, []);
    const handleSingleCheck = () => {
        let singleCheck = document.querySelectorAll('.assetCheck');
        let tbody = document.getElementById('td').parentElement.parentElement;
        for (let i = 0; i < singleCheck.length; i++) {
            if (singleCheck[i].checked) {
                tbody.getElementsByTagName('tr')[i].style.backgroundColor = "#f0f8fd"
            } else {
                tbody.getElementsByTagName('tr')[i].style.backgroundColor = "white"
            }
        }

    }
    const toggleHover = () => {
        setHover(!hover)
    }
    return (
        <>

            <td id='td'><input className={`${styles.checkbox} ${styles.tdCursor} assetCheck`} type="checkbox" onClick={() => handleSingleCheck()}></input></td>
            <td className={`${styles.addedon} ${styles.tdCursor}`} onClick={() => handleChange(i.status)}>{create_On(i.created_at)}<br></br> {created_time(i.created_at)}</td>
            {/* <td className={styles.title}>{i.title}</td> */}
            <td className={`${styles.assetID} ${styles.tdCursor}`} onClick={() => handleChange(i.status)}>{i.contentId}</td>
            {i.thumbnailUrl
                ? <td className={`${styles.thumbnail} ${styles.tdCursor}`} onClick={() => handleChange(i.status)}>
                    {/* <img className={styles.thumbImg} src={`${i.thumbnailUrl}`} alt="image"></img> */}
                    <img src={`${i.thumbnailUrl}`} alt="image" height="65" width="100"/>
                    </td>
                : <td className={`${styles.thumbnail} ${styles.tdCursor}`} onClick={() => handleChange(i.status)}>
                    {/* <img src='/images/placeholder.png' width="100px" /> */}
                    <img src='/images/placeholder.png' alt="holder" height="65" width="100"/>
                    </td>}
            {i.status == "Failed"
                ? <td onClick={() => handleChange(i.status)} className={styles.tdCursor}><div className={hover ? `${styles.visible}`
                    : `${styles.notVisble}`}>failed to upload</div>{i.status} 
                    <img onMouseEnter={toggleHover} onMouseLeave={toggleHover} className={styles.failed_img} src='/images/iconmaterial-info-outline.png' />
                    </td>
                : i.status == 'Pending'
                    ? <td onClick={() => handleChange(i.status)} className={styles.tdCursor}><div className={hover ? `${styles.visible}`
                        : `${styles.notVisble}`}>pending video</div>{i.status} <img onMouseEnter={toggleHover} onMouseLeave={toggleHover} className={styles.failed_img} src='/images/asset_status/pending.png' /></td>
                    :i.status=="Processing"
                    ?<td onClick={() => handleChange(i.status)} className={styles.tdCursor}><div className={hover ? `${styles.visible}`
                    : `${styles.notVisble}`}>Processing</div>{i.status} <img onMouseEnter={toggleHover} onMouseLeave={toggleHover} className={styles.failed_img} src='/images/asset_status/processing.png' /></td>
                    : <td onClick={() => handleChange(i.status)} className={styles.tdCursor}>{i.status} <img className={styles.ready_img} src={`/images/asset_status/${i.status}.svg`} /></td>}
            <td>
                <div className={styles.dropdown}>
                    <div className={styles.contextual_menu_container}>
                        <div ref={domnode} className={styles.contextual_menu}>
                            <div onClick={() => setdropdown(dropdown => !dropdown)}>
                                <img className={`${styles.content_menu_basic} ${styles.tdCursor}`} src='/images/content-menu-basic.svg' alt='menu' />
                                <img className={`${styles.content_menu_hover} ${styles.tdCursor}`} src='/images/content-menu-hover.svg' alt='menu' />
                            </div>
                            {dropdown && i.status !== 'Failed' && i.status !== 'Processing' && i.status !== 'Pending' ?
                                <div className={styles.dropdown_list}>
                                    <button className={`${styles.dropdown_btn_top} `} onClick={() => handleChange()}><img src='/images/videoDetails.svg' alt='stream-details' /><a >Stream Details</a></button>
                                    <button className={`${styles.dropdown_btn_middle} `} onClick={() => handleVideoClips()}><img src='/images/film-editing.svg' alt='video clips' /><a>Video Clips</a></button>
                                    <button className={`${styles.dropdown_btn_middle} `} onClick={() => handleStreaming()}><img src='/images/live_stop.svg' alt='Stop streaming' /><a>Stop</a></button>
                                    <button className={`${styles.dropdown_btn_bottom} `}><img src='/images/iconawesome-eye-slash.svg' alt='disable' /><a>Disable Video</a></button>
                                </div>
                                : null}
                            {dropdown && i.status == 'Failed' || dropdown && i.status == 'Processing' || dropdown && i.status == 'Pending' ? <div className={styles.dropdown_list}><button className={`${styles.dropdown_btn_top} `} onClick={() => handleChange(i.status)}><img src='/images/videoDetails.svg' alt='video-details' /><a >Video Details</a></button></div> : null}
                        </div>
                    </div>

                </div>
            </td>

        </>
    )
}
export default RecordingList

