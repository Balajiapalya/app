import { Fragment } from "react";
import styles from '../../../styles/webhooks.module.css';
import { useState,useEffect } from "react";
import Create_new_webhook from "../../../pages/settings/create_new_webhook";
import Delete_webhook from "../../dialog/Delete_webhook";
import Api from "../../api/api";

function Webhooks() {
    const[openwebhook,setopenwebhook]=useState(false);
    const[removewebhook,setremovewebhook]=useState(false);
    const [webhook,setwebnook]=useState([]);
    const [error,seterror]=useState();
    const [obj, setObj] = useState([])
    useEffect(()=>{
        
        Api.Get_webhook()
            .then(res=>{
                setwebnook(res.data.data)
            })
            .catch(error=>{
                if (error.response.data.code = 400) {
                    seterror(error.response.data.message)
                    console.log(error.response.data.message)
                  }
            })
        
    },[openwebhook,removewebhook])
    return (
        <Fragment>
            <section className={styles.wrapper_webhooks}>
                <div className={styles.head}>
                    <p>Use Webhooks to get real time updates on any events that happens outside of an API request cycle.
                        Webhooks can be configured for any environment and notifications will be sent for all events for the environment.
                    </p>
                    <button className="btn" onClick={()=>setopenwebhook(true)}>Create new Webhook</button>
                </div>
                {openwebhook && <Create_new_webhook closewebhook={setopenwebhook}/>}
                <div className={styles.table}>
                    <table>
                        <thead>
                            <tr>
                                <th>URL to Notify</th>
                                <th>Signing Secret</th>
                                <th>Environment</th>
                                <th>Created</th>
                                <th>Created by</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {webhook.map((item,key)=>
                            <tr key={key}>
                                <td>{item.url}</td>
                                <td>{item.signingSecret}</td>
                                <td>{item.environmentId}</td>
                                <td>10/21/2021</td>
                                <td>anil@yupptv.com</td>
                                <td>Active</td>
                                <td>
                                    <input type="checkbox" className={styles.input}></input>
                                    <a onClick={()=>[`${setremovewebhook(true)}`][`${setObj(item)}`]}><img src="Images/Icon material-delete.png" alt="icon" ></img></a>
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