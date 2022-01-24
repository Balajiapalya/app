import styles from '../styles/stream_statistics.module.css'
import Navbar from '../components/homepage/navbar';
import Link from 'next/link'
import { useState } from 'react'
import Activities from './activities';
import Disablepremiumfeatures from './disablepremiumfeatures';
import Deletestream from './deletestream';



export default function Stream_statistics_enable() {
    const [openactivities, setactivities] = useState(false);
    const [open_disablestream, set_disablestream] = useState(false);
    const [open_delete_stream, set_delete_stream] = useState(false);
    return (
        <div className={styles.streamenable}>
            <div>
                <Navbar />
            </div>
            <div className={styles.stream_statistics}>
                <div className={styles.padding}>
                    <div className={styles.stream_list}>
                        <Link href='stream_monitor  '><a>Stream List</a></Link>
                        <p> &gt; Asianet-Roku </p>
                    </div>
                    <div className={styles.header}>
                        {/* <img/> */}
                        <img src="Icon ionic-ios-stats@2x.png" alt="ios-stats"></img>
                        <h2>
                            Asianet-Roku Statistics
                        </h2>
                    </div>
                    <div className={styles.border_bottom}>

                        <div className={styles.stream_url_check}>
                            <div className={styles.stream_url}>
                                <h4>
                                    Stream URL
                                </h4>
                                <div className={styles.copyurl}>
                                    <h4>http://akamaiaus1.akamaized.net</h4>
                                    <img src="copy.png" alt="copy"></img>
                                </div>

                            </div>
                            <div className={styles.stream_check}>
                                <h4>
                                    Check Stream:
                                </h4>
                                <select>
                                    <option >Realtime</option>
                                </select>

                            </div>
                        </div>
                        <div className={styles.functional_buttons}>
                            <div className={styles.premium_features}>
                                <a onClick={() => set_disablestream(true)}><button className='btn'>Disable Premium Features</button></a>
                                <img src="Union.png" alt="union"></img>
                            </div>
                            <div className={styles.actions}>
                                <a onClick={() => setactivities(true)}><button className='btn'>Activities</button></a>
                                <img src="Icon awesome-file-alt.png" alt="file"></img>
                            </div>
                            <div className={styles.delete_stream}>
                                <button onClick={() => set_delete_stream(true)} className='btn'>Delete Stream</button>
                                <img src="Icon material-delete.png" alt="delete"></img>
                            </div>
                        </div>

                    </div>
                    <div className={styles.content}>

                        <div className={styles.Utime_check}>
                            <div className={styles.uptime_header}>
                                <h3>Uptime check <span>(Last Checked:Realtime)</span></h3>

                            </div>
                            <div className={styles.Preview}>

                                <div className={styles.time_line}>
                                    <label>Time Line:</label>
                                    <select>
                                        <option >12 hours</option>
                                    </select>
                                </div>

                            </div>
                            <div className={styles.scte_markers}></div>
                        </div>

                        {/* <div></div> for preview pi graph*/}
                        <div className={styles.scte}>
                            <div className={styles.scte_header}>
                                <h3>SCTE -35/104 <span>(Last Checked:Realtime)</span></h3>
                            </div>
                            <div className={styles.time_line}>
                                <label>Time Line:</label>
                                <select>
                                    <option >12 hours</option>
                                </select>
                            </div>
                            <div className={styles.scte_markers}>
                            </div>
                        </div>
                        <div className={styles.master_manifest}>
                            <div className={styles.master_manifest_header}>
                                <h3>Master Manifest<span>(Last Checked:Realtime)</span></h3>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Playing</th>
                                        <th>URL Validated</th>
                                        <th>Sent Stream Request</th>
                                        <th>Received Full Stream info</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Asianet-Roku</td>
                                        <td><img src="check-circle.png" alt="check-circle"></img></td>
                                        <td><img src="check-circle.png" alt="check-circle"></img></td>
                                        <td><img src="check-circle.png" alt="check-circle"></img></td>
                                        <td><img src="check-circle.png" alt="check-circle"></img></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={styles.child_manifest}>
                            <div className={styles.child_manifest_header}>
                                <h3>Child Manifest<span>(Last Checked:Realtime)</span></h3>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Resolution</th>
                                        <th>Playing</th>
                                        <th>Manifest Bitrate</th>
                                        <th>URL Validated</th>
                                        <th>Sent Stream Request</th>
                                        <th>Received Full Stream info</th>
                                        <th>Check for Frame freeze</th>
                                        <th>Check for Black Frame</th>
                                        <th>Check for Audio Loss</th>
                                        <th>Detailed Stream Info</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Stream1</td>
                                        <td>360p</td>
                                        <td><img src="check-circle.png" alt="check-circle"></img></td>
                                        <td>30 kbps</td>
                                        <td><img src="check-circle.png" alt="check-circle"></img></td>
                                        <td><img src="check-circle.png" alt="check-circle"></img></td>
                                        <td><img src="check-circle.png" alt="check-circle"></img></td>
                                        <td><img src="check-circle.png" alt="check-circle"></img></td>
                                        <td><img src="check-circle.png" alt="check-circle"></img></td>
                                        <td><img src="check-circle.png" alt="check-circle"></img></td>
                                        <td className={styles.details}>
                                            <div className={styles.stream_info}>
                                                <img src="Icon material-info-outline(blue).png" alt="outline"></img>
                                                <table className={styles.stream_info_table}>
                                                    <thead>
                                                        <tr>
                                                            <th className={styles.Video}>Video</th>
                                                            <th>Audio</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><span>Codec:</span>  <span>MPEG-4</span></td>
                                                            <td><span>Codec:</span>  <span>AAC</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>Aspect Ratio:</span>  <span>16:9</span></td>
                                                            <td><span>sampling Rate:</span>  <span>44.1 khz</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>Frame Rate:</span>  <span>24 fps</span></td>
                                                            <td><span>Channels:</span>  <span>48</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>width:</span>  <span>1920</span></td>
                                                            <td><span>Bitrate:</span>  <span>96 kbps</span></td>
                                                        </tr>
                                                        
                                                        <tr>
                                                            <td><span>Height:</span>  <span>1080</span></td>
                                                            <td><span>Duration:</span>  <span>00:05:33.48</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>Bitrate:</span>  <span>8 Mps</span></td>
                                                            <td><span>Subtitle:</span>  <span>AAC</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>Profile:</span>  <span>H.264</span></td>
                                                            <td><span>File Type:</span>  <span>SRT</span></td>
                                                        </tr>
                                                       
                                                        <tr>
                                                            <td><span>Bit Depth:</span>  <span>32-bit</span></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>Duration:</span>  <span>00:05:33.48</span></td>
                                                            <td></td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Stream2</td>
                                        <td>480p</td>
                                        <td><img src="check-circle.png"></img></td>
                                        <td>60 kbps</td>
                                        <td><img src="check-circle.png" alt="check-circle"></img></td>
                                        <td><img src="check-circle.png" alt="check-circle"></img></td>
                                        <td><img src="check-circle.png" alt="check-circle"></img></td>
                                        <td><img src="check-circle.png" alt="check-circle"></img></td>
                                        <td><img src="check-circle.png" alt="check-circle"></img></td>
                                        <td><img src="check-circle.png" alt="check-circle"></img></td>
                                        <td className={styles.details}>
                                            <div className={styles.stream_info}>
                                                <img src="Icon material-info-outline(blue).png" alt="outline"></img>
                                                <table className={styles.stream_info_table}>
                                                    <thead>
                                                        <tr>
                                                            <th className={styles.Video}>Video</th>
                                                            <th>Audio</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                            <td><span>Codec:</span>  <span>MPEG-4</span></td>
                                                            <td><span>Codec:</span>  <span>AAC</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>Aspect Ratio:</span>  <span>16:9</span></td>
                                                            <td><span>sampling Rate:</span>  <span>44.1 khz</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>Frame Rate:</span>  <span>24 fps</span></td>
                                                            <td><span>Channels:</span>  <span>48</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>width:</span>  <span>1920</span></td>
                                                            <td><span>Bitrate:</span>  <span>96 kbps</span></td>
                                                        </tr>
                                                        
                                                        <tr>
                                                            <td><span>Height:</span>  <span>1080</span></td>
                                                            <td><span>Duration:</span>  <span>00:05:33.48</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>Bitrate:</span>  <span>8 Mps</span></td>
                                                            <td><span>Subtitle:</span>  <span>AAC</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>Profile:</span>  <span>H.264</span></td>
                                                            <td><span>File Type:</span>  <span>SRT</span></td>
                                                        </tr>
                                                       
                                                        <tr>
                                                            <td><span>Bit Depth:</span>  <span>32-bit</span></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>Duration:</span>  <span>00:05:33.48</span></td>
                                                            <td></td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>

                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Stream3</td>
                                        <td>720p</td>
                                        <td><img src="check-circle.png"></img></td>
                                        <td>90 kbps</td>
                                        <td><img src="check-circle.png" alt="check-circle"></img></td>
                                        <td><img src="check-circle.png" alt="check-circle"></img></td>
                                        <td><img src="check-circle.png" alt="check-circle"></img></td>
                                        <td><img src="check-circle.png" alt="check-circle"></img></td>
                                        <td><img src="check-circle.png" alt="check-circle"></img></td>
                                        <td><img src="check-circle.png" alt="check-circle"></img></td>
                                        <td className={styles.details}>
                                            <div className={styles.stream_info}>
                                                <img src="Icon material-info-outline(blue).png" alt="outline"></img>
                                                <table className={styles.stream_info_table}>
                                                    <thead>
                                                        <tr>
                                                            <th className={styles.Video}>Video</th>
                                                            <th>Audio</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                            <td><span>Codec:</span>  <span>MPEG-4</span></td>
                                                            <td><span>Codec:</span>  <span>AAC</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>Aspect Ratio:</span>  <span>16:9</span></td>
                                                            <td><span>sampling Rate:</span>  <span>44.1 khz</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>Frame Rate:</span>  <span>24 fps</span></td>
                                                            <td><span>Channels:</span>  <span>48</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>width:</span>  <span>1920</span></td>
                                                            <td><span>Bitrate:</span>  <span>96 kbps</span></td>
                                                        </tr>
                                                        
                                                        <tr>
                                                            <td><span>Height:</span>  <span>1080</span></td>
                                                            <td><span>Duration:</span>  <span>00:05:33.48</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>Bitrate:</span>  <span>8 Mps</span></td>
                                                            <td><span>Subtitle:</span>  <span>AAC</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>Profile:</span>  <span>H.264</span></td>
                                                            <td><span>File Type:</span>  <span>SRT</span></td>
                                                        </tr>
                                                       
                                                        <tr>
                                                            <td><span>Bit Depth:</span>  <span>32-bit</span></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>Duration:</span>  <span>00:05:33.48</span></td>
                                                            <td></td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>

                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Stream4</td>
                                        <td>1080p</td>
                                        <td><img src="check-circle.png"></img></td>
                                        <td>120 kbps</td>
                                        <td><img src="check-circle.png" alt="check-circle"></img></td>
                                        <td><img src="check-circle.png" alt="check-circle"></img></td>
                                        <td><img src="check-circle.png" alt="check-circle"></img></td>
                                        <td><img src="check-circle.png" alt="check-circle"></img></td>
                                        <td><img src="check-circle.png" alt="check-circle"></img></td>
                                        <td><img src="check-circle.png" alt="check-circle"></img></td>
                                        <td className={styles.details}>
                                            <div className={styles.stream_info}>
                                                <img src="Icon material-info-outline(blue).png" alt="outline"></img>
                                                <table className={styles.stream_info_table}>
                                                    <thead>
                                                        <tr>
                                                            <th className={styles.Video}>Video</th>
                                                            <th>Audio</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                            <td><span>Codec:</span>  <span>MPEG-4</span></td>
                                                            <td><span>Codec:</span>  <span>AAC</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>Aspect Ratio:</span>  <span>16:9</span></td>
                                                            <td><span>sampling Rate:</span>  <span>44.1 khz</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>Frame Rate:</span>  <span>24 fps</span></td>
                                                            <td><span>Channels:</span>  <span>48</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>width:</span>  <span>1920</span></td>
                                                            <td><span>Bitrate:</span>  <span>96 kbps</span></td>
                                                        </tr>
                                                        
                                                        <tr>
                                                            <td><span>Height:</span>  <span>1080</span></td>
                                                            <td><span>Duration:</span>  <span>00:05:33.48</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>Bitrate:</span>  <span>8 Mps</span></td>
                                                            <td><span>Subtitle:</span>  <span>AAC</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>Profile:</span>  <span>H.264</span></td>
                                                            <td><span>File Type:</span>  <span>SRT</span></td>
                                                        </tr>
                                                       
                                                        <tr>
                                                            <td><span>Bit Depth:</span>  <span>32-bit</span></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>Duration:</span>  <span>00:05:33.48</span></td>
                                                            <td></td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={styles.track_pts}>
                            <div className={styles.track_pts_header}>
                                <h3>Track PTS<span>(Last Checked:Realtime)</span></h3>
                            </div>
                            <div className={styles.select_loaction}>
                                <label>Change Location:</label>
                                <select>
                                    <option>United states</option>
                                </select>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Stream</th>
                                        <th>United states</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Asianet-Roku</td>
                                        <td><img src="check-circle.png" alt="check-circle"></img></td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={styles.geo_locations}>
                            <div className={styles.geo_loacations_header}>
                                <h3>Geo Locations<span>(Last Checked:Realtime)</span></h3>
                            </div>
                            <div className={styles.select_loaction}>
                                <label>Change Location:</label>
                                <select>
                                    <option>7 Selected</option>
                                </select>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Stream</th>
                                        <th>United states</th>
                                        <th>Australia</th>
                                        <th>India</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Asianet-Roku</td>
                                        <td><img src="check-circle.png" alt="check-circle"></img></td>
                                        <td className={styles.error}>
                                            <div className={styles.alert}>
                                                <img src="Icon material-error.png" alt="error"></img>
                                                <div className={styles.alert_box}>
                                                    <span>All checks failed</span><br></br>
                                                    <span>Connection Error - Host Unreachable</span>
                                                </div>

                                            </div>
                                        </td>
                                        <td><img src="check-circle.png" alt="check-circle"></img></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {openactivities && <Activities closeactivities={setactivities} />}
            {open_disablestream && <Disablepremiumfeatures close_disable_premiumfeatures={set_disablestream} />}
            {open_delete_stream && <Deletestream open_delete_stream={set_delete_stream} />}
        </div>
    )
}