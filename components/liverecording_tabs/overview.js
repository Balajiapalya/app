import { Fragment, useEffect, useRef, useState } from 'react';
import styles from '../../styles/livestream_tabs.module.css';
import Api from '../api/api';
import { useRouter } from 'next/router';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Hls from 'hls.js';
import Player from '../player';
import Embed from '../../pages/videos/embed';
import Delete_content from '../dialog/delete_content';
import Activities from '../dialog/activities';
export default function Overview() {
    const router = useRouter();
    const [player, setplayer] = useState([]);
    const [playback, setplayback] = useState(false)
    const [Pop_up, setPop_up] = useState(false);
    const [activities, setactivities] = useState(false);
    const Vdplayer = useRef();
    // console.log(window.location.origin)
    useEffect(() => {

        Api.Get_Env_item()
            .then(res => {
                if (res && res.data && res.data.data) {
                    setplayer([res.data.data])
                    localStorage.setItem("asset_title", res.data.data.title);
                }
            })
        return () => {
            setplayer([])
        }
    }, []);
    const created = (date) => {
        const d = new Date(date)
        return d.toLocaleString("en-AU", { day: "2-digit", month: "2-digit", year: "2-digit" });
    }
    const created_time = (date) => {
        const t = new Date(date)
        return t.toLocaleString("en-AU", { hour: "2-digit", minute: "2-digit" })
    }

    const delete_asset = () => {
        Api.Delete_asset()
            .then(res => {
                if (res.data.status = "Success") {
                    router.push({
                        pathname: "/Live_stream"
                    })
                }
            })
            .catch(error => {

            })
    }
    const handlethumnail_callback = () => {

    }
    const handlePlayback = () => {
        setplayback(!playback)
    }
    const handleCopy = (event) => {
        let copiedText = event.target.parentNode.parentNode.previousSibling.lastChild;
        copiedText.style.display = "block"
        setTimeout(function () {
            copiedText.style.display = ""
        }, 1000)
    }
    return (
        <Fragment>
            {player.map((i, ind) =>
                <div key={ind} className={styles.overview}>
                    <div className={styles.url_buttons}>
                        <div className={styles.geturl}>
                            <p>GET/video/v1/live-streams/{i.contentId}</p>
                        </div>
                        <div className={styles.functional_buttons}>
                            <div className={styles.actions}>
                                <button className='btn'> <img src="/images/iconawesome-file-alt.svg" alt="file"></img> Activities</button>
                                {/* onClick={() => setactivities(true)} */}
                            </div>
                            <div className={styles.delete_stream}>
                                <button className='btn'>  <img src="/images/iconmaterial-delete.svg" alt="delete"></img> Delete Asset</button>
                                {/* onClick={() => setPop_up(true)} */}
                            </div>

                        </div>
                    </div>
                    <div className={styles.asset_detials}>
                        <h2>Live Stream Details</h2>
                        <div className={styles.asset_detials_content}>
                            <table className={styles.content_table}>
                                <tbody>
                                    <div>
                                        <tr>
                                            <td className={styles.title}>Live Stream ID</td>
                                            {/* {i.contentId ? <td className={styles.content}>{i.contentId}</td> : <td>-</td>} */}
                                        </tr>
                                        <tr>
                                            <td className={styles.title}>RTMP URL</td>
                                            {/* <td className={styles.content}>{created(i.created_at)} {created_time(i.created_at)}</td> */}
                                        </tr>
                                        <tr>
                                            <td className={styles.title}>RTMPs URL</td>
                                            {/* <td className={styles.content}>{i.status} <img src={`/images/asset_status/${i.status}.png`} /></td> */}
                                        </tr>
                                        <tr>
                                            <td className={styles.title}>Stream Key</td>
                                            {/* {i.duration ? <td className={styles.content}>{Math.floor(i.duration / 60000)} mins {Math.floor((i.duration % 60000) / 1000)} secs</td> : <td>-</td>} */}
                                        </tr>
                                        <tr>
                                            <td className={styles.title}>Created</td>
                                            {/* {i.transcodingResponse && i.transcodingResponse.data && i.transcodingResponse.data.videoStreams ? <td className={styles.content}>{i.transcodingResponse.data.videoStreams[0].aspectRatio}</td> : <td>-</td>} */}
                                        </tr>
                                        <tr>
                                            <td className={styles.title}>Status</td>
                                            {/* {i.transcodingResponse && i.transcodingResponse.data && i.transcodingResponse.data.videoStreams ? <td className={styles.content}>{i.transcodingResponse.data.videoStreams[0].aspectRatio}</td> : <td>-</td>} */}
                                            {playback == false ? <td><span> Inactive</span></td> : <td><span> Ready</span><img src={`/images/asset_status/${i.status}.png`} /></td>}
                                        </tr>
                                    </div>
                                </tbody>
                                <div className={styles.recordingplayer_action}>
                                    {playback == false ? <button onClick={() => handlePlayback()} className={`${styles.recordingPlayer_start} btn`}>
                                        <img src='/images/live_stop.svg' />
                                        <span> Start</span>

                                    </button> : <button onClick={() => handlePlayback()} className={`${styles.recordingPlayer_stop} btn`}>
                                        <img src='/images/live_stop.svg' />
                                        <span> Stop</span>

                                    </button>}
                                </div>
                            </table>
                        </div>
                    </div>
                    {i.transcodingInfo ?
                        <div className={styles.playback}>
                            <h2>Live Stream Player</h2>
                            <div className={styles.playback_content} >
                                <div className={styles.playback_status}>{playback == false ? <button> <span className={styles.playback_inactive} ></span> Inctive</button> : <button ><span className={styles.playback_active} ></span> Active</button>}</div>

                                {playback == false ? <img className={styles.player_placeholder} src='/images/player_placeholder.svg' height='250px'></img> : <Player handlethumnail={handlethumnail_callback} />}
                            </div>
                        </div> : <div className={styles.playback}>&nbsp;</div>}
                    {i.transcodingInfo ?
                        <div className={styles.video_urls}>
                            <h2>Video URLs</h2>
                            <div className={styles.link_copy}>
                                <div className={styles.video_hls}>
                                    <div className={styles.link_video}>
                                        <div className={styles.dispayInline}>
                                            <h4>Link to HLS:</h4>
                                            <div className={`${styles.copiedMsg} cpyOne`}>Copied</div>
                                        </div>
                                        <div className={styles.copy_link}>
                                            <div className={styles.link}>

                                                {/* <p>{`${window.location.origin}/videos/embed?videoId=`}{i.contentId}</p> */}
                                                <input defaultValue={`${window.location.origin}/videos/embed?videoId=${i.contentId}`} className={styles.copyInput} readOnly />
                                            </div>
                                            <div className={styles.copy_img}>
                                                <CopyToClipboard text={`${window.location.origin}/videos/embed?videoId=${i.contentId}`}>
                                                    <img src='/images/iconionic-ios-copy.svg' alt='copy' onClick={handleCopy} />
                                                </CopyToClipboard>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div> : <div />}
                </div>)}
            {/* {Pop_up && <Delete_content delete_content={delete_asset} closePop_up={setPop_up} />}
            {activities && <Activities closeactivities={setactivities} />} */}
        </Fragment>
    )
}