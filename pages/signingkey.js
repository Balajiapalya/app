import styles from '../styles/model.module.css'

export default function Signingkey() {
    return (
        <div className={`${styles.container} ${styles.signingkey}`}>
            <div className={styles.body}>
                <div className={styles.model_nav}>
                    <a href="#" className={styles.model_close} role="button"><img src="close.png" alt='close'/> </a>
                </div>
                <div className={styles.main}>
                    <h3 className={styles.model_title}>Below is your new Signing Key:</h3>
                    <label className={styles.model_label}>Signing Key ID:</label>
                    <input type="text" className={`${styles.model_input} form_control`} name="id" />
                    <button type="button" className={styles.copy}><img src="copy.png" alt='icon'></img>  </button>

                    <label className={styles.model_label}>Base64-encodeed Private Key:</label>
                    <p className={styles.access_token_link}>We don&apos;t store the key.Please copy or download it into your system.</p>
                    <input type="text" className={`${styles.model_input} form_control`} name="name" placeholder="Development" />
                    <button type="button" className={styles.copy}><img src="copy.png" alt='icon'></img>  </button>
                    <div className={styles.downloadpem}>
                        <a href="">Download as .pem file</a>
                    </div>

                    <div className={styles.model_btn}>
                        <button type="button" className={`${styles.model_save_btn} btn btn-primary`}>Done</button>
                    </div>
                </div>
            </div>
        </div>


    )
}