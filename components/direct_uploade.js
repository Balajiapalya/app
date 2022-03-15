import styles from '../styles/videos.module.css'
import { useForm} from 'react-hook-form';
export default function Direct_upload() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    return (

        <div className={styles.Videodelivery_addnewassets}>
            <h2>Create new asset</h2>
            <div className={styles.upload_file}>
                <h2>upload your video file</h2>
                <div className={styles.upload_btn_wrapper}>
                    <form>
                        <button className={styles.btn}>Select File</button>
                        <input
                            type="file"
                            name="myfile"
                        />
                    </form>
                </div>
            </div>
        </div>

    )
}