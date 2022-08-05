import styles from '../../styles/model.module.css'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'


const CreateSignKey = ({ setOpenCreate, signRes, closesigninkeys,close }) => {
    let res;
    if (signRes.privateKey !== undefined) {
        res = atob(signRes.privateKey)
    }
    const refKey = useRef()
    const refSign = useRef()
    const privateKey = () => {
        refKey.current.select()
        document.execCommand('copy');
        let copy=document.querySelector('.copyTwo')
        copy.style.display='block'
        setTimeout(()=>{
            copy.style.display='none'
        },1000)
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(document.createRange());
        
    }
    const copySignKey = () => {
        refSign.current.select()
        document.execCommand('copy');
        let copy=document.querySelector('.copyCls')
        copy.style.display='block'
        setTimeout(()=>{
            copy.style.display='none'
        },1000)
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(document.createRange());
    }
    const downloadFile = () => {
        let privateKey = (refKey.current.value);
        const signElement = document.createElement('a')
        const file = new Blob([privateKey], { type: "text/plain;charset-utf-8" });
        signElement.href = URL.createObjectURL(file);
        signElement.setAttribute('download', `${signRes.signingKeyId}.pem`);
        document.body.appendChild(signElement);
        signElement.click()
    }
    const handleClose = () => {
        closesigninkeys(false);
        setOpenCreate(false)
        close()
    }
    return (

        <div className={styles.body}>
            <div className={styles.model_nav}>
                <a className={styles.model_close} onClick={() => handleClose()}><Image src="/images/asset_status/iconClose.svg" alt='icon' width='20' height='20'/> </a>
            </div>
            <div className={`${styles.editpaymentdetials} ${styles.secret}`}>
                <h2>Below is your new Signinkey Key:</h2>
                <div className={styles.accessCopy}>
                <h3>Signin Key ID:</h3>
                <div className={`${styles.copied} copyCls`} style={{display:'none'}}>Copied</div>
                </div>
                <input ref={refSign} defaultValue={signRes.signingKeyId} readOnly />
                <img onClick={() => copySignKey()} className={styles.imgCopy} src="/images/iconionic-ios-copy.svg" />
                <h3>Base64-encoded Private Key:</h3>
                <div className={styles.accessCopy}>
                <h4>We don&apos;t store the secret key. Please copy or download it into your system</h4>
                <div className={`${styles.copied} copyTwo`} style={{display:'none'}}>Copied</div>
                </div>
                <textarea ref={refKey} defaultValue={res} readOnly />
                <img onClick={() => privateKey()} className={`${styles.imgCopy} ${styles.copy}`} src="/images/iconionic-ios-copy.svg" />
                <br />
                <div className={`${styles.butn}`}>
                    <a onClick={() => downloadFile()}>Download as .pem file</a>
                </div>
                <br />
                <button onClick={() => handleClose()} className={styles.btn}>Done</button>
            </div>
        </div>
    )
}
export default CreateSignKey
