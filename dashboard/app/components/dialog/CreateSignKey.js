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
        document.execCommand('copy')
    }
    const copySignKey = () => {
        refSign.current.select()
        document.execCommand('copy')
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
                <a className={styles.model_close} onClick={() => {`${setOpenCreate(false)} ${closesigninkeys(false)}`}}><Image src="/images/asset_status/iconClose.svg" alt='icon' width='20' height='20'/> </a>
            </div>
            <div className={`${styles.editpaymentdetials} ${styles.secret}`}>
                <h2>Below is your new Signinkey Key:</h2>
                <h3>Signin Key ID:</h3>
                <input ref={refSign} defaultValue={signRes.signingKeyId} readOnly />
                <img onClick={() => copySignKey()} className={styles.imgCopy} src="/images/iconionic-ios-copy.svg" />
                <h3>Base64-encoded Private Key:</h3>
                <h4>We don&apos;t store the secret key. Please copy or download it into your system</h4>
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