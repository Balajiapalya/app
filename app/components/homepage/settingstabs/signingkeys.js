import { Fragment } from "react";
import styles from '../../../styles/signinkeys.module.css';
import { useState,useEffect } from "react";
import Create_signing_key from "../../../pages/settings/Create_signing_key";
import Delete_signing_key from "../../dialog/Delete_signing_key";
import Api from "../../api/api";

function Signingkeys() {
    const[opensigninkeys,setopensigninkeys]=useState(false);
    const[removekeys,setremovekeys]=useState(false);

    useEffect(()=>{
       
        // Api.Get_sigin_keys()
        //     .then(res=>{
        //     })
    },{})
    return (
        <Fragment>
            <section className={styles.wrapper_signing_keys}>
                <div className={styles.head}>
                    <p>Signin keys are used to sign JSON Web Tokens (JWTs) for securing certain requests. Video keys can be used to secure playback URLs,and Data keys can be used to secure access to real-time viewer counts.</p>
                    <button className="btn" onClick={()=>setopensigninkeys(true)}>Create new Key</button>
                </div>
                {opensigninkeys && <Create_signing_key closesigninkeys={setopensigninkeys}/>}
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
                                    <a onClick={()=>setremovekeys(true)}><img src="Images/Icon material-delete.png" alt="icon"></img></a>
                                </td>
                                
                            </tr>
                            <tr>
                                <td>z1Muinv5aRYjoEZESjgfaqa00pyaybPKRGFyHzP00</td>
                                <td>Production</td>
                                <td>Data</td>
                                <td>10/21/2021</td>
                                <td>anil@yupptv.com</td>
                                <td>

                                <a onClick={()=>setremovekeys(true)}><img src="Images/Icon material-delete.png" alt="icon"></img></a>
                                </td>
                            </tr>
                            <tr>
                                <td>z1Muinv5aRYjoEZESjgfaqa00pyaybPKRGFyHzP00</td>
                                <td>UAT</td>
                                <td>Video</td>
                                <td>10/21/2021</td>
                                <td>anil@yupptv.com</td>
                                <td>

                                <a onClick={()=>setremovekeys(true)}><img src="Images/Icon material-delete.png" alt="icon"></img></a>
                                </td>
                            </tr>
                            <tr>
                                <td>z1Muinv5aRYjoEZESjgfaqa00pyaybPKRGFyHzP00</td>
                                <td>UAT</td>
                                <td>Data</td>
                                <td>10/21/2021</td>
                                <td>anil@yupptv.com</td>
                                <td>

                                <a onClick={()=>setremovekeys(true)}><img src="Images/Icon material-delete.png" alt="icon"></img></a>
                                </td>
                            </tr>
                            <tr>
                                <td>z1Muinv5aRYjoEZESjgfaqa00pyaybPKRGFyHzP00</td>
                                <td>Development</td>
                                <td>Data</td>
                                <td>10/21/2021</td>
                                <td>anil@yupptv.com</td>
                                <td>

                                <a onClick={()=>setremovekeys(true)}><img src="Images/Icon material-delete.png" alt="icon"></img></a>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                {removekeys && <Delete_signing_key closereovekeys={setremovekeys}/>}
            </section>
        </Fragment>
    )
}
export default Signingkeys;