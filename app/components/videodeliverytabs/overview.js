import { Fragment, useEffect, useState } from 'react';
import styles from '../../styles/videodelivery_tabs.module.css';
import Api from '../api/api';
import { useRouter } from 'next/router';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function Overview() {
    const router = useRouter();
    const [player, setplayer] = useState([]);
    const [tooltip, settooltip] = useState(false);
    const [tooltipURL, settooltipURL] = useState(false);
    useEffect(() => {

        Api.Get_Env_item()
            .then(res => {
                if(res&&res.data&&res.data.data){
                    setplayer([res.data.data])
                    localStorage.setItem("asset_title", res.data.data.title)
                }
                
            }).catch(error=>{
                console.log(error)
            })
    }, []);
    const showtooltip = () => {
        settooltip(true)
        setTimeout(() => {
            settooltip(false)
        }, 200);
    }
    const showtooltipURL = () => {
        settooltipURL(true)
        setTimeout(() => {
            settooltipURL(false)
        }, 200);

    }
    const created = (date) => {
        const d = new Date(date)
        return d.toLocaleString();
    }

    const delete_asset = () => {
        Api.Delete_asset()
            .then(res => {
                if (res.data.status = "Success") {
                    router.push({
                        pathname: "/videos"
                    })
                }
            })
            .catch(error=>{
                if (error.response.data.code = 401) {
                    window.localStorage.clear();
                    document.cookie = 'Jwt-token=;expires=' + new Date().toUTCString()
                    window.location.href = '/signin'
                }
            })
    }
    return (
        <Fragment>
            {player.map((i, ind) =>
                <div key={ind} className={styles.overview}>
                    <div className={styles.url_buttons}>
                        <div className={styles.geturl}>
                            <p>GET/services/api/v1/contents/{i.videoId}</p>
                        </div>
                        <div className={styles.functional_buttons}>
                            <div className={styles.actions}>
                                <button className='btn'>Activities</button>
                                <img src="/Images/Icon awesome-file-alt.png" alt="file"></img>
                            </div>
                            <div className={styles.delete_stream}>
                                <button onClick={() => delete_asset()} className='btn'>Delete Asset</button>
                                <img src="/Images/Icon material-delete.png" alt="delete"></img>
                            </div>

                        </div>
                    </div>
                    <div className={styles.asset_detials}>
                        <h2>Video Detials</h2>
                        <div className={styles.asset_detials_content}>
                            <table className={styles.content_table}>
                                <tbody>
                                    <div>
                                        <tr>
                                            <td className={styles.title}>Video ID</td>
                                           {i.videoId?<td className={styles.content}>{i.videoId}</td>:<td>-</td>} 
                                        </tr>
                                        <tr>
                                            <td className={styles.title}>Created</td>
                                            <td className={styles.content}>{created(i.created_at)}</td>
                                        </tr>
                                        <tr>
                                            <td className={styles.title}>Status</td>
                                            {i.status=="Ready"?<td className={styles.content}>{i.status} <img src='/Images/check-circle.png' /></td>:<td className={styles.content}>{i.status}</td>}
                                        </tr>
                                        <tr>
                                            <td className={styles.title}>Duration</td>
                                            {i.duration?<td className={styles.content}>{Math.floor(i.duration / 60000)} mins {Math.floor((i.duration % 60000) / 1000)} secs</td>:<td>-</td>}
                                        </tr>
                                        <tr>
                                            <td className={styles.title}>Aspect Ratio</td>
                                            {i.transcodingResponse.data.videoStreams?<td className={styles.content}>{i.transcodingResponse.data.videoStreams[0].aspectRatio}</td>:<td>-</td>}
                                        </tr>
                                    </div>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={styles.playback}>
                        <h2>Playback Sample</h2>
                        <div className={styles.playback_content} >
                            <video width="100%" height="295px" autoPlay controls src={i.transcodingInfo.mediaUrl}></video>
                        </div>
                    </div>
                    <div className={styles.video_urls}>
                        <h2>Video URLs</h2>
                        <div className={styles.link_copy}>
                            <div className={styles.video_hls}>
                                <div className={styles.link_video}>
                                    <h4>Link to video</h4>
                                    <div className={styles.copy_link}>
                                        <div className={styles.link}>
                                            <p> </p>
                                        </div>
                                        <div className={styles.copy_img}>
                                            <img src='/Images/Icon ionic-ios-copy.png' alt='copy' />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.link_hls}>
                                    <h4>Link to HLS</h4>
                                    <div className={styles.copy_link}>
                                        <div className={styles.link}>
                                            <p>{i.transcodingResponse.playback_url}</p>
                                        </div>
                                        <div className={styles.copy_img}>
                                            <CopyToClipboard text={i.transcodingResponse.playback_url}>
                                                <img onClick={() => showtooltip()} src='/Images/Icon ionic-ios-copy.png' alt='copy' />
                                            </CopyToClipboard>
                                            {tooltip ? <span className={styles.tooltip}>copied</span> : null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.embed_thubnail}>
                                <div className={styles.link_embedcode}>
                                    <h4>Embed code</h4>
                                    <div className={styles.copy_link}>
                                        <div className={styles.link}>
                                            <p> </p>
                                        </div>
                                        <div className={styles.copy_img}>
                                            <img src='/Images/Icon ionic-ios-copy.png' alt='copy' />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.link_thumbnail}>
                                    <h4>Link to Thumbnail</h4>
                                    <div className={styles.copy_link}>
                                        <div className={styles.link}>
                                            <p></p>
                                        </div>
                                        <div className={styles.copy_img}>
                                            <img src='/Images/Icon ionic-ios-copy.png' alt='copy' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.input_file}>
                        <h2>Input File Media Info</h2>
                        <div className={styles.media_info}>
                            <h4>Video URL</h4>
                            <div className={styles.video_url}>
                                <div className={styles.copy_link}>
                                    <div className={styles.link}>
                                       {i.transcodingInfo?<p>{i.transcodingInfo.mediaUrl}</p>:<p></p>} 
                                    </div>
                                    <div className={styles.copy_img}>
                                        <CopyToClipboard text={i.transcodingInfo?i.transcodingInfo.mediaUrl:null}>
                                            <img onClick={() => showtooltipURL()} src='/Images/Icon ionic-ios-copy.png' alt='copy' />
                                        </CopyToClipboard>
                                        {tooltipURL ? <span className={styles.tooltip}>copied</span> : null}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.Video_info}>
                                <h4>Video Info</h4>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Width</th>
                                            <th>Height</th>
                                            <th>Frame Rate</th>
                                            <th>Encoding</th>
                                            <th>Duration</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            {i.transcodingInfo?<td>{i.transcodingInfo.videoInfo[0].width}</td>:<td>-</td>}
                                            {i.transcodingInfo?<td>{i.transcodingInfo.videoInfo[0].height}</td>:<td>-</td>}
                                            {i.transcodingInfo?<td>{i.transcodingInfo.videoInfo[0].frameRate}</td>:<td>-</td>}
                                            {i.transcodingInfo?<td>{i.transcodingInfo.videoInfo[0].encoding}</td>:<td>-</td>}
                                            {i.duration?<td>{Math.floor(i.duration / 60000)} mins {Math.floor((i.duration % 60000) / 1000)} secs</td>:<td>-</td>}
                                        </tr>
                                    </tbody>
                                </table>

                                <h4>Audio Info</h4>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Sample Rate</th>
                                            <th>Encoding</th>
                                            <th>Channels</th>
                                            <th>Duration</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            {i.transcodingInfo?<td>{i.transcodingInfo.audioInfo[0].sampleRate}</td>:<td>-</td>}
                                            {i.transcodingInfo?<td>{i.transcodingInfo.audioInfo[0].encoding}</td>:<td>-</td>}
                                            {i.transcodingInfo?<td>{i.transcodingInfo.audioInfo[0].channels}</td>:<td>-</td>}
                                            {i.duration?<td>{Math.floor(i.duration / 60000)} mins {Math.floor((i.duration % 60000) / 1000)} secs</td>:<td>-</td>}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>)}
        </Fragment>
    )
}