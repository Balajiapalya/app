import { Fragment } from 'react'
import styles from '../../styles/videodelivery_tabs.module.css'
import { useState } from 'react'
import Link from 'next/link';
import Player from '../player';
import { useForm } from "react-hook-form";
import Api from '../api/api';


export default function Thumbnails() {

    const [thumbnailurl,set_thumbnailurl]=useState();
    const[gettime,settime]=useState();
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = thumbnail => {
        thumbnail.videoPositionInSec=gettime
        Api.Create_thumbnail(thumbnail)
        .then(res=>{
            if(res.data.code=200){
                set_thumbnailurl(res.data.data.url)
            }   
        })
    }
    const handlethumnail_callback =(data)=>{
            console.log(data)
            settime(data)
    }
    return (
        <Fragment>
            <div className={styles.thumbnails}>
                <div className={styles.thumbnail_image}>
                    <h2>Create Thumbnail using tool</h2>
                    <div className={styles.create_image}>
                        {/* <img className={styles.editor_img} src="/images/image11.png" alt="image" /> */}
                        <Player handlethumnail={handlethumnail_callback}/>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label className={styles.model_label}>Time</label>
                            <input type="text" className={styles.model_input} name="videoPositionInSec" defaultValue={gettime} readOnly placeholder="00:22:33"  {...register("videoPositionInSec", { required: false,valueAsNumber: true})} />
                            {errors.videoPositionInSec && <p className={'validations'}>This field is required</p>}
                            <div className={styles.imagewidth}>
                                <label className={styles.model_label}>Image Width</label>
                                <input type="text" className={styles.model_input} name="width" placeholder="Enter width in px Default is 320px" {...register("width", { required: true,valueAsNumber: true})}/>
                                {errors.width && <p className={'validations'}>This field is required</p>}
                            </div>
                            <div className={styles.imageheight}>
                                <label className={styles.model_label}>Image height</label>
                                <input type="text" className={styles.model_input} name="height" placeholder="Enter height in px" {...register("height", { required: true,valueAsNumber: true})}/>
                                {errors.height && <p className={'validations'}>This field is required</p>}
                            </div>
                            <div className={styles.create_btn}>
                                <button type="submit" className={styles.btn}>Create Image</button>
                            </div>
                        </form>
                        <h4>Download image from below URL</h4>
                        <p>{thumbnailurl}</p>

                    </div>
                </div>



                <div className={styles.thumbnail_api}>
                    <div className={styles.Videodelivery_addnewassets}>
                        <h2>Create Thumbnail using image Api</h2>


                        <div className={styles.post}>

                            <div className={styles.language_select}>
                                <button className={`${styles.model_btn} ${styles.active}`}>Python</button>
                                <button className={styles.model_btn}>Node</button>
                                <button className={styles.model_btn}>Php</button>
                                <button className={styles.model_btn}>Go</button>
                            </div>
                            <div className={styles.code}>


                            </div>
                            <button className={styles.btn}>Run Request</button>
                            <h4>Download image from below URL</h4>
                            <p>{thumbnailurl}</p>
                        </div>
                    </div>
                </div>

            </div>



        </Fragment >
    )
}