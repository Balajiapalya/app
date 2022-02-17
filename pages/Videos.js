import styles from '../styles/videos.module.css'
import Link from 'next/link';
import Navbar from '../components/common/navbar';


export default function Videos() {

    return (
        <div className={styles.container}>
            {/* <div>
                <Navbar />
            </div> */}
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
                            <img src="Images/Icon feather-plus.png" alt='icon' ></img>
                        </a></Link>
                    </div>
                    <hr></hr>
                </div>
                <div className={styles.search}>
                    <input placeholder='Search'></input>
                    <img src='Images/search_icon.png' alt='icon'></img>
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
                                <td className={styles.asset_id}>OPe0o7EObTeS01T3YrydYMyVjjvHFR7AeJOHmH38V0100IM</td>

                                <td><img src='/Images/Image 3.png' /></td>
                                <td>30m20s</td>
                                <td>HD</td>
                                <td>Ready<img className={styles.checkcircle} src="Images/check-circle.png" alt="check-circle"></img></td>
                                <td className={styles.actionicons}>
                                    <img src='/Images/Icon ionic-ios-play-circle.png'></img>
                                    <img src='/Images/film-editing.png'></img>
                                    <img src='/Images/insert-picture-icon.png'></img>
                                    <img src='/Images/gif-file-format-symbol.png'></img>
                                    <img src='/Images/closed-caption.png'></img>
                                    <img src='/Images/Icon awesome-eye-slash.png'></img>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox"></input></td>
                                <td>02/12/21<br></br>6:03pm</td>
                                <td>Asianet-Roku</td>
                                <td className={styles.asset_id}>OPe0o7EObTeS01T3YrydYMyVjjvHFR7AeJOHmH38V0100IM</td>

                                <td><img src='/Images/Image 12.png' /></td>
                                <td>30m20s</td>
                                <td>HD</td>
                                <td>Ready<img className={styles.checkcircle} src="Images/check-circle.png" alt="check-circle"></img></td>
                                <td className={styles.actionicons}>
                                    <img src='/Images/Icon ionic-ios-play-circle.png'></img>
                                    <img src='/Images/film-editing.png'></img>
                                    <img src='/Images/insert-picture-icon.png'></img>
                                    <img src='/Images/gif-file-format-symbol.png'></img>
                                    <img src='/Images/closed-caption.png'></img>
                                    <img src='/Images/Icon awesome-eye-slash.png'></img>
                                </td>
                            </tr>
                            <tr>

                                <td><input type="checkbox"></input></td>
                                <td>02/12/21<br></br>6:03pm</td>
                                <td>Asianet-Roku</td>
                                <td className={styles.asset_id}>OPe0o7EObTeS01T3YrydYMyVjjvHFR7AeJOHmH38V0100IM</td>

                                <td><img src='/Images/Image 13.png' /></td>
                                <td>30m20s</td>
                                <td>HD</td>
                                <td>Ready<img className={styles.checkcircle} src="Images/check-circle.png" alt="check-circle"></img></td>
                                <td className={styles.actionicons}>
                                    <img src='/Images/Icon ionic-ios-play-circle.png'></img>
                                    <img src='/Images/film-editing.png'></img>
                                    <img src='/Images/insert-picture-icon.png'></img>
                                    <img src='/Images/gif-file-format-symbol.png'></img>
                                    <img src='/Images/closed-caption.png'></img>
                                    <img src='/Images/Icon awesome-eye-slash.png'></img>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox"></input></td>
                                <td>02/12/21<br></br>6:03pm</td>
                                <td>Asianet-Roku</td>
                                <td className={styles.asset_id}>OPe0o7EObTeS01T3YrydYMyVjjvHFR7AeJOHmH38V0100IM</td>

                                <td><img src='/Images/Image 14.png' /></td>
                                <td>30m20s</td>
                                <td>HD</td>
                                <td>Ready<img className={styles.checkcircle} src="Images/check-circle.png" alt="check-circle"></img></td>
                                <td className={styles.actionicons}>
                                    <img src='/Images/Icon ionic-ios-play-circle.png'></img>
                                    <img src='/Images/film-editing.png'></img>
                                    <img src='/Images/insert-picture-icon.png'></img>
                                    <img src='/Images/gif-file-format-symbol.png'></img>
                                    <img src='/Images/closed-caption.png'></img>
                                    <img src='/Images/Icon awesome-eye-slash.png'></img>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox"></input></td>
                                <td>02/12/21<br></br>6:03pm</td>
                                <td>Asianet-Roku</td>
                                <td className={styles.asset_id}>OPe0o7EObTeS01T3YrydYMyVjjvHFR7AeJOHmH38V0100IM</td>

                                <td><img src='/Images/Image 15.png' /></td>
                                <td>30m20s</td>
                                <td>HD</td>
                                <td>Ready<img className={styles.checkcircle} src="Images/check-circle.png" alt="check-circle"></img></td>
                                <td className={styles.actionicons}>
                                    <img src='/Images/Icon ionic-ios-play-circle.png'></img>
                                    <img src='/Images/film-editing.png'></img>
                                    <img src='/Images/insert-picture-icon.png'></img>
                                    <img src='/Images/gif-file-format-symbol.png'></img>
                                    <img src='/Images/closed-caption.png'></img>
                                    <img src='/Images/Icon awesome-eye-slash.png'></img>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>

    )
}