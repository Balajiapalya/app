import React, { useState, useEffect } from 'react'
import styles from '../styles/videos.module.css'
import { useRouter } from "next/router";

const VideoList = ({ i, create_On, created_time }) => {
    const router = useRouter()
    const [videoId, setVideoId] = useState([]);
    const [videotitle, setvideotitle] = useState([]);
    const [thumbnail, setthumbnail] = useState([]);
    const [dropdown, setdropdown] = useState(false);
    const handleChange = () => {
        setVideoId(i.videoId)
        setvideotitle(i.title)
        setthumbnail(i.thumbnailUrl)
        router.push({ pathname: './videos/video', query: { 'path': 1 } });
    }


    const handleVideoClips = () => {
        setVideoId(i.videoId)
        setvideotitle(i.title)
        setthumbnail(i.thumbnailUrl)
        router.push({ pathname: './videos/video', query: { 'path': 2 } });

    }
    const togglethumbnail = () => {
        setVideoId(i.videoId)
        setvideotitle(i.title)
        setthumbnail(i.thumbnailUrl)
        router.push({ pathname: './videos/video', query: { 'path': 3 } });
    }
    localStorage.setItem('asset_title', videotitle)
    localStorage.setItem('videoId', videoId)
    localStorage.setItem('thumbnail', thumbnail)
    return (
        <>

            <td><input className={styles.checkbox} type="checkbox"></input></td>
            <td className={styles.addedon}>{create_On(i.created_at)}<br></br> {created_time(i.created_at)}</td>
            <td className={styles.title}>{i.title}</td>
            <td className={styles.assetID}>{i.videoId}</td>
            {i.thumbnailUrl ? <td className={styles.thumbnail}><img width="100px" src={`${i.thumbnailUrl}`} alt="image"></img></td> : <td></td>}
            {i.duration ? <td>{Math.floor(i.duration / 60000)}m {Math.floor((i.duration % 60000) / 1000)}s</td> : <td>-</td>}
            {i.resolution ? <td>{i.resolution}</td> : <td>-</td>}
            {i.status == "Failed" ? <td>{i.status}</td> : <td >{i.status} <img className={styles.ready_img} src={`/images/asset_status/${i.status}.png`} /></td>}
            <td>
                <div className={styles.dropdown}>
                    <div className={styles.contextual_menu_container}>
                        <div className={styles.contextual_menu_hover}>
                            <div className={styles.contextual_menu} onClick={() => setdropdown(dropdown => !dropdown)}></div>
                            {dropdown ?
                                <div className={styles.dropdown_list}>
                                    <button onClick={() => handleChange()}><img src='/images/videoDetails.png' alt='video-details' /><a >Video Details</a></button>
                                    <button onClick={() => handleVideoClips()}><img src='/images/film-editing.png' alt='video clips' /><a>Video Clips</a></button>
                                    <button onClick={() => togglethumbnail()}><img src='/images/thumbnails.png' alt='thumbnails' /><a>Thumbnails</a></button>
                                    <button><img src='/images/closed-caption.png' alt='subtitles' /><a>Subtitles</a></button>
                                    <button><img src='/images/gif-file-format-symbol.png' alt='gifs' /><a>Gifs</a></button>
                                    <button><img src='/images/iconawesome-eye-slash.png' alt='disable' /><a>Disable Video</a></button>
                                </div> : null}
                        </div>
                    </div>

                </div>
            </td>
        </>
    )
}
export default VideoList

