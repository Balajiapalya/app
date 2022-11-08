import styles from '../styles/model.module.css'
import {useRouter} from 'next/router'
import { useEffect, useState, useRef } from 'react';

export default function UploadPopUp({setPopup,setReload,handlePopUp}) {
  const handleClose=()=>{
    setPopup(false);
    setReload(true)
    handlePopUp();
  }

  return (
    <div className={`${styles.model} ${styles.remove_user_modal}`} >
      <div className={styles.model_container}>
        <div className={styles.model_main}>
          <div className={styles.model_nav}>
            <h3 className={styles.model_title}>File Upload</h3>
            <a className={styles.model_close} onClick={() => handleClose()}><img src="/images/close.svg" alt='icon' /> </a>
          </div>

          <div className={styles.model_removeuser}>
            <h4 className={styles.model_removeusername}>Video file will be uploaded within few minutes..</h4>
          </div>
        </div>
      </div>
    </div>
  )
}