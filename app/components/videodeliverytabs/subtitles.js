import { Fragment } from 'react'
import styles from '../../styles/videodelivery_tabs.module.css'
import { useState } from 'react'
import Link from 'next/link';

export default function Subtitles() {
    const [toggleposition, settoggleposition] = useState(2);
    const togglebtn = (index) => {
        settoggleposition(index);
    }

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
                                        <img src="/images/download.png" alt="download" />
                                        <img src="/images/iconmaterial-delete.png" alt="delete" />

                                    </td>
                                </tr>
                                <tr>
                                    <td>02/12/21<br></br>6:03pm</td>
                                    <td>French</td>
                                    <td>OPe0o7EObTeS01T3YrydYMyVjjvHFR7AeJOHmH38V0100IM</td>
                                    <td>VTT</td>
                                    <td className={styles.actionicons}>
                                        <img src="/images/download.png" alt="download" />
                                        <img src="/images/iconmaterial-delete.png" alt="delete" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>02/12/21<br></br>6:03pm</td>
                                    <td>Spanish</td>
                                    <td>OPe0o7EObTeS01T3YrydYMyVjjvHFR7AeJOHmH38V0100IM</td>
                                    <td>VTT</td>
                                    <td className={styles.actionicons}>
                                        <img src="/images/download.png" alt="download" />
                                        <img src="/images/iconmaterial-delete.png" alt="delete" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>02/12/21<br></br>6:03pm</td>
                                    <td>German</td>
                                    <td>OPe0o7EObTeS01T3YrydYMyVjjvHFR7AeJOHmH38V0100IM</td>
                                    <td>VTT</td>
                                    <td className={styles.actionicons}>
                                        <img src="/images/download.png" alt="download" />
                                        <img src="/images/iconmaterial-delete.png" alt="delete" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
                <div className={styles.subtitle_file}>
                    <div className={styles.Videodelivery_addnewassets}>
                        <h2>Upload subtitle files</h2>
                        <div className={styles.upload_file}>
                            <h2>upload your file</h2>
                            <div className={styles.upload_btn_wrapper}>
                                <button className={styles.btn}>Select File</button>
                                <input type="file" name="myfile" />
                            </div>

                        </div>
                        <div className={styles.or}></div>
                        <div className={styles.or_text}><span>[or]</span></div>
                        <div className={styles.post}>
                            <h4>Post using Video URL:</h4>
                            {/* <p>Post https://api.videograph.com/vodeos/v1/assets</p> */}
                            {/* <span>Post body editor:</span> */}
                            <div className={styles.language_select}>
                                <button className={toggleposition == 1 ? `${styles.model_btn} ${styles.active}` : `${styles.model_btn}`} onClick={() => togglebtn(1)}><img className={styles.languge_img} src='/images/python.png' alt='python' />Python</button>
                                <button className={toggleposition == 2 ? `${styles.model_btn} ${styles.active}` : `${styles.model_btn}`} onClick={() => togglebtn(2)}><img className={styles.languge_img} src='/images/node-js.png' alt='node' />Node</button>
                                <button className={toggleposition == 3 ? `${styles.model_btn} ${styles.active}` : `${styles.model_btn}`} onClick={() => togglebtn(3)}><img className={styles.languge_img} src='/images/php.png' alt='php' />Php</button>
                                <button className={toggleposition == 4 ? `${styles.model_btn} ${styles.active}` : `${styles.model_btn}`} onClick={() => togglebtn(4)}><img className={styles.languge_img} src='/images/go.png' alt='go' />Go</button>
                            </div>
                            <div className={styles.code}>
                                <textarea
                                    className={styles.code_input}
                                    type='text'
                                />
                            </div>
                            <button className={styles.btn}>Run Request</button>
                        </div>
                    </div>
                </div>

            </div>


        </Fragment>
    )
}