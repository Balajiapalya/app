import { Fragment } from 'react'
import styles from '../../../styles/allstreams.module.css'
import { useState } from 'react'
import Stream_preview from '../../dialog/stream_preview';
import Link from 'next/link';

export default function Allstreams() {
    const[openpreview,setpreview]=useState(false);
    return (
        <Fragment>
            <div className={styles.wrapper}>
                <div className={styles.search}>
                    <select className={styles.actions}>
                        <option value="bulkactions">Bulk Actions</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <input placeholder='Search'></input>
                    <img src='/images/search_icon.png' alt='icon'></img>
                </div>
                <div className={styles.stream_table}>
                    <table>
                        <thead>
                            <tr>
                                <th><input type="checkbox"></input></th>
                                <th>Name</th>
                                <th>Stream URL</th>
                                <th>Playing</th>
                                <th>Up Time</th>
                                <th>Avg.Bitrare</th>
                                <th>PTS</th>
                                <th>Last checked</th>
                                <th>status</th>
                                <th>Actions</th>

                            </tr>
                        </thead>
                        <tbody >
                            <tr className={styles.default_color}>
                                <td><input type="checkbox" id="roku"></input></td>
                                <td><label htmlFor="roku"><a>Asianet-Roku</a></label></td>
                                <td><label htmlFor="roku">http://akamaiaus1.akamaized.net</label></td>
                                <td className={styles.check}><label htmlFor="roku"></label><img src="/images/asset_status/ready.svg" alt="check-circle"></img></td>
                                <td><label htmlFor="roku">60 mins</label></td>
                                <td><label htmlFor="roku">50 kbps</label></td>
                                <td><label htmlFor="roku">Healthy</label></td>
                                <td><label htmlFor="roku">Realtime</label></td>
                                <td><label htmlFor="roku">Active</label></td>
                                <td className={styles.actionicons}> <label htmlFor="roku"></label>
                                    <a onClick={()=>setpreview(true)}><img src="/images/iconionic-ios-play-circle.png" alt="play-circle"></img></a>
                                    <Link href='statistics_unlockpremium'><a><img src="/images/iconionic-ios-stats.png" alt="ios-stats"></img></a></Link>
                                    <a><img src="/images/iconawesome-eye-slash.png" alt="eye-slash"></img></a>
                                </td>
                            </tr>
                            <tr className={styles.color_red}>
                                <td><input type="checkbox" id='asianet'></input></td>
                                <td htmlFor="asianet">Asianet-Roku</td>
                                <td>http://akamaiaus1.akamaized.net</td>
                                <td className={styles.check}>
                                    <div className={styles.background}>
                                        <img src="/images/iconmaterial-error.png" alt="error"></img>
                                        <div className={styles.error_alert}>
                                            <span>All checks failed.</span>
                                            <br></br>
                                            <span>Connection Error - Host Unreachable</span>
                                        </div>
                                    </div>
                                </td>
                                <td className={styles.mins}>-15 mins
                                <div className={styles.pts_background}>
                                        <img src='/images/iconmaterial-info-outline.png' alt='error'></img>
                                        <div className={styles.error_alert}>
                                            <span>Down time ~ 15mins</span>
                                            <br></br>
                                            <span>From 11:30 am to 11:45 am</span>
                                        </div>

                                    </div>
                                </td>
                                <td>50 kbps</td>
                                <td>NA</td>
                                <td>6 mins ago</td>
                                <td>Active</td>
                                <td className={styles.actionicons}>
                                <a onClick={()=>setpreview(true)}><img src="/images/iconionic-ios-play-circle.png" alt="play-circle"></img></a>
                                <Link href='statistics_unlockpremium'><a><img src="/images/iconionic-ios-stats.png" alt="ios-stats"></img></a></Link>
                                    <img src="/images/iconawesome-eye-slash.png" alt="eye-slash"></img>
                                </td>
                            </tr>
                            <tr className={styles.color_red}>
                                <td><input type="checkbox"></input></td>
                                <td>Asianet-Roku</td>
                                <td>http://akamaiaus1.akamaized.net</td>
                                <td className={styles.check}>
                                    <div className={styles.background}>
                                        <img src="/images/iconmaterial-error.png" alt="error"></img>
                                        <div className={styles.error_alert}>
                                            <span>All checks failed.</span>
                                            <br></br>
                                            <span>Connection Error - Host Unreachable</span>
                                        </div>
                                    </div>
                                </td>
                                <td className={styles.mins}>-6 mins
                                <div className={styles.pts_background}>
                                        <img src='/images/iconmaterial-info-outline.png' alt='error'></img>
                                        <div className={styles.error_alert}>
                                            <span>Down time ~ 15mins</span>
                                            <br></br>
                                            <span>From 11:30 am to 11:36 am</span>
                                        </div>

                                    </div>
                                </td>
                                <td>50 kbps</td>
                                <td className={styles.pts}>Error
                                    <div className={styles.pts_background}>
                                        <img src='/images/iconmaterial-info-outline.png' alt='error'></img>
                                        <div className={styles.error_alert}>
                                            <span>All checks failed.</span>
                                            <br></br>
                                            <span>Connection Error - Host Unreachable</span>
                                        </div>
                                    </div>
                                </td>
                                <td>6 mins ago</td>
                                <td>Active</td>
                                <td className={styles.actionicons}>
                                <a onClick={()=>setpreview(true)}><img src="/images/iconionic-ios-play-circle.png" alt="play-circle"></img></a>
                                   <Link href='statistics_unlockpremium'><a><img src="/images/iconionic-ios-stats.png" alt="ios-stats"></img></a></Link>
                                    <img src="/images/iconawesome-eye-slash.png" alt="eye-slash"></img>
                                </td>
                            </tr>
                            <tr className={styles.opacity}>
                                <td><input type="checkbox" ></input></td>
                                <td><label >Asianet-Roku</label></td>
                                <td>http://akamaiaus1.akamaized.net</td>
                                <td className={styles.check}>--</td>
                                <td>--</td>
                                <td>--</td>
                                <td>--</td>
                                <td>--</td>
                                <td>In active</td>
                                <td className={styles.actionicons}>
                                <a onClick={()=>setpreview(true)}><img src="/images/iconionic-ios-play-circle.png" alt="play-circle"></img></a>
                                <Link href='statistics_unlockpremium'><a><img src="/images/iconionic-ios-stats.png" alt="ios-stats"></img></a></Link>
                                    <img src="/images/iconawesome-eye-slash.png" alt="images/eye-slash"></img>
                                </td>
                            </tr>
                            <tr className={styles.color_yellow}>
                                <td><input type="checkbox"></input></td>
                                <td>Asianet-Roku</td>
                                <td>http://akamaiaus1.akamaized.net</td>
                                <td className={styles.check}><img src="/images/check-yellowcircle.png" alt="/yellowcircle"></img></td>
                                <td>60 mins</td>
                                <td>50 kbps</td>
                                <td>Healthy</td>
                                <td>NA</td>
                                <td>30 mins ago</td>
                                <td className={styles.actionicons}>
                                <a onClick={()=>setpreview(true)}><img src="/images/iconionic-ios-play-circle.png" alt="play-circle"></img></a>
                                <Link href='statistics_unlockpremium'><a><img src="/images/iconionic-ios-stats.png" alt="ios-stats"></img></a></Link>
                                    <img src="/images/iconawesome-eye-slash.png" alt="eye-slash"></img>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                {openpreview && <Stream_preview closepreview={setpreview}/>}
            </div>

        </Fragment>
    )
}