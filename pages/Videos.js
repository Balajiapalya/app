import styles from '../styles/videos.module.css'
import Link from 'next/link';
import Layout from '../components/common/layout';
import { useEffect } from 'react'
import Api from '../components/api/api'
import { useState } from 'react'
import Videodelivery_addnewassets from './videodelivery_addnewassets';
import React from 'react'

export default function Videos() {
    const [videoData, setVideoData] = useState([]);
    const [add_asset, set_asset] = useState(false);
    const [env, setenv] = useState([]);
    const [envSelect,setEnvSelect]=useState([]);
    const [id,setId]=useState()


    useEffect(() => {
    
        const data=localStorage.getItem("envuuid")
        Api.Video_list(data)
        .then(res =>
            setVideoData(res.data.data))

        .catch(error => {
            if (error.response.data.message = "Not a valid EnvironmentId") {
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

    }, [])
    

    const handleChange=(e)=>{
        setId(e.target.value)
        localStorage.setItem("envuuid", e.target.value)  
    }
    const create_On = (date) => {
        var d = new Date(date)
        return d.toLocaleString()
    }
    return (
        <div className={styles.container}>
            <div className={styles.background_develepment}>
                <div className={styles.header_development}>
                    <div className={styles.content_development}>
                        <img className={styles.store_icon_png} src='/Images/Store icon.png' />
                        <p>Yupp tv <br />
                          
                           <select className={styles.select} onChange={(e)=>handleChange(e)}>
                               {envSelect.map(i=><>
                               <option value={i.uuid}>{i.name}</option>
                               </>)}
                           </select>
                             </p>
                       
                    </div>
                </div>
            </div>
            <div className={styles.videos}>

                <div className={styles.videos_delivery}>
                    <div className={styles.header}>
                        <h2>
                            Videos
                        </h2>
                    </div>
                    <div className={styles.videos_deliverydata}>
                        <p>Upload,Transcode,Store and Deliver your asset using our service</p>
                        <p>You can Upload a video using API or directly from here to share it with your users</p>
                        <a onClick={() => set_asset(true)}>
                            <button className='btn'>Add New assets</button>
                            <img src="Images/Icon feather-plus.png" alt='icon' ></img>
                        </a>
                    </div>
                    <hr></hr>
                </div>
                <div className={styles.search}>
                    <input placeholder='Search'></input>
                    <img src='/Images/search_icon.png' alt='icon'></img>
                </div>
                <div className={styles.videos_table}>
                    <table>
                        <thead>
                            <tr>
                                <th><input type="checkbox"></input></th>
                                <th>Added on</th>
                                <th>Name</th>
                                <th>Asset ID</th>
                                <th>Image Preview</th>
                                <th>Duration</th>
                                <th>Resolution</th>
                                <th>Status</th>
                                <th>Actions</th>

                            </tr>
                        </thead>
                        <tbody>

                            {videoData.map((i, key) => <>
                                <tr key={key}>
                                    <td><input type="checkbox"></input></td>
                                    <td>{create_On(i.created_at)}</td>
                                    <td>{i.title}</td>
                                    <td>{i.videoId}</td>
                                    <td></td>
                                    {/* <img src='/Images/Image 3.png' /> */}
                                    <td>{i.duration}</td>
                                    <td></td>
                                    {/* HD */}
                                    <td>{i.status}</td>
                                    <td className={styles.actionicons}>
                                        <Link href='/video'><a ><img src='/Images/Icon ionic-ios-play-circle.png' alt="image"></img></a></Link>
                                        <img src='/Images/film-editing.png' alt="image"></img>
                                        <img src='/Images/insert-picture-icon.png' alt="image"></img>
                                        <img src='/Images/gif-file-format-symbol.png' alt="image"></img>
                                        <img src='/Images/closed-caption.png' alt="image"></img>
                                        <img src='/Images/Icon awesome-eye-slash.png' alt="image"></img>
                                    </td>
                                </tr>
                            </>)}




                            {/* <tr>
                                <td><input type="checkbox"></input></td>
                                <td>02/12/21<br></br>6:03pm</td>
                                <td>Asianet-Roku</td>
                                <td className={styles.asset_id}>OPe0o7EObTeS01T3YrydYMyVjjvHFR7AeJOHmH38V0100IM</td>

                                <td><img src='/Images/Image 3.png' /></td>
                                <td>30m20s</td>
                                <td>HD</td>
                                <td>Ready<img className={styles.checkcircle} src="Images/check-circle.png" alt="check-circle"></img></td>
                                <td className={styles.actionicons}>
                                    <img src='/Images/Icon ionic-ios-play-circle.png' alt="image"></img>
                                    <img src='/Images/film-editing.png' alt="image"></img>
                                    <img src='/Images/insert-picture-icon.png' alt="image"></img>
                                    <img src='/Images/gif-file-format-symbol.png' alt="image"></img>
                                    <img src='/Images/closed-caption.png' alt="image"></img>
                                    <img src='/Images/Icon awesome-eye-slash.png' alt="image"></img>
                                </td>
                            </tr> */}
                            {/* <tr>
                                <td><input type="checkbox"></input></td>
                                <td>02/12/21<br></br>6:03pm</td>
                                <td>Asianet-Roku</td>
                                <td className={styles.asset_id}>OPe0o7EObTeS01T3YrydYMyVjjvHFR7AeJOHmH38V0100IM</td>

                                <td><img src='/Images/Image 12.png' alt="image" /></td>
                                <td>30m20s</td>
                                <td>HD</td>
                                <td>Ready<img className={styles.checkcircle} src="Images/check-circle.png" alt="check-circle"></img></td>
                                <td className={styles.actionicons}>
                                    <img src='/Images/Icon ionic-ios-play-circle.png' alt="image"></img>
                                    <img src='/Images/film-editing.png' alt="image"></img>
                                    <img src='/Images/insert-picture-icon.png' alt="image"></img>
                                    <img src='/Images/gif-file-format-symbol.png' alt="image"></img>
                                    <img src='/Images/closed-caption.png' alt="image"></img>
                                    <img src='/Images/Icon awesome-eye-slash.png' alt="image"></img>
                                </td>
                            </tr>
                            <tr>

                                <td><input type="checkbox"></input></td>
                                <td>02/12/21<br></br>6:03pm</td>
                                <td>Asianet-Roku</td>
                                <td className={styles.asset_id}>OPe0o7EObTeS01T3YrydYMyVjjvHFR7AeJOHmH38V0100IM</td>

                                <td><img src='/Images/Image 13.png' alt="image" /></td>
                                <td>30m20s</td>
                                <td>HD</td>
                                <td>Ready<img className={styles.checkcircle} src="Images/check-circle.png" alt="check-circle"></img></td>
                                <td className={styles.actionicons}>
                                    <img src='/Images/Icon ionic-ios-play-circle.png' alt="image"></img>
                                    <img src='/Images/film-editing.png' alt="image"></img>
                                    <img src='/Images/insert-picture-icon.png' alt="image"></img>
                                    <img src='/Images/gif-file-format-symbol.png' alt="image"></img>
                                    <img src='/Images/closed-caption.png' alt="image"></img>
                                    <img src='/Images/Icon awesome-eye-slash.png' alt="image"></img>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox"></input></td>
                                <td>02/12/21<br></br>6:03pm</td>
                                <td>Asianet-Roku</td>
                                <td className={styles.asset_id}>OPe0o7EObTeS01T3YrydYMyVjjvHFR7AeJOHmH38V0100IM</td>

                                <td><img src='/Images/Image 14.png' alt="image" /></td>
                                <td>30m20s</td>
                                <td>HD</td>
                                <td>Ready<img className={styles.checkcircle} src="Images/check-circle.png" alt="check-circle"></img></td>
                                <td className={styles.actionicons}>
                                    <img src='/Images/Icon ionic-ios-play-circle.png' alt="image"></img>
                                    <img src='/Images/film-editing.png' alt="image"></img>
                                    <img src='/Images/insert-picture-icon.png' alt="image"></img>
                                    <img src='/Images/gif-file-format-symbol.png' alt="image"></img>
                                    <img src='/Images/closed-caption.png' alt="image"></img>
                                    <img src='/Images/Icon awesome-eye-slash.png' alt="image"></img>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox"></input></td>
                                <td>02/12/21<br></br>6:03pm</td>
                                <td>Asianet-Roku</td>
                                <td className={styles.asset_id}>OPe0o7EObTeS01T3YrydYMyVjjvHFR7AeJOHmH38V0100IM</td>

                                <td><img src='/Images/Image 15.png' alt="image" /></td>
                                <td>30m20s</td>
                                <td>HD</td>
                                <td>Ready<img className={styles.checkcircle} src="Images/check-circle.png" alt="check-circle"></img></td>
                                <td className={styles.actionicons}>
                                    <img src='/Images/Icon ionic-ios-play-circle.png' alt="image"></img>
                                    <img src='/Images/film-editing.png' alt="image"></img>
                                    <img src='/Images/insert-picture-icon.png' alt="image"></img>
                                    <img src='/Images/gif-file-format-symbol.png' alt="image"></img>
                                    <img src='/Images/closed-caption.png' alt="image"></img>
                                    <img src='/Images/Icon awesome-eye-slash.png' alt="image"></img>
                                </td>
                            </tr> */}
                        </tbody>
                    </table>

                </div>
                {add_asset && <Videodelivery_addnewassets close_asset={set_asset} />}
            </div>
        </div>

    )
}

Videos.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}