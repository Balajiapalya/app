import styles from '../styles/videos.module.css'
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import Api from './api/api';
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";
import { useRouter } from 'next/router';

export default function Direct_upload() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [filename, set_filename] = useState();
    let [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#999");
    const [uploaded, setuploaded] = useState(false);
    const router = useRouter();
    let handleChange = e => {
        var files = e.target.files;
        var filesArray = [].slice.call(files);
        filesArray.forEach(e => {
            set_filename(e.name)
        });
    };

    const onSubmit = direct_video_upload => {
        // console.log(direct_video_upload)
        const file = direct_video_upload.file[0];
       
        Api.Direct_upload_post(direct_video_upload)
            .then(res => {
                if (res.data.success = "Success") {
                    setLoading(true)
                    const url = res.data.data.url;
                    axios({
                        method: "PUT",
                        url: url,
                        data: file,
                        headers: {
                            "Content-Type": "multipart/form-data"
                        },
                        // onUploadProgress:(data)=>{
                        //     console.log(data.loaded,data.total);
                        // }
                    })
                        .then(Headers => {
                            if (Headers.status = 200) {
                                setLoading(false)
                                setuploaded(true)
                                router.push = {
                                    pathname: '/videos/index',
                                }


                            }
                        })
                        

                }

            })
            // .catch(error => {
            //     if (error.response.data.message = "Token expired") {
            //         window.localStorage.clear();
            //         document.cookie = 'Jwt-token=;expires=' + new Date().toUTCString()
            //         window.location.href = '/signin'
            //     }
            // })
    }

    return (

        <div className={styles.Videodelivery_addnewassets}>
            <h2>Add new video</h2>
            <div className={styles.upload_file}>
                <h2>Upload your video file</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.upload_btn_wrapper}>
                        <button className={styles.btn}>Select file</button>
                        <input
                            type="file"
                            name='file'
                            {...register("file", { required: true })}
                            onChange={e => handleChange(e)}
                        />
                    </div>

                    <div className={styles.direct_upload_title}>
                        {uploaded && <div className={styles.uploaded_check}><img src='/images/asset_status/ready.svg' alt='uploaded' /><span>file uploaded</span></div>}
                        <ClipLoader className={styles.loader} color={color} loading={loading} size={12} />

                        <input
                            readOnly
                            name="file_name"
                            defaultValue={filename}
                            {...register("file_name", { required: true })}
                            accept="video/*"
                        ></input>
                    </div>

                    <div className={styles.direct_upload_submit}>
                        <button type="submit">Upload</button>
                    </div>
                </form>

            </div>
        </div>

    )
}