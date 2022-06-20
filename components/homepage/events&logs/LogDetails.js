import styles from '../../../styles/events&logs.module.css';
import Api from '../../../components/api/api';
import { useState, useEffect } from 'react';

const EventDetails = (props) => {
    const [logDetail, setLogDetail] = useState([]);
    const [parseResp, setParseResp] = useState()
    const [parseReq, setParseReq] = useState()
    
    useEffect(() => {

        Api.Get_Log_details(props.logUuid).then(res => {
            return (
                <>

                    {setLogDetail(res.data.data)}

                    {res.data.data.responseBody && setParseResp(JSON.parse(res.data.data.responseBody))}
                    {res.data.data.reqBody && setParseReq(JSON.parse(res.data.data.reqBody))}
                </>
            )

        })
        return () => {
            setLogDetail([])
        }

    }, [])

    const handleDate = (date) => {
        return new Date(+date).toLocaleString('en-US', { timeZone: 'Indian/Christmas' })
    }
    const handleComponent = () => {
        props.set_close(true);
        props.set_open(false)
    }
    return (
        <div onClick={() => handleComponent()} className={styles.close}>
            <div className={styles.firstBox} >
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
                                <td>{handleDate(logDetail.occurredOn)}</td>
                            </tr>
                            <tr>
                                <td>Method</td>
                                <td>{logDetail.method}</td>
                            </tr>
                            <tr>
                                <td>URL</td>
                                <td>{logDetail.url}</td>
                            </tr>
                            <tr>
                                <td>Status</td>
                                <td>{logDetail.status}</td>
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
                <textarea defaultValue={parseReq && `${JSON.stringify(parseReq, undefined, 2)}`} className={styles.logTextArea} />
            </div>

            <div className={styles.textArea}>
                <h2>Response Body</h2>
                <textarea defaultValue={parseResp && `${JSON.stringify(parseResp, undefined, 2)}`}
                    className={styles.codeEvent} />
            </div>

        </div>
    )
}
export default EventDetails