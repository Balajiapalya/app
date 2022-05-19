import styles from '../../styles/videos.module.css'
import Link from 'next/link';
import Layout from '../../components/common/layout';
import { useEffect } from 'react'
import Api from '../../components/api/api'
import { useState, useRef } from 'react'
import Videodelivery_addnewassets from './videodelivery_addnewassets';
import React from 'react'
import VideoList, { Video_file } from '../../components/video_list'

export default function Videos() {
    const [videoData, setVideoData] = useState([]);
    const [add_asset, set_asset] = useState(false);
    const [env, setenv] = useState([]);
    const [envSelect, setEnvSelect] = useState([]);
    const [id, setId] = useState();
    const [dirdata, set_directdata] = useState([]);
    const [order, setorder] = useState("ASC");
    const [ordernum, set_ordernum] = useState("ASC")
    const [vidDropdown, setVidDropdown] = useState()
    const [selected, setSelected] = useState(false)
    const [defaultenv,setDefaultenv]=useState()

    const sorting = (col) => {
        if (order === "ASC") {
            const sorted = [...videoData].sort((a, b) =>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setVideoData(sorted);
            setorder("DSC");
        }
        if (order === "DSC") {
            const sorted = [...videoData].sort((a, b) =>
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setVideoData(sorted);
            setorder("ASC");
        }
    };
    const sort_num = (col) => {
        if (ordernum === "ASC") {
            var sorted_num = [...videoData].sort((a, b) =>
                a[col] > b[col] ? 1 : -1
            );
            setVideoData(sorted_num);
            set_ordernum("DSC");
        }
        if (ordernum === "DSC") {
            var sorted_num = [...videoData].sort((a, b) =>
                a[col] < b[col] ? 1 : -1
            );
            setVideoData(sorted_num);
            set_ordernum("ASC");
        }
    }
    useEffect(() => {
        const data = localStorage.getItem("envuuid")
        Api.Video_list(data)
            .then(res =>
                setVideoData(res.data.data))
            .catch(error => {
                if (error.response.data.code = 401) {
                    window.localStorage.clear();
                    document.cookie = 'Jwt-token=;expires=' + new Date().toUTCString()
                    window.location.href = '/signin'
                }
            })
        Api.Env_data()
            .then(res => {
                setenv(res.data.data)
                
            })
            .catch(error => {
                console.log(error)
            })
        Api.Get_env_data()
            .then(res => {
                if (res.data.status = "Success") {
                    setEnvSelect(res.data.data)
                }
            })
            .catch(error => {
                console.log(error)
            })
    }, [id, add_asset])

    const handleChange = (i) => {
        setId(i.uuid)
        localStorage.setItem("envuuid", i.uuid)
    }

    const create_On = (date) => {
        var y = new Date(date)
        return y.toLocaleString("en-AU", { day: "2-digit", month: "2-digit", year: "numeric" })
    }
    const created_time = (date) => {
        var t = new Date(date)
        return t.toLocaleString("en-IN", { hour: "2-digit", minute: "2-digit" });
    }
    let orgname;
    if (process.browser) {
        orgname = localStorage.getItem('orgName')
    }
    const orName = orgname;
    const handleSearch = (e) => {
        let input = e.target.value.toUpperCase()
        let table = document.querySelector('.table_input')
        let tRow = table.getElementsByTagName('tr')
        for (let i = 0; i < tRow.length; i++) {
            let td = tRow[i].getElementsByTagName('td')[2]
            let tdId = tRow[i].getElementsByTagName('td')[3]
            let status = tRow[i].getElementsByTagName('td')[7]
            if (td || tdId || status) {
                let data = td.innerText.toUpperCase()
                let id = tdId.innerText.toUpperCase();
                let stat = status.innerText.toUpperCase()
                if (data.indexOf(input) > -1 || id.indexOf(input) > -1 || stat.indexOf(input) > -1) {
                    tRow[i].style.display = ''
                } else {
                    tRow[i].style.display = 'none'
                }
            }
        }
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
                        <div className={styles.content} ref={dropdownprod}>

                             {/* <p>{orName}
                                <select className={styles.select} id="opt" onChange={(e) => handleChange(e)}>
                                    {envSelect.map(i => <>
                                        <option selected={localStorage.getItem('envuuid') == i.uuid} value={i.uuid}>{i.name}</option>
                                    </>)}
                                </select>
                                        </p> */}
                               {/* <div className={styles.dropdown_vid} onClick={() => setVideoDrop(!videoDrop)}>

                                    {selected ? selected : 'Product'}

                                </div>
                                
                                <img className={styles.storefolder} src='/images/storeicon.png' />
                                <img className={styles.drpdwn} src="images/updown.png" alt='icon' onClick={() => setVideoDrop(!videoDrop)}></img>
                                {videoDrop &&
                                    <div className={styles.videoOptions}>
                                        <input className={styles.searchSelect} onChange={(e) => searchHandle(e)} placeholder="Search by name" />
                                        <div className={styles.all_options}>
                                            {envSelect.map(i =>
                                                <div selected={localStorage.getItem('envuuid') == i.uuid} value={i.uuid} id="opt" onClick={() => handleSelected(i)}>{i.name}</div>
                                            )}
                                        </div>
                                    </div>}
                             */}
                        
                                <div className={styles.options} onClick={() => setVidDropdown(!vidDropdown)}>
                                    <div className={styles.names}>
                                        <div className={styles.org_name}>{orName}</div>
                                        <div className={styles.displayName}>
                                            {envSelect.map(i=>{
                                                if(i.uuid===localStorage.getItem('envuuid')){
                                                    return selected?selected:i.name
                                                }
                                                
                                            })}
                                        </div>
                                    </div>
                                    
                                    <img className={styles.clickable} src="images/updown.png" alt='icon' onClick={() => setVidDropdown(!vidDropdown)} />
                                    <img className={styles.store} src='/images/storeicon.png' />
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
                <div className={styles.videos}>

                    <div className={styles.videos_delivery}>
                        <div className={styles.header}>
                            <h2>
                                Videos
                            </h2>
                        </div>
                        <div className={styles.videos_deliverydata}>
                            <p>Upload,Transcode,Store and Deliver your asset using our service.<br />
                                You can Upload a video using API or directly from here to share it with your users</p>
                            <a >
                                <button onClick={() => set_asset(true)} className='btn'> <img src="/images/iconfeather-plus.png" alt='icon' ></img> Add new video</button>

                            </a>
                        </div>
                        <span />
                    </div>
                    <div className={styles.search}>
                        <input type="text" onChange={(e) => handleSearch(e)} placeholder='Search videos'></input>
                        <img src='/images/search_icon.png' alt='icon'></img>
                    </div>
                    <div className={styles.videos_table}>
                        <table className="table_input">
                            <thead>
                                <tr>
                                    <th><input type="checkbox"></input></th>
                                    <th>Added on  <img onClick={() => sort_num("created_at")} src='/images/updown.svg' /></th>
                                    {/* <th>Name <img onClick={() => sorting("title")} src='/images/updown.png' /> </th> */}
                                    <th>Video ID</th>
                                    <th>Image Preview</th>
                                    <th>Duration <img onClick={() => sort_num("duration")} src='/images/updown.svg' /></th>
                                    <th>Resolution</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {videoData.map((i, key) => <>
                                    <tr key={key}>
                                        <VideoList create_On={create_On} i={i} created_time={created_time} />
                                    </tr>
                                </>)}
                            </tbody>
                        </table>

                    </div>
                    {add_asset && <Videodelivery_addnewassets close_asset={set_asset} />}
                </div>
            </div>
        </div>

    )
}

Videos.getLayout = function getLayout(page) {
    return (
        <Layout>
            <div className="wrapper_body">

                {page}

            </div>
        </Layout>
    )
}