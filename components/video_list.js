import React, { useState, useEffect } from 'react'
import styles from '../styles/videos.module.css'
import { useRouter } from "next/router";

const VideoList = ({ i, create_On }) => {
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
    localStorage.setItem('asset_title',videotitle)
    localStorage.setItem('videoId', videoId)
    return (
        <>
            
            <td><input type="checkbox"></input></td>
            <td>{create_On(i.created_at)}</td>
            <td>{i.title}</td>
            <td>{i.videoId}</td>
            <td></td>
            {/* <img src='/Images/Image 3.png' /> */}
            {i.duration? <td>{Math.floor(i.duration/60000)} mins {Math.floor((i.duration%60000)/1000)} secs</td> : <td>-</td> }
            {i.resolution? <td>{i.resolution}</td>:<td>-</td>}
            {/* HD */}
            <td>{i.status}</td>
            <td className={styles.actionicons}>
                <a onClick={() => handleChange()}><img src='/Images/Icon ionic-ios-play-circle.png' alt="image"></img></a>
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

