import { useState } from "react";
import styles from '../../styles/tabs.module.css';
import Events from "./events&logs/events";
import Logs from "./events&logs/logs";

function Events_logs_tabs() {
  const [toggleState, setToggleState] = useState(1);
  const [close, set_close] = useState(true);
  const [open, set_open] = useState(false);

  const toggleTab = (index) => {
      
    setToggleState(index);
    set_close(true);
    set_open(false);

  };

  return (
    <div className={styles.events_logs}>
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
            <Events toggleState={toggleState} close={close} set_close={set_close} open={open} set_open={set_open}/>
            {/* <Organisation /> */}
          </div>

          <div
            className={toggleState === 2 ? `${styles.content_tabs} ${styles.active_content}` : `${styles.content_tabs}`}
          >
            <Logs close={close} set_close={set_close} open={open} set_open={set_open} />
            {/* <Billing /> */}
          </div>



        </div>
      </div>
    </div>
  )
}

export default Events_logs_tabs;
