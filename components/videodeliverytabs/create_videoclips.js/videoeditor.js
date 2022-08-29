import { Fragment } from "react";
import styles from '../../../styles/videodelivery_tabs.module.css';
import Link from "next/link";
import {useState} from 'react'
import Api from '../../../components/api/api';
import { useForm } from 'react-hook-form';
function Videoditor({strtEnd,setStrtEnd}) {
    // const {strtEnd,setStrtEnd}=props
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit=(time)=>{
        setStrtEnd(time)
        
    }
    
    return (

        <div className={styles.video_editor_content}>
            <div className={styles.video_editor_player}>
            <img src="/images/image11.png" alt="image"/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} >
            <div className={styles.start_end_time}>
                <div className={styles.start_time}>
                    <h5>Start time*</h5>
                    <input placeholder="00:20:30" {...register('start_offset',{
                                        required: 'This field is required',
                                        // pattern: {
                                        //     value:/^\d?\d:\d{2}:\d{2}$/,
                                        //     message: 'Please enter hh:mm:ss format'
                                        // },
                                    })}></input>
                                    {<p className={'validations'}>{errors.start_offset?.message}</p>}
                </div>
                <div className={styles.end_time}>
                    <h5>End Time*</h5>
                    <input placeholder="00:20:40" {...register('end_offset',{
                                        required: 'This field is required',
                                        // pattern: {
                                        //     value:/^\d?\d:\d{2}:\d{2}$/,
                                        //     message: 'Please enter hh:mm:ss format'
                                        // },
                                    })}></input>
                                    {<p className={'validations'}>{errors.end_offset?.message}</p>}
                </div>
            </div>
            <div className={styles.create_video_clip_button}>
                <button type="submit">Create Video Clip</button>
            </div>
            </form>
        </div>
    )
}
export default Videoditor;