import { Fragment } from 'react'
import styles from '../../styles/videodelivery_tabs.module.css'
import { useState } from 'react'
import Link from 'next/link';
import Player from '../player';
import { useForm } from "react-hook-form";
import Api from '../api/api';


export default function Thumbnails() {

    const [thumbnailurl, set_thumbnailurl] = useState();
    const [gettime, settime] = useState();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [toggleposition, settoggleposition] = useState(2);
    const togglebtn = (index) => {
        settoggleposition(index);
    }
    const onSubmit = thumbnail => {
        thumbnail.videoPositionInSec = Number(gettime)
        Api.Create_thumbnail(thumbnail)
            .then(res => {
                if (res.data.code = 200) {
                    set_thumbnailurl(res.data.data.url)
                }
            })
    }
    const handlethumnail_callback = (data) => {
        settime(Math.floor(data))
    }
    const handleChange = (e) => {
        settime(e.target.value)
    }
    function copy(text) {
        navigator.clipboard.writeText(text)
    }
    return (
        <Fragment>
            <div className={styles.thumbnails}>
                <div className={styles.thumbnail_image}>
                    <h2>Create Thumbnail using tool</h2>
                    <div className={styles.create_image}>
                        {/* <img className={styles.editor_img} src="/images/image11.png" alt="image" /> */}
                        <Player handlethumnail={handlethumnail_callback} />
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label className={styles.model_label}>Time</label>
                                <input onChange={(e) => handleChange(e)} type="text" className={styles.model_input} name="videoPositionInSec" value={gettime} placeholder="00:22:33" />
                                {/* <input onChange={(e)=>handleChange(e)} type="text" className={styles.model_input} name="videoPositionInSec" defaultValue={gettime} placeholder="00:22:33" {...register("videoPositionInSec", { required: false,valueAsNumber: true})} /> */}
                                {errors.videoPositionInSec && <p className={'validations'}>This field is required</p>}
                            </div>
                            <div className={styles.imagewidth}>
                                <label className={styles.model_label}>Image Width</label>
                                <input type="text" className={styles.model_input} name="width" placeholder="Enter width in px Default is 320px" {...register("width", { required: true, valueAsNumber: true })} />
                                {errors.width && <p className={'validations'}>This field is required</p>}
                            </div>
                            <div className={styles.imageheight}>
                                <label className={styles.model_label}>Image height</label>
                                <input type="text" className={styles.model_input} name="height" placeholder="Enter height in px" {...register("height", { required: true, valueAsNumber: true })} />
                                {errors.height && <p className={'validations'}>This field is required</p>}
                            </div>
                            <div className={styles.create_btn}>
                                <button type="submit" className={styles.btn}>Create Image</button>
                            </div>
                        </form>
                        <h4>Download image from below URL</h4>
                        <div className={styles.thumbnail_copy}>
                            <p className={styles.thumbnail_copy_link}>{thumbnailurl}  </p>
                            <div className={styles.copy_img}>
                                <img src='/images/iconionic-ios-copy.png' alt='copy' onClick={() => copy(thumbnailurl)} />
                            </div>

                        </div>


                    </div>
                </div>



                <div className={styles.thumbnail_api}>
                    <div className={styles.Videodelivery_addnewassets}>
                        <h2>Create Thumbnail using image Api</h2>


                        <div className={styles.post}>

                            <div className={styles.language_select}>
                                <button className={toggleposition == 1 ? `${styles.model_btn} ${styles.active}` : `${styles.model_btn}`} onClick={() => togglebtn(1)}><img className={styles.languge_img} src='/images/python.png' alt='python' />Python</button>
                                <button className={toggleposition == 2 ? `${styles.model_btn} ${styles.active}` : `${styles.model_btn}`} onClick={() => togglebtn(2)}><img className={styles.languge_img} src='/images/node-js.png' alt='node' />Node</button>
                                <button className={toggleposition == 3 ? `${styles.model_btn} ${styles.active}` : `${styles.model_btn}`} onClick={() => togglebtn(3)}><img className={styles.languge_img} src='/images/php.png' alt='php' />Php</button>
                                <button className={toggleposition == 4 ? `${styles.model_btn} ${styles.active}` : `${styles.model_btn}`} onClick={() => togglebtn(4)}><img className={styles.languge_img} src='/images/go.png' alt='go' />Go</button>
                            </div>
                            <div className={styles.code}>
                            </div>
                            <button className={styles.btn}>Run Request</button>
                            <div className={styles.thumbnail_copy}>
                                <p className={styles.thumbnail_copy_link}>{thumbnailurl}  </p>
                                <div className={styles.copy_img}>
                                    <img src='/images/iconionic-ios-copy.png' alt='copy' onClick={() => copy(thumbnailurl)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </Fragment >
    )
}