import styles from '../../styles/model.module.css'
export default function Delete_content({ router, delete_content, closePop_up }) {
    const Delete_Content = () => {
        if (router.asPath.includes('streamId')) {
            return (
                <div className={styles.model_container}>
                    <div className={styles.model_main}>
                        <div className={styles.model_nav}>
                            <h3 className={styles.model_title}>Disable Stream</h3>
                            <a className={styles.model_close} onClick={() => closePop_up(false)} role="button"><img src="/images/close.svg" alt='icon' /> </a>
                        </div>

                        <div className={styles.model_removeuser}>
                            <h4 className={styles.model_removeusername}>Are you sure you want to disable this stream ?</h4>
                            <p className={styles.model_data}>Once disabled, this stream will no longer be available and the action cannot be undone.</p>
                        </div>
                        <div className={styles.model_btn}>
                            <button onClick={() => closePop_up(false)} type="button" className={`${styles.model_canel_btn} btn btn-primary`}>Cancel</button>
                            <button onClick={() => delete_content()} type="button" className={`${styles.model_save_btn} btn btn-primary`}>Yes, disable</button>
                        </div>
                    </div>
                </div>
            )
        } else if (router.asPath.includes('videoId')) {
            return (
                <div className={styles.model_container}>
                    <div className={styles.model_main}>
                        <div className={styles.model_nav}>
                            <h3 className={styles.model_title}>Delete Content</h3>
                            <a className={styles.model_close} onClick={() => closePop_up(false)} role="button"><img src="/images/close.svg" alt='icon' /> </a>
                        </div>

                        <div className={styles.model_removeuser}>
                            <h4 className={styles.model_removeusername}>Are you sure you want to delete this content ?</h4>
                            <p className={styles.model_data}>Once deleted, this content will no longer be available and the action cannot be undone.</p>
                        </div>
                        <div className={styles.model_btn}>
                            <button onClick={() => closePop_up(false)} type="button" className={`${styles.model_canel_btn} btn btn-primary`}>Cancel</button>
                            <button onClick={() => delete_content()} type="button" className={`${styles.model_save_btn} btn btn-primary`}>Yes, delete</button>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className={`${styles.model} ${styles.remove_user_modal} ${styles.opc}`} >
            {Delete_Content()}
        </div>
    )
}