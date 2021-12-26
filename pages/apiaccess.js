import styles from '../styles/apiaccess.module.css'
import Accesstoken from './accesstoken';

export default function Apiaccess() {
    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <p>You can create or  revoke API access tokens. Tokens are used to authenticate API request and are environment specific. To know more visit our <a href="#">guide</a>.</p>
                <button >Create new Token</button>

            </div>

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
                    <tbody>
                        <tr>
                            <td>Development<img src="Icon material-edit.png"></img><br></br>
                                <span>a857d839-4a10-be9e-41b66cdde9ea</span>
                            </td>
                            <td>Development</td>
                            <td>Video
                                <span>(read-only)</span>
                            </td>
                            <td>10/21/2021</td>
                            <td>anil@yupptv.com</td>
                            <td>Active</td>
                            <td><a href="#">Revoke</a></td>
                        </tr>
                        <tr>
                            <td><a className={styles.border}>Development</a><a className={styles.save}>Save</a><br></br>
                                <span>a857d839-4a10-be9e-41b66cdde9ea</span>
                            </td>
                            <td>Development</td>
                            <td>
                                <tr>Video<span>(read-only)</span></tr>
                                <tr>Data<span>(read-only)</span></tr>
                                <tr>System<span>(read-only)</span></tr>


                            </td>
                            <td>10/21/2021</td>
                            <td>anil@yupptv.com</td>
                            <td>Active</td>
                            <td><a href="#">Revoke</a></td>
                        </tr>
                        <tr>
                            <td>Development<img src="Icon material-edit.png"></img><br></br>
                                <span>a857d839-4a10-be9e-41b66cdde9ea</span>
                            </td>
                            <td>Development</td>
                            <td>Video</td>
                            <td>10/21/2021</td>
                            <td>anil@yupptv.com</td>
                            <td>Access Revoked</td>
                            <td><a href="#"></a></td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>
    )
}