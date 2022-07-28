import { Fragment } from 'react';
import styles from '../../../styles/settings.module.css';
import { useState, useEffect } from 'react'
import Newmember_invite from '../../dialog/Newmember_invite';
import Edit_organization_name from '../../dialog/Edit_organisation_name';
import Removeuser from '../../dialog/removeuser';
import Api from '../../api/api';
import { useRouter } from 'next/router';
import Signin from '../../../pages/signin';
import Select from './Select'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
  

function Organisation() {
    const reg = useRouter();
    const [data, setdata] = useState([]);
    const [orgdata, setorgdata] = useState([]);
    const [openModel, setopeninvitemember] = useState(false);
    const [openorganization, setopeneditorganization] = useState(false);
    const [openremove, setopenremove] = useState(false);
    const [editData, setEditData] = useState();
    const [org, setOrg] = useState();
    const [item, setItem] = useState();
    const [optChanged,setOptChanged]=useState(false)
    const [toastMsg,setToastMsg]=useState(false)


    const createdDate = (date) => {
        var d = new Date(date);
        const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let year=d.getFullYear()
        let mnth=month[d.getMonth()]
        let newDate=d.getDate()
       let retDate= dateNew(newDate)
        return `Joined ${mnth} ${retDate}, ${year}`    
    }
    const dateNew=(newDate)=>{
        if(newDate<=20 && newDate>=4 || newDate>23){
            return newDate+'th'
        }
        if(newDate==1 || newDate==21 || newDate==31){
            return newDate+'st'
        }else if(newDate==2 || newDate==22){
            return newDate+'nd'
        }else if(newDate==3 || newDate==23){
            return newDate+'rd'
        }
    }
    
    useEffect(() => {
        Api.Get_roles_data()
            .then(res => {
                if(res.data.status=="Success"){
                    setdata(res.data.data);
                }
                
            })
        Api.Get_organization_data()
            .then(res => {
                if (res.data.status = "Success") {
                    setorgdata(res.data.data.users)
                    setOrg(localStorage.getItem('orgName'))
                    localStorage.setItem("ownerEmail", res.data.data.users[0].email)
                }

            })
            const toastFun=()=>{
                toast('User Deleted')
                setToastMsg(false)
            }
            {toastMsg && toastFun()}
    }, [openModel,openremove,optChanged])

    const handleResend=(item)=>{
        let obj=new Object()
        obj.email=item.email
        Api.ResendInvite(obj).then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
    return (
        <Fragment>
            <div className={styles.general}>
                <h3>General</h3>
                <label>Organization</label>

                <div className={styles.edit}>{editData ? editData.name : org}
                    <span>
                        <a onClick={() => setopeneditorganization(true)}><img src="/images/iconmaterial-edit.svg" alt="icon"></img>Edit</a>
                    </span>
                </div>

            </div>
            {openorganization && <Edit_organization_name closeorganization={setopeneditorganization} setEditData={setEditData} />}
            <div className={styles.members}>
                <h3>Members</h3>
                <a><button className="btn" onClick={() => setopeninvitemember(true)}>Invite Member</button></a>
            </div>
            {openModel && <Newmember_invite closeModel={setopeninvitemember} />}
            <div className={styles.member_table}>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {orgdata.map((item, ind) =>
                            <tr key={ind}>
                                <td>{item.firstName} {item.lastName}</td>
                                <td>{item.email}</td>
                                <td>
                                    {item.roleId==1 ? 'Owner':item.roleId==3?'Member':<Select item={item} data={data} setOptChanged={setOptChanged} optChanged={optChanged}/>}
                                </td>
                                
                                {item.createdOn ? <td>{createdDate(item.createdOn)}</td> : <td>Invite sent
                                    <a onClick={()=>handleResend(item)}>Resend</a></td>}

                                {!item.createdOn ? <td><a className={styles.img} onClick={() => setopenremove(true)}><img onClick={() => setItem(item)} src="/images/iconmaterial-delete.svg" alt="icon"></img></a></td> : <td></td>}
                            </tr>
                        )}
                        {openremove && <Removeuser item={item} closeremoveuser={setopenremove} setToastMsg={setToastMsg}/>}
                    </tbody>
                </table>
            </div>
            <ToastContainer hideProgressBar={true}/>
        </Fragment>
    )
}
export default Organisation;
