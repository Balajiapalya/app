import { Fragment } from "react";
import styles from '../../../styles/videodelivery_tabs.module.css';
import Link from "next/link";
import { useState } from 'react'
import Api from '../../../components/api/api';
import { useForm } from 'react-hook-form';
import Player from '../../player';
function Videoditor(props) {
    // const {strtEnd,setStrtEnd}=props
    const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
    const onSubmit = (time) => {
        const [hrs,mins,sec]=time.startTimeInSecs.split(':')
        const secondsStart=(+hrs)*60*60+(+mins)*60+(+sec);
        const [hr,min,secs]=time.endTimeInSecs.split(':')
        const secondsEnd=(+hr)*60*60+(+min)*60+(+secs)
        const obj=new Object()
        obj.startTimeInSecs=secondsStart
        obj.endTimeInSecs=secondsEnd
        Api.Create_Clips(obj).then(res=>{
            props.props.setReloadAfterPost(!props.props.reloadAfterPost)
            reset()
    })
        .catch(err=>console.log(err))

    }
    const handlethumnail_callback = () => {

    }
    return (

        <div className={styles.video_editor_content}>
            <div className={styles.video_editor_player}>
                {/* <img src="/images/image11.png" alt="image" /> */}
                {/* <Player handlethumnail={handlethumnail_callback}/> */}
            </div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className={styles.start_end_time}>
                    <div className={styles.start_time}>
                        <h5>Start time*</h5>
                        <input placeholder="00:20:30" {...register('startTimeInSecs', {
                            required: 'This field is required',
                            pattern: {
                                value: /^\d?\d:\d{2}:\d{2}$/,
                                message: 'Please enter hh:mm:ss format'
                            },
                        })}></input>
                        {<p className={'validations'}>{errors.startTimeInSecs?.message}</p>}
                    </div>
                    <div className={styles.end_time}>
                        <h5>End Time*</h5>
                        <input placeholder="00:20:40" {...register('endTimeInSecs', {
                            required: 'This field is required',
                            pattern: {
                                value: /^\d?\d:\d{2}:\d{2}$/,
                                message: 'Please enter hh:mm:ss format'
                            },
                        })}></input>
                        {<p className={'validations'}>{errors.endTimeInSecs?.message}</p>}
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