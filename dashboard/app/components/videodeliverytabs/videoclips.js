import { Fragment } from 'react'
import styles from '../../styles/videodelivery_tabs.module.css'
import Videoclips_tabs from '../homepage/videoclips_tabs';


export default function Videoclips() {
    
    return (
        <Fragment>
            <div className={styles.videoclips}>
                <div className={styles.subtitles_list}>
                    <h2>List of Video Clips</h2>
                    <div className={styles.subtitles_list_table}>
                        <table>
                            <thead>
                                <tr>

                                    <th>Added on</th>
                                    <th>Name</th>
                                    <th>Video ID</th>

                                    <th>Actions</th>

                                </tr>
                            </thead>
                            <tbody >
                                <tr>

                                    <td>02/12/21<br></br>6:03pm</td>
                                    <td>Clip1</td>
                                    <td>OPe0o7EObTeS01T3YrydYMyVjjvHFR7AeJOHmH38V0100IM</td>
                                    <td className={styles.actionicons}><a>View Video</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>02/12/21<br></br>6:03pm</td>
                                    <td>Clip1</td>
                                    <td>OPe0o7EObTeS01T3YrydYMyVjjvHFR7AeJOHmH38V0100IM</td>
                                    <td className={styles.actionicons}><a>View Video</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>02/12/21<br></br>6:03pm</td>
                                    <td>Clip1</td>
                                    <td>OPe0o7EObTeS01T3YrydYMyVjjvHFR7AeJOHmH38V0100IM</td>
                                    <td className={styles.actionicons}><a>View Video</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>02/12/21<br></br>6:03pm</td>
                                    <td>Clip1</td>
                                    <td>OPe0o7EObTeS01T3YrydYMyVjjvHFR7AeJOHmH38V0100IM</td>
                                    <td className={styles.actionicons}><a>View Video</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
                <div className={styles.create_videoclips}>
                    <div className={styles.create_videoclips_header}>
                        <h2>Create Video Clips</h2>
                    </div>
                    <Videoclips_tabs/>
                </div>
            </div>
        </Fragment>
    )
}