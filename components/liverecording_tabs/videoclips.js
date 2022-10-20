import { useState, useEffect, useRef } from 'react';
import { Fragment } from 'react'
import styles from '../../styles/videodelivery_tabs.module.css'
import Api from '../api/api';
// import Videoclips_tabs from '../homepage/videoclips_tabs';
import Recordingvideoclips_tabs from './recordingvideoclips_tabs';
import { useRouter } from "next/router";


export default function Videoclips() {
    const router = useRouter();
    const [clips, setClips] = useState([])
    const [reloadAfterPost, setReloadAfterPost] = useState(false)
    const streamId = router.query.streamId;
    const cInterval = useRef()

    useEffect(() => {
        let response=false
        Api.Live_video_clip_list(streamId).then(res => {
            setClips(res.data.data)
            if (res && res.data && res.data.data) {
                for(let i=0;i<res.data.data.length;i++){
                    if (res.data.data[i].status=='Processing (Clip Unknown)'||res.data.data[i].status == 'Processing'||res.data.data[i].status == 'Initializing') {
                        response=true
                    }
                }
              
                  if(response==true){
                    const handlerender = () => {
                        Api.Live_video_clip_list(streamId).then((res) => {
                            setClips(res.data.data)
                            for(let i=0;i<res.data.data.length;i++){
                                if (res.data.data[i].status=='view video') {
                                    response=false;
                                    clearInterval(cInterval)
                                }
                            }
                        })
                    }
        
                    cInterval.current = setInterval(() => {
                        handlerender()
                    }, 1000 * 30)
                  }else if(response==false){
                    clearInterval(cInterval)
                  }
                
               
            }
            
        }
                
            
        


    )
        .catch(err => console.log(err))
    return () => {
        clearInterval(cInterval.current)
        setClips([])
    }
}, [reloadAfterPost])




const create_On = (date) => {
    var y = new Date(date)
    return y.toLocaleString("en-AU", { day: "2-digit", month: "2-digit", year: "numeric" })
}
const created_time = (date) => {
    var t = new Date(date)
    return t.toLocaleString("en-IN", { hour: "2-digit", minute: "2-digit" });
}
const handleVideoView = (uuid) => {
    localStorage.setItem('videoId', uuid)
    router.push({ pathname: `/videos/video`, query: { 'videoId': uuid, 'path': 1 } });
}
return (
    <Fragment>
        <div className={styles.videoclips}>
            <div className={styles.subtitles_list}>
                <h2>List of Video Clips</h2>
                <div className={styles.videos_table}>
                    {clips.length === 0 ? <div className={styles.notFound}>No Video Clip Found</div> : <table>
                        <thead>
                            <tr>
                                <th>Added on</th>
                                <th>Name</th>
                                <th className={styles.video_id}>Video ID</th>
                                <th>Actions</th>

                            </tr>
                        </thead>
                        <tbody>

                            {clips.map(item => {
                                return (
                                    <tr key={item.clipUUID}>
                                        <td>{create_On(item.created_at)}<br />{created_time(item.created_at)}</td>
                                        <td>{item.name}</td>
                                        <td>{item.clipUUID}</td>
                                        {item.statusId == 3 ? <td className={styles.actionicons}><a onClick={() => handleVideoView(item.contentUUID)}>View Video</a></td> : <td className={styles.actionicons}>{item.status}</td>}
                                    </tr>
                                )
                            })}
                            {/* <tr>

                                    <td>02/12/21<br></br>6:03pm</td>
                                    <td>Clip1</td>
                                    <td>OPe0o7EObTeS01T3YrydYMyVjjvHFR7AeJOHmH38V0100IM</td>
                                    <td className={styles.actionicons}><a>View Video</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>02/12/21<br></br>6:03pm</td>
                                    <td>Clip1</td>
                                    <td>OPe0o7EObTeS01T3YrydYMyVjjvHFR7AeJOHmH38V0100IM</td>
                                    <td className={styles.actionicons}><a>View Video</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>02/12/21<br></br>6:03pm</td>
                                    <td>Clip1</td>
                                    <td>OPe0o7EObTeS01T3YrydYMyVjjvHFR7AeJOHmH38V0100IM</td>
                                    <td className={styles.actionicons}><a>View Video</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>02/12/21<br></br>6:03pm</td>
                                    <td>Clip1</td>
                                    <td>OPe0o7EObTeS01T3YrydYMyVjjvHFR7AeJOHmH38V0100IM</td>
                                    <td className={styles.actionicons}><a>View Video</a>
                                    </td>
                                </tr> */}
                        </tbody>

                    </table>}

                </div>

            </div>
            <div className={styles.create_videoclips}>
                <div className={styles.create_videoclips_header}>
                    <h2>Create Video Clips</h2>
                </div>
                <Recordingvideoclips_tabs setReloadAfterPost={setReloadAfterPost} reloadAfterPost={reloadAfterPost} />
            </div>
        </div>
    </Fragment>
)
}