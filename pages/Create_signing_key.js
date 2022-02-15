import styles from '../styles/model.module.css'

export default function Create_signing_key({ closesigninkeys }) {
    return (
        <div className={`${styles.container} ${styles.newkey}`} >
            <div className={styles.body}>
                <div className={styles.model_nav}>
                    <a onClick={() => closesigninkeys(false)} className={styles.model_close} role="button"><img src="Images/close.png" alt='icon'/> </a>

                </div>
                <div className={styles.main}>
                    <h3 className={styles.model_title}>New Signing Key</h3>
                    <label className={styles.model_label}>Environment</label>
                    <div className={styles.select}>
                        <select name="product" className={`${styles.development} ${styles.model_selection}`}>
                            <option value="1">Development</option>
                            <option value="video">video</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>

                        <img className={styles.file} src="Images/Icon awesome-folder.png" alt='icon'></img>
                        <button type="text" className={styles.up}><img src="Images/updown.png" alt='icon'></img></button>
                    </div>
                    <div>
                        <label className={styles.model_label}>Product</label>

                        <select name="product" className={styles.model_selection}>
                            <option value="1">1</option>
                            <option value="video">video</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div className={styles.model_btn}>
                        <button type="button" className={`${styles.model_canel_btn} btn btn-primary`} onClick={() => closesigninkeys(false)}>Cancel</button>
                        <button type="button" className={`${styles.model_save_btn} btn btn-primary`} onClick={() => closesigninkeys(false)}>create Signing Key</button>
                    </div>

                </div>
            </div>
        </div>
    )
}