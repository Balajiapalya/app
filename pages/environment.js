import styles from '../styles/settings.module.css'
import Layout from '../components/common/layout'
export default function Environment() {
    return (
        <div className={styles.container}>
            <div className={styles.settings}>
                <div className={styles.padding}>
                    <div className={styles.header}>
                        <h2>
                            Environments
                        </h2>
                        <h3>
                            Yupptv
                        </h3>
                    </div>
                    <div className={styles.environments_button}>
                        <button className='btn'>Add Environment</button>
                    </div>
                    <div className={styles.environments_table}>
                        <table>
                            <thead>
                                <tr>
                                    <th>NAME</th>
                                    <th>MUX VIDEO</th>
                                    <th>MUX DATA</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Production</td>
                                    <td>
                                        <div className={styles.table_box}>
                                            <div className={styles.left_image}></div>
                                            <div className={styles.right_info}>
                                                <h3>Host and stream Video</h3>
                                                <div>
                                                    <p>Use the mux video API to host and stream video files online or live video.</p>
                                                </div>
                                            </div>
                                            <div className={styles.bottom_info}>
                                                <p>Access Token : 1</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={styles.table_box}>
                                            <div className={styles.left_image}></div>
                                            <div className={styles.right_info}>
                                                <h3>Track video perfomance</h3>
                                                <div>
                                                    <p>Start tracking video perfomance with Mux Data analytics.</p>
                                                </div>
                                            </div>
                                            <div className={styles.bottom_info}>
                                                <p>Env key: 115kuc</p>
                                            </div>
                                        </div>
                                        {/* <div className={styles.options}>
                                            .
                                            .
                                            .
                                        </div> */}
                                    </td>
                                    <td>
                                        .
                                        .
                                        .
                                    </td>
                                </tr>
                                <tr>
                                    <td>Development</td>
                                    <td>
                                        <div className={styles.table_box}>
                                            <div className={styles.left_image}></div>
                                            <div className={styles.right_info}>
                                                <h3>Host and stream Video</h3>
                                                <div>
                                                    <p>Use the mux video API to host and stream video files online or live video.</p>
                                                </div>
                                            </div>
                                            <div className={styles.bottom_info}>
                                                <p>Access Token : 1</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={styles.table_box}>
                                            <div className={styles.left_image}></div>
                                            <div className={styles.right_info}>
                                                <h3>Host and stream Video</h3>
                                                <div>
                                                    <p>Use the mux video API to host and stream video files online or live video.</p>
                                                </div>
                                            </div>
                                            <div className={styles.bottom_info}>
                                                <p>Access Token : 1</p>
                                            </div>
                                        </div>
                                        {/* <div className={styles.options}>
                                            .
                                            .
                                            .
                                        </div> */}
                                    </td>
                                    <td>
                                        .
                                        .
                                        .
                                    </td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                </div>

            </div>
        </div>

    )
}
Environment.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}