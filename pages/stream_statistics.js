import styles from '../styles/stream_statistics.module.css'



export default function Stream_statistics() {
    return (
        <div className={styles.container}>
            <div className={styles.containercomponents}>
                <h2>Videograph</h2>
                <div className={styles.uppercomponents}>
                    <ul>
                        <li>
                            <a href="#"><img src="/Icon material-home.png" alt='home'></img>Environments</a>
                        </li>
                        <li>
                            <a href="#"><img src="/Icon material-video-library.png" alt='library'></img>Videos</a>
                        </li>
                        <li>
                            <a href="#"><img src="Icon simple-googleanalytics.png" alt='alalytics'></img>Analytics</a>
                        </li>
                        <li className={styles.tools}>
                            <a href="#" className={styles.list_heading}><img src="Icon awesome-tools.png" alt='tools'></img>Tools</a>
                            <ul className={styles.list}>
                                <li><a>Stream Monitor</a></li>
                                <li><a>Image Optimization</a></li>
                                <li><a>Subtitle Converter</a></li>
                                <li><a>Video player</a></li>
                                <li><a>Player Validator</a></li>
                            </ul>
                        </li>

                    </ul>
                </div>
                <div className={styles.lowercomponents}>
                    <ul>
                        <li>
                            <a href="#"><img src="Icon awesome-file-alt.png" alt='file'></img>Events & logs</a>
                        </li>
                        <li>
                            <a href="#"><img src="Icon ionic-ios-settings.png" alt='settings'></img>Settings</a>
                        </li>
                        <li>
                            <a href="#"><img src="Icon awesome-user-alt.png" alt='user' className={styles.user_icon}></img><p>Anil <br />Yupp TV</p></a>

                        </li>
                        <li>
                            <a href="#"><img src="Icon feather-log-out.png" alt='logout'></img>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.stream_statistics}>

                <div className={styles.stream_list}>
                    <a>Stream List</a>
                    <p> &gt; Asianet-Roku </p>
                </div>
                <div className={styles.header}>
                    {/* <img/> */}
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
                            <span>http://akamaiaus1.akamaized.net</span>

                        </div>
                        <div className={styles.stream_check}>
                            <h4>
                                Check Stream:
                            </h4>
                            <select>
                                <option >Every 6 months</option>
                            </select>

                        </div>
                    </div>
                    <div className={styles.functional_buttons}>
                        <div className={styles.premium_features}>
                            <button className='btn'>Enable Premium Features</button>
                        </div>
                        <div className={styles.actions}>
                            <button className='btn'>Actions</button>
                        </div>
                        <div className={styles.delete_stream}>
                            <button className='btn'>Delete Stream</button>
                        </div>
                    </div>

                </div>
                <div className={styles.content}>

                    <div className={styles.Utime_check}>
                        <div className={styles.uptime_header}>
                            <h3>Uptime check <span>(Last Checked:6 mins)</span></h3>

                        </div>
                        <div className={styles.Preview}>
                            <div className={styles.image_preview}>Image Preview <input type="checkbox" className={styles.input}></input></div>
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
                            <h3>SCTE -35/104</h3>
                        </div>
                        <div className={styles.scte_markers}>
                            <div className={styles.text_align}>
                                <h4>SCTE-35/104 Markers</h4>
                                <p>Detects the markers in the strem.Get details info such as duration and the time line at which the marker occur in the stream.</p>
                                <a>Enable Premium Features</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.master_manifest}>
                        <div className={styles.master_manifest_header}>
                            <h3>Master Manifest<span>(Last Checked:6mins)</span></h3>
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
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.child_manifest}>
                        <div className={styles.child_manifest_header}>
                            <h3>Child Manifest<span>(Last Checked:6mins)</span></h3>
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
                                    <td></td>
                                    <td>30 kbps</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Stream2</td>
                                    <td>480p</td>
                                    <td></td>
                                    <td>60 kbps</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Stream3</td>
                                    <td>720p</td>
                                    <td></td>
                                    <td>90 kbps</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Stream4</td>
                                    <td>1080p</td>
                                    <td></td>
                                    <td>120 kbps</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.track_pts}>
                        <div className={styles.track_pts_header}>
                            <h3>Track PTS</h3>
                        </div>
                        <div className={styles.timestamp}>
                            <div className={styles.timestamp_details}>
                                <h4>Track Presentation Timestamp(PTS)</h4>
                                <p>Early track PTS of streamS for any location.</p>
                                <p>For optional monitoring choose a location that is close to stream origin.</p>
                                <a>Enable Premium Features</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.geo_locations}>
                        <div className={styles.geo_loacations_header}>
                            <h3>Geo Locations<span>(Last Checked:6 mins)</span></h3>
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
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}