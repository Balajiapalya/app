import { useState } from "react";
import styles from '../../styles/activities_tabs.module.css';
import Events from "./activitiestabs/events";
import Logs from "./activitiestabs/logs";


function Activities_tabs() {
    const [toggleState, setToggleState] = useState(1);
    const [detail,setDetail]=useState(false)
    const [logDetail,setLogDetail]=useState(false)

    const toggleTab = (index) => {
        setToggleState(index);
        setDetail(false)
        setLogDetail(false)
    };
    return (
        <div className={styles.Activities_tabs}>
        <div className={styles.wrapper_tabs}>
            <div className={styles.bloc_tabs}>
                <button
                    className={toggleState === 1 ? `${styles.tabs_item} ${styles.active_tabs}` : `${styles.tabs_item}`}
                    onClick={() => toggleTab(1)}
                >
                    <span>Events</span>
                </button>
                <button
                    className={toggleState === 2 ? `${styles.tabs_item} ${styles.active_tabs}` : `${styles.tabs_item}`}
                    onClick={() => toggleTab(2)}
                >
                    <span>Logs</span>
                </button>
                 </div>

                <div className={styles.content_tabs_area}>
                    <div
                        className={toggleState === 1 ? `${styles.content_tabs} ${styles.active_content}` : `${styles.content_tabs}`}
                    >
                        <Events setDetail={setDetail} detail={detail}/>
                    </div>

                    <div
                        className={toggleState === 2 ? `${styles.content_tabs} ${styles.active_content}` : `${styles.content_tabs}`}
                    >
                        <Logs logDetail={logDetail} setLogDetail={setLogDetail}/> 
                    </div>
                </div>
            
        </div>
        </div>
    )
}

export default Activities_tabs;