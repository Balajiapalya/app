import styles from '../styles/model.module.css'
import Link from 'next/link'

export default function Unlockpremiumfeatures({close_unlockpremium}) {
    return (
        <div className={`${styles.container} ${styles.unlockpremiumfeatures}`}>
            <div className={styles.body}>
                <div className={styles.model_nav}>
                    <a onClick={()=>close_unlockpremium(false)} className={styles.model_close} role="button"><img src="close.png" /> </a>

                </div>
                <div className={styles.content}>
                    <img src="Exclusion.png" alt="Exclusion"></img>
                    <div className={styles.premium_data}>
                        <h3 className={styles.model_title}>Congrats! you have unlocked premium features.</h3>
                        <p>You can now enable premium features whenever you need it for any of your streams.</p>
                        <p>You will be charged only when enable premium features, at the end of each billing cycle.</p>
                    </div>
                    <div className={styles.model_btn}>

                        <Link href="stream_statistics"><a><button type="button" className={`${styles.model_save_btn} btn btn-primary`}>continue</button></a></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}