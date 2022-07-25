import { useState,useEffect } from "react";
import styles from '../../styles/tabs.module.css';
import Subtitles from "../videodeliverytabs/subtitles";
import Overview from "../videodeliverytabs/overview";
import Gifs from "../videodeliverytabs/gifs";
import Thumbnails from "../videodeliverytabs/thumbnails";
import Others from "../videodeliverytabs/others";
import Videoclips from "../videodeliverytabs/videoclips";
import Router,{useRouter} from 'next/router'

function Videodelivery_tabs() {
    const router=useRouter();
    const [toggleState, setToggleState] = useState(1)
    const [render,setRender]=useState(true)

    useEffect(()=>{
        if(Number(router.query.path==undefined)){
            setToggleState(1);
            router.push({pathname:'./video',query:{'videoId':localStorage.getItem('videoId'),'path':1}})    
        }else{
            setToggleState(Number(router.query.path));
        }
        if(router.query.status=='Failed'){
            setRender(false)
        }
    },[router.query.path])
    
    const toggleTab = (index) => {
        router.push({pathname:'./video',query:{'videoId':localStorage.getItem('videoId'),'path':`${index}`}})
        setToggleState(index);
    };
    
    return (
        <div className={styles.wrapper_tabs}>
            <div className={styles.bloc_tabs}>
                {render?<><button
                    className={toggleState === 1 ? `${styles.tabs_item} ${styles.active_tabs}` : `${styles.tabs_item}`}
                    onClick={() => toggleTab(1)}
                >
                    <span>Overview</span>
                </button>
                <button
                    className={toggleState === 2 ? `${styles.tabs_item} ${styles.active_tabs}` : `${styles.tabs_item}`}
                    onClick={() => toggleTab(2)}
                >
                    <span>Video Clips</span>
                </button>
                <button
                    className={toggleState === 3 ? `${styles.tabs_item} ${styles.active_tabs}` : `${styles.tabs_item}`}
                    onClick={() => toggleTab(3)}
                >
                    <span>Thumbnails</span>
                </button>
                <button
                    className={toggleState === 4 ? `${styles.tabs_item} ${styles.active_tabs}` : `${styles.tabs_item}`}
                    onClick={() => toggleTab(4)}
                >
                    <span>Subtitles</span>
                </button>
                {/* <button
                    className={toggleState === 5 ? `${styles.tabs_item} ${styles.active_tabs}` : `${styles.tabs_item}`}
                    onClick={() => toggleTab(5)}
                >
                    <span>Gifs</span>
                </button> */}
                <button
                    className={toggleState === 6 ? `${styles.tabs_item} ${styles.active_tabs}` : `${styles.tabs_item}`}
                    onClick={() => toggleTab(6)}
                >
                    <span>Others</span>
                </button></>:<>
                <button
                    className={toggleState === 1 ? `${styles.tabs_item} ${styles.active_tabs}` : `${styles.tabs_item}`}
                    onClick={() => toggleTab(1)}
                >
                    <span>Overview</span>
                </button>
                <button
                    className={toggleState === 6 ? `${styles.tabs_item} ${styles.active_tabs}` : `${styles.tabs_item}`}
                    onClick={() => toggleTab(6)}
                >
                    <span>Others</span>
                </button>
                </>}
            </div>

            <div className={styles.content_tabs_area}>
                <div
                    className={toggleState === 1 ? `${styles.content_tabs} ${styles.active_content}` : `${styles.content_tabs}`}
                >
                   {toggleState===1 && <Overview />}
                </div>

                <div
                    className={toggleState === 2 ? `${styles.content_tabs} ${styles.active_content}` : `${styles.content_tabs}`}
                >
                    {toggleState===2 && <Videoclips/>}

                </div>

                <div
                    className={toggleState === 3 ? `${styles.content_tabs} ${styles.active_content}` : `${styles.content_tabs}`}
                >

                    {toggleState===3 && <Thumbnails />}
                </div>

                <div
                    className={toggleState === 4 ? `${styles.content_tabs} ${styles.active_content}` : `${styles.content_tabs}`}
                >

                    {toggleState===4 &&<Subtitles />}
                </div>

                {/* <div
                    className={toggleState === 5 ? `${styles.content_tabs} ${styles.active_content}` : `${styles.content_tabs}`}
                >

                    {toggleState===5 && <Gifs />}

                </div> */}
                <div
                    className={toggleState === 6 ? `${styles.content_tabs} ${styles.active_content}` : `${styles.content_tabs}`}
                >

                    {toggleState===6 && <Others />}
                </div>

            </div>
        </div>
    )
}

export default Videodelivery_tabs;