
import styles from '../styles/videos.module.css'
import Link from 'next/link';
import Navbar from '../components/homepage/navbar';


export default function Videos_delivery() {

    return (
        <div className={styles.container}>
            <div>
                <Navbar />
            </div>
            <div className={styles.videos}>
                <div className={styles.videos_delivery}>
                    <div className={styles.header}>
                        <h2>
                            Videos
                        </h2>
                    </div>
                    <div className={styles.videos_deliverydata}>
                        <p>Upload,Transcode,Store and Deliver your asset using our service</p>
                        <p>You can Upload a video using API or directly from here to share it with your users</p>
                       <Link href="videodelivery_addnewassets"><a>
                            <button className='btn'>Add New assets</button>
                            <img src="Icon feather-plus.png"alt='icon' ></img>
                        </a></Link>
                    </div>
                     <hr></hr>
                </div>
                <div className={styles.search}>
                    <input placeholder='Search'></input>
                    <img src='/search_icon.png' alt='icon'></img>
                </div>
                <div className={styles.videos_table}>
                    <table>
                        <thead>
                            <tr>
                                <th><input type="checkbox"></input></th>
                                <th>Added on</th>
                                <th>Name</th>
                                <th>Asset ID</th>
                                <th>Image Preview</th>
                                <th>Duration</th>
                                <th>Resolution</th>
                                <th>Status</th>
                                <th>Actions</th>

                            </tr>
                        </thead>
                        <tbody >
                            <tr>
                                <td><input type="checkbox"></input></td>
                                <td>02/12/21<br></br>6:03pm</td>
                                <td>Asianet-Roku</td>
                                <td>OPe0o7EObTeS01T3YrydYMyVjjvHFR7AeJOHmH38V0100IM</td>
                                
                                <td></td>
                                <td>30m20s</td>
                                <td>HD</td>
                                <td>Ready<img className={styles.checkcircle} src="check-circle.png" alt="check-circle"></img></td>
                                <td className={styles.actionicons}>
                                </td>
                            </tr>
                            <tr>
                            <td><input type="checkbox"></input></td>
                                <td>02/12/21<br></br>6:03pm</td>
                                <td>Asianet-Roku</td>
                                <td>OPe0o7EObTeS01T3YrydYMyVjjvHFR7AeJOHmH38V0100IM</td>
                                
                                <td></td>
                                <td>30m20s</td>
                                <td>HD</td>
                                <td>Ready<img className={styles.checkcircle} src="check-circle.png" alt="check-circle"></img></td>
                                <td className={styles.actionicons}>
                                </td>
                            </tr>
                            <tr>
                              
                            <td><input type="checkbox"></input></td>
                                <td>02/12/21<br></br>6:03pm</td>
                                <td>Asianet-Roku</td>
                                <td>OPe0o7EObTeS01T3YrydYMyVjjvHFR7AeJOHmH38V0100IM</td>
                                
                                <td></td>
                                <td>30m20s</td>
                                <td>HD</td>
                                <td>Ready<img className={styles.checkcircle} src="check-circle.png" alt="check-circle"></img></td>
                                <td className={styles.actionicons}>
                                </td>
                            </tr>
                            <tr>
                            <td><input type="checkbox"></input></td>
                                <td>02/12/21<br></br>6:03pm</td>
                                <td>Asianet-Roku</td>
                                <td>OPe0o7EObTeS01T3YrydYMyVjjvHFR7AeJOHmH38V0100IM</td>
                                
                                <td></td>
                                <td>30m20s</td>
                                <td>HD</td>
                                <td>Ready<img className={styles.checkcircle} src="check-circle.png" alt="check-circle"></img></td>
                                <td className={styles.actionicons}>
                                </td>
                            </tr>
                            <tr>
                            <td><input type="checkbox"></input></td>
                                <td>02/12/21<br></br>6:03pm</td>
                                <td>Asianet-Roku</td>
                                <td>OPe0o7EObTeS01T3YrydYMyVjjvHFR7AeJOHmH38V0100IM</td>
                                
                                <td></td>
                                <td>30m20s</td>
                                <td>HD</td>
                                <td>Ready<img className={styles.checkcircle} src="check-circle.png" alt="check-circle"></img></td>
                                <td className={styles.actionicons}>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>

    )
}