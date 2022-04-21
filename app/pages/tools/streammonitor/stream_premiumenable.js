import styles from '../../../styles/model.module.css'
import Link from 'next/link'
import { useState } from 'react'


export default function Stream_premiumenable() {
    // const[openmonitoring,setmonitoring]=useState(false);
    return (
        <div className={`${styles.container} ${styles.newstream}`} >
            <div className={styles.body}>
                <div className={styles.model_nav}>
                    <a className={styles.model_close} role="button"><img src="/images/close.png" alt="close"/> </a>

                </div>
                <div className={styles.main}>
                    <h3 className={styles.model_title}>Add new stream to monitor</h3>
                    <label className={styles.model_label}>Display Name</label>
                    <input type="text" className={`${styles.model_input} form_control`} name="Displayname" placeholder="Enter a name for this stream" />
                    <label className={styles.model_label}>Stream URL</label>
                    <input type="text" className={`${styles.model_input} form_control`} name="Streamurl" placeholder="Enter HLS stream url" />
                    <label className={styles.model_label}>Geo locations to monitor</label>
                    <div className={styles.select}>
                        <select name="product" className={`${styles.development} ${styles.model_selection}`}>
                            <option value="1">Select locations</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <button type="text" className={styles.up}><img src="/images/updown.png" alt="updown"></img></button>
                    </div>
                    <label className={styles.model_label}>Check Streams</label>
                    <div className={styles.select}>
                        <select name="product" className={`${styles.development} ${styles.model_selection}`}>
                            <option value="1">Realtime</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <button type="text" className={styles.up}><img src="/images/updown.png" alt="updown"></img></button>
                    </div>
                    <div className={styles.check_unlockfeatures}>
                        <label className={styles.model_label}>premiumfeatures</label>
                        <input type="checkbox" className={styles.input}></input>
                    </div>
                    <div className={styles.premiumfeatures}>
                        <div className={styles.premiumfeatures_check}>
                            <img className={styles.check} src="/images/iconawesome-check-circle.png" alt="check"></img>
                            <label className={styles.model_label}>Realtime Monitoring</label>
                            <p>Stream will be monitored continously.You will receive realtime info on overall stream health and other key metrics.</p>
                        </div>
                        <div className={styles.premiumfeatures_check}>
                            <img className={styles.check} src="/images/iconawesome-check-circle.png" alt="check"></img>
                            <label className={styles.model_label}>Track PTS</label>
                            <p>Track Presentation Time Stamp(PTS) of streams from location close to stream origin.</p>
                        </div>
                        <div className={styles.premiumfeatures_check}>
                            <img className={styles.check} src="/images/iconawesome-check-circle.png" alt="check"></img>
                            <label className={styles.model_label}>Detailed Stream info</label>
                            <p>Get detailed stream info such as Video codec,Audio codec,Aspect Ratio,Profile,Color,Space,etc.</p>
                        </div>
                        <div className={styles.premiumfeatures_check}>
                            <img className={styles.check} src="/images/iconawesome-check-circle.png" alt="check"></img>
                            <label className={styles.model_label}>Frame freeze detection</label>
                            <p>Detects frame freeze events in a stream.</p>
                        </div>
                        <div className={styles.premiumfeatures_check}>
                            <img className={styles.check} src="/images/iconawesome-check-circle.png" alt="check"></img>
                            <label className={styles.model_label}>Black frame detection</label>
                            <p>Detects frame freeze events in a stream.</p>
                        </div>
                        <div className={styles.premiumfeatures_check}>
                            <img className={styles.check} src="/images/iconawesome-check-circle.png" alt="check"></img>
                            <label className={styles.model_label}>Audio loss detection</label>
                            <p>Notifies when audio is missing from the stream.</p>
                        </div>
                        <div className={styles.premiumfeatures_check}>
                            <img className={styles.check} src="/images/iconawesome-check-circle.png" alt="check"></img>
                            <label className={styles.model_label}>Preview Thumbnail</label>
                            <p>Image thumbnails will be automatically generated for the entire video timeline for a quick preview.</p>
                        </div>
                        <div className={styles.premiumfeatures_check}>
                            <img className={styles.check} src="/images/iconawesome-check-circle.png" alt="check"></img>
                            <label className={styles.model_label}>Receive alerts</label>
                            <p>Receive email alerts every time we detect an isue with streams.</p>
                        </div>
                    </div>
                    <div className={styles.model_btn}>
                        <Link href='/tools/streammonitor/stream_monitor'><a><button type="button" className={`${styles.model_canel_btn} btn btn-primary`}>Cancel</button></a></Link>
                        <Link href='/tools/streammonitor/stream_statistics'><a><button type="button" className={`${styles.model_save_btn} btn btn-primary`}>Start Monitoring</button></a></Link>
                    </div>  
                </div>
            </div>
            {/* {openmonitoring && <Stream_statistics closemonitoring={setmonitoring}/>} */}
        </div>
    )
}