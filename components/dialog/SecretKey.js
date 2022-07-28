import styles from '../../styles/model.module.css'
import styleDis from '../../styles/apiaccess.module.css'
import { useEffect, useState, useRef } from 'react'
import Api from '../api/api'
import Image from 'next/image'

const SecretKey = ({ setNewToken, closetoken,close, res }) => {
    const refOne = useRef()
    const refTwo = useRef()
    const copyText = () => {
        refOne.current.select()
        document.execCommand('copy');

    }
    const copyTwo = () => {
        refTwo.current.select()
        document.execCommand('copy');

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
        close()
        let key=document.querySelector('.secretKey')
        key.classList.remove(`${styleDis.display}`)
        key.classList.add(`${styleDis.no_display}`)
    }
    const handlePrevious=()=>{
        // setNewToken(false)
        closetoken(false)
        let key=document.querySelector('.secretKey')
        key.classList.remove(`${styleDis.display}`)
        key.classList.add(`${styleDis.no_display}`)
    }
    return (

        <div className={`${styles.body} secretKey`}>
            <div className={styles.model_nav}>
                <a className={styles.model_close} role="button" onClick={() => handlePrevious()}><Image src="/images/asset_status/iconClose.svg" alt='icon' width='20' height='20'/> </a>
            </div>
            <div className={`${styles.editpaymentdetials} ${styles.secret}`}>
                <h2>Below is the new Access Token:</h2>
                <h3>Access Token ID:</h3>
                <input ref={refOne} defaultValue={res.accessTokenId} readOnly />
                <img onClick={() => copyText()} className={styles.imgCopy} src="/images/iconionic-ios-copy.svg" />
                <h3>Secret Key:</h3>
                <h4>We don&apos;t store the secret key. Please copy or download it into your system</h4>
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