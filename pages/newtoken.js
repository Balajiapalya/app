import styles from '../styles/model.module.css'
import Link from 'next/link'

export default function Newtoken() {
    return (
        <div className={`${styles.container} ${styles.newtoken}`}>
            <div className={styles.body}>
                <div className={styles.model_nav}>
                    <Link href="/"><a className={styles.model_close} role="button"><img src="close.png" /> </a></Link>

                </div>
                <div className={styles.main}>
                    <h3 className={styles.model_title}>Below is the new Access Token:</h3>
                    <label className={styles.model_label}>Access Token ID:</label>
                    <input type="text" className={`${styles.model_input} form_control`} name="id" />
                    <button type="button" className={styles.copy}><img src="copy.png"></img>  </button>

                    <label className={styles.model_label}>Secret Key:</label>
                    <p>We don&apos;t store the key.Please copy or download it into your system.</p>
                    <input type="text" className={`${styles.model_input} form_control`} name="name" placeholder="Development" />
                    <button type="button" className={styles.copy}><img src="copy.png"></img>  </button>

                    <div className={styles.downloadpem}>
                        <a href="">Download as .env file</a>
                    </div>


                    <div className={styles.model_btn}>

                        <Link href="/"><a><button type="button" className={`${styles.model_save_btn} btn btn-primary`}>Done</button></a></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}