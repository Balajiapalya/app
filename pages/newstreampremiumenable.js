import styles from '../styles/model.module.css'

export default function Newstreampremiumenable() {
    return (
        <div className={`${styles.container} ${styles.newstream}`} >
            <div className={styles.body}>
                <div className={styles.model_nav}>
                    <a href="" className={styles.model_close} role="button"><img src="close.png" /> </a>

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
                        <button type="text" className={styles.up}><img src="updown.png"></img></button>
                    </div>
                    <label className={styles.model_label}>Time interval</label>
                    <div className={styles.select}>
                        <select name="product" className={`${styles.development} ${styles.model_selection}`}>
                            <option value="1">select duration</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <button type="text" className={styles.up}><img src="updown.png"></img></button>
                    </div>
                    <label className={styles.model_label}>premiumfeatures</label>
                    <div className={styles.premiumfeatures}>
                    <img src="Icon awesome-check.png"></img>
                        <label className={styles.model_label}>Realtime Monitoring</label>
                        <p>Stream will be monitored continously.You will receive realtime info on overall stream health and other key metrics.</p>

                        <label className={styles.model_label}>Track PTS</label>
                        <div className={styles.select}>
                            <select name="product" className={`${styles.development} ${styles.model_selection}`}>
                                <option value="1">select a location</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                            <button type="text" className={styles.up}><img src="updown.png"></img></button>
                        </div>
                        <label className={styles.model_label}>Detailed Stream info</label>
                        <p>Get detailed stream info such as Video codec,Audio codec,Aspect Ratio,Profile,Color,Space,etc.</p>
                        <label className={styles.model_label}>Frame freeze detection</label>
                        <p>Detects frame freeze events in a stream.</p>
                        <label className={styles.model_label}>Black frame detection</label>
                        <p>Detects frame freeze events in a stream.</p>
                        <label className={styles.model_label}>Audio loss detection</label>
                        <p>Notifies when audio is missing from the stream.</p>
                        <label className={styles.model_label}>Preview Thumbnail</label>
                        <p>Image thumbnails will be automatically generated for the entire video timeline for a quick preview.</p>
                        <label className={styles.model_label}>Receive alerts</label>
                        <p>Receive email alerts every time we detect an isue with streams.</p>
                    </div>
                    <div className={styles.model_btn}>
                        <button type="button" className={`${styles.model_canel_btn} btn btn-primary`}>Cancel</button>
                        <button type="button" className={`${styles.model_save_btn} btn btn-primary`}>Start Monitoring</button>
                    </div>
                </div>
            </div>
        </div>
    )
}