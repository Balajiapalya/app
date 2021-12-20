import styles from '../styles/model.module.css'

export default function Paymenthistory() {
    return (
        <div className={`${styles.model} ${styles.paymenthistory}`}>
        <div className={styles.model_main}>
             <div className={styles.model_nav}>
             <h3 className={styles.model_title}>Payment History</h3>
             <a href="" className={styles.model_close}   role="button"><img src="close.png"/> </a>
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
               <button type="button" className={`${styles.model_canel_btn} btn btn-primary`}>Done</button>

                </div>
        </div>
         

    </div>


)}
        

        