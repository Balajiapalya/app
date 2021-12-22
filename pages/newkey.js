import styles from '../styles/model.module.css'

export default function Newkey() {
    return (
        <div className={`${styles.container} ${styles.newkey}`} >
            <div className={styles.body}>
                <div className={styles.model_nav}>
                    <a href="" className={styles.model_close} role="button"><img src="close.png" /> </a>

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

                        <img className={styles.file} src="Icon awesome-folder.png"></img>
                        <button type="text" className={styles.up}><img src="updown.png"></img></button>
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
                        <button type="button" className={`${styles.model_canel_btn} btn btn-primary`}>Cancel</button>
                        <button type="button" className={`${styles.model_save_btn} btn btn-primary`}>create Signing Key</button>
                    </div>

                </div>
            </div>
        </div>
    )
}