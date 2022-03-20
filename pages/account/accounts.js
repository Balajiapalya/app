import styles from '../../styles/accounts.module.css';
import Layout from '../../components/common/layout';
import { useState } from 'react';

export default function Accounts() {
    const [password, set_password] = useState(true);
    const [change_password, set_change_password] = useState(false);
    return (
        <div className={styles.container}>

            <div className={styles.settings}>
                <div className={styles.padding}>
                    <div className={styles.header}>
                        <h2>
                            Accounts
                        </h2>
                        <h3>
                            Yupptv
                        </h3>
                    </div>


                    <div className={styles.border_bottom}>
                        <div className={styles.data}>
                            <p>An environment allows you to group your data. We have four types of environment Development,QA,Staging, and production.You can change the names or create additional envirnoments as needed.</p>
                        </div>
                        <div className={styles.logout}>
                            <img className={styles.logout_img} src="/Images/Icon feather-log-out(blue).png" alt="logout"></img>
                            <button>Log out</button>
                        </div>
                    </div>
                    <div className={styles.Accounts_detials}>
                        <div className={styles.detials}>
                            <div className={styles.personal_detials}>
                                <h2>Personal Detials</h2>
                                <form>
                                    <label className={styles.model_label}>First Name</label>
                                    <input type="text" className={`${styles.model_input} form_control`} name="firstname" placeholder="sunil" />

                                    <label className={styles.model_label}>Last Name</label>
                                    <input type="text" className={`${styles.model_input} form_control`} name="lastname" placeholder="Gavaskar" />

                                    <label className={styles.model_label}>Email</label>
                                    <input type="text" className={`${styles.model_input} form_control`} name="email" placeholder="sunil@gmail.com" />

                                    <div className={styles.model_btn}>
                                        <button type="submit" className={`${styles.model_save_btn} btn btn-primary`}>Save Changes</button>
                                    </div>
                                </form>
                            </div>
                            <div className={styles.organization}>
                                <h2>Organization</h2>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className={styles.title}>Apalya</td>

                                        </tr>
                                        <tr>
                                            <td className={styles.title}>YuppTv</td>

                                        </tr>
                                        <tr>
                                            <td className={styles.title}>YuppTv scope</td>

                                        </tr>
                                        <tr>
                                            <td className={styles.title}>Frindly Tv</td>

                                        </tr>
                                        <tr>
                                            <td className={styles.title}>SunNxt</td>

                                        </tr>
                                    </tbody>
                                </table>
                                <div className={styles.model_btn}>
                                    <button type="submit" className={`${styles.model_save_btn} btn btn-primary`}>Create Organization</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.manage_account}>
                            <h2>Manage Account</h2>
                            {change_password &&
                                <div className={styles.model_btn}>
                                    <button onClick={ ()=>{set_change_password(false);set_password(true)}} type="submit" className={`${styles.model_save_btn} btn btn-primary`}>Change Password</button>
                                </div>
                            }
                            {password &&
                                <div>
                                    <label className={styles.model_label}>Current Password</label>
                                    <input type="password" className={`${styles.model_input} form_control`} name="currentpassword" />


                                    <label className={styles.model_label}>New Password</label>
                                    <input type="password" className={`${styles.model_input} form_control`} name="Newpassword" />


                                    <label className={styles.model_label}>Confirm New Password</label>
                                    <input type="password" className={`${styles.model_input} form_control`} name="confirm password" />

                                    <div className={styles.model_btn}>
                                        <button onClick={ ()=>{set_change_password(true);set_password(false)}} type="submit" className={`${styles.model_save_btn} ${styles.bgcolor_blue} btn btn-primary`}>Change Password</button>
                                    </div>
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
Accounts.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}