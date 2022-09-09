import styles from '../../styles/videos.module.css'
import { useForm } from 'react-hook-form';
import Api from '../../components/api/api';
import Link from 'next/link'
import Direct_upload from '../../components/direct_uploade';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Editor from "@monaco-editor/react";

export default function Videodelivery_addnewassets({ table, setReload, filename, set_filename, uploaded, setuploaded }) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [toggleposition, settoggleposition] = useState(2);
    const [codeData, setCodeData] = useState(`${JSON.stringify(
        {
            "title": "Video title",
            "description": "Video description",
            "content": [
                {
                    "url": "http://techslides.com/demos/sample-videos/small.mp4",
                    "start_offset": 0
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
                }
            ],
            "playback_policy": ["public"],
            "mp4_support": false,
            "save_original_copy": false
        }
        , undefined, 2)}`)
    const togglebtn = (index) => {
        settoggleposition(index);
    }

    const onSubmit = () => {
        try {
            Api.post_video(JSON.parse(codeData))
                .then(res => {
                    if (res.data.status == "Success") {
                        window.location.reload()
                        close_asset(true)
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
  
    const printTheJSONInPrettyFormat = () => {
        var badJSON = document.getElementById('prettyJSONFormat').value;
        var parseJSON = JSON.parse(badJSON);
        var JSONInPrettyFormat = JSON.stringify(parseJSON, undefined, 4);
        document.getElementById('prettyJSONFormat').value =
            JSONInPrettyFormat;
    }

    // popup
    const handlePopUp = () => {
        // close_asset(false)
        toast.dismiss()
        let inpopUp = document.querySelector('.inpopup');
        inpopUp.parentElement.classList.add(`${styles.no_display}`);
        table.classList.remove(`${styles.no_display}`);
    }
    return (
        <div className={`${styles.videodelivery} inpopup`}>
            <div className={styles.model_nav}>
                <a onClick={() => handlePopUp()} className={styles.model_close} role="button"><Image src="/images/asset_status/iconClose.svg" alt='icon' width='20' height='20' /> </a>
            </div>
            <div className={styles.Videodelivery_addnewassets}>
                <Direct_upload toast={toast} handlePopUp={handlePopUp} setReload={setReload} filename={filename} set_filename={set_filename} uploaded={uploaded} setuploaded={setuploaded} />
                <div className={styles.or}></div>
                <div className={styles.or_text}><span className={styles.divider}>[or]</span></div>
                <div className={styles.post} >

                    <label >Post using Video URL:</label>
                    <input
                        type='text'
                        readOnly
                        value={`POST  https://api.videograph.ai/video/services/api/v1/contents`}
                    />
                    <span className={styles.postSpan}>POST body editor:</span>
                    {/* <div className={styles.language_select}>
                        <button className={toggleposition == 1 ? `${styles.model_btn} ${styles.active}` : `${styles.model_btn}`} onClick={() => togglebtn(1)}><img className={styles.languge_img} src='/images/python.png' alt='python' />Python</button>
                        <button className={toggleposition == 2 ? `${styles.model_btn} ${styles.active}` : `${styles.model_btn}`} onClick={() => togglebtn(2)}><img className={styles.languge_img} src='/images/node-js.png' alt='node' />Node</button>
                        <button className={toggleposition == 3 ? `${styles.model_btn} ${styles.active}` : `${styles.model_btn}`} onClick={() => togglebtn(3)}><img className={styles.languge_img} src='/images/php.png' alt='php' />Php</button>
                        <button className={toggleposition == 4 ? `${styles.model_btn} ${styles.active}` : `${styles.model_btn}`} onClick={() => togglebtn(4)}><img className={styles.languge_img} src='/images/go.png' alt='go' />Go</button>
                    </div> */}

                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className={styles.code}>
                            {/* {toggleposition == 2 ? */}
                            <Editor
                                value={codeData}
                                defaultLanguage="node"
                                // theme="vs-dark"
                                id="prettyJSONFormat"
                                // className={`${styles.code_input} form_control`}
                                onChange={(e) => handleChange(e)}
                            />
                            {/* <textarea
                                defaultValue={`${JSON.stringify(
                                    {
                                        "title": "Video title",
                                        "description": "Video description",
                                        "content": [
                                            {
                                                "url": "http://techslides.com/demos/sample-videos/small.mp4",
                                                "start_offset": 0
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
                                            }
                                        ],
                                        "playback_policy": ["public"],
                                        "mp4_support": false,
                                        "save_original_copy": false
                                    }
                                    , undefined, 2)}`}
                                id="prettyJSONFormat"
                                className={`${styles.code_input} form_control`}
                                type='text'
                                name='code'
                                {...register("code", { required: true })}
                            /> */}
                            {/* : null} */}
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
                            {errors.code && <p className={'validations'}>This field is required</p>}
                        </div>
                        <button type='submit' className={`${styles.btn} ${styles.api_submit_btn}`}>Run Request</button>
                    </form>
                </div>
            </div>

        </div>

    )
}