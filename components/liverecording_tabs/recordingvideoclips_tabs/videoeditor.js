import { Fragment } from "react";
import styles from '../../../styles/videodelivery_tabs.module.css';
import Link from "next/link";
import { useState } from 'react'
import { useRouter } from 'next/router';
import Api from '../../../components/api/api';
import { useForm } from 'react-hook-form';
import Livestream_Player from "../../livestream_Player";
import Player from '../../player';
import { useEffect } from "react";
function Videoditor(props) {
    const router = useRouter();
    const streamId = router.query.streamId
    const [playerUrl,setplayerUrl]=useState()
    // const {strtEnd,setStrtEnd}=props
    const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
    const onSubmit = (time) => {
        
        Api.Live_create_clip(time,streamId).then(res=>{
            res&&res.data&&res.data.data&&props.props.setReloadAfterPost(!props.props.reloadAfterPost)
            Api.Live_video_clip_list(streamId)
            reset()
    })
        .catch(err=>console.log(err))

    }
    useEffect(()=>{
        Api.Live_stream_data(streamId)
            .then(res => {
                if (res && res.data && res.data.data) {
                    setplayerUrl(res.data.data.playbackUrl)
                    // localStorage.setItem("asset_title", res.data.data.title);
                }
                else{
                    console.log(res.data.data)
                }
            })
    },[])
    const handlethumnail_callback = () => {

    }
    return (

        <div className={styles.video_editor_content}>
            <div className={styles.video_editor_player}>
                {/* <img src="/images/image11.png" alt="image" /> */}
                <Livestream_Player playback_url={playerUrl} handlethumnail={handlethumnail_callback} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className={styles.start_end_time}>
                    <div className={styles.start_time}>
                        <h5>Start time*</h5>
                        <input placeholder="start time" {...register('startTime',{
                            valueAsNumber: true,
                            required: 'This field is required',
                            pattern: {
                                value: "^-?[0-9]\d*\.?\d*$",
                                message: 'Please enter hh:mm:ss format'
                            },
                        })}></input>
                        {<p className={'validations'}>{errors.startTimeInSecs?.message}</p>}
                    </div>
                    <div className={styles.end_time}>
                        <h5>End Time*</h5>
                        <input placeholder="end time" {...register('endTime',{
                            valueAsNumber: true,
                            required: 'This field is required',
                            pattern: {
                                value: "^-?[0-9]\d*\.?\d*$",
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