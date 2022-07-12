import { Fragment } from 'react'
import styles from '../../styles/videodelivery_tabs.module.css'
import { useState } from 'react'
import Link from 'next/link';
import Player from '../player';
import { useForm } from "react-hook-form";
import Api from '../api/api';
import Thumbnails_api from './thumnails_api';
import { CopyToClipboard } from 'react-copy-to-clipboard';


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
                    <h2>Create thumbnail using image tool</h2>
                    <div className={styles.create_image}>
                        {/* <img className={styles.editor_img} src="/images/image11.png" alt="image" /> */}
                        <Player handlethumnail={handlethumnail_callback} />
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className={styles.image_form}>
                                <div className={styles.time}>
                                    <label className={styles.model_label}>Time*</label>
                                    <input onChange={(e) => handleChange(e)} type="text" className={styles.model_input} name="videoPositionInSec" value={gettime} placeholder="00:22:33" />
                                    {/* <input onChange={(e)=>handleChange(e)} type="text" className={styles.model_input} name="videoPositionInSec" defaultValue={gettime} placeholder="00:22:33" {...register("videoPositionInSec", { required: false,valueAsNumber: true})} /> */}
                                    {errors.videoPositionInSec && <p className={'validations'}>This field is required</p>}
                                </div>
                                <div className={styles.imagewidth}>
                                    <label className={styles.model_label}>Image Width</label>
                                    <input type="text" className={styles.model_input} name="width" placeholder="Enter width in px" defaultValue={320} {...register("width", { required: true, valueAsNumber: true })} />
                                    {errors.width && <p className={'validations'}>This field is required</p>}
                                </div>
                                <div className={styles.imageheight}>
                                    <label className={styles.model_label}>Image Height</label>
                                    <input type="text" className={styles.model_input} name="height" placeholder="Enter height in px" defaultValue={320}{...register("height", { required: true, valueAsNumber: true })} />
                                    {errors.height && <p className={'validations'}>This field is required</p>}
                                </div>
                                <div className={styles.create_btn}>
                                    <button type="submit" className={styles.btn}>Create thumbnail</button>
                                </div>
                            </div>
                            <span className={styles.image_form_border} />
                        </form>
                        <div className={styles.thumbnail_copy_container}>
                            <h4>Download image from below URL:</h4>
                            <div className={styles.thumbnail_copy}>
                                <p className={styles.thumbnail_copy_link}>{thumbnailurl}  </p>
                                <div className={styles.copy_img}>
                                    <CopyToClipboard text={thumbnailurl}>
                                        <img src='/images/iconionic-ios-copy.svg' alt='copy' onClick={() => copy(thumbnailurl)} />
                                    </CopyToClipboard>
                                </div>

                            </div>
                        </div>



                    </div>
                </div>

                <Thumbnails_api />



            </div>



        </Fragment >
    )
}