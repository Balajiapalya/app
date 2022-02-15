import { Fragment } from 'react'
import styles from '../../styles/videodelivery_tabs.module.css'
import { useState } from 'react'
import Link from 'next/link';
import styles1 from '../../styles/activities_tabs.module.css';
import Videoditor from './create_videoclips.js/videoeditor';
import Using_api from './create_videoclips.js/using_api';


export default function Videoclips() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <Fragment>

            <div className={styles.videoclips}>
                <div className={styles.subtitles_list}>
                    <h2>Video Clips</h2>
                    <div className={styles.videos_table}>
                        <table>
                            <thead>
                                <tr>

                                    <th>Added on</th>
                                    <th>Name</th>
                                    <th>Assets Id</th>

                                    <th>Actions</th>

                                </tr>
                            </thead>
                            <tbody >
                                <tr>

                                    <td>02/12/21<br></br>6:03pm</td>
                                    <td>Clip1</td>
                                    <td>OPe0o7EObTeS01T3YrydYMyVjjvHFR7AeJOHmH38V0100IM</td>
                                    <td className={styles.actionicons}><a>View Assets</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>02/12/21<br></br>6:03pm</td>
                                    <td>Clip1</td>
                                    <td>OPe0o7EObTeS01T3YrydYMyVjjvHFR7AeJOHmH38V0100IM</td>
                                    <td className={styles.actionicons}><a>View Assets</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>02/12/21<br></br>6:03pm</td>
                                    <td>Clip1</td>
                                    <td>OPe0o7EObTeS01T3YrydYMyVjjvHFR7AeJOHmH38V0100IM</td>
                                    <td className={styles.actionicons}><a>View Assets</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>02/12/21<br></br>6:03pm</td>
                                    <td>Clip1</td>
                                    <td>OPe0o7EObTeS01T3YrydYMyVjjvHFR7AeJOHmH38V0100IM</td>
                                    <td className={styles.actionicons}><a>View Assets</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
                <div className={styles.create_videoclips}>
                    <div className={styles1.Activities_tabs}>
                        <div className={styles1.wrapper_tabs}>
                            <div className={styles1.bloc_tabs}>
                                <button
                                    className={toggleState === 1 ? `${styles1.tabs_item} ${styles1.active_tabs}` : `${styles1.tabs_item}`}
                                    onClick={() => toggleTab(1)}
                                >
                                    <span>Video Editor</span>
                                </button>
                                <button
                                    className={toggleState === 2 ? `${styles1.tabs_item} ${styles1.active_tabs}` : `${styles1.tabs_item}`}
                                    onClick={() => toggleTab(2)}
                                >
                                    <span>Use APIs</span>
                                </button>
                            </div>

                            <div className={styles1.content_tabs_area}>
                                <div
                                    className={toggleState === 1 ? `${styles1.content_tabs} ${styles1.active_content}` : `${styles1.content_tabs}`}
                                >
                                    <Videoditor />
                                </div>

                                <div
                                    className={toggleState === 2 ? `${styles1.content_tabs} ${styles1.active_content}` : `${styles1.content_tabs}`}
                                >
                                    <Using_api />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </Fragment>
    )
}