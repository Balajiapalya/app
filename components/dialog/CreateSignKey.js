import styles from '../../styles/model.module.css'
import { useEffect, useState, useRef } from 'react'


const CreateSignKey = ({ setOpenCreate, signRes, closesigninkeys }) => {
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
        let signingKeyId = refSign.current.value;
        let privateKey = atob(refKey.current.value);
        const signElement = document.createElement('a')
        const file = new Blob(['VIDEOGRAPH_SIGNING_KEY_ID=', signingKeyId, '\n', 'PRIVATE_KEY=', privateKey], { type: "text/plain;charset-utf-8" });
        signElement.href = URL.createObjectURL(file);
        signElement.setAttribute('download', 'Signinkey.pem');
        document.body.appendChild(signElement);
        signElement.click()
    }
    return (
        <div className={`${styles.editpaymentdetials} ${styles.secret}`}>
            <div className={styles.body}>
                <div className={styles.model_nav}>
                    <a className={styles.model_close} onClick={() => setOpenCreate(false)}><img src="images/close.png" alt='icon' /> </a>
                </div>
                <h2>Here&apos;s your new Signinkey Token:</h2>
                <h3>Signin Key Id:</h3>
                <input ref={refSign} defaultValue={signRes.signingKeyId} readOnly />
                <img onClick={() =>  copySignKey()} className={styles.imgCopy} src="images/favicon/copy.png" />
                <h3>Private Key:</h3>
                <h4>We don&apos;t store this so please memorize it...</h4>
                <input ref={refKey} defaultValue={signRes.privateKey} readOnly />
                <img onClick={() => privateKey()} className={styles.imgCopy} src="images/favicon/copy.png" />
                <button onClick={() => downloadFile()} className={styles.butn}>Download as .pem file</button>
                <br />
                <button onClick={() => `${closesigninkeys(false)} ${setOpenCreate(false)}`} className={styles.btn}>Continue</button>
            </div>
        </div>
    )
}
export default CreateSignKey