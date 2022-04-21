import styles from '../../styles/stream_preview.module.css'

export default function Stream_preview({closepreview}){
    return (
        <div className={styles.streampreview}>
            <div className={styles.preview}>
            <div className={styles.main}>
                <div className={styles.nav}>
                    <h3 className={styles.model_title}>Stream Preview - Asianet Roku</h3>
                    <a onClick={()=> closepreview(false)}  className={styles.model_close} role="button"><img src="/images/close.png" alt='icon' /> </a>
                </div>
                <div className={styles.previewimage}>
                    {/* <img src="image2.png"></img> */}

                </div>
                </div>
            </div>
        </div>
    )
}