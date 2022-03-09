import styles from '../styles/model.module.css';
import { useForm } from 'react-hook-form';
import Api from '../components/api/api';


export default function Create_new_organization() {


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = access_data => {
        Api.Create_aaccess_token_data(access_data)
    }
    return (
        <div className={`${styles.container} ${styles.accesstoken_model}`}>
            <div className={styles.body}>

                <div className={styles.model_nav}>
                    <a className={styles.model_close} role="button"><img src="Images/close.png" alt='icon' /> </a>
                </div>
                <div className={styles.main}>
                    <h3 className={styles.model_title}>Create new organization</h3>
                    <p>New organization will have separate teams and settings from your current organization</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className={styles.model_label}> Name</label>
                        <input type="text" className={`${styles.model_input} form_control`} name="name" placeholder="Enter organization name" {...register("name", { required: true })} />
                        {errors.Environment && <p className={`${styles.validations} validations`}>This field is required</p>}
                        <div className={styles.model_btn}>
                            <button type="button" className={`${styles.model_canel_btn} btn btn-primary`}>Cancel</button>
                            <button type="submit" className={`${styles.model_save_btn} btn btn-primary`}>Create Organization</button>
                        </div>
                   </form>

                </div>

            </div>


        </div>

    )
}