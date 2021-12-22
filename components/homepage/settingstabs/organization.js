import { Fragment } from 'react';
import styles from '../../../styles/settings.module.css';
import Link from 'next/link'


function Organisation() {
    return (
        <Fragment>
            <div className={styles.general}>
                <h3>General</h3>
                <label>Organization</label>
                <input placeholder="YuppTv"></input>
                <span>

                   <Link href="/editorganization"><a><img src="Icon material-edit.png"></img>Edit</a></Link>
                </span>
            </div>
            <div className={styles.members}>
                <h3>Members</h3>
                <Link href="/newmember">
                <a><button className="btn">Invite Member</button></a>
                </Link>
                   
                

            </div>
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
                            <td><Link href="/removeuser"><a><img src="Icon material-delete.png"></img></a></Link></td>
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
                            <td><Link href="/removeuser"><a><img src="Icon material-delete.png"></img></a></Link></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}
export default Organisation;