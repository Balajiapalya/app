import { Fragment } from 'react'
import styles from '../../../styles/allstreams.module.css'

export default function Allstreams(){
    return(
        <Fragment>
            <div className={styles.wrapper}>
                <div className={styles.search}>
                    <input placeholder='Search'></input>
                    <img src='/search_icon.png'></img>
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
                                <td><label htmlFor="roku"></label></td>
                                <td><label htmlFor="roku">60 mins</label></td>
                                <td><label htmlFor="roku">50 kbps</label></td>
                                <td><label htmlFor="roku">Healthy</label></td>
                                <td><label htmlFor="roku">Realtime</label></td>
                                <td><label htmlFor="roku">Active</label></td>
                                <td><label htmlFor="roku"></label></td>
                            </tr>
                            <tr className={styles.color_red}>
                                <td><input type="checkbox"></input></td>
                                <td>Asianet-Roku</td>
                                <td>http://akamaiaus1.akamaized.net</td>
                                <td></td>
                                <td>-15 mins</td>
                                <td>50 kbps</td>
                                <td>NA</td>
                                <td>6 mins ago</td>
                                <td>Active</td>
                                <td></td>
                            </tr>
                            <tr className={styles.color_red}>
                                <td><input type="checkbox"></input></td>
                                <td>Asianet-Roku</td>
                                <td>http://akamaiaus1.akamaized.net</td>
                                <td></td>
                                <td>-6 mins</td>
                                <td>50 kbps</td>
                                <td>NA</td>
                                <td>6 mins ago</td>
                                <td>Active</td>
                                <td></td>
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
                                <td></td>
                            </tr>
                            <tr className={styles.color_yellow}>
                                <td><input type="checkbox"></input></td>
                                <td>Asianet-Roku</td>
                                <td>http://akamaiaus1.akamaized.net</td>
                                <td></td>
                                <td>60 mins</td>
                                <td>50 kbps</td>
                                <td>Healthy</td>
                                <td>NA</td>
                                <td>30 mins ago</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>

                </div>

            </div>

        </Fragment>
    )
}