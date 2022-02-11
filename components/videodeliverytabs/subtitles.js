import { Fragment } from 'react'
import styles from '../../styles/videodelivery_tabs.module.css'
import { useState } from 'react'
import Link from 'next/link';

export default function Subtitles() {

    return (
        <Fragment>

            <div className={styles.subtitles}>
                <div className={styles.subtitles_list}>
                    <h2>Subtitle List</h2>
                    <div className={styles.videos_table}>
                        <table>
                            <thead>
                                <tr>
                                   
                                    <th>Added on</th>
                                    <th>Name</th>
                                    <th>Subtitle ID</th>
                                    <th>Format</th>
                                    <th>Actions</th>

                                </tr>
                            </thead>
                            <tbody >
                                <tr>
                                   
                                    <td>02/12/21<br></br>6:03pm</td>
                                    <td>English</td>
                                    <td>OPe0o7EObTeS01T3YrydYMyVjjvHFR7AeJOHmH38V0100IM</td>
                                    <td>VTT</td>
                                    <td className={styles.actionicons}>
                                    </td>
                                </tr>
                                <tr>
                                    <td>02/12/21<br></br>6:03pm</td>
                                    <td>French</td>
                                    <td>OPe0o7EObTeS01T3YrydYMyVjjvHFR7AeJOHmH38V0100IM</td>
                                    <td>VTT</td>
                                    <td className={styles.actionicons}>
                                    </td>
                                </tr>
                                <tr>
                                <td>02/12/21<br></br>6:03pm</td>
                                    <td>Spanish</td>
                                    <td>OPe0o7EObTeS01T3YrydYMyVjjvHFR7AeJOHmH38V0100IM</td>
                                    <td>VTT</td>
                                    <td className={styles.actionicons}>
                                    </td>
                                </tr>
                                <tr>
                                <td>02/12/21<br></br>6:03pm</td>
                                    <td>German</td>
                                    <td>OPe0o7EObTeS01T3YrydYMyVjjvHFR7AeJOHmH38V0100IM</td>
                                    <td>VTT</td>
                                    <td className={styles.actionicons}>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
                <div className={styles.Videodelivery_addnewassets}>
                    <h2>Upload subtitle files</h2>
                    <div className={styles.upload_file}>
                        <h2>upload your file</h2>
                        <div className={styles.upload_btn_wrapper}>
                            <button className={styles.btn}>Select File</button>
                            <input type="file" name="myfile" />
                        </div>

                    </div>
                    <div className={styles.post}>
                        <h4>Post using Video URL:</h4>
                        <p>Post https://api.videograph.com/vodeos/v1/assets</p>
                        <span>Post body editor:</span>
                        <div className={styles.language_select}>
                            <button className={styles.model_btn}>Python</button>
                            <button className={styles.model_btn}>Node</button>
                            <button className={styles.model_btn}>Php</button>
                            <button className={styles.model_btn}>Go</button>
                        </div>
                        <div className={styles.code}>


                        </div>
                        <button className={styles.btn}>Run Request</button>
                    </div>
                </div>
            </div>


        </Fragment>
    )
}