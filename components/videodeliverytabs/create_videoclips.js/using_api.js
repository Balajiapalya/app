import { Fragment } from "react";
import styles from '../../../styles/videodelivery_tabs.module.css';
import Link from "next/link";
function Using_api() {
  return (
 
  <div className={styles.Videodelivery_addnewassets}>
                    <div className={styles.post}>
                     
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
  )}
  export default Using_api;