import styles from '../styles/videos.module.css'
import { useForm } from 'react-hook-form';
import Api from '../components/api/api';
import Link from 'next/link'
import Direct_upload from '../components/direct_uploade';



export default function Videodelivery_addnewassets({ close_asset }) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = video_url_data => {
        Api.post_video(JSON.parse(video_url_data.code))
            .then(res => {
                // console.log(res)
                window.location.reload()
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className={styles.videodelivery}>
            <div className={styles.model_nav}>
                <a onClick={() => close_asset(false)} className={styles.model_close} role="button"><img src="/Images/close.png" alt="close" /> </a>
            </div>
            <div className={styles.Videodelivery_addnewassets}>
                <Direct_upload />
                <div className={styles.or}></div>
                <div className={styles.or_text}><span>[or]</span></div>
                <div  >
                    <form className={styles.post} onSubmit={handleSubmit(onSubmit)}>
                        <label >Post using Video URL:</label>
                        <input
                            type='text'
                            readOnly
                            value={`http://13.235.3.29/video//services/api/v1/contents`}
                        />
                        <span>Post body editor:</span>
                        <div className={styles.language_select}>
                            <button className={`${styles.model_btn} ${styles.active}`}><img className={styles.languge_img} src='/Images/python.png' alt='python' />Python</button>
                            <button className={styles.model_btn}><img className={styles.languge_img} src='/Images/node-js.png' alt='node' />Node</button>
                            <button className={styles.model_btn}><img className={styles.languge_img} src='/Images/php.png' alt='php' />Php</button>
                            <button className={styles.model_btn}><img className={styles.languge_img} src='/Images/go.png' alt='go' />Go</button>
                        </div>
                        <div className={styles.code}>
                            <textarea
                                value='[
                                    {
                                    "title": "Video title",
                                    "description": "Video description",
                                    "video": [
                                    {
                                    "url": "https://cr-vod-frndly.akamaized.net/vod/ss/xilinx/30mins_1920x1080.mp4",
                                    "start_offset":0
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
                                    "save_original_copy": false,
                                    "test_video": true
                                    }
                                    ]'
                                className={`${styles.code_input} form_control`}
                                type='text'
                                name='code'
                                {...register("code", { required: true })}
                                value='[
                                    {
                                    "title": "Video title",
                                    "description": "Video description",
                                    "video": [
                                    {
                                    "url": "http://techslides.com/demos/sample-videos/small.mp4",
                                    "start_offset":0
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
                                    "save_original_copy": false,
                                    "test_video": true
                                    }
                                    ]'
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