import styles from '../styles/model.module.css'

export default function Disablepremiumfeatures() {
    return (
        <div className={`${styles.model} ${styles.remove_user_modal}`} >
            <div className={styles.model_main}>
                <div className={styles.model_nav}>
                    <h3 className={styles.model_title}>Disable premium Features</h3>
                    <a href="" className={styles.model_close} role="button"><img src="close.png" /> </a>
                </div>

                <div className={styles.model_removeuser}>
                    <h4 className={styles.model_removeusername}>Are you sure you want to disable it?</h4>
                    <p className={styles.model_data}>Once disable,Advanced stream monitoring will be stopped and all historical data will be erased.you will not be charged further for this stream.</p>
                </div>
                <div className={styles.model_btn}>
                    <button type="button" className={`${styles.model_canel_btn} btn btn-primary`}>Cancel</button>
                    <button type="button" className={`${styles.model_save_btn} btn btn-primary`}>Yes,delete</button>
                </div>
            </div>
        </div>
    )
}