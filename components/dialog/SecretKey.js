import styles from '../../styles/model.module.css'
import styleDis from '../../styles/apiaccess.module.css'
import { useEffect, useState, useRef } from 'react'
import Api from '../api/api'
import Image from 'next/image'

const SecretKey = ({ setNewToken, closetoken,close, res,popup }) => {
    const refOne = useRef()
    const refTwo = useRef()
    const copyText = () => {
        refOne.current.select()
        document.execCommand('copy');
        let copy=document.querySelector('.copyCls')
        copy.style.display='block'
        setTimeout(()=>{
            copy.style.display='none'
        },1000)
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(document.createRange());
    }
    const copyTwo = () => {
        refTwo.current.select()
        document.execCommand('copy');
        let copy=document.querySelector('.copyTwo')
        copy.style.display='block'
        setTimeout(()=>{
            copy.style.display='none'
        },1000)
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(document.createRange());
    }
    const downloadFile = () => {
        const access_id = refOne.current.value;
        const secret_key = refTwo.current.value;
        const element = document.createElement('a');
        const file = new Blob(['ACCESS_TOKEN_ID=', access_id, '\n', 'SECRET_KEY=', secret_key], {
            type: "text/plain;charset-utf-8"
        });
        element.href = URL.createObjectURL(file)
        element.setAttribute('download', `${res.name}.env`)
        document.body.appendChild(element)
        element.click()
    }
    const handleClose = () => {
        // setNewToken(false);
        closetoken(false);
        close();
        popup.classList.remove(`${styleDis.no_display}`);
        let key=document.querySelector('.secretKey')
        key.classList.remove(`${styleDis.display}`)
        key.classList.add(`${styleDis.no_display}`)
    }
   
    return (

        <div className={`${styles.body} secretKey`}>
            <div className={styles.model_nav}>
                <a className={styles.model_close} role="button" onClick={() => handleClose()}><Image src="/images/asset_status/iconClose.svg" alt='icon' width='20' height='20'/> </a>
            </div>
            <div className={`${styles.editpaymentdetials} ${styles.secret}`}>
                <h2>Below is the new Access Token:</h2>
                <div className={styles.accessCopy}>
                <h3>Access Token ID:</h3>
                <div className={`${styles.copied} copyCls`} style={{display:'none'}}>Copied</div>
                </div>
                <input ref={refOne} defaultValue={res.accessTokenId} readOnly />
                
                <img onClick={() => copyText()} className={styles.imgCopy} src="/images/iconionic-ios-copy.svg" />
                <h3>Secret Key:</h3>
                <div className={styles.accessCopy}>
                <h4>We don&apos;t store the secret key. Please copy or download it into your system</h4>
                <div className={`${styles.copied} copyTwo`} style={{display:'none'}}>Copied</div>
                </div>
                <input ref={refTwo} defaultValue={res.secretKey} readOnly />
                <img onClick={() => copyTwo()} className={styles.imgCopy} src="/images/iconionic-ios-copy.svg" />
                <br />
                <div className={styles.butn}>
                    <a onClick={() => downloadFile()}>Download as .env file</a>
                </div>
                <br />
                <button onClick={() => handleClose()} className={styles.btn}>Done</button>
            </div>
        </div>
    )
}
export default SecretKey