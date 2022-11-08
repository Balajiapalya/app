import styles from '../../styles/model.module.css'
import Link from 'next/link'
import Api from '../api/api'
import {useEffect} from 'react'



export default function Removeuser({ closeremoveuser, item,setToastMsg }) {
  useEffect(()=>{
    const handleEsc=(e)=>{
      if(e.keyCode===27){
        closeremoveuser(false)
      }
    }
    document.addEventListener('keydown',handleEsc)
    return()=>{
      document.removeEventListener('keydown',handleEsc)
    }
  },[])

  const handleDelete = (del) => {
    // let del = [item.email]
    let arr=[]
    arr.push(del)
    if(arr.length>0){
    Api.Remove_user_data(arr).then(res => {
      setToastMsg(true)
      closeremoveuser(false)
    })
  }
  }
  return (
    <div className={`${styles.model} ${styles.remove_user_modal}`} >
      <div className={styles.model_container}>
        <div className={styles.model_main}>
          <div className={styles.model_nav}>
            <h3 className={styles.model_title}>Remove User</h3>
            <a className={styles.model_close} onClick={() => closeremoveuser(false)}><img src="/images/close.svg" alt='icon' /> </a>
          </div>

          <div className={styles.model_removeuser}>
            <h4 className={styles.model_removeusername}>Are you sure you want to remove user?</h4>
            <p className={styles.model_data}>Once removed, this user will no longer be able to access this organisation on Videograph.</p>
          </div>
          <div className={styles.model_btn}>
            <a><button type="button" className={`${styles.model_canel_btn} btn btn-primary`} onClick={() => closeremoveuser(false)}>Cancel</button></a>
            <a><button type="button" onClick={() => handleDelete(item.email)} className={`${styles.model_save_btn} btn btn-primary`} >Yes, remove</button></a>
          </div>
        </div>
      </div>
    </div>
  )
}