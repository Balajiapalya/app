import styles from '../../styles/model.module.css';
import { useForm } from 'react-hook-form';
import Api from '../api/api';

export default function Edit_organization_name({ closeorganization, setEditData }) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    let data = localStorage.getItem('orgName')
    const onSubmit = organisation_data => {
        let trimmed=organisation_data.name.trim()
        let obj=new Object()
        obj.name=trimmed
        if(obj.name!==''){
        Api.Edit_organisation_name_data(obj)
            .then(res => {
                localStorage.setItem('orgName', res.data.data.name)
                // window.location.reload()
                setEditData(res.data.data)
                closeorganization(false)
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
    

    return (
        <div className={styles.model}>
            <div className={styles.model_container}>
                <div className={styles.model_main}>
                    <div className={styles.model_nav}>
                        <h3 className={styles.model_title}>Edit Organisation Name</h3>
                        <a className={styles.model_close} onClick={() => closeorganization(false)} ><img src="/images/close.svg" alt='icon' /> </a>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.model_form}>
                            <label className={styles.model_label}>Organisation Name</label>
                            <input
                                defaultValue={data}
                                type="text"
                                className={`${styles.model_input} form_control`}
                                name="name"
                                {...register("name", { required: true })}
                            />
                            {errors.name && <p className={`${styles.validations} validations`}>This field is required</p>}
                        </div>
                        <div className={styles.model_btn}>
                            <a><button type="button" className={`${styles.model_canel_btn} btn btn-primary`} onClick={() => closeorganization(false)}>Cancel</button></a>
                            <a> <button type="submit" className={`${styles.model_save_btn} btn btn-primary`} >Save Changes</button></a>
                        </div>
                    </form>

                </div>
            </div>


        </div>


    )
}