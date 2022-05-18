import { Fragment } from "react";
import styles from '../../../styles/webhooks.module.css';
import { useState, useEffect } from "react";
import Create_new_webhook from "../../../pages/settings/create_new_webhook";
import Delete_webhook from "../../dialog/Delete_webhook";
import Api from "../../api/api";

function Webhooks() {
    const [openwebhook, setopenwebhook] = useState(false);
    const [removewebhook, setremovewebhook] = useState(false);
    const [webhook, setwebnook] = useState([]);
    const [error, seterror] = useState();
    const [obj, setObj] = useState([])
    useEffect(() => {

        Api.Get_webhook()
            .then(res => {
                if (res.data.status = "Success") {
                    setwebnook(res.data.data)
                }

            })
            .catch(error => {
                if (error.response.data.code = 400) {
                    seterror(error.response.data.message)
                    // console.log(error.response.data.message)
                }
            })

    }, [openwebhook, removewebhook]);
    const create_On = (date) => {
        var y = new Date(date);
        return y.toLocaleString("en-AU", { day: "2-digit", month: "2-digit", year: "numeric" });
    };
    const popup=()=>{
        document.body.style.overflow='hidden'
        setopenwebhook(true)
    }
    return (
        <Fragment>
            <section className={styles.wrapper_webhooks}>
                <div className={styles.head}>
                    <p>Use Webhooks to get real time updates on any events that happens outside of an API request cycle.<br/>
                        Webhooks can be configured for any environment and notifications will be sent for all events for the environment.
                    </p>
                    <button className="btn" onClick={() =>popup()}>Create new Webhook</button>
                </div>
                {openwebhook && <Create_new_webhook closewebhook={setopenwebhook} />}
               <div className={styles.table}>
                    <table>
                        <thead>
                            <tr>
                                <th>URL to Notify</th>
                                <th>Signing Secret</th>
                                <th>Environment</th>
                                <th>Created</th>
                                {/* <th>Created by</th> */}
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {webhook.map((item, key) =>
                                <tr key={key}>
                                    <td>{item.url}</td>
                                    <td>{item.signingSecret}</td>
                                    <td>{item.environmentName}</td>
                                    <td>{create_On(item.createdOn)}</td>
                                    {/* <td>{item.createdBy}</td> */}
                                    <td>Active</td>
                                    <td>
                                        <input type="checkbox" className={styles.input}></input>
                                        <a onClick={() => [`${setremovewebhook(true)}`][`${setObj(item)}`]}><img src="images/iconmaterial-delete.svg" alt="icon" ></img></a>
                                    </td>
                                    {removewebhook && <Delete_webhook item={obj} closedeletewebhook={setremovewebhook} />}
                                </tr>
                            )}

                        </tbody>
                    </table>
                </div>

            </section>
        </Fragment>
    )
}
export default Webhooks;