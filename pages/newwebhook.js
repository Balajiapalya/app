import styles from '../styles/model.module.css'

export default function Newwebhook() {
    return (
        <div className={`${styles.container} ${styles.newwebhook_model}`} >
            <div className={styles.body}>
                <div className={styles.model_nav}>
                    <a href="" className={styles.model_close} role="button"><img src="close.png" /> </a>

                </div>
                <div className={styles.main}>
                    <h3 className={styles.model_title}>New Webhook</h3>
                    <label className={styles.model_label}>Environment</label>
                    <div className={styles.select}>
                        <select name="product" className={`${styles.development} ${styles.model_selection}`}>
                            <option value="1">Development</option>
                            <option value="video">video</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>

                        <img className={styles.file} src="Icon awesome-folder.png"></img>
                        <button type="text" className={styles.up}><img src="updown.png"></img></button>
                    </div>


                    <label className={styles.model_label}>URL to notify:</label>
                    <input type="text" className={`${styles.model_input} form_control`} name="URL" placeholder="Enter url" />
                    <p className={styles.access_token_link}>All events will be sent to this URL.To learn more about the types of events see our <a href="" className={styles.access_token_data}>docs</a></p>
                    <div className={styles.model_btn}>
                        <button type="button" className={`${styles.model_canel_btn} btn btn-primary`}>Cancel</button>
                        <button type="button" className={`${styles.model_save_btn} btn btn-primary`}>create Webhook</button>
                    </div>

                </div>
            </div>
        </div>
    )
}