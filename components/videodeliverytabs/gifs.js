import { Fragment } from 'react'
import styles from '../../styles/videodelivery_tabs.module.css'



export default function Gifs() {

    return (
        <Fragment>

            <div className={styles.gif}>
                <div className={styles.git_video}>
                    <h2>Create GIF using Video Editor</h2>
                    <div className={styles.create_image}>
                        <img className={styles.editor_img} src="/Images/Image 11.png" alt="image" />
                        <div className={styles.time}>
                            <div className={styles.time_start}>
                                <label className={styles.model_label}>Start Time</label>
                                <input type="text" className={styles.model_input} name="Time" placeholder="00:22:33" />
                            </div>
                            <div className={styles.endtime}>
                                <label className={styles.model_label}>End Time</label>
                                <input type="text" className={styles.model_input} name="endtime" placeholder="00:20:40" />
                            </div>
                        </div>
                        <div className={styles.imagewidth}>
                            <label className={styles.model_label}>Image Width</label>
                            <input type="text" className={styles.model_input} name="imagewidth" placeholder="Enter width in px Default is 320px" />
                        </div>
                        <div className={styles.imageheight}>
                            <label className={styles.model_label}>Image height</label>
                            <input type="text" className={styles.model_input} name="imageheight" placeholder="Enter height in px" />
                        </div>
                        <div className={styles.frame_per_second}>
                            <label className={styles.model_label}>Image Width</label>
                            <select type="text" className={styles.model_input} name="imagewidth">
                                <option value='1'>15fps</option>
                            </select>
                        </div>

                        <div className={styles.create_btn}>
                            <button className={styles.btn}>create GIF</button>
                        </div>
                        <h4>Download image from below URL</h4>
                        <p>https://image.videograph.com/FV6sRk7mbi3E3GM1BfNMV2DT7 <span><img className={styles.GIF_copy_img} src='/Images/Icon ionic-ios-copy.png' /></span></p>


                    </div>

                </div>




                <div className={styles.gif_api}>
                    <div className={styles.Videodelivery_addnewassets}>
                        <h2>Create GIF using image Api</h2>


                        <div className={styles.post}>

                            <div className={styles.language_select}>
                                <button className={`${styles.model_btn} ${styles.active}`}>Python</button>
                                <button className={styles.model_btn}>Node</button>
                                <button className={styles.model_btn}>Php</button>
                                <button className={styles.model_btn}>Go</button>
                            </div>
                            <div className={styles.code}>
                            </div>
                            <button className={styles.btn}>Run Request</button>
                            <h4>Download image from below URL</h4>
                            <p>https://image.videograph.com/FV6sRk7mbi3E3GM1BfNMV2DT7 <span><img className={styles.GIF_copy_img} src='/Images/Icon ionic-ios-copy.png' /></span></p>

                        </div>
                    </div>
                </div>

            </div>


        </Fragment >
    )
}