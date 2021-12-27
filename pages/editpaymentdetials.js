import styles from '../styles/model.module.css'


export default function Editpaymentdetials({closepaymentdetails}) {
  return (
    <div className={`${styles.container} ${styles.editpaymentdetials}`}>
      <div className={styles.body}>
        <div className={styles.model_nav}>
          <a className={styles.model_close} role="button" onClick={()=>closepaymentdetails(false)}><img src="close.png" alt='icon'/> </a>
        </div>
        <div className={styles.main}>
          <h3 className={styles.model_title}>Edit Payment Details</h3>
          <form>
            <label className={styles.model_label}>Credit or Debit Card</label>
            <div className={styles.cerditcard_number}>
              <input type="text" className={`${styles.model_input} form_control`} name="cardnumber" placeholder="Cardnumber" />
              <img className={styles.file} src="credit-card.png" alt='icon' ></img>
            </div>
            <div className={styles.card}>
              <div className={styles.expiration_date}>
                <label className={styles.model_label} > Expiration Date</label>
                <input type="text" className={`${styles.model_input} form_control`} name="Expiration Date" placeholder="MM/YY" />
              </div>
              <div className={styles.cvv}>
                <label className={styles.model_label}>CVV</label>
                <input type="text" className={`${styles.model_input} form_control`} name="CVV" placeholder="CVV number" />
              </div>
            </div>
            <label className={styles.model_label}>Billing Address</label>
            <input type="text" className={`${styles.model_input} form_control`} name="billing address" placeholder="Street address, P.O box,company" />
            <label className={styles.model_label}>Billing Address 2</label>
            <input type="text" className={`${styles.model_input} form_control`} name="billing address" placeholder="Apartment number,Suite,Floor,Etc" />
            <div className={styles.detials}>
              <label className={styles.model_label}>City</label>
              <input type="text" className={`${styles.model_input} form_control`} name="City" placeholder="Enter City" />
            </div>
            <div className={styles.state}>
              <label className={styles.model_label}>State</label>
              <select name="state" placeholder="Selete state" className={styles.model_selection}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <label className={styles.model_label}>Country</label>
            <select name="Country" placeholder="Selete country" className={styles.model_selection}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <label className={styles.model_label}>Biling Email</label>
            <input type="text" className={`${styles.model_input} form_control`} name="email" placeholder="Enter email address"/>
            <div className={styles.model_btn}>
              <button onClick={()=>closepaymentdetails(false)} type="button" className={`${styles.model_canel_btn} btn btn-primary`}>Cancel</button>
              <button onClick={()=>closepaymentdetails(false)} type="button" className={`${styles.model_save_btn} btn btn-primary`}>Save Payment Detials</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}