import styles from '../../styles/model.module.css'
import axios from 'axios'
import { useForm } from 'react-hook-form';

let token;
if (process.browser) {
    token = localStorage.getItem("Jwt-token");
}

let headers = {
    'Authorization': `Bearer ${token}`
};

export default function Edit_organization_name({ closeorganization }) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const organisation_name_url = 'http://13.235.3.29:8080/profile/services/api/v1/organizations'
    const onSubmit = data => {
        axios({
            method:'POST',
            url:organisation_name_url,
            headers:headers,
        })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className={styles.model}>
            <div className={styles.model_main}>
                <div className={styles.model_nav}>
                    <h3 className={styles.model_title}>Edit Organisation Name</h3>
                    <a className={styles.model_close} onClick={() => closeorganization(false)} ><img src="Images/close.png" alt='icon' /> </a>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className={styles.model_label}>Organisation Name</label>
                    <input
                        type="text"
                        className={`${styles.model_input} form_control`}
                        name="name"
                        {...register("name", { required: true })}
                    />
                    {errors.name && <p className={`${styles.validations} validations`}>This field is required</p>}
                    <div className={styles.model_btn}>
                        <a><button type="button" className={`${styles.model_canel_btn} btn btn-primary`} onClick={() => closeorganization(false)}>Cancel</button></a>
                        <a> <button type="submit" className={`${styles.model_save_btn} btn btn-primary`}>Save Changes</button></a>
                    </div>
                </form>

            </div>


        </div>


    )
}