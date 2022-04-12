import React, { useState, useEffect } from 'react'
import styles from '../styles/videos.module.css'
import { useRouter } from "next/router";

const VideoList = ({ i, create_On, created_time }) => {
    const reg = useRouter();
    const [videoId, setVideoId] = useState([]);
    const [videotitle, setvideotitle] = useState([]);
    const handleChange = () => {
        //        if (i.status == 'Ready') {
        window.location.pathname = './videos/video'
        setVideoId(i.videoId)
        setvideotitle(i.title)
        //        }
    }
    localStorage.setItem('asset_title', videotitle)
    localStorage.setItem('videoId', videoId)
    return (
        <>

            <td><input className={styles.checkbox} type="checkbox"></input></td>
            <td className={styles.addedon}>{create_On(i.created_at)}<br></br> {created_time(i.created_at)}</td>
            <td className={styles.title}>{i.title}</td>
            <td className={styles.assetID}>{i.videoId}</td>
            {i.thumbnailUrl ? <td className={styles.thumbnail}><img width="100px" src={`${i.thumbnailUrl}`} alt="image"></img></td> : <td></td>}
            {i.duration ? <td>{Math.floor(i.duration / 60000)}m {Math.floor((i.duration % 60000) / 1000)}s</td> : <td>-</td>}
            {i.resolution ? <td>{i.resolution}</td> : <td>-</td>}
            {i.status=="Failed"?<td>{i.status}</td>:<td >{i.status} <img className={styles.ready_img} src={`/Images/asset_status/${i.status}.png`} /></td>}
            <td className={styles.actionicons}>
                <a onClick={() => handleChange()}><img className={styles.active} src='/Images/Icon ionic-ios-play-circle.png' alt="image"></img></a>
                <img src='/Images/film-editing.png' alt="image"></img>
                <img src='/Images/insert-picture-icon.png' alt="image"></img>
                <img src='/Images/gif-file-format-symbol.png' alt="image"></img>
                <img src='/Images/closed-caption.png' alt="image"></img>
                <img src='/Images/Icon awesome-eye-slash.png' alt="image"></img>
            </td>
        </>
    )
}
export default VideoList

