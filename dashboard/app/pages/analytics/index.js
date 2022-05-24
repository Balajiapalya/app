import styles from '../../styles/analytics_tabs.module.css'
import Layout from '../../components/common/layout'
import Analytics_tabs from '../../components/analyticstabs'
import { useEffect, useState, createContext, useRef } from 'react';
import Api from '../../components/api/api';
import Overview from '../../components/analytics_tabs/overview';

const EnvValue = createContext()
export default function Analytics_index() {
    const [envSelect, setEnvSelect] = useState([]);
    const [uuid, setuuid] = useState()
    const [vidDropdown, setVidDropdown] = useState()
    const [selected, setSelected] = useState(false)
    const [id, setId] = useState();

    useEffect(() => {
        seleEnv();
    }, [uuid]);

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
    // const handleChange = (e) => {
    //     setuuid(e.target.value)
    //     localStorage.setItem("envuuid", e.target.value)
    // }
    let orgname;
    if (process.browser) {
        orgname = localStorage.getItem('orgName');
    }
    const orName = orgname;
// top dropdown
    const handleChange = (i) => {
    setId(i.uuid)
    localStorage.setItem("envuuid", i.uuid)
    }
    const searchHandle = (e) => {
        let options = document.querySelectorAll('#opt')
        for (let i = 0; i < options.length; i++) {
            let name = options[i].innerHTML.toLowerCase()
            let searchValue = e.target.value.toLowerCase()
            if (name.indexOf(searchValue) > -1) {
                options[i].style.display = 'block'
            } else {
                options[i].style.display = 'none'

            }
        }
    }
    const handleSelected = (item) => {
        setSelected(item.name)
        setVidDropdown(false)
    }
    let dropdownprod = useRef()
    useEffect(() => {
        const handleDropdown = (e) => {
            if (!dropdownprod.current.contains(e.target)) {
                setVidDropdown(false)
            }
        }
        document.addEventListener('mouseup', handleDropdown)
        return () => {
            document.removeEventListener('mouseup', handleDropdown)
        }
    }, [])
    return (

        <div className={styles.container}>
            <div className={styles.background_develepment}>
                <div className={styles.header_development}>
                    <div className="container">
                        {/* <div className={styles.content_development}>
                            <img className={styles.store_icon_png} src='/images/iconawesome-folder.svg' />
                            <p>{orName} <br />
                                <select className={styles.select} id="opt" onChange={(e) => handleChange(e)}>
                                    {envSelect.map(i => <>
                                        <option selected={localStorage.getItem('envuuid') == i.uuid} value={i.uuid}>{i.name}</option>
                                        <div className='hidden'><Overview /></div>
                                    </>)}
                                </select>
                            </p>
                        </div> */}

                        <div className={styles.content} ref={dropdownprod}>
                            <div className={styles.options} onClick={() => setVidDropdown(!vidDropdown)}>
                                <div className={styles.names}>
                                    <div className={styles.org_name}>{orName}</div>
                                    <div className={styles.displayName}>
                                        {envSelect.map(i => {
                                            if (i.uuid === localStorage.getItem('envuuid')) {
                                                return selected ? selected : i.name
                                            }

                                        })}
                                    </div>
                                </div>

                                <img className={styles.clickable} src="/images/updown.svg" alt='icon' onClick={() => setVidDropdown(!vidDropdown)} />
                                <img className={styles.store} src='/images/iconawesome-folder.svg' />
                            </div>

                            {vidDropdown &&
                                <div className={styles.all}>
                                    <input className={styles.inputSearch} onChange={(e) => searchHandle(e)} placeholder="Search by name" />
                                    <div>
                                        {envSelect.map(i =>
                                            <>
                                                <div key={i.uuid} value={i.uuid} id="opt" onClick={() => `${handleSelected(i)} ${handleChange(i)}`} className={styles.singleOption}>{i.name}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className={styles.settings}>
                    <div className={styles.padding}>

                        <div className={styles.header}>
                            <h2>
                                Analytics
                            </h2>
                            <EnvValue.Provider value={process.browser && localStorage.getItem('envuuid')}>
                                <Analytics_tabs />
                            </EnvValue.Provider>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
Analytics_index.getLayout = function getLayout(page) {
    return (
        <Layout>
            <div className="wrapper_body">

                {page}

            </div>
        </Layout>
    )
};
export { EnvValue }