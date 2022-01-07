import { Fragment } from 'react'
import styles from '../../../styles/allstreams.module.css'

export default function Allstreams(){
    return(
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
                    <img src='/search_icon.png' alt='icon'></img>
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
                        <tbody>
                            <tr>
                                <td><input type="checkbox" id="roku"></input></td>
                                <td><label htmlFor="roku">Asianet-Roku</label></td>
                                <td><label htmlFor="roku">http://akamaiaus1.akamaized.net</label></td>
                                <td><label htmlFor="roku"></label><img src="check-circle.png" alt="check-circle"></img></td>
                                <td><label htmlFor="roku">60 mins</label></td>
                                <td><label htmlFor="roku">50 kbps</label></td>
                                <td><label htmlFor="roku">Healthy</label></td>
                                <td><label htmlFor="roku">Realtime</label></td>
                                <td><label htmlFor="roku">Active</label></td>
                                <td className={styles.actionicons}> <label htmlFor="roku"></label>
                                 <img src="Icon ionic-ios-play-circle.png" alt="play-circle"></img>
                                <img src="Icon ionic-ios-stats.png" alt="ios-stats"></img>
                                <img src="Icon awesome-eye-slash.png" alt="eye-slash"></img></td>
                            </tr>
                            <tr className={styles.color_red}>
                                <td><input type="checkbox"></input></td>
                                <td>Asianet-Roku</td>
                                <td>http://akamaiaus1.akamaized.net</td>
                                <td><img src="Icon material-error.png" alt="error"></img></td>
                                <td>-15 mins</td>
                                <td>50 kbps</td>
                                <td>NA</td>
                                <td>6 mins ago</td>
                                <td>Active</td>
                                <td className={styles.actionicons}> 
                                 <img src="Icon ionic-ios-play-circle.png" alt="play-circle"></img>
                                <img src="Icon ionic-ios-stats.png" alt="ios-stats"></img>
                                <img src="Icon awesome-eye-slash.png" alt="eye-slash"></img>
                                </td>
                            </tr>
                            <tr className={styles.color_red}>
                                <td><input type="checkbox"></input></td>
                                <td>Asianet-Roku</td>
                                <td>http://akamaiaus1.akamaized.net</td>
                                <td><img src="Icon material-error.png" alt="error"></img></td>
                                <td>-6 mins</td>
                                <td>50 kbps</td>
                                <td>NA</td>
                                <td>6 mins ago</td>
                                <td>Active</td>
                                <td className={styles.actionicons}> 
                                 <img src="Icon ionic-ios-play-circle.png" alt="play-circle"></img>
                                <img src="Icon ionic-ios-stats.png" alt="ios-stats"></img>
                                <img src="Icon awesome-eye-slash.png" alt="eye-slash"></img>
                                </td>
                            </tr>
                            <tr className={styles.opacity}>
                                <td><input type="checkbox" ></input></td>
                                <td><label >Asianet-Roku</label></td>
                                <td>http://akamaiaus1.akamaized.net</td>
                                <td>--</td>
                                <td>--</td>
                                <td>--</td>
                                <td>--</td>
                                <td>--</td>
                                <td>In active</td>
                                <td className={styles.actionicons}> 
                                 <img src="Icon ionic-ios-play-circle.png" alt="play-circle"></img>
                                <img src="Icon ionic-ios-stats.png" alt="ios-stats"></img>
                                <img src="Icon awesome-eye-slash.png" alt="eye-slash"></img>
                                </td>
                            </tr>
                            <tr className={styles.color_yellow}>
                                <td><input type="checkbox"></input></td>
                                <td>Asianet-Roku</td>
                                <td>http://akamaiaus1.akamaized.net</td>
                                <td><img src="check-yellowcircle.png" alt="yellowcircle"></img></td>
                                <td>60 mins</td>
                                <td>50 kbps</td>
                                <td>Healthy</td>
                                <td>NA</td>
                                <td>30 mins ago</td>
                                <td className={styles.actionicons}> 
                                 <img src="Icon ionic-ios-play-circle.png" alt="play-circle"></img>
                                <img src="Icon ionic-ios-stats.png" alt="ios-stats"></img>
                                <img src="Icon awesome-eye-slash.png" alt="eye-slash"></img>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>

            </div>

        </Fragment>
    )
}