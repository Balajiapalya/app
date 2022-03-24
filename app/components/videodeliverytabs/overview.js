import { Fragment, useEffect, useState } from 'react'
import styles from '../../styles/videodelivery_tabs.module.css'
import Api from '../api/api'

export default function Overview() {
    const [player, setplayer] = useState([]);
    useEffect(() => {

        Api.Get_Env_item()
            .then(res => {
                setplayer([res.data.data])
            })
    }, []);

    const created = (date) => {
        const d = new Date(date)
        return d.toLocaleString('en-GB', { hour:'numeric', minute:'numeric', second:'numeric', hour12:false } );
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
                                <button className='btn'>Delete Asset</button>
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
                                            <td className={styles.content}>{i.videoId}</td>
                                        </tr>
                                        <tr>
                                            <td className={styles.title}>Created</td>
                                            <td className={styles.content}>{created(i.created_at)}</td>
                                        </tr>
                                        <tr>
                                            <td className={styles.title}>Status</td>
                                            <td className={styles.content}>{i.status} <img src='/Images/check-circle.png' /></td>
                                        </tr>
                                        <tr>
                                            <td className={styles.title}>Duration</td>
                                            <td className={styles.content}>{i.duration}</td>
                                        </tr>
                                        <tr>
                                            <td className={styles.title}>Aspect Ratio</td>
                                            <td className={styles.content}>{i.transcodingResponse.data.aspectRatio}</td>
                                        </tr>
                                    </div>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={styles.playback}>
                        <h2>Playback Sample</h2>
                        <div className={styles.playback_content} >
                            <video width="100%" height="295px" autoPlay controls  src={i.transcodingInfo.mediaUrl}></video>
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
                                            <p> &#34;https://embed.api.videograph/vod/vi5Rb5zPd7Lw3IMe0XMOW4Q0&#34;</p>
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
                                            <p> &#34;https://embed.api.videograph/vod/vi5Rb5zPd7Lw3IMe0XMOW4Q0&#34;</p>
                                        </div>
                                        <div className={styles.copy_img}>
                                            <img src='/Images/Icon ionic-ios-copy.png' alt='copy' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.embed_thubnail}>
                                <div className={styles.link_embedcode}>
                                    <h4>Embed code</h4>
                                    <div className={styles.copy_link}>
                                        <div className={styles.link}>
                                            <p> iframe src= &#34;https://embed.api.videograph/vod/vi5Rb5zPd7Lw3IMe0XMOW4Q0&#34; Width=</p>
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
                                            <p> iframe src= &#34;https://embed.api.videograph/vod/vi5Rb5zPd7Lw3IMe0XMOW4Q0&#34; Width=</p>
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
                                        <p>{i.playback[0].url}</p>
                                    </div>
                                    <div className={styles.copy_img}>
                                        <img src='/Images/Icon ionic-ios-copy.png' alt='copy' />
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
                                            <td>{i.transcodingInfo.videoInfo[0].width}</td>
                                            <td>{i.transcodingInfo.videoInfo[0].height}</td>
                                            <td>{i.transcodingInfo.videoInfo[0].frameRate}</td>
                                            <td>{i.transcodingInfo.videoInfo[0].encoding}</td>
                                            <td>{created(i.transcodingInfo.videoInfo[0].duration)}</td>
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
                                            <td>{i.transcodingInfo.audioInfo[0].sampleRate}</td>
                                            <td>{i.transcodingInfo.audioInfo[0].encoding}</td>
                                            <td>{i.transcodingInfo.audioInfo[0].channels}</td>

                                            <td>{created(i.transcodingInfo.audioInfo[0].duration)}</td>
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