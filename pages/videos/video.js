import styles from '../../styles/videos.module.css';
import Layout from '../../components/common/layout';
import Videodelivery_tabs from '../../components/homepage/videodelivery_tabs';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Api from '../../components/api/api';


export default function Video() {
    const [headtitle, setheadttitle] = useState(true);
    const [save, setsave] = useState(false);
    const [editInput,setEditInput]=useState()
    const [editted,setEdittedTitle]=useState()
    const [data,setData]=useState()
    // const [titlee,setTitle]=useState()

    useEffect(() => {
        Api.Get_Env_item().then(res => {
            setData(res.data.data)
            // setTitle(res.data.data.title)
            
        })

    }, [])
    const editName = () => {
        
        setheadttitle(false)
        setsave(true)
    }
    const saveName = () => {
        let doc=document.querySelector('.headerDiv')
        doc.getElementsByClassName('child')[0].value=editInput
        console.log(doc.getElementsByClassName('child'))
        localStorage.setItem('asset_title',editInput)
        let obj=new Object()
        obj.title=editInput
        obj.description=data.description
        obj.tags=data.tags
        obj.metadata=data.metadata
        console.log(data.metadata,'ddesc')
        Api.Meta_tag(obj).then(res=>setEdittedTitle(res.data.data.title))
        setsave(false);
        setheadttitle(true);
    }
    const cancelName=()=>{
        setsave(false);
        setheadttitle(true);
    }
    let title;
    if (process.browser) {
        title = localStorage.getItem('asset_title')
    }
    const handleInput=(e)=>{
        setEditInput(e.target.value)
        // localStorage.setItem('asset_title',e.target.value)

    }
 
    return (
        <div className={styles.container}>
            <div className={styles.videosdelivery_assets}>
                <div className='container'>
                    <div className={`${styles.padding} headerDiv`}>
                        <div className={styles.header}>
                            <div className={styles.assets}>
                                <Link href="/videos"><a>Video List</a></Link>
                                <p> &gt; <p className="header">{editted?editted:title}</p></p>
                                
                            </div>
                            <div className={styles.header_asianet}>
                                <img className={styles.icon_stat} src="/images/iconionic-ios-stats@2x.png" alt="ios-stats"></img>
                                <div className={styles.header_title_container}>
                                    <div className={styles.header_title}>
                                        {headtitle ?<div className={styles.styleTitle}>
                                        <h2 className='mainTitle'>{editted?editted:title}</h2>
                                            <h2 >
                                            
                                                <button onClick={() => editName()}><img className={styles.edit_img} src="/images/iconmaterial-edit.svg" alt="edit" /><span> Edit</span></button>
                                            </h2> </div>: null
                                        }
                                    </div>
                                    {save ?
                                        <div className={styles.input_title}>
                                            <input onChange={(e)=>handleInput(e)}/>
                                            <button onClick={() => saveName()}>Save</button>
                                            <button onClick={() => cancelName()}>cancel</button>
                                        </div> : null}

                                </div>
                            </div>
                        </div>
                        <div className={styles.close}> <Link href="/videos"><a><img src='/images/close.svg' /></a></Link></div>
                        <Videodelivery_tabs />
                    </div>
                </div>
            </div>
        </div>
    )

}
Video.getLayout = function getLayout(page) {
    return (
        <Layout>
            <div className="wrapper_body">

                {page}

            </div>
        </Layout>
    )
}