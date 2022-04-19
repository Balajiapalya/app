import styles from '../../styles/model.module.css'
import {useEffect,useState} from 'react'


const CreateSignKey = ({setOpenCreate}) => {
const [accessKey,setAccessKey]=useState()
   
    return (
        <div className={`${styles.editpaymentdetials} ${styles.secret}`}>
            <div className={styles.body}>
            <div className={styles.model_nav}>
               <a className={styles.model_close} onClick={()=>setOpenCreate(false)}><img src="Images/close.png" alt='icon' /> </a>
            </div>
                <h2>Here&apos;s your new Access Token:</h2>
                <h3>Access Token ID:</h3>
                <input />
                <img className={styles.imgCopy} src="Images/favicon/copy.png"/>
                <h3>Secret Key:</h3>
                <h4>We don&apos;t store this so please memorize it...</h4>
                <input />
                <img className={styles.imgCopy} src="Images/favicon/copy.png"/>
                <br/>
                <button className={styles.btn}>Continue</button>
            </div>
        </div>
    )
}
export default CreateSignKey