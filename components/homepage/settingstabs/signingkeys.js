import { Fragment } from "react";
import styles from '../../../styles/signinkeys.module.css';
import { useState, useEffect } from "react";
import Create_signing_key from "../../../pages/settings/Create_signing_key";
import Delete_signing_key from "../../dialog/Delete_signing_key";
import Api from "../../api/api";

function Signingkeys() {
    const [opensigninkeys, setopensigninkeys] = useState(false);
    const [removekeys, setremovekeys] = useState(false);
    const [keys, setkeys] = useState([]);
    const [obj, setObj] = useState([])
    const create_On = (date) => {
        var y = new Date(date)
        return y.toLocaleString("en-AU", { day: "2-digit", month: "2-digit", year: "numeric" })
    }
    useEffect(() => {
        Api.Get_sigin_keys()
            .then(res => {
                setkeys(res.data.data)

            })
    }, [opensigninkeys, removekeys])
    const handlePopUp=()=>{
        document.body.style.overflow='hidden'
        setopensigninkeys(true)
    }
    return (
        <Fragment>
            <section className={styles.wrapper_signing_keys}>
                <div className={styles.head}>
                    <p>Signin keys are used to sign JSON Web Tokens (JWTs) for securing certain requests. Video keys can be used to secure playback URLs,and Data keys can be used to secure access to real-time viewer counts.</p>
                    <button className="btn" onClick={() => handlePopUp()}>Create new Key</button>
                </div>
                {opensigninkeys && <Create_signing_key closesigninkeys={setopensigninkeys} />}
                <div className={styles.table}>
                    <table>
                        <thead>
                            <tr>
                                <th>Key ID</th>
                                <th>Environment</th>
                                <th>Product</th>
                                <th>Created</th>
                                <th>Status</th>
                                {/* <th>Created by</th> */}
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {keys.map((item, key) =>
                                <tr key={key}>
                                    <td>{item.signingKeyId}</td>
                                    <td>{item.environmentName}</td>
                                    {item.productTypeId=="1"?<td>Video</td>:[item.productTypeId=="2"?<td>Data</td>:[item.productTypeId=="3"?<td>System</td>:<td></td>]]}
                                    <td>{create_On(item.createdOn)}</td>
                                    {/* <td>{item.createdBy}</td> */}
                                    <td>Active</td>
                                    <td>
                                        <a onClick={() => [`${setremovekeys(true)}`] [`${setObj(item)}`]}><img src="images/iconmaterial-delete.png" alt="icon"></img></a>
                                    </td>
                                </tr>

                            )}
                            {removekeys && <Delete_signing_key item={obj} closereovekeys={setremovekeys} />}
                        </tbody>
                    </table>
                </div>

            </section>
        </Fragment>
    )
}
export default Signingkeys;