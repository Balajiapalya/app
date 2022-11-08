import { useEffect, useState } from "react";
import styles from '../../styles/tabs.module.css';
import Organisation from "./settingstabs/organization";
import Billing from "./settingstabs/billing";
import Billing_plans from "./settingstabs/billing_plans";
import Apiaccesstokes from "./settingstabs/Api_accesstokens";
import Webhooks from "./settingstabs/webhooks";
import Signingkeys from "./settingstabs/signingkeys";
import Api from "../api/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Tabs() {
  const [toggleState, setToggleState] = useState(1);
  const [page, setpage] = useState(false);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  useEffect(() => {
    subscribed()
  },[])
  const subscribed=()=>{
    Api.List_org_subscriptions()
      .then(res => {
        
        if (res.data.data[0].status == 'active') {
          setpage(true)
        }else{
          setpage(false)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
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
          {/* <Organisation /> */}
          {toggleState=== 1 ? <Organisation/>:null}
        </div>

        <div
          className={toggleState === 2 ? `${styles.content_tabs} ${styles.active_content}` : `${styles.content_tabs}`}
        >
          {/* <Billing /> */}
          {toggleState === 2 ? [page== true ? <Billing/>:<Billing_plans/>]:null}
          {/* <Billing_plans/> */}
          {/* {page ? <Billing /> : <Billing_plans />} */}
        </div>
        <div
          className={toggleState === 3 ? `${styles.content_tabs} ${styles.active_content}` : `${styles.content_tabs}`}
        >
          {/* <Apiaccesstokes /> */}
          {toggleState===3 ? <Apiaccesstokes/>:null}
        </div>
        <div
          className={toggleState === 4 ? `${styles.content_tabs} ${styles.active_content}` : `${styles.content_tabs}`}
        >
          {/* <Webhooks /> */}
          {toggleState===4 ? <Webhooks toast={toast}/>:null}
        </div>

        <div
          className={toggleState === 5 ? `${styles.content_tabs} ${styles.active_content}` : `${styles.content_tabs}`}
        >
          {/* <Signingkeys /> */}
          {toggleState === 5? <Signingkeys toast={toast}/>:null}
        </div>

      </div>
      <ToastContainer hideProgressBar={true}/>
    </div>
  )
}

export default Tabs;
