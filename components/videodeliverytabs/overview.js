import { Fragment } from 'react'
import styles from '../../styles/videodelivery_tabs.module.css'
import { useState } from 'react'
import Link from 'next/link';

export default function Overview() {

    return (
        <Fragment>

            <div className={styles.overview}>
                <div className={styles.url_buttons}>
                    <div className={styles.geturl}>
                        <p>GET/videos/v1/assets/kH67tWxjPHW7c8J3Xd02N5W01v09hRkp4b4qnsijByKTm4</p>
                    </div>
                    <div className={styles.functional_buttons}>
                        <div className={styles.actions}>
                            <button className='btn'>Activities</button>
                            <img src="Images/Icon awesome-file-alt.png" alt="file"></img>
                        </div>
                        <div className={styles.delete_stream}>
                            <button className='btn'>Delete Asset</button>
                            <img src="Images/Icon material-delete.png" alt="delete"></img>
                        </div>

                    </div>
                </div>

                <div className={styles.asset_detials}>
                    <h2>Asset Details</h2>
                    <div className={styles.asset_detials_content}>
                        <table className={styles.content_table}>
                            <tbody>
                                <tr>
                                    <td className={styles.title}>Video ID</td>
                                    <td className={styles.content}>kH67tWxjPHW7c8J3Xd02N5W01v09hRkp4b4qnsijByKTm4</td>
                                </tr>
                                <tr>
                                    <td className={styles.title}>Created</td>
                                    <td className={styles.content}>12/23/21 03:37 pm</td>
                                </tr>
                                <tr>
                                    <td className={styles.title}>Status</td>
                                    <td className={styles.content}>Ready</td>
                                </tr>
                                <tr>
                                    <td className={styles.title}>Duration</td>
                                    <td className={styles.content}>29:56:07</td>
                                </tr>
                                <tr>
                                    <td className={styles.title}>Max Resolution</td>
                                    <td className={styles.content}>HD</td>
                                </tr>
                                <tr>
                                    <td className={styles.title}>Max Frame Rate</td>
                                    <td className={styles.content}>25.000</td>
                                </tr>
                                <tr>
                                    <td className={styles.title}>Aspect Ratio</td>
                                    <td className={styles.content}>16:9</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className={styles.playback}>
                    <h2>Playback Sample</h2>
                    <div className={styles.playback_content} >
                        <img src='/Images/Image 3@3x.png' alt='image' />
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
                                        <img src='Images/Icon ionic-ios-copy.png' alt='copy' />
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
                                        <img src='Images/Icon ionic-ios-copy.png' alt='copy' />
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
                                        <img src='Images/Icon ionic-ios-copy.png' alt='copy' />
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
                                        <img src='Images/Icon ionic-ios-copy.png' alt='copy' />
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
                                    <p> https://d70jkbWEDJkdjcJNDKJDNJSDCNvnbkj.mp4</p>
                                </div>
                                <div className={styles.copy_img}>
                                    <img src='Images/Icon ionic-ios-copy.png' alt='copy' />
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
                                        <td>1280px</td>
                                        <td>720px</td>
                                        <td>25 fps</td>
                                        <td>H.264</td>
                                        <td>29:56:07</td>
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
                                        <td>44 Khz</td>
                                        <td>ACC</td>
                                        <td>2</td>

                                        <td>29:56:07</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>





        </Fragment >
    )
}