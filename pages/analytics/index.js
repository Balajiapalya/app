import styles from '../../styles/analytics_tabs.module.css'
import Layout from '../../components/common/layout'
import Analytics_tabs from '../../components/analyticstabs'


export default function Analytics_index() {
    return (
        <div className={styles.container}>
            <div className={styles.background_develepment}>
                        <div className={styles.header_development}>
                            <div className={styles.content_development}>
                                <img className={styles.store_icon_png} src='/images/Store icon.png' />
                                <p>Yupp tv <br />
                                <select className={styles.select}>
                                    <option>dev</option>
                                </select>
                                </p>

                            </div>
                        </div>
                    </div>
            
            <div className={styles.settings}>
                <div className={styles.padding}>
                    
                    <div className={styles.header}>
                        <h2>
                            Analytics
                        </h2>
                        <Analytics_tabs />
                    </div>
                </div>
            </div>
        </div>
    )
}
Analytics_index.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};