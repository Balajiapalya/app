import styles from '../styles/model.module.css'

export default function Editorganization() {
    return (
        <div className={styles.model}>
            <div className={styles.model_main}>
                 <div className={styles.model_nav}>
                 <h3 className={styles.model_title}>Edit Organisation Name</h3>
                 <a href="#" className={styles.model_close}><img src="close.png"/> </a>
                 </div>
        
                  <label className={styles.model_label}>Organisation Name</label>
                  <input type="text" className={`${styles.model_input} form_control`}/>
                   <div className={styles.model_btn}>
                   <button type="button" className={`${styles.model_canel_btn} btn btn-primary`}>Cancel</button>
                    <button type="button" className={`${styles.model_save_btn} btn btn-primary`}>Save Changes</button>
                    </div>
            </div>
             

        </div>


    )}