import styles from '../../../styles/events&logs.module.css';

const EventDetails = () => {
    return (
        <>
        <div className={styles.firstBox}>
            <h2 className={styles.videoHeading}>POST https://api.videograph.com/video/v1/assets</h2>
            <div className={styles.eventsDetail}>
                <table>
                    <tbody>
                        <tr>
                            <td>Log ID</td>
                            <td>3a94c249-d5a9-41cc-ae19-9cecf1cbcbd5</td>
                        </tr>
                        <tr>
                            <td>Date</td>
                            <td>3/16/2022 3:36:02 pm</td>
                        </tr>
                        <tr>
                            <td>Method</td>
                            <td>POST</td>
                        </tr>
                        <tr>
                            <td>URL</td>
                            <td>/video/v1/assets</td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            <td>201</td>
                        </tr>
                        <tr>
                            <td>IP Address</td>
                            <td>219.91.208.81</td>
                        </tr>
                        <tr>
                            <td>Source</td>
                            <td>ui</td>
                        </tr>
                        <tr>
                            <td>Environment</td>
                            <td>Production</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
            <div className={styles.textArea}>
                <h2>Request Body</h2>
                <textarea defaultValue={`${JSON.stringify(
                    {
                        "playback_policy": [
                            "public"
                        ],
                        "input_url": "https://storage.googleapis.com/demofiles/video-intro.mp4"
                    }, undefined, 2
                )}`} className={styles.logTextArea} />
            </div>
               
                <div className={styles.textArea}>
                <h2>Response Body</h2>
                    <textarea defaultValue={`${JSON.stringify(
                        {
                            "data": {
                                "test": true,
                                "status": "preparing",
                                "playback_ids": [
                                    {
                                        "policy": "public",
                                        "id": "V01eyx02S9czPJ01VDBIOqI4gYt5CT4AED5Md7Irwy1liw"
                                    }
                                ],
                                "mp4_support": "none",
                                "master_access": "none",
                                "id": "kCJNHgs9JxrijwVMxSsKMqCo00Z6bZsy2jtWWLumVvr4",
                                "created_at": "1647336835"
                            }
                        }
                        , undefined, 2
                    )}`} className={styles.codeEvent} />
                </div>
           
        </>
    )
}
export default EventDetails