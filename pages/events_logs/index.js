import styles from '../../styles/events&logs.module.css'
import Events_logs_tabs from '../../components/homepage/events_logs_tabs'
import Link from 'next/link'
import Navbar from '../../components/common/navbar'
import Layout from '../../components/common/layout'


export default function Events_logs() {
    return (
        <div className="container">
            <div className={styles.container}>
                {/* <div>
                <Navbar/>
            </div> */}
                <div className={styles.settings}>
                    <div className={styles.padding}>
                        <div className={styles.header}>
                            <h2>
                                Events & Logs
                            </h2>
                            <h3>
                                Yupptv
                            </h3>
                        </div>
                        <Events_logs_tabs />
                    </div>
                </div>
            </div>
        </div>
    )
}
Events_logs.getLayout = function getLayout(page) {
    return <Layout>
        <div className="wrapper_body">

            {page}

        </div>
    </Layout>;
};