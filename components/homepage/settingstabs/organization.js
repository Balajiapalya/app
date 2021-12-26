import { Fragment } from 'react';
import styles from '../../../styles/settings.module.css';
import {useState} from 'react'
import Newmember from '../../../pages/newmember';
import Editorganization from '../../../pages/editorganization';
import Removeuser from '../../../pages/removeuser';


function Organisation() {
    const[openModel,setopeninvitemember]=useState(false);
    const[openorganization,setopeneditorganization]=useState(false);
    const[openremove,setopenremove]=useState(false);
    return (
        <Fragment>
            <div className={styles.general}>
                <h3>General</h3>
                <label>Organization</label>
                <input placeholder="YuppTv"></input>
                <span>
                   <a onClick={()=>setopeneditorganization(true)}><img src="Icon material-edit.png"></img>Edit</a>
                </span>
            </div>
            {openorganization && <Editorganization closeorganization={setopeneditorganization}/>}
            <div className={styles.members}>
                <h3>Members</h3>
                <a><button className="btn" onClick={()=>setopeninvitemember(true)}>Invite Member</button></a> 
            </div>
            {openModel && <Newmember closeModel={setopeninvitemember}/>}  
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
                        <tr>
                            <td>Anil Singh</td>
                            <td>anil@yupptv.com</td>
                            <td>Admin</td>
                            <td>Joined October 8th,2021</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Venkatesh</td>
                            <td>Venkatesh@yupptv.com</td>
                            <td>
                                <select>
                                    <option>Admin</option>
                                    <option>Member</option>
                                </select>
                            </td>
                            <td>Joined October 8th,2021</td>
                            <td><a onClick={()=>setopenremove(true)}><img src="Icon material-delete.png"></img></a></td> 
                        </tr>
                        <tr>
                            <td>Ashok</td>
                            <td>ashok@yupptv.com</td>
                            <td>
                                <select>
                                    <option>Admin</option>
                                    <option>Member</option>
                                </select>
                            </td>
                            <td>Invite Sent <a href="#">Resend</a> </td>
                            <td><a onClick={()=>setopenremove(true)}><img src="Icon material-delete.png"></img></a></td>
                        </tr>
                        {openremove && <Removeuser closeremoveuser={setopenremove}/>}
                    </tbody>
                </table>
            </div> 
        </Fragment>
    )
}
export default Organisation;