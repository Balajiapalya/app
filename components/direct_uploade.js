import styles from '../styles/videos.module.css'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Api from './api/api';
export default function Direct_upload() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [filename, set_filename] = useState("select file");
    let handleChange = e => {
        var files = e.target.files;
        var filesArray = [].slice.call(files);
        filesArray.forEach(e => {
            set_filename(e.name)
        });
    };
    const onSubmit = direct_video_upload => {
        Api.Direct_upload_post(direct_video_upload)
            .then(res => {
                console.log(res.data)
            })
    }

    return (

        <div className={styles.Videodelivery_addnewassets}>
            <h2>Create new asset</h2>
            <div className={styles.upload_file}>
                <h2>upload your video file</h2>
                <form  onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.upload_btn_wrapper}>
                        <button className={styles.btn}>{filename}</button>
                        <input
                            type="file"
                            name="myfile"
                            {...register("myfile", { required: true })}
                            onChange={e => handleChange(e)}
                        />
                    </div>
                    <div className={styles.direct_upload_button}>
                    <button className={`${styles.form} btn`} type="submit">submit</button>
                    </div>
                    
                </form>
                
            </div>
        </div>

    )
}