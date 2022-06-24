import React, { useState, useEffect, useRef } from 'react'
import styles from '../styles/videos.module.css'
import { useRouter } from "next/router";


const VideoList = ({ i, create_On, created_time }) => {
    const router = useRouter();
    const ref = useRef();
    const [videoId, setVideoId] = useState([]);
    const [videotitle, setvideotitle] = useState([]);
    const [thumbnail, setthumbnail] = useState([]);
    const [dropdown, setdropdown] = useState(false);
    const handleChange = () => {
        setVideoId(i.contentId)
        setvideotitle(i.title)
        setthumbnail(i.thumbnailUrl)
        router.push({ pathname: `./videos/video`, query: { 'videoId': i.contentId, 'path': 1 } });
    }


    const handleVideoClips = () => {
        setVideoId(i.contentId)
        setvideotitle(i.title)
        setthumbnail(i.thumbnailUrl)
        router.push({ pathname: './videos/video', query: { 'videoId': i.contentId, 'path': 2 } });

    }
    const togglethumbnail = () => {
        setVideoId(i.contentId)
        setvideotitle(i.title)
        setthumbnail(i.thumbnailUrl)
        router.push({ pathname: './videos/video', query: { 'videoId': i.contentId, 'path': 3 } });
    }
    const togglesubtitle = () => {
        setVideoId(i.contentId)
        setvideotitle(i.title)
        setthumbnail(i.thumbnailUrl)
        router.push({ pathname: './videos/video', query: { 'videoId': i.contentId, 'path': 4 } });
    }

    localStorage.setItem('asset_title', videotitle)
    localStorage.setItem('videoId', videoId)
    localStorage.setItem('thumbnail', thumbnail)

    let useClickOutside = (handler) => {
        let domnode = useRef();
        useEffect(() => {
            let maybehandler = (event) => {
                if (!domnode.current.contains(event.target)) {
                    handler();
                };
            };
            document.addEventListener('mousedown', maybehandler);
            return () => {
                document.removeEventListener('mousedown', maybehandler);
            };

        }, []);
        return domnode
    }

    let domnode = useClickOutside(() => {
        setdropdown(false);
    })
    const handleSingleCheck=()=>{
        let singleCheck=document.querySelectorAll('.assetCheck');
        let tbody=document.getElementById('td').parentElement.parentElement;
        for(let i=0;i<singleCheck.length;i++){
           if(singleCheck[i].checked){
            tbody.getElementsByTagName('tr')[i].style.backgroundColor="#f0f8fd"
           }else{
            tbody.getElementsByTagName('tr')[i].style.backgroundColor="white"
           }
        }
      
    }
    return (
        <>

            <td id='td'><input className={`${styles.checkbox} ${styles.tdCursor} assetCheck`} type="checkbox" onClick={()=>handleSingleCheck()}></input></td>
            <td className={`${styles.addedon} ${styles.tdCursor}`} onClick={() => handleChange()}>{create_On(i.created_at)}<br></br> {created_time(i.created_at)}</td>
            {/* <td className={styles.title}>{i.title}</td> */}
            <td className={`${styles.assetID} ${styles.tdCursor}`}  onClick={() => handleChange()}>{i.contentId}</td>
            {i.thumbnailUrl ? <td className={`${styles.thumbnail} ${styles.tdCursor}`}  onClick={() => handleChange()}><img width="100px" src={`${i.thumbnailUrl}`} alt="image"></img></td> : <td></td>}
            {i.duration ? <td className={styles.tdCursor}  onClick={() => handleChange()}>{Math.floor(i.duration / 60000)}m {Math.floor((i.duration % 60000) / 1000)}s</td> : <td  className={styles.tdCursor}  onClick={() => handleChange()}>-</td>}
            {i.resolution ? <td  onClick={() => handleChange()} className={styles.tdCursor}>{i.resolution}</td> : <td onClick={() => handleChange()}  className={styles.tdCursor}>-</td>}
            {i.status == "Failed" ? <td  onClick={() => handleChange()}  className={styles.tdCursor}>{i.status}<img className={styles.failed_img} src='/images/iconmaterial-info-outline.png'/></td> : <td  onClick={() => handleChange()}  className={styles.tdCursor}>{i.status} <img className={styles.ready_img} src={`/images/asset_status/${i.status}.png`} /></td>}
            <td>
                <div className={styles.dropdown}>
                    <div className={styles.contextual_menu_container}>
                        <div ref={domnode} className={styles.contextual_menu}>
                            <div onClick={() => setdropdown(dropdown => !dropdown)}>
                                <img className={`${styles.content_menu_basic} ${styles.tdCursor}`} src='/images/content-menu-basic.svg' alt='menu' />
                                <img className={`${styles.content_menu_hover} ${styles.tdCursor}`} src='/images/content-menu-hover.svg' alt='menu' />
                            </div>
                            {dropdown ?
                                <div className={styles.dropdown_list}>
                                    <button className={`${styles.dropdown_btn_top} `} onClick={() => handleChange()}><img src='/images/videoDetails.svg' alt='video-details' /><a >Video Details</a></button>
                                    <button className={`${styles.dropdown_btn_middle} `} onClick={() => handleVideoClips()}><img src='/images/film-editing.svg' alt='video clips' /><a>Video Clips</a></button>
                                    <button className={`${styles.dropdown_btn_middle} `} onClick={() => togglethumbnail()}><img src='/images/insert-picture-icon.svg' alt='thumbnails' /><a>Thumbnails</a></button>
                                    <button className={`${styles.dropdown_btn_middle} `} onClick={() => togglesubtitle()}><img src='/images/closed-caption.svg' alt='subtitles' /><a>Subtitles</a></button>
                                    {/* <button className={`${styles.dropdown_btn_middle} `}><img src='/images/gif-file-format-symbol.svg' alt='gifs' /><a>Gifs</a></button> */}
                                    <button className={`${styles.dropdown_btn_bottom} `}><img src='/images/iconawesome-eye-slash.svg' alt='disable' /><a>Disable Video</a></button>
                                </div>
                                : null}
                        </div>
                    </div>

                </div>
            </td>

        </>
    )
}
export default VideoList

