import styles from '../../../styles/events&logs.module.css';
import Api from '../../../components/api/api';
import { useState, useEffect } from 'react';

const LogDetails = (props) => {
    const [logDetail, setLogDetail] = useState([]);
    const [parseResp, setParseResp] = useState();
    const [parseReq, setParseReq] = useState();
    
    useEffect(() => {
        Api.Get_Log_details(props.clickDetail).then(res => {
            if (res && res.data && res.data.data) {
                    {setLogDetail(res.data.data)}
                    
                    {res.data.data.responseBody && setParseResp(JSON.parse(res.data.data.responseBody))}
                    {res.data.data.reqBody && setParseReq(JSON.parse(res.data.data.reqBody))}
            }
        })
        .catch(error=>{
            console.log(error)
        })
        return () => {
            setLogDetail([])
        }

    }, [])

    const handleDate = (date) => {
        var dateNew = new Date(+date).toLocaleString('en-In',{day:"2-digit",month:'2-digit',year:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'})
        return dateNew
    }
    const handleComponent = () => {
        props.setLogDetail(false)
    }
    return (
        <div onClick={() => handleComponent()} className={styles.detailActivity}>
            <div className={styles.firstBox} >
                <h2 className={styles.videoHeading}>POST https://api.videograph.com/video/v1/assets</h2>
                <div className={styles.eventsDetail}>
                    <table>
                        <tbody>
                            <tr>
                                <td>Log ID</td>
                                <td>{logDetail.uuid}</td>
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
                            {/* <tr>
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
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
           
            {parseReq && <div className={styles.textArea}>
                <h2>Request Body</h2>
                <textarea defaultValue={parseReq && `${JSON.stringify(parseReq, undefined, 2)}`} className={styles.logTextArea} readOnly/>
            </div>}

            <div className={styles.textArea}>
                <h2>Response Body</h2>
                
                <textarea defaultValue={parseResp && `${JSON.stringify(parseResp.data, undefined, 2)}`}
                    className={styles.codeEvent} readOnly/>
            </div>
           

        </div>
    )
}
export default LogDetails