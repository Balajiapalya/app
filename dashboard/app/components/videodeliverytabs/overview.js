import { Fragment, useEffect, useRef, useState } from 'react';
import styles from '../../styles/videodelivery_tabs.module.css';
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
    const [tooltip, settooltip] = useState(false);
    const [tooltipURL, settooltipURL] = useState(false);
    const [thumbnailurl, setthumbnail] = useState(false);
    const [Pop_up, setPop_up] = useState(false);
    const [activities, setactivities] = useState(false);
    const [hover, setHover] = useState(false)
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
    const showthubmailtooltipURL = () => {
        setthumbnail(true)
        setTimeout(() => {
            setthumbnail(false)
        }, 200);

    }
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
                        pathname: "/videos"
                    })
                }
            })
            .catch(error => {

            })
    }
    const handlethumnail_callback = () => {

    }
    const handleCopy = (event) => {
        let copiedText = event.target.parentNode.parentNode.previousSibling.lastChild;
        copiedText.style.display = "block"
        setTimeout(function () {
            copiedText.style.display = ""
        }, 1000)
    }
    const toggleHover = () => {
        setHover(!hover)
    }
    return (
        <Fragment>
            {player.map((i, ind) =>
                <div key={ind} className={styles.overview}>
                    <div className={styles.url_buttons}>
                        <div className={styles.geturl}>
                            <p>GET /services/api/v1/contents/{i.contentId}</p>
                        </div>
                        <div className={styles.functional_buttons}>
                            <div className={styles.actions}>
                                <button onClick={() => setactivities(true)} className='btn'> <img src="/images/iconawesome-file-alt.svg" alt="file"></img> Activities</button>

                            </div>
                            <div className={styles.delete_stream}>
                                <button onClick={() => setPop_up(true)} className='btn'>  <img src="/images/iconmaterial-delete.svg" alt="delete"></img> Delete Asset</button>
                                {/* onClick={() => delete_asset()} */}
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
                                            <td className={styles.title}>Content ID</td>
                                            {i.contentId ? <td className={styles.content}>{i.contentId}</td> : <td>-</td>}
                                        </tr>
                                        <tr>
                                            <td className={styles.title}>Created</td>
                                            <td className={styles.content}>{created(i.created_at)} {created_time(i.created_at)}</td>
                                        </tr>
                                        <tr>
                                            <td className={styles.title}>Status</td>
                                            {i.status=='Failed'?
                                            <td className={styles.content}><div className={hover ? `${styles.visible}`
                    : `${styles.notVisble}`}>failed to upload</div>{i.status} <img onMouseEnter={toggleHover} onMouseLeave={toggleHover} src={`/images/asset_status/${i.status}.png`} /></td>:
                    i.status=='Processing'?
                    <td className={styles.content}><div className={hover ? `${styles.visible}`
                    : `${styles.notVisble}`}>processing the video</div>{i.status} <img onMouseEnter={toggleHover} onMouseLeave={toggleHover} src={`/images/asset_status/${i.status}.png`} /></td>:
                    <td className={styles.content}>{i.status} <img src={`/images/asset_status/${i.status}.png`} /></td>
                }
                                        </tr>
                                        <tr>
                                            <td className={styles.title}>Duration</td>
                                            {i.duration ? <td className={styles.content}>{Math.floor(i.duration / 60000)} mins {Math.floor((i.duration % 60000) / 1000)} secs</td> : <td>-</td>}
                                        </tr>
                                        <tr>
                                            <td className={styles.title}>Aspect Ratio</td>
                                            {i.transcodingResponse && i.transcodingResponse.data && i.transcodingResponse.data.videoStreams ? <td className={styles.content}>{i.transcodingResponse.data.videoStreams[0].aspectRatio}</td> : <td>-</td>}
                                        </tr>
                                    </div>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {i.transcodingInfo ?
                        <div className={styles.playback}>
                            <h2>Playback Sample</h2>
                            <div className={styles.playback_content} >
                                <Player handlethumnail={handlethumnail_callback} />
                            </div>
                        </div> : <div className={styles.playback}>&nbsp;</div>}
                    {i.transcodingInfo ?
                        <div className={styles.video_urls}>
                            <h2>Video URLs</h2>
                            <div className={styles.link_copy}>
                                <div className={styles.video_hls}>
                                    <div className={styles.link_video}>
                                        <div className={styles.dispayInline}>
                                            <h4>Link to video</h4>
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
                                    <div className={styles.link_hls}>
                                        <div className={styles.dispayInline}>
                                            <h4>Link to HLS</h4>
                                            <div className={`${styles.copiedMsg} cpyTwo`}>Copied</div>
                                        </div>
                                        <div className={styles.copy_link}>
                                            <div className={styles.link}>
                                                {/* <p>{i.transcodingResponse.playback_url}</p> */}
                                                <input defaultValue={i.transcodingResponse.playback_url} className={styles.copyInput} readOnly />
                                            </div>
                                            <div className={styles.copy_img}>
                                                <CopyToClipboard text={i.transcodingResponse.playback_url}>
                                                    <img onClick={(event) => handleCopy(event)} src='/images/iconionic-ios-copy.svg' alt='copy' />
                                                </CopyToClipboard>
                                                {/* {tooltip ? <span className={styles.tooltip}>copied</span> : null} */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.embed_thubnail}>
                                    <div className={styles.link_embedcode}>
                                        <div className={styles.dispayInline}>
                                            <h4>Embed code</h4>
                                            <div className={`${styles.copiedMsg} cpyThree`}>Copied</div>
                                        </div>
                                        <div className={styles.copy_link}>
                                            <div className={styles.link}>

                                                {/* <p>{`<iframe width="560" height="315" src="${window.location.origin}/videos/embed?videoId=${i.contentId}" allowfullscreen ></iframe>`} </p> */}
                                                <input defaultValue={`<iframe width="560" height="315" src="${window.location.origin}/videos/embed?videoId=${i.contentId}" allowfullscreen ></iframe>`} className={styles.copyInput} readOnly />
                                            </div>
                                            <div className={styles.copy_img}>
                                                <CopyToClipboard text={`<iframe width="560" height="315" src="${window.location.origin}/videos/embed?videoId=${i.contentId}" allowfullscreen ></iframe>`}>
                                                    <img src='/images/iconionic-ios-copy.svg' alt='copy' onClick={handleCopy} />
                                                </CopyToClipboard>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.link_thumbnail}>
                                        <div className={styles.dispayInline}>
                                            <h4>Link to Thumbnail</h4>
                                            <div className={`${styles.copiedMsg} cpyFour`}>Copied</div>
                                        </div>
                                        <div className={styles.copy_link}>
                                            <div className={styles.link}>
                                                {/* <p>{localStorage.getItem('thumbnail')}</p> */}
                                                <input defaultValue={localStorage.getItem('thumbnail')} className={styles.copyInput} readOnly />
                                            </div>
                                            <div className={styles.copy_img}>
                                                <CopyToClipboard text={localStorage.getItem('thumbnail')}>
                                                    <img onClick={(event) => handleCopy(event)} src='/images/iconionic-ios-copy.svg' alt='copy' />
                                                </CopyToClipboard>
                                                {/* {thumbnailurl ? <span className={styles.tooltip}>copied</span> : null} */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> : <div />}
                    {i.transcodingInfo ?
                        <div className={styles.input_file}>
                            <h2>Video Source Info</h2>
                            <div className={styles.media_info}>
                                <div className={styles.dispayInlineDown}>
                                    <h4>Video URL</h4>
                                    <div className={`${styles.copiedMsg} cpyFive`}>Copied</div>
                                </div>
                                <div className={`${styles.video_url} ${styles.copy_link} ${styles.copy_link_videoUrl}`}>
                                    <div className={styles.link}>
                                        <input defaultValue={i.transcodingInfo.mediaUrl} className={styles.copyInput} readOnly />
                                    </div>
                                    <div className={styles.copy_img}>
                                        <CopyToClipboard text={i.transcodingInfo ? i.transcodingInfo.mediaUrl : null}>
                                            <img onClick={(event) => handleCopy(event)} src='/images/iconionic-ios-copy.svg' alt='copy' />
                                        </CopyToClipboard>
                                        {/* {tooltipURL ? <span className={styles.tooltip}>copied</span> : null} */}
                                    </div>
                                </div>
                                <div className={styles.Video_info}>
                                    <div className={styles.videoDiv}>
                                        <h4>Video Info</h4>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Width</th>
                                                    <th>Height</th>
                                                    <th>Frame Rate</th>
                                                    <th>Encoding</th>
                                                    <th className={styles.lastTh}>Duration</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{i.transcodingInfo.videoInfo[0].width}</td>
                                                    <td>{i.transcodingInfo.videoInfo[0].height}</td>
                                                    <td>{i.transcodingInfo.videoInfo[0].frameRate}</td>
                                                    <td>{i.transcodingInfo.videoInfo[0].encoding}</td>
                                                    {i.duration ? <td>{Math.floor(i.duration / 60000)} mins {Math.floor((i.duration % 60000) / 1000)} secs</td> : <td>-</td>}
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className={styles.audioDiv}>
                                        <h4>Audio Info</h4>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Sample Rate</th>
                                                    <th>Encoding</th>
                                                    <th>Channels</th>
                                                    <th className={styles.audioTh}>Duration</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{i.transcodingInfo.audioInfo[0].sampleRate}</td>
                                                    <td>{i.transcodingInfo.audioInfo[0].encoding}</td>
                                                    <td>{i.transcodingInfo.audioInfo[0].channels}</td>
                                                    {i.duration ? <td>{Math.floor(i.duration / 60000)} mins {Math.floor((i.duration % 60000) / 1000)} secs</td> : <td>-</td>}
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div> : <div />}
                </div>)}
            {Pop_up && <Delete_content delete_content={delete_asset} closePop_up={setPop_up} />}
            {activities && <Activities closeactivities={setactivities} />}
        </Fragment>
    )
}