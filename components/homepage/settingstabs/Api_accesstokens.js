import { Fragment } from "react";
import styles from '../../../styles/apiaccess.module.css';
import { useState } from "react";
import Accesstoken from "../../../pages/New_access_token";
import Revoke from "../../dialog/Revoke_access";
function Api_accesstokes() {
    const[opentoken,settoken]=useState(false);
    const[openrevoke,setrevoke]=useState(false);
    return (
        <Fragment>
            <section className={styles.wrapper_access_tokes}>
                <div className={styles.head}>
                    <p>You can create or  revoke API access tokens. Tokens are used to authenticate API request and are environment specific. To know more visit our <a href="#">guide</a>.</p>
                    <a><button className="btn" onClick={()=>settoken(true)}>Create new Token</button></a>
                </div>
                {opentoken && <Accesstoken closetoken={settoken}/>}
                <div className={styles.table}>
                    <table>
                        <thead>
                            <tr>
                                <th>Token ID</th>
                                <th>Environment</th>
                                <th>Permission</th>
                                <th>Created</th>
                                <th>Created by</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span className={styles.development}>Development</span><img src="Images/Icon material-edit.png" alt="icon"></img><br></br>
                                    <span className={styles.tokens}>a857d839-4a10-be9e-41b66cdde9ea</span>
                                </td>
                                <td>Development</td>
                                <td>Video
                                    <span>(read-only)</span>
                                </td>
                                <td>10/21/2021</td>
                                <td>anil@yupptv.com</td>
                                <td>Active</td>
                                <td><a onClick={()=>setrevoke(true)}>Revoke</a></td>
                            </tr>
                            {openrevoke && <Revoke closerevoke={setrevoke}/>}
                            <tr>
                                <td><span className={styles.border}>Development</span><a className={styles.save}>Save</a><br></br>
                                    <span className={styles.tokens}>a857d839-4a10-be9e-41b66cdde9ea</span>
                                </td>
                                <td>Development</td>
                                <td>
                                    <tr>Video<span>(read-only)</span></tr>
                                    <tr>Data<span>(read-only)</span></tr>
                                    <tr>System<span>(read-only)</span></tr>
                                </td>
                                <td>10/21/2021</td>
                                <td>anil@yupptv.com</td>
                                <td>Active</td>
                                <td><a onClick={()=>setrevoke(true)}>Revoke</a></td>
                            </tr>
                            <tr>
                                <td><span className={styles.development}>Development</span><img src="Images/Icon material-edit.png" alt="icon"></img><br></br>
                                    <span  className={styles.tokens}>a857d839-4a10-be9e-41b66cdde9ea</span>
                                </td>
                                <td>Development</td>
                                <td>Video</td>
                                <td>10/21/2021</td>
                                <td>anil@yupptv.com</td>
                                <td>Access Revoked</td>
                                <td><a href="#"></a></td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </section>
        </Fragment>
    )
}

export default Api_accesstokes;