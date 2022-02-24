import styles from '../../styles/model.module.css'

export default function Premiumfeatures_Enable() {
    return (
        <div className={`${styles.model} ${styles.remove_user_modal}`} >
            <div className={styles.model_main}>
                <div className={styles.model_nav}>
                    <h3 className={styles.model_title}> premium Features</h3>
                    <a href="" className={styles.model_close} role="button"><img src="Images/close.png" alt="close"/> </a>
                </div>

                <div className={styles.model_removeuser}>
                    <h4 className={styles.model_removeusername}>You are enabling advanced stream monitoring!</h4>
                    <p className={styles.model_data}>The stream will be continuosly monitored. You will be charged $0.03/minute for the entire duration of stream monitorng. ou can disable this feature anytime.</p>
                </div>
                <div className={styles.model_btn}>
                    <button type="button" className={`${styles.model_canel_btn} btn btn-primary`}>Cancel</button>
                    <button type="button" className={`${styles.model_save_btn} btn btn-primary`}>Yes, Enable</button>
                </div>
            </div>
        </div>
    )
}