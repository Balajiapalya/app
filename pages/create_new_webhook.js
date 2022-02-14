import styles from '../styles/model.module.css'

export default function Create_new_webhook({ closewebhook }) {
    return (
        <div className={`${styles.container} ${styles.newwebhook_model}`} >
            <div className={styles.body}>
                <div className={styles.model_nav}>
                    <a className={styles.model_close} role="button" onClick={() => closewebhook(false)}><img src="close.png" alt='icon'/> </a>

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

                        <img className={styles.file} src="Icon awesome-folder.png" alt='icon'></img>
                        <button type="text" className={styles.up}><img src="updown.png" alt='icon'></img></button>
                    </div>

           
                    <label className={styles.model_label}>URL to notify:</label>
                    <input type="text" className={`${styles.model_input} form_control`} name="URL" placeholder="Enter url" />
                    <p className={styles.access_token_link}>All events will be sent to this URL.To learn more about the types of events see our <a href="" className={styles.access_token_data}>docs</a></p>
                    <div className={styles.model_btn}>
                        <button type="button" className={`${styles.model_canel_btn} btn btn-primary`} onClick={() => closewebhook(false)}>Cancel</button>
                        <button type="button" className={`${styles.model_save_btn} btn btn-primary`} onClick={() => closewebhook(false)}>create Webhook</button>
                    </div>

                </div>
            </div>
        </div>
    )
}