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
        if(gettime!==undefined){
        Api.Create_thumbnail(thumbnail)
            .then(res => {
                if (res.data.code = 200) {
                    set_thumbnailurl(res.data.data.url)
                }
            })
        }
    }
    const handlethumnail_callback = (data) => {
        settime(Math.floor(data))
    }
    const handleChange = (e) => {
        settime(e.target.value)
    }
    const handleCopy = (event) => {
        let copiedText = event.target.parentNode.parentNode.firstChild;
        console.log(copiedText)
        copiedText.style.display = "block"
        setTimeout(function () {
            copiedText.style.display = ""
        }, 1000)
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
                                    <input {...register('videoPositionInSec',{
                                        required: 'This field is required',
                                        onChange:(e) => handleChange(e),
                                        pattern: {
                                            // value: /[0-9]{1,2}:[0-9]{1,2}:[0-9]{1,2}/,
                                            value: /[0-9]/,
                                            message: 'please enter only num'
                                        },
                                    })} type="text" className={styles.model_input} name="videoPositionInSec" value={gettime} placeholder="00:22:33" />
                                    {/* <input onChange={(e)=>handleChange(e)} type="text" className={styles.model_input} name="videoPositionInSec" defaultValue={gettime} placeholder="00:22:33" {...register("videoPositionInSec", { required: false,valueAsNumber: true})} /> */}
                                    {<p className={'validations'}>{errors.videoPositionInSec?.message}</p>}
                                </div>
                                <div className={styles.imagewidth}>
                                    <label className={styles.model_label}>Image Width</label>
                                    <input type="text" className={styles.model_input} name="width" placeholder="Enter width in px" defaultValue={320} {...register("width", {
                                        required: 'This field is required',
                                        pattern: {
                                            value: /^(0|[1-9]\d*)(\.\d+)?$/,
                                            message: 'please enter only num'
                                        },
                                    })} />
                                    {<p className={'validations'}>{errors.width?.message}</p>}
                                </div>
                                <div className={styles.imageheight}>
                                    <label className={styles.model_label}>Image Height</label>
                                    <input type="text" className={styles.model_input} name="height" placeholder="Enter height in px" defaultValue={320} {...register("height", {
                                        required: 'This field is required',
                                        pattern: {
                                            value: /^(0|[1-9]\d*)(\.\d+)?$/,
                                            message: 'please enter only num'
                                        },
                                    })} />
                                    {<p className={'validations'}>{errors.height?.message}</p>}
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
                                <span className={styles.copyMsg} >Copied</span>
                                <p className={styles.thumbnail_copy_link}>{thumbnailurl}  </p>

                                <div className={styles.copy_img}>
                                    <CopyToClipboard text={thumbnailurl}>
                                        <img src='/images/iconionic-ios-copy.svg' alt='copy' onClick={(event) => handleCopy(event)} />
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