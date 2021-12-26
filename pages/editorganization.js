import styles from '../styles/model.module.css'
import Link from 'next/link'

export default function Editorganization({closeorganization}) {
    return (
        <div className={styles.model}>
            <div className={styles.model_main}>
                 <div className={styles.model_nav}>
                 <h3 className={styles.model_title}>Edit Organisation Name</h3>
                 <a  className={styles.model_close} onClick={()=>closeorganization(false)} ><img src="close.png"/> </a>
                 </div>
        
                  <label className={styles.model_label}>Organisation Name</label>
                  <input type="text" className={`${styles.model_input} form_control`}/>
                   <div className={styles.model_btn}>
                  <a><button type="button" className={`${styles.model_canel_btn} btn btn-primary`} onClick={()=>closeorganization(false)}>Cancel</button></a>
                  <a> <button type="button" className={`${styles.model_save_btn} btn btn-primary`} onClick={()=>closeorganization(false)}>Save Changes</button></a>
                    </div>
            </div>
             

        </div>


    )}