import styles from '../../../styles/events&logs.module.css';

function Logs() {
    return (

        <div className={styles.events}>
            <p>Logs show every API action taken.Logs will be stored up to 30 days.</p>
            <div className={styles.events_data}>
                <table className={styles.events_logs_table}>
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Description</th>
                            <th>DATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>204 Stream down</td>
                            <td><p>FRANE FREEZE</p>https://Videograph.com/video/v1/assets/00ijr1mxkM<br></br>01pzrh</td>
                            <td>11/11/2021 3:57PM</td>
                        </tr>
                        <tr>
                            <td>204 Stream down</td>
                            <td><p>FRANE FREEZE</p>https://Videograph.com/video/v1/assets/00ijr1mxkM<br></br>01pzrh</td>
                            <td>11/11/2021 3:57PM</td>
                        </tr>
                        <tr>
                            <td>204 Stream down</td>
                            <td><p>FRANE FREEZE</p>https://Videograph.com/video/v1/assets/00ijr1mxkM<br></br>01pzrh</td>
                            <td>11/11/2021 3:57PM</td>
                        </tr>
                        <tr>
                            <td>204 Stream down</td>
                            <td><p>FRANE FREEZE</p>https://Videograph.com/video/v1/assets/00ijr1mxkM<br></br>01pzrh</td>
                            <td>11/11/2021 3:57PM</td>
                        </tr>

                    </tbody>
                </table>

            </div>


        </div>


    )
}
export default Logs;