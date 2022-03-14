import { Fragment, useEffect, useState } from "react";
import styles from '../../../styles/apiaccess.module.css';
import Accesstoken from "../../../pages/New_access_token";
import Revoke from "../../dialog/Revoke_access";
import Api from "../../api/api";
function Api_accesstokes() {
    const [opentoken, settoken] = useState(false);
    const [openrevoke, setrevoke] = useState(false);
    const [get_accessdata, set_accessdata] = useState([]);
    const createdDate = (date) => {
        var d = new Date(date);
        return d.toLocaleString();
    }
    useEffect(() => {
        Api.Get_access_token()
            .then(res => {
                set_accessdata(res.data.data)
            })
    }, {})

    return (
        <Fragment>
            <section className={styles.wrapper_access_tokes}>
                <div className={styles.head}>
                    <p>You can create or  revoke API access tokens. Tokens are used to authenticate API request and are environment specific. To know more visit our <a href="#">guide</a>.</p>
                    <a><button className="btn" onClick={() => settoken(true)}>Create new Token</button></a>
                </div>
                {opentoken && <Accesstoken closetoken={settoken} />}
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
                        {get_accessdata.map((item, key) =>
                            <tbody key={key}>
                                <tr>
                                    <td><span className={styles.border}>Development</span><a className={styles.save}>Save</a><img src="Images/Icon material-edit.png" alt="icon"></img><br></br>
                                        <span className={styles.tokens}>{item.accessTokenId}</span>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>
                                        <tr>Video<span>(read-only)</span></tr>
                                        <tr>Data<span>(read-only)</span></tr>
                                        <tr>System<span>(read-only)</span></tr>
                                    </td>
                                    <td>{createdDate(item.createdOn)}</td>
                                    <td>{item.createdBy}</td>
                                    <td>{item.isInUse}</td>
                                    <td><a onClick={() => setrevoke(true)}>Revoke</a></td>
                                </tr>
                                {openrevoke && <Revoke closerevoke={setrevoke} />}

                            </tbody>

                        )}

                    </table>

                </div>
            </section>
        </Fragment>
    )
}

export default Api_accesstokes; 