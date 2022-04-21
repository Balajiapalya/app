import React, { useState, useEffect } from 'react'
import styles from '../styles/videos.module.css'
import { useRouter } from "next/router";

const VideoList = ({ i, create_On, created_time }) => {
    const reg = useRouter();
    const [videoId, setVideoId] = useState([]);
    const [videotitle, setvideotitle] = useState([]);
    const [thumbnail,setthumbnail] = useState([]);
    const handleChange = () => {
        //        if (i.status == 'Ready') {
        window.location.pathname = './videos/video'
        setVideoId(i.videoId)
        setvideotitle(i.title)
        setthumbnail(i.thumbnailUrl)
        //        }
    }
    localStorage.setItem('asset_title', videotitle)
    localStorage.setItem('videoId', videoId)
    localStorage.setItem('thumbnail',thumbnail)
    return (
        <>

            <td><input className={styles.checkbox} type="checkbox"></input></td>
            <td className={styles.addedon}>{create_On(i.created_at)}<br></br> {created_time(i.created_at)}</td>
            <td className={styles.title}>{i.title}</td>
            <td className={styles.assetID}>{i.videoId}</td>
            {i.thumbnailUrl ? <td className={styles.thumbnail}><img width="100px" src={`${i.thumbnailUrl}`} alt="image"></img></td> : <td></td>}
            {i.duration ? <td>{Math.floor(i.duration / 60000)}m {Math.floor((i.duration % 60000) / 1000)}s</td> : <td>-</td>}
            {i.resolution ? <td>{i.resolution}</td> : <td>-</td>}
            {i.status=="Failed"?<td>{i.status}</td>:<td >{i.status} <img className={styles.ready_img} src={`/images/asset_status/${i.status}.png`} /></td>}
            <td className={styles.actionicons}>
                <a onClick={() => handleChange()}><img className={styles.active} src='/images/iconionic-ios-play-circle.png' alt="image"></img></a>
                <img src='/images/film-editing.png' alt="image"></img>
                <img src='/images/insert-picture-icon.png' alt="image"></img>
                <img src='/images/gif-file-format-symbol.png' alt="image"></img>
                <img src='/images/closed-caption.png' alt="image"></img>
                <img src='/images/iconawesome-eye-slash.png' alt="image"></img>
            </td>
        </>
    )
}
export default VideoList

