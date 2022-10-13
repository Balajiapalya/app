import styles from '../../styles/livestream.module.css';
import Layout from '../../components/common/layout';
import Videodelivery_tabs from '../../components/homepage/videodelivery_tabs';
import Livestrean_tabs from '../../components/livestream_tabs';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Api from '../../components/api/api';
import { useRouter } from "next/router";
import { useForm } from 'react-hook-form';


export default function Livestream_tabspage() {
    
    const reff = useRouter()
    const [headtitle, setheadttitle] = useState(true);
    const [save, setsave] = useState(false);
    const [editInput, setEditInput] = useState()
    const [editted, setEdittedTitle] = useState()
    const [data, setData] = useState()
    const [titlee,setTitle]=useState()
    const { register, handleSubmit, watch, setError,formState: { errors } } = useForm();
    useEffect(() => {
        // Api.Get_Env_item().then(res => {
        //     setData(res.data.data)
        //     // setTitle(res.data.data.title)

        // })
        Api.Live_stream_data(window.location.search.split("streamId=")[1].split("&")[0])
            .then(res => {
                if (res && res.data && res.data.data) {
                   setTitle(res.data.data.title)
                }
            })
            

    }, [])
    const editName = () => {

        setheadttitle(false)
        setsave(true)
    }
    const onSubmit = () => {

        let doc = document.querySelector('.headerDiv')
        if (editInput !== undefined) {
            if (doc.getElementsByClassName('child')[0] !== undefined) {
                doc.getElementsByClassName('child')[0].value = editInput
            }
            localStorage.setItem('asset_title', editInput)
        }
        let obj = new Object()
        obj.title = editInput
        obj.description = data.description
        obj.tags = data.tags
        obj.metadata = data.metadata;
        Api.Meta_tag(obj).then(res => setEdittedTitle(res.data.data.title))
        setsave(false);
        setheadttitle(true);
    }
    const cancelName = () => {
        setError('name',{message:''})
        setsave(false);
        setheadttitle(true);
    }
    let title;
    if (process.browser) {
        title = localStorage.getItem('asset_title')
    }
    const handleInput = (e) => {
        setEditInput(e.target.value)
        // localStorage.setItem('asset_title',e.target.value)

    }

    return (
        <div className={styles.container}>
            <div className={styles.videosdelivery_assets}>
                <div className='container'>
                    <div className={styles.settings}>
                        <div className={`${styles.padding} headerDiv`}>
                            <div className={styles.header}>
                                <div className={styles.assets}>
                                    <Link href="/Live_stream"><a>Live streams</a></Link>
                                    <p> &gt; <p className="header">{editted ? editted : titlee}</p></p>

                                </div>
                                <div className={styles.header_asianet}>
                                    <img className={styles.icon_stat} src="/images/iconionic-ios-stats@2x.png" alt="ios-stats"></img>
                                    <div className={styles.header_title_container}>
                                        <div className={styles.header_title}>
                                            {headtitle ? <div className={styles.styleTitle}>
                                                <h2 className='mainTitle'>{editted ? editted : titlee}</h2>

                                                <h2 >

                                                    <button onClick={() => editName()}><img className={styles.edit_img} src="/images/iconmaterial-edit.svg" alt="edit" /><span> Edit</span></button>
                                                </h2> </div> : null
                                            }
                                        </div>
                                        {save ?
                                            <form onSubmit={handleSubmit(onSubmit)} className={styles.input_title}>
                                                {/* <input onChange={(e) => handleInput(e)} defaultValue={title} /> */}
                                                <input maxLength={30} defaultValue={title} {...register('name', {
                                                    required: 'This field is required', pattern: {
                                                    value: /^[^\s]+(?:$|.*[^\s]+$)/,
                                                    message: 'Entered value cannot start/end or have only white space'
                                                    },
                                                    onChange:(e) => handleInput(e)
                                                })}/>
                                                <button type="submit">Save</button>
                                                <button onClick={() => cancelName()}>Cancel</button>
                                                {<p className={`${styles.validate} validations`}>{errors.name?.message}</p>}
                                            </form> : null}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.close}> <Link href="/Live_stream"><a><img src='/images/close.svg' /></a></Link></div>
                            {/* <Videodelivery_tabs /> */}
                            <Livestrean_tabs/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
Livestream_tabspage.getLayout = function getLayout(page) {
    return (
        <Layout>
            <div className="wrapper_body">

                {page}

            </div>
        </Layout>
    )
}