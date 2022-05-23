import { useEffect, useState } from 'react';
import styles from '../../styles/model.module.css';
import Api from '../api/api';

export default function Payment_history({ closepaymenthistory }) {
  const [paymenthistory, setpaymenthistory] = useState([]);
  const createdDate = (date) => {
    var d = new Date(date);
    return d.toLocaleString();
  }
  useEffect(() => {
    Api.Payment_history()
      .then(res => {
        // console.log(res.data.data)
        setpaymenthistory(res.data.data)
      })
  }, [])
  return (
    <div className={`${styles.model} ${styles.paymenthistory}`}>
      <div className={styles.model_container}>
        <div className={styles.model_main}>
          <div className={styles.model_nav}>
            <h3 className={styles.model_title}>Payment History</h3>
            <a className={styles.model_close} role="button" onClick={() => closepaymenthistory(false)}><img src="images/close.svg" alt='close' /></a>
          </div>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Payment date</th>
                <th>Amount</th>
                <th>Actions</th>
              </tr>
            </thead>
            {paymenthistory.map((items, id) =>
              <tbody key={id}>
                <tr className={styles.tr}>
                  <td>{createdDate(items.paymentDate)}</td>
                  <td>{items.amount} {items.currency}</td>
                  <td><a href={items.downloadableInvoiceUrl} target='_blank' rel="noreferrer" download='invoice'><img src="images/download.svg" alt='icon'></img></a></td>
                </tr>

              </tbody>
            )}
          </table>
          <div className={styles.model_btn}>
            <a onClick={() => closepaymenthistory(false)}><button type="button" className={`${styles.model_canel_btn} btn btn-primary`}>Done</button></a>

          </div>
        </div>
      </div>
    </div>
  )
}


