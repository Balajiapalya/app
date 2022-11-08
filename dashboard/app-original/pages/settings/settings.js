import styles from '../../styles/settings.module.css';
import Tabs from '../../components/homepage/Tabs';
import Layout from '../../components/common/layout';

export default function Settings() {
    let orgname;
    if (process.browser) {
        orgname = localStorage.getItem("orgName");
    }
    const org_name = orgname
    return (
        <div className={styles.container}>
            <div className={styles.settings}>
                <div className={styles.header}>
                    <h2>
                        Settings
                    </h2>
                    <h3>
                        {org_name}
                    </h3>
                </div>
                <Tabs />
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