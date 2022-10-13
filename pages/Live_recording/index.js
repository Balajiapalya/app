import styles from '../../styles/livestream.module.css'
import Link from 'next/link';
import Layout from '../../components/common/layout';
import { useEffect } from 'react'
import Api from '../../components/api/api'
import { useState, useRef } from 'react'
import React from 'react'
import LiveList from '../../components/live_list';
import RecordingList from '../../components/recording_list';
import Create_liveRecording from './create_liveRecording';
import ReactPaginate from 'react-paginate';
import Videodelivery_addnewassets from '../videos/videodelivery_addnewassets';
import Create_liveStream from '../Live_stream/create_liveStream';

export default function Recording() {
    const [videoData, setVideoData] = useState([]);
    const [add_asset, set_asset] = useState(false);
    // const [env, setenv] = useState([]);
    const [envSelect, setEnvSelect] = useState([]);
    const [id, setId] = useState();
    // const [dirdata, set_directdata] = useState([]);
    const [order, setorder] = useState("ASC");
    const [ordernum, set_ordernum] = useState("ASC")
    const [vidDropdown, setVidDropdown] = useState()
    const [selected, setSelected] = useState(false)
    // const [defaultenv, setDefaultenv] = useState();
    const [org, setOrg] = useState([])
    // const [openEnv, setOpenEnv] = useState(false);
    const [clicked, setClicked] = useState();
    const [orgName, setOrgName] = useState();
    const [multiSelect, setMultiSelect] = useState([])
    const [timer, setTimer] = useState(false);
    const [reload, setReload] = useState(false);
    const [initialLength, setInitialLength] = useState();
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [currentItems, setCurrentItems] = useState([]);
    const [filename, set_filename] = useState();
    const [uploaded, setuploaded] = useState(false);
    let itemsPerPage = 5


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
            var sorted_num = [...currentItems].sort((a, b) =>
                a[col] > b[col] ? 1 : -1
            );
            setCurrentItems(sorted_num);
            set_ordernum("DSC");
        }
        if (ordernum === "DSC") {
            var sorted_num = [...currentItems].sort((a, b) =>
                a[col] < b[col] ? 1 : -1
            );
            setCurrentItems(sorted_num);
            set_ordernum("ASC");
        }
    }
    useEffect(() => {
        const data = localStorage.getItem("envuuid")
        const endOffset = itemOffset + itemsPerPage;
        Api.Video_list(data)
            .then(res => {
                setCurrentItems(res.data.data.slice(itemOffset, endOffset));
                setPageCount(Math.ceil(res.data.data.length / itemsPerPage));
                {
                    res.data.data.map(item => {


                        if (item.status == 'Processing') {
                            setTimeout(() => {
                                setTimer(true)
                            }, 1000 * 60)
                        }
                    })
                }
                setInitialLength(res.data.data.length)

                let timerFun = () => {
                    setReload(false)
                    let count = 0
                    let intervalFunc = setInterval(() => {
                        Api.Video_list(data).then(res => {
                            let resp = res.data.data.length + count
                            if (initialLength < resp) {
                                setTimer(!timer)
                                clearInterval(intervalFunc)
                            }
                            if (resp < initialLength) {
                                count = initialLength - resp
                            }
                        })
                    }, 1000 * 20);
                }

                { reload && timerFun() }


                { setVideoData(res.data.data) }
            })

        // Api.Env_data()
        //     .then(res => {
        //         setenv(res.data.data)

        //     })
        // .catch(error => {
        //     console.log(error)
        // })
        Api.Get_env_data()
            .then(res => {
                if (res.data.status = "Success") {
                    // localStorage.setItem("envuuid", res.data.data[0].uuid)
                    setEnvSelect(res.data.data)
                }
            })
            .catch(error => {
                console.log(error)
            })
        Api.Get_User_update().then(res => {
            setOrg(res.data.data.organizations)
        })
        return () => {
            setVideoData([]);
            // setenv([])
            setEnvSelect([])
            setOrg([])
        }
    }, [id, add_asset, timer, reload, itemOffset])

    const handleChange = (i) => {
        setId(i.uuid)
        localStorage.setItem("envuuid", i.uuid);
        localStorage.setItem("uuid", clicked);
        localStorage.setItem('orgName', orgName)
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
        let div=document.querySelector('.noRow');
        if(e.target.value==''){
            document.querySelector('#paginate').style.display='block'
            div.style.display='none'
            
        }else{
            document.querySelector('#paginate').style.display='none'
        }
        let count=0;
        let input = e.target.value.toUpperCase()
        let table = document.querySelector('.table_input')
        let tRow = table.getElementsByTagName('tr')
        for (let i = 0; i < tRow.length; i++) {
            let td = tRow[i].getElementsByTagName('td')[2]
            // let tdId = tRow[i].getElementsByTagName('td')[3]
            let status = tRow[i].getElementsByTagName('td')[4]
            if (td ||  status) {
                let data = td.innerText.toUpperCase()
                // let id = tdId.innerText.toUpperCase();
                let stat = status.innerText.toUpperCase()
                if (data.indexOf(input) > -1 ||  stat.indexOf(input) > -1) {
                    tRow[i].style.display = ''
                } else {
                    tRow[i].style.display = 'none';
                     count++
                }
            }
        }
        console.log(tRow.length,count)
        if(tRow.length-1==count && count!==0){ 
          div.style.display='block'
        }else{
          div.style.display='none'
        }
    }


    const searchHandle = (e) => {
        let count=0;
        let options = document.querySelectorAll('#opt')
        for (let i = 0; i < options.length; i++) {
            let name = options[i].innerHTML.toLowerCase()
            let searchValue = e.target.value.toLowerCase()
            if (name.indexOf(searchValue) > -1) {
                options[i].style.display = 'block'
            } else {
                options[i].style.display = 'none'
                count++
            }
        }
        let div=document.querySelector('.noReslt');
        if(options.length==count){ 
          div.style.display='block'
        }else{
          div.style.display='none'
        }
    }
    const handleSelected = (item) => {
        setSelected(item.name)
        setVidDropdown(false)
        // setOpenEnv(false)
        setMultiSelect([])
    }
    let dropdownprod = useRef()
    useEffect(() => {

        const handleDropdown = (e) => {
            if (!dropdownprod.current.contains(e.target)) {
                // setOpenEnv(false)
                setVidDropdown(false)
                setMultiSelect([])
            }
        }
        document.addEventListener('mouseup', handleDropdown)
        return () => {
            document.removeEventListener('mouseup', handleDropdown)
        }
    }, [])

    const handlePopup = () => {
        // set_asset(true)
        setuploaded(false);
        set_filename('')
        let inp=document.querySelector('input[type=file]')
        if(inp){
        inp.value=''
        }
        let Livetable = document.querySelector('.livetable');
        let Livepopup = document.querySelector('.livepopup');
        Livetable.classList.add(`${styles.no_display}`)
        Livetable.classList.remove(`${styles.display}`)
        Livepopup.classList.remove(`${styles.no_display}`)
    }


    const handleEnv = (i) => {
        setClicked(i.uuid);
        if (!multiSelect.some(item => item.uuid == i.uuid)) {
            setMultiSelect([...multiSelect, i])
        } else {
            let filtered = multiSelect.filter(item => item.uuid !== i.uuid)
            setMultiSelect([...filtered])
        }
        setOrgName(i.name);
    }



    const handleMulti = (i) => {
        if (multiSelect.find(item => item.uuid == i.uuid)) {
            return true
        }
        return false
    }

    const handleCheck = () => {
        let headCheck = document.querySelector('#check');
        if (headCheck.checked) {
            let rows = document.getElementsByClassName('tbody')[0].getElementsByTagName('tr');
            for (let i = 0; i < rows.length; i++) {
                rows[i].style.backgroundColor = '#f0f8fd';
                let td = rows[i].querySelectorAll('.assetCheck');
                for (let j = 0; j < td.length; j++) {
                    td[j].checked = true;
                }
            }
        } else {
            let rows = document.getElementsByClassName('tbody')[0].getElementsByTagName('tr');
            for (let i = 0; i < rows.length; i++) {
                rows[i].style.backgroundColor = 'white';
                let td = rows[i].querySelectorAll('.assetCheck');
                for (let j = 0; j < td.length; j++) {
                    td[j].checked = false;
                }
            }
        }
    }
    const handlePageClick = (event) => {
        if (videoData.length !== 0) {
            const newOffset = (event.selected * itemsPerPage) % videoData.length;
            setItemOffset(newOffset);
        }

    };
    return (
        <>
            <div className={styles.container}>
                <div className={styles.background_develepment}>
                    <div className={styles.header_development}>
                        <div className="container">
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
                                    <img className={styles.clickable} src="images/updown.svg" alt='icon' onClick={() => setVidDropdown(!vidDropdown)} />
                                    <img className={styles.store} src='/images/iconawesome-folder.svg' />
                                </div>
                                {vidDropdown &&
                                    <div className={styles.all}>
                                        <input maxLength={30} className={styles.inputSearch} onChange={(e) => searchHandle(e)} placeholder="Search by name" />
                                        <div>
                                            {org.map((i, ind) =>
                                                <>
                                                    <div className={styles.orgNames} onClick={() => handleEnv(i)} key={ind} id="opt">
                                                        {handleMulti(i) ? <img src='/images/iconawesome-chevrondown.svg' alt='openDropdown' className={styles.openDropdown}></img> : <img src='/images/Iconawesome-chevron-down.svg' className={styles.openDropdown}></img>}
                                                        {i.name}
                                                    </div>
                                                    {handleMulti(i) && i.environments.map(i => <div id="opt" key={i.uuid} value={i.uuid}  onClick={() => `${handleSelected(i)} ${handleChange(i)}`} className={styles.singleOption}>
                                                        {i.name}
                                                    </div>
                                                    )}
                                                </>
                                            )}
                                            <div className={`${styles.noResult} noReslt`} style={{display:'none'}}>No result found</div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className={styles.settings}>
                        <div className={styles.videos}>

                            <div className={styles.videos_delivery}>
                                <div className={styles.header}>
                                    <h2>
                                    Live Recording
                                    </h2>
                                </div>
                                <div className={styles.videos_deliverydata}>
                                    <p>Use Videograph Live Recording APIs to record the programs and create video clips from the same.</p>
                                    <a >
                                        <button onClick={() => handlePopup()} className='btn'> <img src="/images/iconfeather-plus.svg" alt='icon' ></img> Create Live Recording</button>

                                    </a>
                                </div>
                                <span />
                            </div>
                            <div className={styles.search}>
                                <input maxLength={30} type="text" onChange={(e) => handleSearch(e)} placeholder='Search videos'></input>
                                <img src='/images/search_icon.svg' alt='icon'></img>
                            </div>
                            <div className={`${styles.videos_table} livetable`}>
                                <table className="table_input">
                                    <thead>
                                        <tr>
                                            <th><input type="checkbox" id="check" onClick={() => handleCheck()}></input></th>
                                            <th>Added on  <img onClick={() => sort_num("created_at")} src='/images/updown.svg' /></th>
                                            {/* <th>Name <img onClick={() => sorting("title")} src='/images/updown.svg' /> </th> */}
                                            <th>Stream ID</th>
                                            <th>Image Preview</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="tbody">
                                        {currentItems.map((i, key) =>
                                            <tr key={key}>
                                                <RecordingList create_On={create_On} i={i} created_time={created_time} />
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                                 {currentItems.length==0 && <div className={styles.noData}>No Live Data Available</div>}
                                 <div className={`${styles.noResult} noRow`} style={{display:'none'}}>No Result Found</div>
                            </div>
                            {/* {add_asset && <Create_liveRecording close_asset={set_asset} />} */}
                            <div className={`${styles.no_display} livepopup`}>
                                <Create_liveRecording table={process.browser && document.querySelector('.livetable')} setReload={setReload} filename={filename} set_filename={set_filename} uploaded={uploaded} setuploaded={setuploaded}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='paginate'>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                className={styles.pagination}
                pageLinkClassName={styles.page_num}
                previousLinkClassName={styles.page_num}
                nextLinkClassName={styles.page_num}
                activeLinkClassName={styles.presentPage}
            />
            </div>
        </>
    )
}

Recording.getLayout = function getLayout(page) {
    return (
        <Layout>
            <div className="wrapper_body">

                {page}

            </div>
        </Layout>
    )
}


