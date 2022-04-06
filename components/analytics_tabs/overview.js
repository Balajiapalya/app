
import styles from '../../styles/analytics_tabs.module.css'
export default function Overview() {
    return (
        <div className={styles.container}>
            <div className={styles.video_type_container}>
                <div className={styles.encoded_video}>
                    <h5 className={styles.video_type_heading}>Encoded</h5>
                </div>
                <div className={styles.stored_video}>
                    <h5 className={styles.video_type_heading}>Stored</h5>
                </div>
                <div className={styles.streamed_video}>
                    <h5 className={styles.video_type_heading}>Streamed</h5>
                </div>
            </div>
            <div className={styles.real_time_views_container}>
                <h4 className={styles.heading}>Real-Time Views</h4>
            </div>
            <div className={styles.countries_devices_container}>
                <div className={styles.countries_container}> <h4 className={styles.heading}>Countries</h4></div>
                <div className={styles.devices_container}> <h4 className={styles.heading}>Devices</h4></div>
            </div>

        </div>
    )
}