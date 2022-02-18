import styles from '../../styles/model.module.css'
import axios from 'axios'
import { useForm } from 'react-hook-form';


export default function Edit_organization_name({ closeorganization }) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const organisation_name_url = 'https://0d7503d0-c9e6-4e89-8f65-7a7cb892e370.mock.pstmn.io/profile/services/api/v1/organizations'
    const onSubmit = data => {
        console.log(data)
        axios.post(organisation_name_url, data)
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
                        name="Orgnization Name"
                        {...register("Organizationname", { required: true })}
                    />
                    {errors.Organizationname && <p className={`${styles.validations} validations`}>This field is required</p>}
                    <div className={styles.model_btn}>
                        <a><button type="button" className={`${styles.model_canel_btn} btn btn-primary`} onClick={() => closeorganization(false)}>Cancel</button></a>
                        <a> <button type="submit" className={`${styles.model_save_btn} btn btn-primary`}>Save Changes</button></a>
                    </div>
                </form>

            </div>


        </div>


    )
}