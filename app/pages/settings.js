import styles from '../styles/settings.module.css'
import Tabs from '../components/homepage/Tabs'
import Layout from '../components/common/layout'

export default function Settings() {
    return (
        <div className={styles.container}>
            <div className={styles.settings}>
                <div className={styles.padding}>
                    <div className={styles.header}>
                        <h2>
                            Settings
                        </h2>
                        <h3>
                            Yupptv
                        </h3>
                    </div>
                    <Tabs />
                </div>
            </div>
        </div>
    )

}
Settings.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
}