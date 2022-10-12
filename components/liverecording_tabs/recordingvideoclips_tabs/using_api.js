import { Fragment } from "react";
import styles from '../../../styles/videodelivery_tabs.module.css';
import Link from "next/link";
import { useState, useEffect } from "react";
import Api from '../../../components/api/api';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import MonacoEditor from "../../videodeliverytabs/create_videoclips.js/MonacoEditor";

function Using_api() {
    const router = useRouter();
    const [codeData, setCodeData] = useState(`${JSON.stringify(
                                
        {
            "title": "Video title",
            "description": "Video description",
            "video": [
                {
                    "url": `vg://${router.query.videoId}`,
                    "start_offset": 0,
                    "end_offset": 0
                }
            ],
            "watermark": [
                {
                    "url": "Image url",
                    "x_pos": "10px",
                    "y_pos": "10px",
                    "x_margin": "10px/10%",
                    "y_margin": "10px/10%",
                    "x_align": "left/center/right",
                    "y_align": "top/middle/bottom",
                    "width": "10%/100px",
                    "height": "10%/100px",
                    "opacity": "90%"
                }
            ],
            "subtitle": [
                {
                    "url": "",
                    "name": "English US",
                    "language_code": "en_US",
                    "support_closed_captions": false
                }
            ],
            "tags": [
                "tag1",
                "tag2"
            ],
            "metadata": [
                {
                    "key": "abc",
                    "value": "pqr"
                },
                {
                    "key": "...",
                    "value": "...."
                }
            ],
            "playback_policy": ["public", "signed"],
            "mp4_support": true,
            "save_original_copy": true,
            "test_video": true
        }
    
    , undefined, 2)}`)
   
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const [toggleposition, settoggleposition] = useState(2);
    // const togglebtn = (index) => {
    //     settoggleposition(index);
    // }


    const onSubmit = video_url_data => {
        try {
            Api.post_video(JSON.parse(codeData))
                .then(res => {
                    if (res.data.status == "Success") {
                        console.log(res, 'res')
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }
        catch (e) {
            toast.error('syntax error', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

    }
    const handleChange = (e) => {
        setCodeData(e)
    }
    return (

        <div className={styles.Videodelivery_addnewassets}>
            <div className={styles.post}>

                <div className={styles.language_select}>
                    {/* <button className={toggleposition == 1 ? `${styles.model_btn} ${styles.active}` : `${styles.model_btn}`} onClick={() => togglebtn(1)}><img className={styles.languge_img} src='/images/python.png' alt='python' />Python</button> */}
                    {/* <button className={toggleposition == 2 ? `${styles.model_btn} ${styles.active}` : `${styles.model_btn}`} onClick={() => togglebtn(2)}><img className={styles.languge_img} src='/images/node-js.png' alt='node' />Node</button> */}
                    {/* <button className={toggleposition == 3 ? `${styles.model_btn} ${styles.active}` : `${styles.model_btn}`} onClick={() => togglebtn(3)}><img className={styles.languge_img} src='/images/php.png' alt='php' />Php</button>
                    <button className={toggleposition == 4 ? `${styles.model_btn} ${styles.active}` : `${styles.model_btn}`} onClick={() => togglebtn(4)}><img className={styles.languge_img} src='/images/go.png' alt='go' />Go</button> */}
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.code}>
                        <MonacoEditor codeData={codeData} setCodeData={setCodeData}/>
                    </div>
                    <button className={styles.btn} type="submit">Run Request</button>
                </form>

                <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>

        </div>
    )
}
export default Using_api;