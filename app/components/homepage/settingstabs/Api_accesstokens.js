import { Fragment, useEffect, useState } from "react";
import styles from '../../../styles/apiaccess.module.css';
import Accesstoken from "../../../pages/settings/New_access_token";
import Revoke from "../../dialog/Revoke_access";
import Api from "../../api/api";
function Api_accesstokes() {
    const [opentoken, settoken] = useState(false);
    const [openrevoke, setrevoke] = useState(false);
    const [get_accessdata, set_accessdata] = useState([]);
    const [openModel, setopeninvitemember] = useState([]);
    const [closemodal, setclosemodal] = useState([]);
    const [value,setValue]=useState()
    const [render,setRender]=useState(false)
    
    const createdDate = (date) => {
        var d = new Date(date);
        return d.toLocaleString("en-AU", { day: "2-digit", month: "2-digit", year: "numeric" });
    }
    useEffect(() => {
        setRender(false)
        Api.Get_access_token()
            .then((res) => {
                if ((res.data.status = "Success")) {
                    // console.log(res)
                    set_accessdata(res.data.data)
                    var envcount = res.data.data.length;
                    let openArr = [];
                    let closeArr = [];
                    for (var i = 0; i < envcount; i++) {
                        openArr.push(false);
                        closeArr.push(true);
                    }
                    setopeninvitemember(openArr);
                    setclosemodal(closeArr);
                }
            })
    }, [opentoken, openrevoke,render])
    const handlerevoke = () => {
        // console.log(document.getElementById('accessID'))
    }
    const setPopups = (index, item) => {
        if (item) {
            // setValue(item.name)

        }
        openModel[index] = !openModel[index];
        closemodal[index] = !closemodal[index]
        setopeninvitemember(openModel);
        setclosemodal([...closemodal]);
    }
    const submitEdit=()=>{
       
        let accessId=get_accessdata[0].accessTokenId
        let newObj=new Object()
        newObj.name=value
        if(value){
            Api.EditApiAccessToken(newObj,accessId).then(res=>setRender(true))
        }
        
    }
 
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
                        {get_accessdata.map((item, i) =>
                            <tbody key={i}>
                                <tr>
                                    <td>
                                        {closemodal[i] && (
                                            <div>
                                                <span >{item.name}</span>
                                                <img onClick={() => { setPopups(i, item) }} src="Images/Icon material-edit.png" alt="icon"></img>
                                            </div>
                                        )}
                                        {openModel[i] && (
                                            <form>
                                                <div className={styles.save}>
                                                    <input defaultValue={item.name} type="text" name="name" onChange={(e)=>setValue(e.target.value)}/>
                                                    <a onClick={() => `${submitEdit()}`} className={styles.save}>Save</a>
                                                </div>
                                            </form>
                                        )}
                                        <span id="accessID" className={styles.tokens}>{item.accessTokenId}</span>
                                    </td>
                                    <td>{item.environmentName}</td>
                                    <td>
                                        {item&&item.permissions[0]&&item&&item.permissions[0].productTypeId==1&&item&&item.permissions[1]&&item.permissions[1].productTypeId==2?<td>System</td>:[item&&item.permissions[0]&&item.permissions[0].productTypeId==1?<td>video</td>:[item&&item.permissions[1]&&item.permissions[1].productTypeId==2?<td></td>:<td>Data(read only)</td>]]}
                                    </td>
                                    <td>{createdDate(item.createdOn)}</td>
                                    <td>{item.createdBy}</td>
                                    {item.isInUse==true?<td>Active</td>:[item.isInUse==false?<td>Access Revoked</td>:null]}
                                    {item.isInUse==true?<td><a onClick={() => [setrevoke(true)][handlerevoke()]}>Revoke</a></td>:<td></td>}
                                </tr>
                                {openrevoke && <Revoke item={item} closerevoke={setrevoke} />}
                            </tbody>
                        )}
                    </table>
                </div>
            </section>
        </Fragment>
    )
}

export default Api_accesstokes; 