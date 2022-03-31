import styles from '../../styles/model.module.css';
import { useForm } from 'react-hook-form';
import Api from '../../components/api/api';
import { useEffect, useState } from 'react';



export default function Add_new_environment({ closeenv }) {

    const [env, setenv] = useState([]);


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = new_env_data => {
        Api.Post_env(new_env_data)
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })

    }
    useEffect(() => {
        Api.Env_data()
            .then(res => {
                // console.log(res.data)
                setenv(res.data.data)
            })
            .catch(error => {
                console.log(error)

            })
    }, {})
    return (
        <div className={`${styles.container} ${styles.accesstoken_model}`}>
            <div className={styles.body}>

                <div className={styles.model_nav}>
                    <a className={styles.model_close} role="button" onClick={() => closeenv(false)}><img src="/Images/close.png" alt='icon' /> </a>
                </div>
                <div className={styles.main}>
                    <h3 className={styles.model_title}>Add New Environment</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className={styles.model_label}>Environment Name</label>
                        <input
                            type="text"
                            className={`${styles.model_input} form_control`}
                            name="name"
                            placeholder="Enter a name"
                            {...register("name", { required: true })}
                        />
                        {errors.name && <p className={`${styles.validations} validations`}>This field is required</p>}
                        <label className={styles.model_label}>Type</label>

                        <select
                            name="environmentTypeId"
                            className={styles.model_selection}
                            {...register("environmentTypeId", { required: true,valueAsNumber: true, })}
                        >
                            {errors.environmentTypeId && <p className={`${styles.validations} validations`}>This field is required</p>}
                            {env.map((item, key) =>
                                <option key={key} value={parseInt(item.id)}>{item.name}</option>
                            )}
                        </select>
                        <div className={styles.model_btn}>
                            <button type="button" className={`${styles.model_canel_btn} btn btn-primary`} onClick={() => closeenv(false)}>Cancel</button>
                            <button type="submit" className={`${styles.model_save_btn} btn btn-primary`}>Add Environment</button>
                        </div>
                    </form>

                </div>

            </div>


        </div>

    )
}