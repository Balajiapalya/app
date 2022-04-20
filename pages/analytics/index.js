import styles from '../../styles/analytics_tabs.module.css'
import Layout from '../../components/common/layout'
import Analytics_tabs from '../../components/analyticstabs'
import { useEffect,useState } from 'react';
import Api from '../../components/api/api';
import Overview from '../../components/analytics_tabs/overview';


export default function Analytics_index() {
    const [envSelect, setEnvSelect] = useState([]);
    useEffect(() => {
        seleEnv();
    }, []);
    const seleEnv = () => {
        Api.Get_env_data()
            .then(res => {
                if (res.data.status = "Success") {
                    setEnvSelect(res.data.data);

                }
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleChange = (e) => {
        localStorage.setItem("envuuid", e.target.value)
    }
    let orgname;
    if (process.browser) {
        orgname = localStorage.getItem('orgName');
    }
    const orName = orgname;
    return (
        <div className={styles.container}>
            <div className={styles.background_develepment}>
                <div className={styles.header_development}>
                    <div className={styles.content_development}>
                        <img className={styles.store_icon_png} src='/images/Store icon.png' />
                        <p>{orName} <br />
                            <select className={styles.select} id="opt" onChange={(e) => handleChange(e)}>
                                {envSelect.map(i => <>
                                    <option defaultValue={localStorage.getItem('envuuid') == i.uuid} value={i.uuid}>{i.name}</option>
                                    <div className='hidden'><Overview/></div>
                                </>)}
                            </select>
                        </p>

                    </div>
                </div>
            </div>

            <div className={styles.settings}>
                <div className={styles.padding}>

                    <div className={styles.header}>
                        <h2>
                            Analytics
                        </h2>
                        <Analytics_tabs />
                    </div>
                </div>
            </div>
            
        </div>
    )
}
Analytics_index.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};