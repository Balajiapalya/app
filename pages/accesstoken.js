import styles from '../styles/model.module.css'
import Signingkey from './signingkey'

export default function Accesstoken() {
    return (
    <div className={`${styles.container} ${styles.accesstoken_model}`}>
       <div className={styles.body}>
       <div className={styles.model_nav}>
       <a href="#" className={styles.model_close}  role="button"><img src="close.png"/> </a>
       </div>
       <div className={styles.main}>
       <h3 className={styles.model_title}>New Access Token</h3>
       <label className={styles.model_label}>Environment</label>
       <div className={styles.select}>
       <select name="product"  className={`${styles.development} ${styles.model_selection}`}>
        <option value="1">Development</option>
        <option value="video">video</option>
        <option value="3">3</option>
        <option value="4">4</option>
        </select>
       <img className={styles.file} src="Icon awesome-folder.png"></img>
       </div>
       <button type="text" className={styles.up}><img src="updown.png"></img></button>
       <div className={styles.access_token}>
       <h4 className={styles.access_token_permission}>Permission</h4>
       <p className={styles.access_token_link}>To know more permission please visit our <a href="" className={styles.access_token_data}>token access guide</a></p>
       </div>
       <div className={styles.access_token_checkbox}>
       <input type="checkbox"  name="video" id="video" value="video"/>
        <label htmlFor="video"> video</label><br/>
        <input type="checkbox" className={styles.read} name="read" id="read" value="read"/>
        <label htmlFor="read" > read</label><br/>
        <input type="checkbox" className={styles.write} name="write" id="write" value="write"/>
        <label htmlFor="write" >write</label><br/>
        <input type="checkbox" name="data" id="data" value="data"/>
        <label htmlFor="data">Data(read-only)</label>                 
       </div>
       <label className={styles.model_label}>Access token name</label>
       <input type="text" className={`${styles.model_input} form_control`} name="name" placeholder="Development"/>
        <div className={styles.model_btn}>
        <button type="button" className={`${styles.model_canel_btn} btn btn-primary`}>Cancel</button>
        <button type="button" className={`${styles.model_save_btn} btn btn-primary`}>create Token</button>
        </div>

       </div>

       </div>

       
    </div>

      
     
                             
     ) }