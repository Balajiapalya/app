import styles from '../../styles/model.module.css'
import {useEffect,useState,useRef} from 'react'


const CreateSignKey = ({setOpenCreate,signRes}) => {
    console.log(signRes)
    const refKey=useRef()
    const refSign=useRef()
const privateKey=()=>{
refKey.current.select()
document.execCommand('copy')
}
const copySignKey=()=>{
    refSign.current.select()
    document.execCommand('copy')
    }
    return (
        <div className={`${styles.editpaymentdetials} ${styles.secret}`}>
            <div className={styles.body}>
            <div className={styles.model_nav}>
               <a className={styles.model_close} onClick={()=>setOpenCreate(false)}><img src="images/close.png" alt='icon' /> </a>
            </div>
                <h2>Here&apos;s your new Access Token:</h2>
                <h3>Access Token ID:</h3>
                <input ref={refKey} defaultValue={signRes.privateKey} readOnly/>
                <img onClick={()=>privateKey()} className={styles.imgCopy} src="images/favicon/copy.png"/>
                <h3>Secret Key:</h3>
                <h4>We don&apos;t store this so please memorize it...</h4>
                <input ref={refSign} defaultValue={signRes.signingKeyId} readOnly/>
                <img onClick={()=>copySignKey()} className={styles.imgCopy} src="images/favicon/copy.png"/>
                <br/>
                <button className={styles.btn}>Continue</button>
            </div>
        </div>
    )
}
export default CreateSignKey