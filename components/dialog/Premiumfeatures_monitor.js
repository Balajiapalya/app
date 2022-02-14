import styles from '../../styles/model.module.css'
import Link from 'next/link'

export default function Premiumfeatures_Enable({closepremium}) {
    return (
        <div className={`${styles.model} ${styles.enablepremiumfeatures}`} >
            <div className={styles.model_main}>
                <div className={styles.model_nav}>
                    <h3 className={styles.model_title}>Premium Features</h3>
                    <a onClick={()=>closepremium(false)} className={styles.model_close} role="button"><img src="close.png" alt="close" /> </a>
                    <p>The stream will be continuosly monitored.You will be charged $0.03/minute for the entire duration of stream monitoring. you can disable this feature anytime.</p>
                </div>

                <div className={styles.newstream}>
                <div className={styles.premiumfeatures}>
                <div className={styles.premiumfeatures_check}>
                            <img className={styles.check} src="Icon awesome-check.png" alt="check"></img>
                        <label className={styles.model_label}>Realtime Monitoring</label>
                        <p>Stream will be monitored continously.You will receive realtime info on overall stream health and other key metrics.</p>
                        </div>
                        <div className={styles.premiumfeatures_check}>
                            <img  className={styles.check} src="Icon awesome-check.png" alt="check"></img>
                        <div className={styles.outlineimg}>
                        <label className={styles.model_label}>Track PTS</label>
                        <img src="outline.png" alt="outline"></img>
                        </div>
                        <div className={styles.select}>
                            <select name="product" className={`${styles.development} ${styles.model_selection}`}>
                                <option value="1">select a location</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                            <button type="text" className={styles.up}><img src="updown.png" alt="updown"></img></button>
                        </div>
                        </div>
                        <div className={styles.premiumfeatures_check}>
                            <img className={styles.check} src="Icon awesome-check.png" alt="check"></img>
                        <label className={styles.model_label}>Detailed Stream info</label>
                        <p>Get detailed stream info such as Video codec,Audio codec,Aspect Ratio,Profile,Color,Space,etc.</p>
                        </div>
                        <div className={styles.premiumfeatures_check}>
                            <img className={styles.check} src="Icon awesome-check.png" alt="check"></img>
                        <label className={styles.model_label}>Frame freeze detection</label>
                        <p>Detects frame freeze events in a stream.</p>
                        </div>
                        <div className={styles.premiumfeatures_check}>
                            <img className={styles.check} src="Icon awesome-check.png" alt="check" ></img>
                        <label className={styles.model_label}>Black frame detection</label>
                        <p>Detects frame freeze events in a stream.</p>
                        </div>
                        <div className={styles.premiumfeatures_check}>
                            <img className={styles.check} src="Icon awesome-check.png" alt="check"></img>
                        <label className={styles.model_label}>Audio loss detection</label>
                        <p>Notifies when audio is missing from the stream.</p>
                        </div>
                        <div className={styles.premiumfeatures_check}>
                            <img className={styles.check} src="Icon awesome-check.png" alt="check"></img>
                        <label className={styles.model_label}>Preview Thumbnail</label>
                        <p>Image thumbnails will be automatically generated for the entire video timeline for a quick preview.</p>
                        </div>
                        <div className={styles.premiumfeatures_check}>
                            <img className={styles.check} src="Icon awesome-check.png" alt="check"></img>
                        <label className={styles.model_label}>Receive alerts</label>
                        <p>Receive email alerts every time we detect an isue with streams.</p>
                        </div>
                    </div>
                    
                </div>
                <div className={styles.model_btn}>
                    <button onClick={()=>closepremium(false)} type="button" className={`${styles.model_canel_btn} btn btn-primary`}>Cancel</button>
                    <Link href='stream_statistics_enable'><a><button type="button" className={`${styles.model_save_btn} btn btn-primary`}>Enable</button></a></Link>
                </div>
            </div>
        </div>
    )
}