import { Fragment } from "react";
import styles from '../../../styles/signinkeys.module.css';
import { useState } from "react";
import Newkey from "../../../pages/newkey";
import Revoke from "../../../pages/detelekey";

function Signingkeys() {
    const[opensigninkeys,setopensigninkeys]=useState(false);
    const[removekeys,setremovekeys]=useState(false);
    return (
        <Fragment>
            <section className={styles.wrapper_signing_keys}>
                <div className={styles.head}>
                    <p>Signin keys are used to sign JSON Web Tokens (JWTs) for securing certain requests. Video keys can be used to secure playback URLs,and Data keys can be used to secure access to real-time viewer counts.</p>
                    <button className="btn" onClick={()=>setopensigninkeys(true)}>Create new Key</button>
                </div>
                {opensigninkeys && <Newkey closesigninkeys={setopensigninkeys}/>}
                <div className={styles.table}>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Environment</th>
                                <th>Product</th>
                                <th>Created</th>
                                <th>Created by</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>z1Muinv5aRYjoEZESjgfaqa00pyaybPKRGFyHzP00</td>
                                <td>Development</td>
                                <td>Video</td>
                                <td>10/21/2021</td>
                                <td>anil@yupptv.com</td>
                                <td>
                                    <a onClick={()=>setremovekeys(true)}><img src="Icon material-delete.png"></img></a>
                                </td>
                                
                            </tr>
                            <tr>
                                <td>z1Muinv5aRYjoEZESjgfaqa00pyaybPKRGFyHzP00</td>
                                <td>Production</td>
                                <td>Data</td>
                                <td>10/21/2021</td>
                                <td>anil@yupptv.com</td>
                                <td>

                                <a onClick={()=>setremovekeys(true)}><img src="Icon material-delete.png"></img></a>
                                </td>
                            </tr>
                            <tr>
                                <td>z1Muinv5aRYjoEZESjgfaqa00pyaybPKRGFyHzP00</td>
                                <td>UAT</td>
                                <td>Video</td>
                                <td>10/21/2021</td>
                                <td>anil@yupptv.com</td>
                                <td>

                                <a onClick={()=>setremovekeys(true)}><img src="Icon material-delete.png"></img></a>
                                </td>
                            </tr>
                            <tr>
                                <td>z1Muinv5aRYjoEZESjgfaqa00pyaybPKRGFyHzP00</td>
                                <td>UAT</td>
                                <td>Data</td>
                                <td>10/21/2021</td>
                                <td>anil@yupptv.com</td>
                                <td>

                                <a onClick={()=>setremovekeys(true)}><img src="Icon material-delete.png"></img></a>
                                </td>
                            </tr>
                            <tr>
                                <td>z1Muinv5aRYjoEZESjgfaqa00pyaybPKRGFyHzP00</td>
                                <td>Development</td>
                                <td>Data</td>
                                <td>10/21/2021</td>
                                <td>anil@yupptv.com</td>
                                <td>

                                <a onClick={()=>setremovekeys(true)}><img src="Icon material-delete.png"></img></a>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                {removekeys && <Revoke closereovekeys={setremovekeys}/>}
            </section>
        </Fragment>
    )
}
export default Signingkeys;