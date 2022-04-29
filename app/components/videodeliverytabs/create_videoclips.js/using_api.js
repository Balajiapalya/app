import { Fragment } from "react";
import styles from '../../../styles/videodelivery_tabs.module.css';
import Link from "next/link";
import { useState } from "react";
function Using_api() {
    const [toggleposition, settoggleposition] = useState(2);
    const togglebtn = (index) => {
        settoggleposition(index);
    }
    return (

        <div className={styles.Videodelivery_addnewassets}>
            <div className={styles.post}>

                <div className={styles.language_select}>
                    <button className={toggleposition == 1 ? `${styles.model_btn} ${styles.active}` : `${styles.model_btn}`} onClick={() => togglebtn(1)}><img className={styles.languge_img} src='/images/python.png' alt='python' />Python</button>
                    <button className={toggleposition == 2 ? `${styles.model_btn} ${styles.active}` : `${styles.model_btn}`} onClick={() => togglebtn(2)}><img className={styles.languge_img} src='/images/node-js.png' alt='node' />Node</button>
                    <button className={toggleposition == 3 ? `${styles.model_btn} ${styles.active}` : `${styles.model_btn}`} onClick={() => togglebtn(3)}><img className={styles.languge_img} src='/images/php.png' alt='php' />Php</button>
                    <button className={toggleposition == 4 ? `${styles.model_btn} ${styles.active}` : `${styles.model_btn}`} onClick={() => togglebtn(4)}><img className={styles.languge_img} src='/images/go.png' alt='go' />Go</button>
                </div>
                <div className={styles.code}>


                </div>
                <button className={styles.btn}>Run Request</button>
            </div>
        </div>
    )
}
export default Using_api;