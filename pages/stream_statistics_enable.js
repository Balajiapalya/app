import styles from '../styles/stream_statistics.module.css'
import Navbar from './navbar'



export default function Stream_statistics_enable() {
    return (
        <div className={styles.streamenable}>
            <div>
                <Navbar/>
            </div>
            <div className={styles.stream_statistics}>

                <div className={styles.stream_list}>
                    <a>Stream List</a>
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
                                <span>http://akamaiaus1.akamaized.net</span>
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
                            <button className='btn'>Disable Premium Features</button>
                            <img src="Union.png" alt="union"></img>
                        </div>
                        <div className={styles.actions}>
                            <button className='btn'>Activities</button>
                            <img src="Icon awesome-file-alt.png" alt="file"></img>
                        </div>
                        <div className={styles.delete_stream}>
                            <button className='btn'>Delete Stream</button>
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
                                    <td><img src="Icon material-info-outline.png" alt="outline"></img></td>
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
                                    <td><img src="Icon material-info-outline.png" alt="outline"></img></td>
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
                                    <td><img src="Icon material-info-outline.png" alt="outline"></img></td>
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
                                    <td><img src="Icon material-info-outline.png" alt="outline"></img></td>
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
                                    <td><img src="Icon material-error.png" alt="error"></img></td>
                                    <td><img src="check-circle.png" alt="check-circle"></img></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}