import styles from '../styles/model.module.css'

export default function Newmember({ closeModel }) {
  return (
    <div className={`${styles.model} ${styles.Newmember}`}>
      <div className={styles.model_main}>
        <div className={styles.model_nav}>
          <h3 className={styles.model_title}>Invite New Member</h3>
          <a className={styles.model_close} role="button" onClick={() => closeModel(false)} ><img src="close.png" /> </a>
        </div>
        <label className={styles.model_label}>Email Address</label>
        <input type="email" className={`${styles.model_input} form_control`} name="email" />
        <div>
          <label className={styles.model_label}>Role</label>
          <select name="roles" className={styles.model_selection}>
            <option value="1">1</option>
            <option value="admin">admin</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className={styles.model_btn}>
          <button type="button" className={`${styles.model_save_btn} btn btn-primary`} onClick={() => closeModel(false)} >Send Invitation</button>
        </div>
      </div>
    </div>
  )
}
