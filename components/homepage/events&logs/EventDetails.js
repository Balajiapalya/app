import styles from '../../../styles/events&logs.module.css';

const EventDetails = () => {
    return (
        <div className={styles.evtDetailMain}>
            <h2 className={styles.videoHeading}>video.asset.deleted</h2>
            <div className={styles.eventsDetail}>
                <table>
                    <tbody>
                        <tr>
                            <td>Event Id</td>
                            <td>3a94c249-d5a9-41cc-ae19-9cecf1cbcbd5</td>
                        </tr>
                        <tr>
                            <td>Date</td>
                            <td>3/16/2022 3:36:02 pm</td>
                        </tr>
                        <tr>
                            <td>Type</td>
                            <td>video.asset.deleted</td>
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
            {/* <div className={styles.eventData}> */}
                
                <div className={styles.textArea}>
                <h2>Event Data</h2>
                <textarea defaultValue={`${JSON.stringify(
                    {
                        "tracks": [
                          {
                            "type": "video",
                            "max_width": 1920,
                            "max_height": 1080,
                            "max_frame_rate": 29.97,
                            "id": "K2xi5L4imDloWtBxnmcaypzz5aPo01Ji60238vok3MtEA",
                            "duration": 23.8238
                          },
                          {
                            "type": "audio",
                            "max_channels": 2,
                            "max_channel_layout": "stereo",
                            "id": "Jlg5womwfEdBK4IXzokp00o6ltIaRILqagziNC8onxf4",
                            "duration": 23.823792
                          }
                        ],
                        "test": true,
                        "status": "ready",
                        "mp4_support": "none",
                        "max_stored_resolution": "HD",
                        "max_stored_frame_rate": 29.97,
                        "master_access": "none",
                        "id": "kCJNHgs9JxrijwVMxSsKMqCo00Z6bZsy2jtWWLumVvr4",
                        "duration": 10.143467,
                        "created_at": 1647336835,
                        "aspect_ratio": "16:9"
                      },undefined,2
                )}`} className={styles.codeEvent}/>
                </div>
            {/* </div> */}

        </div>
    )
}
export default EventDetails