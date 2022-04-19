import styles from '../../styles/model.module.css'
import {useEffect,useState,useRef} from 'react'
import Api from '../api/api'

const SecretKey = ({setNewToken,closetoken,res}) => {
    const refOne=useRef()
    const refTwo=useRef()
    const copyText=()=>{
        refOne.current.select()
        document.execCommand('copy');
        
    }
    const copyTwo=()=>{
        refTwo.current.select()
        document.execCommand('copy');
        
    }
    return (
        <div className={`${styles.editpaymentdetials} ${styles.secret}`}>
            <div className={styles.body}>
            <div className={styles.model_nav}>
               <a className={styles.model_close} role="button" onClick={() => setNewToken(false)}><img src="images/close.png" alt='icon' /> </a>
            </div>
                <h2>Here&apos;s your new Access Token:</h2>
                <h3>Access Token ID:</h3>
                <input ref={refOne} defaultValue={res.accessTokenId} readonly/>
                <img onClick={()=>copyText()} className={styles.imgCopy} src="images/favicon/copy.png"/>
                <h3>Secret Key:</h3>
                <h4>We don&apos;t store this so please memorize it...</h4>
                <input ref={refTwo} defaultValue={res.secretKey} readonly/>
                <img onClick={()=>copyTwo()} className={styles.imgCopy} src="images/favicon/copy.png"/>
                <br/>
                <button onClick={() => `${setNewToken(false)} ${closetoken(false)}`} className={styles.btn}>Continue</button>
            </div>
        </div>
    )
}
export default SecretKey