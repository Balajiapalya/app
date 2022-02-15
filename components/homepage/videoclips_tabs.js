import { Fragment } from "react";
import styles1 from '../../styles/videoclips_tabs.module.css'
import { useState } from "react";
import Videoditor from "../videodeliverytabs/create_videoclips.js/videoeditor";
import Using_api from "../videodeliverytabs/create_videoclips.js/using_api";

export default function Videoclips_tabs(){
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return(
        <Fragment>
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
        </Fragment>
    )
}