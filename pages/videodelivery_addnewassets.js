import Link from 'next/link';
import styles from '../styles/videos.module.css'


export default function Videodelivery_addnewassets() {

    return (
        <div className={styles.videodelivery}>
            <div className={styles.model_nav}>
                    <a className={styles.model_close} role="button"><img src="Images/close.png" alt="close" /> </a>

                </div>
            <div className={styles.Videodelivery_addnewassets}>
            <h2>Create new asset</h2>
            <div className={styles.upload_file}>
                        <h2>upload your video file</h2>
                        <div className={styles.upload_btn_wrapper}>
                            <button className={styles.btn}>Select File</button>
                            <input type="file" name="myfile" />
                        </div>
                        
                    </div>
                    <div className={styles.post}>
                            <h4>Post using Video URL:</h4>
                            <p>Post https://api.videograph.com/vodeos/v1/assets</p>
                            <span>Post body editor:</span>
                            <div className={styles.language_select}>
                            <button className={styles.model_btn}>Python</button>
                            <button className={styles.model_btn}>Node</button>
                            <button className={styles.model_btn}>Php</button>
                            <button className={styles.model_btn}>Go</button>
                            </div>
                            <div className={styles.code}>

                            </div>
                            <Link href="video"><a><button className={styles.btn}>Run Request</button></a></Link>
                        </div>
            </div>
        </div>
    )}