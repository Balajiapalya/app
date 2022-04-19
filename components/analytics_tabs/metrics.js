import styles from '../../styles/analytics_tabs.module.css'
export default function Metrics(){
    return(
        <div className={styles.container}>
            <div className={styles.Metrics_heading}>
                <h3>Viewership Insights</h3>
                <div>       
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className={styles.views_cards}>
                <div className={styles.cards_container}></div>
                <div className={styles.cards_container}></div>
                <div className={styles.cards_container}></div>
                <div className={styles.cards_container}></div>
            </div>
            <div className={styles.Countries_videos}>
                <div className={styles.countries}></div>
                <div className={styles.videos}></div>
            </div>
        </div>
    )
}