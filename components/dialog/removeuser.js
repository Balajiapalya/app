import styles from '../../styles/model.module.css'
import Link from 'next/link'
import Api from '../api/api'
import { useState } from 'react/cjs/react.production.min'


export default function Removeuser({ closeremoveuser ,item }) {
  
  const handleDelete=()=>{
    let del=[item.email]
    Api.Remove_user_data(del).then(res=>console.log(res))
    window.location.reload()
  }
  return (
    <div className={`${styles.model} ${styles.remove_user_modal}`} >
      <div className={styles.model_main}>
        <div className={styles.model_nav}>
          <h3 className={styles.model_title}>Remove User</h3>
          <a className={styles.model_close} onClick={() => closeremoveuser(false)}><img src="Images/close.png" alt='icon'/> </a>
        </div>

        <div className={styles.model_removeuser}>
          <h4 className={styles.model_removeusername}>Are you sure you want to remove user venkantesh ?</h4>
          <p className={styles.model_data}>Once removed,this user will no longer be able to access this organisation on Videograph.</p>
        </div>
        <div className={styles.model_btn}>
          <a><button type="button" className={`${styles.model_canel_btn} btn btn-primary`} onClick={() => closeremoveuser(false)}>Cancel</button></a>
          <a><button type="button" onClick={()=>handleDelete()} className={`${styles.model_save_btn} btn btn-primary`} >Yes, remove</button></a>
        </div>
      </div>
    </div>
  )
}