import styles from '../styles/signinkeys.module.css'


export default function Signinkeys() {
    return (
        <div className={styles.wrapper_signing_keys}>
            <div className={styles.head}>
                <p>Signin keys are used to sign JSON Web Tokens (JWTs) for securing certain requests. Video keys can be used to secure playback URLs,and Data keys can be used to secure access to real-time viewer counts.</p>
                <button className={styles.button}>Create new Key</button>

            </div>
            <div className={styles.table}>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Environment</th>
                            <th>Product</th>
                            <th>Created</th>
                            <th>Created by</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>z1Muinv5aRYjoEZESjgfaqa00pyaybPKRGFyHzP00</td>
                            <td>Development</td>
                            <td>Video</td>
                            <td>10/21/2021</td>
                            <td>anil@yupptv.com</td>
                            <td>
                                {/* <label className={styles.switch_wrap}>
                                    <input type="checkbox" />
                                    <div className={styles.switch}></div>
                                    
                                </label> */}
                                <img src="Icon material-delete.png"></img>
                            </td>
                        </tr>
                        <tr>
                            <td>z1Muinv5aRYjoEZESjgfaqa00pyaybPKRGFyHzP00</td>
                            <td>Production</td>
                            <td>Data</td>
                            <td>10/21/2021</td>
                            <td>anil@yupptv.com</td>
                            <td><img src="Icon material-delete.png"></img></td>
                        </tr>
                        <tr>
                            <td>z1Muinv5aRYjoEZESjgfaqa00pyaybPKRGFyHzP00</td>
                            <td>UAT</td>
                            <td>Video</td>
                            <td>10/21/2021</td>
                            <td>anil@yupptv.com</td>
                            <td><img src="Icon material-delete.png"></img></td>
                        </tr>
                        <tr>
                            <td>z1Muinv5aRYjoEZESjgfaqa00pyaybPKRGFyHzP00</td>
                            <td>UAT</td>
                            <td>Data</td>
                            <td>10/21/2021</td>
                            <td>anil@yupptv.com</td>
                            <td><img src="Icon material-delete.png"></img></td>
                        </tr>
                        <tr>
                            <td>z1Muinv5aRYjoEZESjgfaqa00pyaybPKRGFyHzP00</td>
                            <td>Development</td>
                            <td>Data</td>
                            <td>10/21/2021</td>
                            <td>anil@yupptv.com</td>
                            <td><img src="Icon material-delete.png"></img></td>
                        </tr>

                    </tbody>
                </table>

            </div>

        </div>
    )
}