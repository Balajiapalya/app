import styles from '../../styles/model.module.css'
import Api from '../api/api'

export default function Delete_signing_key({ closereovekeys,item }) {
    const handleDelete=()=>{
        Api.Delete_key_signing(item.signingKeyId).then(res=>closereovekeys(false))
    }
    return (
        <div className={`${styles.model} ${styles.remove_user_modal} ${styles.opc}`} >
            <div className={styles.model_main}>
                <div className={styles.model_nav}>
                    <h3 className={styles.model_title}>Delete Singing Key</h3>
                    <a onClick={() => closereovekeys(false)} className={styles.model_close} role="button"><img src="images/close.png" alt='icon' /> </a>
                </div>

                <div className={styles.model_removeuser}>
                    <h4 className={styles.model_removeusername}>Are you sure you want to delete this Signing Key?</h4>
                    <p className={styles.model_data}>Once deleted,this Signing key will no longer be available and the action cannot be undone.</p>
                </div>
                <div className={styles.model_btn}>
                    <button type="button" onClick={() => closereovekeys(false)} className={`${styles.model_canel_btn} btn btn-primary`}>Cancel</button>
                    <button type="button" onClick={() => handleDelete()} className={`${styles.model_save_btn} btn btn-primary`}>Yes,delete</button>
                </div>
            </div>
        </div>
    )
}