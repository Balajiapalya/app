import { Fragment } from "react";
import styles from '../../../styles/videodelivery_tabs.module.css';
import Link from "next/link";
function Videoditor() {
    return (

        <div className={styles.video_editor_content}>
            <div className={styles.video_editor_player}>
            <img src="Images/Image 11.png" alt="image"/>
            </div>
            
            <div className={styles.start_end_time}>
                <div className={styles.start_time}>
                    <h5>Start time*</h5>
                    <input placeholder="00:20:30"></input>
                </div>
                <div className={styles.end_time}>
                    <h5>End Time*</h5>
                    <input placeholder="00:20:40"></input>
                </div>
            </div>
            <div className={styles.create_video_clip_button}>
                <button>Create Video Clip</button>
            </div>
        </div>
    )
}
export default Videoditor;