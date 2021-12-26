import styles from '../styles/model.module.css'
import Link from 'next/link'

export default function Paymenthistory({closepaymenthistory}) {
  return (
    <div className={`${styles.model} ${styles.paymenthistory}`}>
      <div className={styles.model_main}>
        <div className={styles.model_nav}>
          <h3 className={styles.model_title}>Payment History</h3>
          <a className={styles.model_close} role="button" onClick={()=>closepaymenthistory(false)}><img src="close.png" /></a>
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Payment date</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.tr}>
              <td>12/23/24</td>
              <td>$10.00</td>
              <td><img src="download.png"></img></td>
            </tr>
            <tr>
              <td>12/23/2024</td>
              <td>$10.00</td>
              <td><img src="download.png"></img></td>
            </tr>
            <tr>
              <td>12/23/2024</td>
              <td>$10.00</td>
              <td><img src="download.png"></img></td>
            </tr>
          </tbody>
        </table>
        <div className={styles.model_btn}>
          <a onClick={()=>closepaymenthistory(false)}><button type="button" className={`${styles.model_canel_btn} btn btn-primary`}>Done</button></a>

        </div>
      </div>


    </div>


  )
}


