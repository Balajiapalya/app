import styles from '../styles/model.module.css';
import { useForm } from 'react-hook-form';
import Api from '../components/api/api'


export default function Add_new_environment({ closetoken }) {


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = access_data => {
        Api.Create_aaccess_token_data(access_data)
    }
    return (
        <div className={`${styles.container} ${styles.accesstoken_model}`}>
            <div className={styles.body}>

                <div className={styles.model_nav}>
                    <a className={styles.model_close} role="button" onClick={() => closetoken(false)}><img src="Images/close.png" alt='icon' /> </a>
                </div>
                <div className={styles.main}>
                    <h3 className={styles.model_title}>Add New Environment</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className={styles.model_label}>Environment Name</label>
                        <input type="text" className={`${styles.model_input} form_control`} name="name" placeholder="Enter a name" {...register("name", { required: true })} />
                        {errors.Environment && <p className={`${styles.validations} validations`}>This field is required</p>}
                        <label className={styles.model_label}>Type</label>
                       
                            <select
                                name="Environment"
                                className= {styles.model_selection}
                                {...register("Environment", { required: true })}
                            >
                                {errors.Environment && <p className={`${styles.validations} validations`}>This field is required</p>}
                                <option value="Development">Development</option>
                                <option value="video">video</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                          
                            
                        
                        <div className={styles.model_btn}>
                            <button type="button" className={`${styles.model_canel_btn} btn btn-primary`} onClick={() => closetoken(false)}>Cancel</button>
                            <button type="submit" className={`${styles.model_save_btn} btn btn-primary`}>Add Environment</button>
                        </div>
                    </form>

                </div>

            </div>


        </div>

    )
}