import { useState } from "react";
import styles from '../../styles/tabs.module.css';
import Organisation from "./settingstabs/organization";
import Billing from "./settingstabs/billing";
import Apiaccesstokes from "./settingstabs/apiaccesstokens";
import Webhooks from "./settingstabs/webhooks";
import Signingkeys from "./settingstabs/signingkeys";

function Tabs() {
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
          <span>Organization</span>
        </button>
        <button
          className={toggleState === 2 ? `${styles.tabs_item} ${styles.active_tabs}` : `${styles.tabs_item}`}
          onClick={() => toggleTab(2)}
        >
          <span>Billing</span>
        </button>
        <button
          className={toggleState === 3 ? `${styles.tabs_item} ${styles.active_tabs}` : `${styles.tabs_item}`}
          onClick={() => toggleTab(3)}
        >
          <span>API Access Tokens</span>
        </button>
        <button
          className={toggleState === 4 ? `${styles.tabs_item} ${styles.active_tabs}` : `${styles.tabs_item}`}
          onClick={() => toggleTab(4)}
        >
          <span>Webhooks</span>
        </button>
        <button
          className={toggleState === 5 ? `${styles.tabs_item} ${styles.active_tabs}` : `${styles.tabs_item}`}
          onClick={() => toggleTab(5)}
        >
          <span>Signing Keys</span>
        </button>
      </div>

      <div className={styles.content_tabs_area}>
        <div
          className={toggleState === 1 ? `${styles.content_tabs} ${styles.active_content}` : `${styles.content_tabs}`}
        >
          <Organisation />
        </div>

        <div
          className={toggleState === 2 ? `${styles.content_tabs} ${styles.active_content}` : `${styles.content_tabs}`}
        >
          <Billing />
        </div>

        <div
          className={toggleState === 3 ? `${styles.content_tabs} ${styles.active_content}` : `${styles.content_tabs}`}
        >
          <Apiaccesstokes />
        </div>

        <div
          className={toggleState === 4 ? `${styles.content_tabs} ${styles.active_content}` : `${styles.content_tabs}`}
        >
          <Webhooks />
        </div>

        <div
          className={toggleState === 5 ? `${styles.content_tabs} ${styles.active_content}` : `${styles.content_tabs}`}
        >
          <Signingkeys />
        </div>

      </div>
    </div>
  )
}

export default Tabs;