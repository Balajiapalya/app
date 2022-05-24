import styles from '../../styles/model.module.css'
import Link from 'next/link'
import Api from '../api/api'

export default function Revoke_access({ closerevoke, item }) {
    const handlerevoke = () => {
        let del = [item.accessTokenId]
        // console.log(del)
        Api.Revoke_acceesstoken(del).then(
            closerevoke(false),
        )
    }

    return (
        <div className={`${styles.model} ${styles.remove_user_modal}`} >
            <div className={styles.model_container}>
                <div className={styles.model_main}>
                    <div className={styles.model_nav}>
                        <h3 className={styles.model_title}>Revoke Access</h3>
                        <a className={styles.model_close} role="button" onClick={() => closerevoke(false)}><img src="/images/close.svg" alt='icon' /> </a>
                    </div>

                    <div className={styles.model_removeuser}>
                        <h4 className={styles.model_removeusername}>Are you sure you want to revoke the access?</h4>
                        <p className={styles.model_data}>Once access revoke,this token will become invalid for all users. This action cannot be undone.</p>
                    </div>
                    <div className={styles.model_btn}>
                        <a><button type="button" className={`${styles.model_canel_btn} btn btn-primary`} onClick={() => closerevoke(false)}>Cancel</button></a>
                        <a><button type="button" className={`${styles.model_save_btn} btn btn-primary`} onClick={() => handlerevoke()} >Yes,Revoke</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}