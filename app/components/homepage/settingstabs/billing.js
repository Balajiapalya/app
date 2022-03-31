import React, { Fragment, useEffect, useState } from "react";
import Edit_payment_detials from "../../../pages/settings/Edit_payment_detials";
import Payment_history from "../../dialog/payment_history";
import styles from '../../../styles/billings.module.css';
import Api from "../../api/api";

function Billing() {
    const [openpaymentdetails, setopenpaymentdetails] = useState(false);
    const [openpaymenthistory, setopenpaymenthistory] = useState(false);
    const [accDetails, set_accDetails] = useState([]);
    const [url, seturl] = useState("")
    const [date, set_date] = useState([]);
    const createdDate = (date) => {
        var d = new Date(date);
        return d.toLocaleString();
    }
    useEffect(() => {
        Api.Get_account_info()
            .then(res => {
                if (res.data.status = "Success") {
                    if(res&&res.data&&res.data.data&&res.data.data.billingInfo){
                        set_accDetails(res.data.data.billingInfo)
                        seturl(res.data.data.changeBillingUrl)
                    }
                    
                }
            })
            .catch(error => {
                console.log(error)
            })
        Api.List_org_subscriptions()
            .then(res => {
                set_date(res.data.data[0])
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    let email;
    if (process.browser) {
        email = localStorage.getItem("ownerEmail");
    }
    const ownerEmail = email;
    return (
        <Fragment>
            <div className={styles.container1}>
                <div className={styles.query}>
                    <p>
                        Manage Billing for both Video and Data plans here.Feel free   to <a href="#">contact us</a> for any queries related billing.
                    </p>
                    <a href={url}><button className="btn">Edit Payment details</button></a>
                </div>
                {openpaymentdetails && <Edit_payment_detials closepaymentdetails={setopenpaymentdetails} />}
                <div className={styles.payment}>
                    <h4>Next payment: {createdDate(date.cycleEndDate)}</h4>
                </div>
                <div className={styles.tables_left}>
                    <div className={styles.Video_consumption}>
                        <span className={styles.Video_consumption_heading}>Video Consumption</span>
                        <span className={styles.Video_consumption_date}>(Oct 08-Nov 08 billing cycle)</span>
                        <span> <a href="#">change Plan</a></span>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Video added</td>
                                    <td>0 min</td>
                                    <td>at 0.05</td>
                                    <td>$ 0.00</td>
                                </tr>
                                <tr>
                                    <td>Video added(Live)</td>
                                    <td>0min</td>
                                    <td>at 0.05</td>
                                    <td>$ 0.00</td>
                                </tr>
                                <tr>
                                    <td>Video stored</td>
                                    <td>60 min/month</td>
                                    <td>at 0.03</td>
                                    <td>$ 0.18</td>
                                </tr>
                                <tr>
                                    <td>Video streamed</td>
                                    <td>11min</td>
                                    <td>at 0.0012</td>
                                    <td>$ 0.01</td>
                                </tr>
                                <tr>
                                    <td>videograph credit</td>
                                    <td>$19.81 remaining</td>
                                    <td></td>
                                    <td>($0.19)</td>
                                </tr>
                                <tr className={styles.current_video_cost}>
                                    <td >Current Video Cost</td>
                                    <td></td>
                                    <td></td>
                                    <td>$ 0.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {openpaymenthistory && <Payment_history closepaymenthistory={setopenpaymenthistory} />}
                <div className={styles.tables_right}>
                    <div className={styles.payment_details}>
                        <span className={styles.payment_details_heading}>Account Payment Details</span>

                        <span className={styles.view_payment_history}> <a onClick={() => setopenpaymenthistory(true)}>Veiw Payment history</a></span>

                        <table>

                            <tbody>

                                <tr>
                                    <td>Card</td>
                                    <td className={styles.text_align}><img src="Images/Icon awesome-cc-visa.png" alt="icon"></img>{accDetails.lastFour}</td>
                                </tr>
                                <tr>
                                    <td>Expiration Date</td>
                                    <td className={styles.text_align} >{accDetails.expMonth}/{accDetails.expYear}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td className={styles.text_align}>{ownerEmail}</td>
                                </tr>
                                <tr>
                                    <td>Zip code</td>
                                    <td className={styles.text_align}>-</td>
                                </tr>
                                <tr>
                                    <td>Billing Address</td>
                                    <td className={styles.text_align}>-</td>
                                </tr>
                                <tr>
                                    <td>Billing Address 2</td>
                                    <td className={styles.text_align}>-</td>
                                </tr>
                                <tr>
                                    <td>City</td>
                                    <td className={styles.text_align}>-</td>
                                </tr>
                                <tr>
                                    <td>State</td>
                                    <td className={styles.text_align}>-</td>
                                </tr>
                                <tr>
                                    <td>Country</td>
                                    <td className={styles.text_align}>-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={styles.data_consumption}>
                    <span className={styles.data_consumption_heading}>Data Consumption</span>
                    <span className={styles.data_consumption_date}>(Oct 08-Nov 08 billing cycle)</span>
                    <span> <a href="#">change Plan</a></span>
                    <table>
                        <tbody>

                            <tr>
                                <td>Subscription Plan</td>
                                <td>Starter(monthly)</td>
                                <td>($ 0.00) paid</td>
                            </tr>
                            <tr>
                                <td>Total Views</td>
                                <td>0 Views</td>
                                <td>at 0.05</td>
                            </tr>
                            <tr>
                                <td className={styles.views}>Views from MUX Video(free)</td>
                                <td>0 views</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className={styles.views}>Views covered by plan</td>
                                <td>0 views</td>
                                <td>at 0.0012</td>
                            </tr>
                            <tr className={styles.current_video_cost}>
                                <td >Current Video Cost</td>
                                <td ></td>
                                <td>$ 0.00 </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    )
}

export default Billing;