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
    const [value, setValue] = useState()
    const [render, setRender] = useState(false)
    const [id, setid] = useState();
    const [click, setClicked] = useState()
    const [noSpace,setNoSpace]=useState(false)

    const createdDate = (date) => {
        var d = new Date(date);
        return d.toLocaleString("en-AU", { day: "2-digit", month: "2-digit", year: "numeric" });
    }
    useEffect(() => {
        let table = document.querySelector('.table');
        let data = table.getElementsByClassName('tData');

        setRender(false)
        Api.Get_access_token()
            .then((res) => {
                if ((res.data.status = "Success")) {
                    set_accessdata(res.data.data)
                    for (let i = 0; i < data.length; i++) {
                        let permissionOne = res.data.data[i].permissions[0];
                        let permissionTwo = res.data.data[i].permissions[1];
                        let permissionThree = res.data.data[i].permissions[2];

                        //single
                        if(permissionOne && permissionOne.productTypeId==1 && permissionOne.canRead){
                                data[i].innerText='video(read-only)' 
                        }else
                        if(permissionOne && permissionOne.productTypeId==1 && permissionOne.canWrite){
                            data[i].innerText='video(write-only)' 
                    }
                    if(permissionOne && permissionOne.productTypeId==1 && permissionOne.canRead && permissionOne.canWrite){
                        data[i].innerText='video' 
                    }
                        if(permissionOne && permissionOne.productTypeId==2 && permissionOne.canRead){    
                            data[i].innerText='data(read-only)'
                        }
                        if(permissionOne && permissionOne.productTypeId==3 && permissionOne.canRead && permissionOne.canWrite){
                            data[i].innerText='System'
                        }
                        //two
                        if(permissionOne && permissionOne.productTypeId==1 && permissionOne.canRead){
                            if(permissionTwo && permissionTwo.productTypeId==2 && permissionTwo.canRead){
                                data[i].innerText='video(read-only) \n data(read-only)'
                            }
                        }
                       

                        if(permissionOne && permissionOne.productTypeId==1 && permissionOne.canWrite){
                            if(permissionTwo && permissionTwo.productTypeId==2 && permissionTwo.canRead){
                                data[i].innerText='video(write-only) \n data(read-only)' 
                            }
                        }
                        if(permissionOne && permissionOne.productTypeId==1 && permissionOne.canWrite){
                            if(permissionTwo && permissionTwo.productTypeId==3 && permissionTwo.canRead &&  permissionTwo.canWrite){
                                data[i].innerText='video(write-only) \n system' 
                            }
                        }
                        // three
                        if(permissionOne && permissionOne.productTypeId==1 && permissionOne.canRead){
                            if(permissionTwo && permissionTwo.productTypeId==2 && permissionTwo.canRead){
                                if(permissionThree && permissionThree.productTypeId==3 && permissionTwo.canRead && permissionThree.canWrite){
                                    data[i].innerText='video(read-only) \n data(read-only) \n system' 
                                }
                            }
                        }
                        if(permissionOne && permissionOne.productTypeId==1 && permissionOne.canRead){
                            if(permissionTwo && permissionTwo.productTypeId==3 && permissionTwo.canRead &&  permissionTwo.canWrite){
                                data[i].innerText='video(read-only) \n system' 
                            }
                        }

                        if(permissionOne && permissionOne.productTypeId==2 && permissionOne.canRead){
                            if(permissionTwo && permissionTwo.productTypeId==3 && permissionTwo.canRead && permissionTwo.canWrite){
                                data[i].innerText='data \n system'
                            }
                        }
                        if(permissionOne && permissionOne.productTypeId==1 && permissionOne.canRead && permissionOne.canWrite){
                            if(permissionTwo && permissionTwo.productTypeId==3 && permissionTwo.canRead && permissionTwo.canWrite){
                                data[i].innerText='video \n system'
                            }
                        }
                        if(permissionOne && permissionOne.productTypeId==1 && permissionOne.canRead && permissionOne.canWrite){
                            if(permissionTwo && permissionTwo.productTypeId==2 && permissionTwo.canRead){
                                data[i].innerText='video \n data'
                            }
                        }
                        //three
                        
                         if(permissionOne && permissionOne.productTypeId==1 && permissionOne.canRead && permissionOne.canWrite) {
                            if(permissionTwo && permissionTwo.productTypeId==2 && permissionTwo.canRead){
                                if(permissionThree && permissionThree.productTypeId==3 && permissionThree.canRead && permissionThree.canWrite){
                                    data[i].innerText='video \n data \n system'
                                }
                            }
                        }
                    }

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
        const close = (e) => {
            if (e.keyCode === 27) {
                setRender(true)
            }
        }
        window.addEventListener('keydown', close)
        return () => window.removeEventListener('keydown', close);

    }, [opentoken, openrevoke, render]);


    const setPopups = (index, item) => {
        if (item) {
            // setValue(item.name)
        }
        openModel[index] = !openModel[index];
        closemodal[index] = !closemodal[index]
        setopeninvitemember(openModel);
        setclosemodal([...closemodal]);
    }
    const submitEdit = (e) => {
        e.preventDefault()
        if(value.match(/^[^\s]+(?:$|.*[^\s]+$)/)==null){
            setNoSpace(true)
        }
        localStorage.setItem('accessId', e.target.value)
        let accessId = localStorage.getItem('accessId')
        let newObj = new Object()
        newObj.name = value
        if (value && value.match(/^[^\s]+(?:$|.*[^\s]+$)/)!==null) {
            Api.EditApiAccessToken(newObj, accessId).then(res => setRender(true))
        }
    }

    const handlePopup = () => {
        settoken(true);
        let table = document.querySelector('.table');
        let popup = document.querySelector('.popup');
        table.classList.add(`${styles.no_display}`)
        table.classList.remove(`${styles.display}`)
        popup.classList.remove(`${styles.no_display}`)
    }

    return (
        <Fragment>
            <section className={styles.wrapper_access_tokes}>
                <div className={styles.head}>
                    <p>You can create or  revoke API access tokens. Tokens are used to authenticate API request and are environment specific. To know more visit our <a href="https://documenter.getpostman.com/view/19432362/UyxqDPLG" target='_blank' rel="noopener noreferrer">guide</a>.</p>
                    {/* <a><button className="btn" onClick={() => settoken(true)}>Create new Token</button></a> */}
                    <a><button className="btn" onClick={() => handlePopup()}>Create new Token</button></a>
                </div>
                <div className={`${styles.no_display} popup`}>
                    <Accesstoken table={process.browser && document.querySelector('.table')} closetoken={settoken} />
                </div>
                <div className={`${styles.table} table`}>
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
                                            <div className={styles.name}>
                                                <span >{item.name}</span>
                                                <img onClick={() => { setPopups(i, item) }} src="/images/iconmaterial-edit.svg" alt="icon"></img>
                                            </div>
                                        )}
                                        {openModel[i] && (
                                            <form>
                                                <div className={styles.save}>
                                                    <input maxLength={30} defaultValue={item.name} type="text" name="name" onChange={(e) => `${setValue(e.target.value)} ${setNoSpace(false)}`} />
                                                    <button value={item.accessTokenId} onClick={(e) => `${submitEdit(e)}`} className={styles.save}>Save</button>
                                                    
                                                </div>
                                                {noSpace && <p className={`${styles.wrap} validations`}>This field is required without space at start/end</p>}
                                            </form>
                                        )}
                                        <div className={styles.accesstoken}>
                                            <span className={styles.tokens}>{item.accessTokenId}</span>
                                        </div>

                                    </td>
                                    <td>{item.environmentName}</td>
                                    <td className="tData">
                                        {/* {item&&item.permissions[0]&&item&&item.permissions[0].productTypeId==1&&item&&item.permissions[1]&&item.permissions[1].productTypeId==2?'System':[item&&item.permissions[0]&&item.permissions[0].productTypeId==1?'video':[item&&item.permissions[1]&&item.permissions[1].productTypeId==2?'':'Data(read only)']]} */}
                                    </td>
                                    <td>{createdDate(item.createdOn)}</td>
                                    <td>{item.createdBy}</td>
                                    {item.isInUse == true ? <td>Active</td> : [item.isInUse == false ? <td>Access Revoked</td> : null]}
                                    {/* {item.isInUse==true?<td><a onClick={() => [setrevoke(true)]}>Revoke</a></td>:<td></td>} */
                                    }
                                    {item.isInUse == true ? <td><a onClick={() => `${setrevoke(true)} ${setClicked(item)}`}>Revoke</a></td> : <td></td>}
                                </tr>
                                {openrevoke && <Revoke item={click} closerevoke={setrevoke} />}
                            </tbody>
                        )}
                    </table>
                </div>
            </section>
        </Fragment>
    )
}

export default Api_accesstokes; 