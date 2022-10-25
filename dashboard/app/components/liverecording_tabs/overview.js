import { Fragment, useEffect, useRef, useState } from 'react';
import styles from '../../styles/livestream_tabs.module.css';
import Api from '../api/api';
import { useRouter } from 'next/router';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Hls from 'hls.js';
import Player from '../player';
import Livestream_Player from '../livestream_Player';
// import Embed from '../../pages/videos/embed';
// import Delete_content from '../dialog/delete_content';
// import Activities from '../dialog/activities';
export default function Overview() {
    const router = useRouter();
    const [player, setplayer] = useState([]);
    const [playback, setplayback] = useState(false)
    const [Pop_up, setPop_up] = useState(false);
    const [activities, setactivities] = useState(false);
    const [status, setStatus] = useState()
    const [player_toggle, setplayer_toggle] = useState();
    const [hover, setHover] = useState(false)
    const Vdplayer = useRef();
    const cInterval=useRef()
    const streamuuid = router.query.streamId

    useEffect(() => {
       
        Api.Live_stream_data(streamuuid)
            .then(res => {
                if (res && res.data && res.data.data) {
                    setplayer([res.data.data])
                    setStatus(res.data.data.status)
                    if (res.data.data.status == 'Active') {
                        setplayback(!playback)
                        setplayer_toggle(res.data.data.playbackUrl)
                    } else {
                        setplayback(false)
                        if (res.data.data.status == 'Processing') {
                            // setplayer_toggle('')
                            
                            const  handlerender=()=>{
                                Api.Live_stream_data(streamuuid).then((res) => {
                                    setStatus(res.data.data.status)
                                })
                            }
                           
                            cInterval.current=setInterval(()=>{
                                handlerender()
                            },1000*30)
                            
                        }else{
                            clearInterval(cInterval.current)
                        }

                    }
                    // localStorage.setItem("asset_title", res.data.data.title);
                }
            })
            return()=>{
                clearInterval(cInterval.current)
            }
        // return () => {
        //     setplayer([])
        // }
    }, []);
    const created = (date) => {
        const d = new Date(date)
        return d.toLocaleString("en-AU", { day: "2-digit", month: "2-digit", year: "2-digit" });
    }
    const created_time = (date) => {
        const t = new Date(date)
        return t.toLocaleString("en-AU", { hour: "2-digit", minute: "2-digit" })
    }

    // const delete_asset = () => {
    //     Api.Delete_asset()
    //         .then(res => {
    //             if (res.data.status = "Success") {
    //                 router.push({
    //                     pathname: "/Live_stream"
    //                 })
    //             }
    //         })
    //         .catch(error => {

    //         })
    // }
    const handlethumnail_callback = () => {

    }
    
    const handlePlayback = (i) => {
        setplayback(!playback)
        if (i.status == 'Active') {
            Api.Live_status_stop(i.streamUUID).then((res) => {
                setStatus(res.data.data.status);
                if (res.data.data.status == 'Processing'||res.data.data.status=='Processing (Stream Running)'||res.data.data.status=='Processing (Stream Starting)') {
                    console.log('check')
                    const  handlerender=()=>{
                        Api.Live_stream_data(streamuuid).then((res) => {
                            setplayer([res.data.data])
                            setStatus(res.data.data.status)
                        })
                    }
                   
                    cInterval.current=setInterval(()=>{
                        console.log('interval')
                        handlerender()
                    },1000*3)
                }
               
            })
        }
        else {
            Api.Live_status_start(i.streamUUID).then((res) => {
                setStatus(res.data.data.status);
                if (res.data.data.status == 'Processing'||res.data.data.status=='Processing (Stream Idle)'||res.data.data.status=='Processing (Stream Starting)') {
                    console.log('in')
                    const  handlerender=()=>{
                        console.log('run')
                        Api.Live_stream_data(streamuuid).then((res) => {
                            setplayer([res.data.data])
                            setStatus(res.data.data.status)
                        })
                    }
                   
                    cInterval.current=setInterval(()=>{
                        console.log('start interva')
                        handlerender()
                    },1000*3)
                }
               
            })
        }
    }
    const handleCopy = (event) => {
        let copiedText = event.target.parentNode.parentNode.previousSibling.lastChild;
        copiedText.style.display = "block"
        setTimeout(function () {
            copiedText.style.display = ""
        }, 1000)
    }

    const handleControls = () => {
        const text = document.querySelector('.toggleText');
        const holder = document.querySelector('#placeholder')
        setVideToggle(!vidToggle)
        const liveVid = document.querySelector("#live");
        if (vidToggle) {
            holder.classList.remove(`${styles.none}`);
            holder.classList.add(`${styles.show}`);
            liveVid.classList.add(`${styles.none}`)
            text.innerText = 'Inactive'
            liveVid.pause();
        } else {
            liveVid.classList.remove(`${styles.none}`);
            holder.classList.add(`${styles.none}`);
            holder.classList.remove(`${styles.show}`);
            text.innerText = 'Active'
            liveVid.play();
        }

    }
    const toggleHover = () => {
        setHover(!hover)
    }
    console.log(status)
    return (
        <Fragment>
            {player.map((i, ind) =>
                <div key={ind} className={styles.overview}>
                    <div className={styles.url_buttons}>
                        <div className={styles.geturl}>
                            <p>GET   /video/v1/live-streams/{i.streamUUID}</p>
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
                                            {i.streamUUID ? <td className={styles.content}>{i.streamUUID}</td> : <td>-</td>}
                                        </tr>
                                        <tr>
                                            <td className={styles.title}>RTMP URL</td>
                                            <td className={styles.content}>{i.rtmpUrl}</td>
                                        </tr>
                                        <tr>
                                            <td className={styles.title}>RTMPs URL</td>
                                            <td className={styles.content}>{i.rtmpsUrl}</td>
                                        </tr>
                                        <tr>
                                            <td className={styles.title}>Stream Key</td>
                                            {i.streamKey ? <td className={styles.content}>{i.streamKey}</td> : <td>-</td>}
                                        </tr>
                                        <tr>
                                            <td className={styles.title}>Created</td>
                                            <td className={styles.content}>{created(i.createdOn)} {created_time(i.createdOn)}</td>
                                        </tr>
                                        <tr>
                                            <td className={styles.title}>Status</td>
                                            {/* {status == 'Processing' ?
                                                <td className={styles.content}><div className={hover ? `${styles.visible}`
                                                    : `${styles.notVisble}`}>Processing</div>{status} <img onMouseEnter={toggleHover} onMouseLeave={toggleHover} src={`/images/asset_status/${status}.png`} /></td>
                                                : status == 'InActive' ?
                                                    <td className={styles.content}><div className={hover ? `${styles.visible}`
                                                        : `${styles.notVisble}`}>Inactive</div>{status} <img onMouseEnter={toggleHover} onMouseLeave={toggleHover} src={`/images/asset_status/${status}.png`} /></td> :
                                                    <td className={styles.content}>{status} <img src={`/images/asset_status/${status}.png`} /></td>
                                            } */}

                                            <td className={styles.content}>{status} <img src={`/images/asset_status/${status}.png`} /></td>
                                            {/* {playback == false ? <td><span> Inactive</span></td> : <td><span> Active</span><img src={`/images/asset_status/Ready.png`} /></td>} */}
                                        </tr>
                                    </div>
                                </tbody>
                                {status == 'Active' || status == 'InActive' && i.playbackUrl ?
                                    <div className={styles.recordingplayer_action}>
                                        {playback == false ? <button onClick={() => handlePlayback(i)} className={`${styles.recordingPlayer_start} btn`}>
                                            <img src='/images/live_play.svg' />
                                            <span> Start</span>
                                        </button> : <button onClick={() => handlePlayback(i)} className={`${styles.recordingPlayer_stop} btn`}>
                                            <img src='/images/live_stop.svg' />
                                            <span> Stop</span>
                                        </button>}
                                    </div> : status == 'Processing' && i.playbackUrl ? <div className={styles.recordingplayer_action}>
                                        {/* {playback == false ? <button onClick={() => handlePlayback(i)} className={`${styles.recordingPlayer_start} btn`}>
                                            <img src='/images/live_play.svg' />
                                            <span> Start</span>
                                        </button> : <button onClick={() => handlePlayback(i)} className={`${styles.recordingPlayer_stop} btn`}>
                                            <img src='/images/live_stop.svg' />
                                            <span> Stop</span>
                                        </button>} */}
                                    </div> : null
                                }

                            </table>
                        </div>
                    </div>
                    {i.playbackUrl ?
                        <div className={styles.playback}>
                            <h2>Live Stream Player</h2>
                            <div className={styles.playback_content} >
                                <div className={styles.playback_status}>{i.status !== 'Active' ? <button> <span className={styles.playback_inactive} ></span> Inctive</button> : i.status=='Active'&& <button ><span className={styles.playback_active} ></span> Active</button>}</div>
                                {i.status !== 'Active' ? <img className={styles.player_placeholder} src='/images/player_placeholder.svg' ></img> :i.status=='Active'&& <Livestream_Player playback_url={i.playbackUrl} handlethumnail={handlethumnail_callback} />}
                            </div>
                        </div> : <div className={styles.playback}>&nbsp;</div>}
                    {i.playbackUrl ?
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
                                                <input defaultValue={i.playbackUrl} className={styles.copyInput} readOnly />
                                            </div>
                                            <div className={styles.copy_img}>
                                                <CopyToClipboard text={i.playbackUrl}>
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