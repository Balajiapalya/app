import { useState,useEffect } from "react";
import styles from '../styles/tabs.module.css';
import Overview from "../components/livestream_tabs/overview";
import Others from "../components/livestream_tabs/others";
import Router,{useRouter} from 'next/router'

function Livestrean_tabs() {
    const router=useRouter();
    const [toggleState, setToggleState] = useState(1)
    const [render,setRender]=useState(true)

    useEffect(()=>{
        if(Number(router.query.path==undefined)){
            setToggleState(1);
            router.push({pathname:'./livestreamtabs',query:{'videoId':localStorage.getItem('videoId'),'path':1}})    
        }else{
            setToggleState(Number(router.query.path));
        }
        
        if(localStorage.getItem('status')=='Failed' || localStorage.getItem('status')=='Processing' || localStorage.getItem('status')=='Pending'){
            setRender(false)
        }
    },[router.query.path])
    
    const toggleTab = (index) => {
        router.push({pathname:'./livestreamtabs',query:{'videoId':localStorage.getItem('videoId'),'path':`${index}`}})
        setToggleState(index);
    };
    
    return (
        <div className={styles.wrapper_tabs}>
            <div className={styles.bloc_tabs}>
                <button
                    className={toggleState === 1 ? `${styles.tabs_item} ${styles.active_tabs}` : `${styles.tabs_item}`}
                    onClick={() => toggleTab(1)}
                >
                    <span>Overview</span>
                </button>
                
                <button
                    className={toggleState === 2 ? `${styles.tabs_item} ${styles.active_tabs}` : `${styles.tabs_item}`}
                    onClick={() => toggleTab(2)}
                >
                    <span>Others</span>
                </button>
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

                    {toggleState===2 && <Others />}
                </div>

            </div>
        </div>
    )
}

export default Livestrean_tabs;