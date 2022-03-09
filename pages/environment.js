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
                        <p>An environment allows you to group your data. We have four types of
                            environments Development, QA, Staging, and Production. You can change the names or create
                            additional environments as needed.
                        </p>
                        <button className='btn'> <img src='Images/Icon feather-plus.png' /> Add Environment</button>
                    </div>
                    <div className={styles.environments_table}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Videos</th>
                                    <th>Analytics</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        Development <img src='Images/Icon material-edit.png' /><br />
                                        <span className={styles.side_head}>Development</span>
                                    </td>
                                    <td>
                                        <div className={styles.table_box}>
                                            <div className={styles.box_content}>
                                                <span className={styles.box_content_history}>
                                                    in last 7 days
                                                </span>
                                                <div className={styles.box_data}>
                                                    <div className={styles.box_data_types}>
                                                        <span className={styles.types_heading}>Encoded</span><br />
                                                        <span className={styles.types_value}>40 mins</span>
                                                    </div>
                                                    <div className={styles.box_data_types}>
                                                        <span className={styles.types_heading}>Stored</span><br />
                                                        <span className={styles.types_value}>40 mins</span>
                                                    </div>
                                                    <div className={styles.box_data_types}>
                                                        <span className={styles.types_heading}>Streamed</span><br />
                                                        <span className={styles.types_value}>20 mins</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className={styles.token_key_value}>API tokens: 4</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={styles.table_box}>
                                            <div className={styles.box_content}>
                                                <span className={styles.box_content_history}>
                                                    in last 7 days
                                                </span>
                                                <div className={styles.box_data}>
                                                    <div className={styles.box_data_types}>
                                                        <span className={styles.types_heading}>Views</span><br />
                                                        <span className={styles.types_value}>20</span>
                                                    </div>
                                                    <div className={styles.box_data_types}>
                                                        <span className={styles.types_heading}>Unique views</span><br />
                                                        <span className={styles.types_value}>15</span>
                                                    </div>
                                                    <div className={styles.box_data_types}>
                                                        <span className={styles.types_heading}>Playing time</span><br />
                                                        <span className={styles.types_value}>20 mins</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className={styles.token_key_value}>Env Key: tr4or45ql10bclra3o85b490c</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                </tr>
                                <tr>
                                    <td>
                                        UAT
                                        <img src='Images/Icon material-edit.png' /><br />
                                        <span className={styles.side_head}>QA</span>
                                    </td>
                                    <td>
                                        <div className={styles.table_box}>
                                            <div className={styles.box_content}>
                                                <span className={styles.content_head} >
                                                    Upload & Stream videos
                                                </span>
                                                <p className={styles.content_body}>
                                                    Use Videograph APIs to upload and stream <br />live & on-demand videos.
                                                </p>
                                                <span className={styles.footer}>
                                                    API tokens: 0
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={styles.table_box}>
                                            <div className={styles.box_content}>
                                                <span className={styles.content_head} >
                                                    Integrate video analytics
                                                </span>
                                                <p className={styles.content_body}>
                                                    Start tracking video performance by integrating<br /> Videograph player SDKs.
                                                </p>
                                                <span className={styles.footer}>
                                                    Env Key: tr4or45ql10bclra3o85b490c
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className={styles.dev_head}>Development</div>
                                        <div className={styles.dev_select}>
                                            <select >
                                                <option>Development</option>
                                            </select>
                                        </div>

                                        <div className={styles.dev_options}>
                                            <a className={styles.dev_Cancel}>Cancel</a>
                                            <a className={styles.dev_save}>Save</a>
                                        </div>

                                    </td>
                                    <td>
                                        <div className={styles.table_box}>
                                            <div className={styles.box_content}>
                                                <span className={styles.box_content_history}>
                                                    in last 7 days
                                                </span>
                                                <div className={styles.box_data}>
                                                    <div className={styles.box_data_types}>
                                                        <span className={styles.types_heading}>Encoded</span><br />
                                                        <span className={styles.types_value}>40 mins</span>
                                                    </div>
                                                    <div className={styles.box_data_types}>
                                                        <span className={styles.types_heading}>Stored</span><br />
                                                        <span className={styles.types_value}>40 mins</span>
                                                    </div>
                                                    <div className={styles.box_data_types}>
                                                        <span className={styles.types_heading}>Streamed</span><br />
                                                        <span className={styles.types_value}>20 mins</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className={styles.token_key_value}>API tokens: 4</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={styles.table_box}>
                                            <div className={styles.box_content}>
                                                <span className={styles.box_content_history}>
                                                    in last 7 days
                                                </span>
                                                <div className={styles.box_data}>
                                                    <div className={styles.box_data_types}>
                                                        <span className={styles.types_heading}>Encoded</span><br />
                                                        <span className={styles.types_value}>40 mins</span>
                                                    </div>
                                                    <div className={styles.box_data_types}>
                                                        <span className={styles.types_heading}>Stored</span><br />
                                                        <span className={styles.types_value}>40 mins</span>
                                                    </div>
                                                    <div className={styles.box_data_types}>
                                                        <span className={styles.types_heading}>Streamed</span><br />
                                                        <span className={styles.types_value}>20 mins</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className={styles.token_key_value}>API tokens: 4</span>
                                                </div>
                                            </div>
                                        </div>
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