import { Fragment } from 'react';
import styles from '../../../styles/settings.module.css';
import { useState, useEffect } from 'react'
import Newmember_invite from '../../dialog/Newmember_invite';
import Edit_organization_name from '../../dialog/Edit_organisation_name';
import Removeuser from '../../dialog/removeuser';
import Api from '../../api/api';
import { useRouter } from 'next/router';
import Signin from '../../../pages/signin';

function Organisation() {
    const router = useRouter();
    const [data, setdata] = useState([]);
    const [orgdata, setorgdata] = useState([]);
    const [openModel, setopeninvitemember] = useState(false);
    const [openorganization, setopeneditorganization] = useState(false);
    const [openremove, setopenremove] = useState(false);
    const [editData,setEditData]=useState()

    const createdDate = (date) =>{
        var d = new Date(date);
        return d.toLocaleString();
    }

    useEffect(() => {
        Api.Get_roles_data()
            .then(res => {
                setdata(res.data.data)
            })
        Api.Get_organization_data()
            .then(res => {
                setorgdata(res.data.data.users)
            })
            .catch(error => {
                console.log(error)
            })
          
    }, {})
    return (
        <Fragment>
            <div className={styles.general}>
                <h3>General</h3>
                <label>Organization</label>
                <div className={styles.edit}>{editData?editData.name:''}
                    <span>
                        <a onClick={() => setopeneditorganization(true)}><img src="Images/Icon material-edit.png" alt="icon"></img>Edit</a>
                    </span>
                </div>

            </div>
            {openorganization && <Edit_organization_name closeorganization={setopeneditorganization} setEditData={setEditData}/>}
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
                            <th>status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {orgdata.map((item, ind) =>
                            <tr key={ind}>
                                <td>{item.firstName} {item.lastName}</td>
                                <td>{item.email}</td>
                                    <td><select>
                                        <option value={item.roleId}>{item.roleId}</option>
                                        </select>
                                    </td>
                                <td>{createdDate(item.createdOn)}</td>
                                <td><a onClick={() => setopenremove(true)}><img src="Images/Icon material-delete.png" alt="icon"></img></a></td>
                            </tr>)}
                        {openremove && <Removeuser closeremoveuser={setopenremove} />}
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}
export default Organisation;