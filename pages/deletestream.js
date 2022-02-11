import styles from '../styles/model.module.css'
import Link from 'next/link'

export default function Deletestream({close_delete_stream}) {
    return (
        <div className={`${styles.model} ${styles.remove_user_modal}`} >
            <div className={styles.model_main}>
                <div className={styles.model_nav}>
                    <h3 className={styles.model_title}>Delete Stream</h3>
                    <a onClick={()=>close_delete_stream(false)} className={styles.model_close} role="button"><img src="close.png"  alt="close"/> </a>
                </div>

                <div className={styles.model_removeuser}>
                    <h4 className={styles.model_removeusername}>Are you sure you want to delete this Stream?</h4>
                    <p className={styles.model_data}>Once deleted,this stream will no longer monitored and all historical data will be erased.</p>
                </div>
                <div className={styles.model_btn}>
                    <button onClick={()=>close_delete_stream(false)} type="button" className={`${styles.model_canel_btn} btn btn-primary`}>Cancel</button>
                    <Link href='stream_monitor'><a><button type="button" className={`${styles.model_save_btn} btn btn-primary`}>Yes,delete</button></a></Link>
                </div>
            </div>
        </div>
    )
}