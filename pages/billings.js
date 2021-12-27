// import styles from '../styles/billings.module.css'

// export default function Billingss() {
//     return (
//         <div className={styles.container}>
//             <div className={styles.query}>
//                 <p>
//                     Manage Billing for both Video and Data plans here.Feel free to <a href="#">contact us</a> for any queries related billing.
//                 </p>
//                 <button>Edit Payment details</button>
//             </div>
//             <div className={styles.payment}>
//                 <h4>Next payment: Nov 08, 2021</h4>
//             </div>
//             <div className={styles.tables_left}>
//                 <div className={styles.Video_consumption}>
//                     <span className={styles.Video_consumption_heading}>Video Consumption</span>
//                     <span className={styles.Video_consumption_date}>(Oct 08-Nov 08 billing cycle)</span>
//                     <span> <a href="#">change Plan</a></span>
//                     <table>
//                         <tbody>

//                             <tr>
//                                 <td>Video added</td>
//                                 <td>0 min</td>
//                                 <td>at 0.05</td>
//                                 <td>$ 0.00</td>
//                             </tr>
//                             <tr>
//                                 <td>Video added(Live)</td>
//                                 <td>0min</td>
//                                 <td>at 0.05</td>
//                                 <td>$ 0.00</td>
//                             </tr>
//                             <tr>
//                                 <td>Video stored</td>
//                                 <td>60 min/month</td>
//                                 <td>at 0.03</td>
//                                 <td>$ 0.18</td>
//                             </tr>
//                             <tr>
//                                 <td>Video streamed</td>
//                                 <td>11min</td>
//                                 <td>at 0.0012</td>
//                                 <td>$ 0.01</td>
//                             </tr>
//                             <tr>
//                                 <td>videograph credit</td>
//                                 <td>$19.81 remaining</td>
//                                 <td></td>
//                                 <td>($0.19)</td>
//                             </tr>
//                             <tr className={styles.current_video_cost}>
//                                 <td >Current Video Cost</td>
//                                 <td></td>
//                                 <td></td>
//                                 <td>$ 0.00</td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//             <div className={styles.tables_right}>
//                 <div className={styles.payment_details}>
//                     <span className={styles.payment_details_heading}>Account Payment Details</span>

//                     <span> <a href="#">Veiw Payment history</a></span>
//                     <table>
//                         <tbody>
//                             <tbody>
//                                 <tr>
//                                     <td>Card</td>
//                                     <td className={styles.text_align}><img src="Icon awesome-cc-visa.png"></img>4845</td>
//                                 </tr>
//                                 <tr>
//                                     <td>Expiration Date</td>
//                                     <td className={styles.text_align} >01/2027</td>
//                                 </tr>
//                                 <tr>
//                                     <td>Email</td>
//                                     <td className={styles.text_align}>anil@yupptv.com</td>
//                                 </tr>
//                                 <tr>
//                                     <td>Zip code</td>
//                                     <td className={styles.text_align}>30022</td>
//                                 </tr>
//                                 <tr>
//                                     <td>Billing Address</td>
//                                     <td className={styles.text_align}>11175 cecrioro drive in</td>
//                                 </tr>
//                                 <tr>
//                                     <td>Billing Address 2</td>
//                                     <td className={styles.text_align}>suit 100</td>
//                                 </tr>
//                                 <tr>
//                                     <td>City</td>
//                                     <td className={styles.text_align}>Alpharetta</td>
//                                 </tr>
//                                 <tr>
//                                     <td>State</td>
//                                     <td className={styles.text_align}>Georgia</td>
//                                 </tr>
//                                 <tr>
//                                     <td>Country</td>
//                                     <td className={styles.text_align}>United States</td>
//                                 </tr>
//                             </tbody>
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//             <div className={styles.data_consumption}>
//                 <span className={styles.data_consumption_heading}>Data Consumption</span>
//                 <span className={styles.data_consumption_date}>(Oct 08-Nov 08 billing cycle)</span>
//                 <span> <a href="#">change Plan</a></span>
//                 <table>
//                     <tbody>
//                         <tbody>
//                             <tr>
//                                 <td>Subscription Plan</td>
//                                 <td>Starter(monthly)</td>
//                                 <td>($ 0.00) paid</td>

//                             </tr>
//                             <tr>
//                                 <td>Total Views</td>
//                                 <td>0 Views</td>
//                                 <td>at 0.05</td>

//                             </tr>
//                             <tr>
//                                 <td>Views from MUX Video(free)</td>
//                                 <td>0 views</td>
//                                 <td></td>

//                             </tr>
//                             <tr>
//                                 <td>Views covered by plan</td>
//                                 <td>0 views</td>
//                                 <td>at 0.0012</td>

//                             </tr>
//                             <tr>
//                                 <td ><b>Current Video Cost</b></td>
//                                 <td ></td>
//                                 <td><b>$ 0.00</b></td>
//                             </tr>
//                         </tbody>
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     )
// }