import styles from '../styles/videos.module.css'
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import Api from './api/api';
export default function Direct_upload() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [filename, set_filename] = useState();
    const [ids, set_id] = useState('');
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
                if (res.data.success = "Success") {
                    localStorage.setItem('upload_id', res.data.data.id);
                    let upload_data = localStorage.getItem('upload_id')
                    // Api.Direct_upload_get(upload_data)
                    //     .then(res => {
                    //         console.log(res.data)
                    //     })
                    //     .catch(error => {
                    //         console.log(error)
                    //     })
                }
                // console.log(res.data)


            })
    }
    useEffect(() => {

    }, [])
    // console.log(ids)
    return (

        <div className={styles.Videodelivery_addnewassets}>
            <h2>Create new asset</h2>
            <div className={styles.upload_file}>
                <h2>upload your video file</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.upload_btn_wrapper}>
                        <button className={styles.btn}>Select file</button>
                        <input
                            type="file"
                            onChange={e => handleChange(e)}
                        />
                    </div>

                    <div className={styles.direct_upload_title}>
                        <input
                            readOnly
                            name="file_name"
                            defaultValue={filename}
                            {...register("file_name",{ required: true })}
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