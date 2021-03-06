import { useState } from "react";
import styles from '../../styles/tabs.module.css';
import Allstreams from "./streamtabs/Allstreams";


function Stream_tabs() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <div className={styles.wrapper_tabs}>
            <div className={styles.bloc_tabs}>
                <button
                    className={toggleState === 1 ? `${styles.tabs_item} ${styles.active_tabs}` : `${styles.tabs_item}`}
                    onClick={() => toggleTab(1)}
                >
                    <span>All Streams(20)</span>
                </button>
                <button
                    className={toggleState === 2 ? `${styles.tabs_item} ${styles.active_tabs}` : `${styles.tabs_item}`}
                    onClick={() => toggleTab(2)}
                >
                    <span>Playing (16)</span>
                </button>
                <button
                    className={toggleState === 3 ? `${styles.tabs_item} ${styles.active_tabs}` : `${styles.tabs_item}`}
                    onClick={() => toggleTab(3)}
                >
                    <span>Errors (2)</span>
                </button>
                <button
                    className={toggleState === 4 ? `${styles.tabs_item} ${styles.active_tabs}` : `${styles.tabs_item}`}
                    onClick={() => toggleTab(4)}
                >
                    <span>Warning (2)</span>
                </button>

            </div>

            <div className={styles.content_tabs_area}>
                <div
                    className={toggleState === 1 ? `${styles.content_tabs} ${styles.active_content}` : `${styles.content_tabs}`}
                >
                    {/* <Organisation /> */}
                    <Allstreams/>
                </div>

                <div
                    className={toggleState === 2 ? `${styles.content_tabs} ${styles.active_content}` : `${styles.content_tabs}`}
                >
                    {/* <Billings /> */}
                </div>

                <div
                    className={toggleState === 3 ? `${styles.content_tabs} ${styles.active_content}` : `${styles.content_tabs}`}
                >
                    {/* <Apiaccesstokes /> */}
                </div>

                <div
                    className={toggleState === 4 ? `${styles.content_tabs} ${styles.active_content}` : `${styles.content_tabs}`}
                >
                    {/* <Webhooks /> */}
                </div>

                <div
                    className={toggleState === 5 ? `${styles.content_tabs} ${styles.active_content}` : `${styles.content_tabs}`}
                >
                    {/* <Signingkeys /> */}
                </div>

            </div>
        </div>
    )
}

export default Stream_tabs;