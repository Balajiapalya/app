import Link from 'next/link';
import styles from '../styles/videos.module.css'
import { useForm } from 'react-hook-form';
import Api from '../components/api/api';
import { useState } from 'react';


export default function Videodelivery_addnewassets() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = video_url_data =>{
        Api.post_video(video_url_data)
            .then(res=>{
                console.log(res)
            })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className={styles.videodelivery}>
            <div className={styles.model_nav}>
                <a className={styles.model_close} role="button"><img src="/Images/close.png" alt="close" /> </a>

            </div>
            <div className={styles.Videodelivery_addnewassets}>
                <h2>Create new asset</h2>
                <div className={styles.upload_file}>
                    <h2>upload your video file</h2>
                    <div className={styles.upload_btn_wrapper}>
                        <button className={styles.btn}>Select File</button>
                        <input type="file" name="myfile" />
                    </div>

                </div>
                <div className={styles.or}></div>
                <div className={styles.or_text}><span>[or]</span></div>
                <div >
                    <form className={styles.post} onSubmit={handleSubmit(onSubmit)}>
                        <label>Post using Video URL:</label>
                        <input
                            className='form_control'
                            name='url'
                            type='url'
                            {...register("url", { required: true })}
                        />
                        {errors.url && <p className={'validations'}>This field is required</p>}
                        <span>Post body editor:</span>
                        <div className={styles.language_select}>
                            <button className={`${styles.model_btn} ${styles.active}`}><img className={styles.languge_img} src='/Images/python.png' alt='python' />Python</button>
                            <button className={styles.model_btn}><img className={styles.languge_img} src='/Images/node-js.png' alt='node' />Node</button>
                            <button className={styles.model_btn}><img className={styles.languge_img} src='/Images/php.png' alt='php' />Php</button>
                            <button className={styles.model_btn}><img className={styles.languge_img} src='/Images/go.png' alt='go' />Go</button>
                        </div>
                        <div className={styles.code}>
                            <textarea
                                className={`${styles.code_input} form_control`}
                                type='text'
                                name='code'
                                {...register("code", { required: true })}
                            />
                            {errors.code && <p className={'validations'}>This field is required</p>}
                        </div>
                        <button type='submit' className={styles.btn}>Run Request</button>
                    </form>
                </div>
            </div>
        </div>
    )
}