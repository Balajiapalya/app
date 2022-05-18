import styles from '../../styles/model.module.css'
import Link from 'next/link'

export default function Disable_premiumfeatures({ close_disable_premiumfeatures }) {
    return (
        <div className={`${styles.model} ${styles.remove_user_modal}`} >
            <div className={styles.model_container}>
                <div className={styles.model_main}>
                    <div className={styles.model_nav}>
                        <h3 className={styles.model_title}>Disable premium Features</h3>
                        <a onClick={() => close_disable_premiumfeatures(false)} className={styles.model_close} role="button"><img src="/images/close.png" alt="close" /> </a>
                    </div>

                    <div className={styles.model_removeuser}>
                        <h4 className={styles.model_removeusername}>Are you sure you want to disable it?</h4>
                        <p className={styles.model_data}>Once disable,Advanced stream monitoring will be stopped and all historical data will be erased.you will not be charged further for this stream.</p>
                    </div>
                    <div className={styles.model_btn}>
                        <button onClick={() => close_disable_premiumfeatures(false)} type="button" className={`${styles.model_canel_btn} btn btn-primary`}>Cancel</button>
                        <Link href='stream_statistics'><a><button type="button" className={`${styles.model_save_btn} btn btn-primary`}>Yes,delete</button></a></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}