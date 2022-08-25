import styles from '../styles/videos.module.css'
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import Api from './api/api';
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";
import { useRouter } from 'next/router';

// import { ToastContainer, toast } from 'react-toastify';

export default function Direct_upload({handlePopUp,setReload,filename,set_filename,uploaded,setuploaded,toast}) {
    const { register, handleSubmit,setError, watch, formState: { errors } } = useForm();
    // const [filename, set_filename] = useState();
    let [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#999");
    // const [uploaded, setuploaded] = useState(false);
    // const [popup,setPopup]=useState(false)
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
        direct_video_upload.file_name=filename;
        if(file===undefined){
            document.querySelector('.tag').style.display='block'
            setError('file',{message:'Please Select a file to upload'})
            setTimeout(()=>{
                document.querySelector('.tag').style.display='none'
                setError('file',{message:''})
            },1000*5)
        }
        if(file){
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
                                // setPopup(true)
                                toast('Video file will be uploaded within few minutes..')
                                setLoading(false)
                                setuploaded(true);

                                let timeout=setTimeout(()=>{
                                    toast.dismiss()
                                    // setPopup(false)
                                    setReload(true)
                                    handlePopUp();
                                    
                                },1000*1)
                                    
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
}

    return (

        <div className={styles.Videodelivery_addnewassets}>
            <h2>Add new video</h2>
            <div className={styles.upload_file}>
                <h2>Upload your video file</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.upload_btn_wrapper}>
                        <button className={styles.btn}>Select file</button>
                        <div className={styles.supportFormats}>
                        <p>supported formats</p>
                        <p>mkv,avi,mp4</p>
                        </div>
                        <input
                            type="file"
                            accept='video/mkv,video/avi,video/mp4,video/*'
                            name='file'
                            {...register("file")}
                            onChange={e => handleChange(e)}       
                        />
                    </div>
                    {<p className={`validations ${styles.paraTag} tag`}>{errors.file?.message}</p>}
                    <div className={styles.direct_upload_title}>
                        {uploaded && <div className={styles.uploaded_check}><img src='/images/asset_status/ready.svg' alt='uploaded' /><span>file uploaded</span></div>}
                        <ClipLoader className={styles.loader} color={color} loading={loading} size={12} />

                        <input
                            readOnly
                            name="file_name"
                            defaultValue={filename}
                            {...register("file_name")}
                            accept="video/*"
                        ></input>
                    </div>

                    <div className={styles.direct_upload_submit}>
                        <button type="submit">Upload</button>
                    </div>
                </form>

            </div>
            {/* <ToastContainer hideProgressBar={true}/> */}
            {/* {popup && <UploadPopUp setPopup={setPopup} setReload={setReload} handlePopUp={handlePopUp}/>} */}
        </div>

    )
}