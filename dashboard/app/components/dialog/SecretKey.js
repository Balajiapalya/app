import styles from '../../styles/model.module.css'
import { useEffect, useState, useRef } from 'react'
import Api from '../api/api'

const SecretKey = ({ setNewToken, closetoken, res }) => {
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
        document.body.style.overflow = 'scroll'
        setNewToken(false);
        closetoken(false);
    }
    return (

        <div className={styles.body}>
            <div className={styles.model_nav}>
                <a className={styles.model_close} role="button" onClick={() => setNewToken(false)}><img src="images/asset_status/iconClose.png" alt='icon' /> </a>
            </div>
            <div className={`${styles.editpaymentdetials} ${styles.secret}`}>
                <h2>Below is the new Access Token:</h2>
                <h3>Access Token ID:</h3>
                <input ref={refOne} defaultValue={res.accessTokenId} readOnly />
                <img onClick={() => copyText()} className={styles.imgCopy} src="images/favicon/copy.png" />
                <h3>Secret Key:</h3>
                <h4>We don&apos;t store the secret key. Please copy or download it into your system</h4>
                <input ref={refTwo} defaultValue={res.secretKey} readOnly />
                <img onClick={() => copyTwo()} className={styles.imgCopy} src="images/favicon/copy.png" />
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