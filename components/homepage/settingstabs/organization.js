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

    useEffect(() => {
        Api.Get_roles_data()
            .then(res => {
                console.log(res.data)
                setdata(res.data.data)
            })
        Api.Get_organization_data()
            .then(res => {
                setorgdata(res.data.data.users)
                console.log(res.data.data.users, 'data')
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
                <input placeholder="YuppTv"></input>
                <span>
                    <a onClick={() => setopeneditorganization(true)}><img src="Images/Icon material-edit.png" alt="icon"></img>Edit</a>
                </span>
            </div>
            {openorganization && <Edit_organization_name closeorganization={setopeneditorganization} />}
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
                       
                            {orgdata.map(item =>
                                <tr>
                                    <td>Anil Singh</td>
                                    <td>{item.email}</td>
                                    <td>{item.roleId}</td>
                                    <td>Invite Sent <a href="#">Resend</a> </td>
                                    <td><a onClick={() => setopenremove(true)}><img src="Images/Icon material-delete.png" alt="icon"></img></a></td>
                                </tr>)}
                            {/* <td><select>
                                {data.map(item =>
                                    <>
                                        <option key={item.id} value={item.id}>{item.name}</option>
                                    </>
                                )}
                            </select></td> */}
                            {/* <td>Joined October 8th,2021</td>
                            <td></td> */}

                        <tbody>

                        </tbody>

                        {openremove && <Removeuser closeremoveuser={setopenremove} />}
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}
export default Organisation;