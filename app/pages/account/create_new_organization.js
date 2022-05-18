import styles from '../../styles/model.module.css';
import { useForm } from 'react-hook-form';
import Api from '../../components/api/api';


export default function Create_new_organization({ closeneworg }) {


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = new_org_name => {
        document.body.style.overflow='scroll'
        Api.Create_new_organization(new_org_name)
        .then(res=>{
            closeneworg(false)
            // console.log(res)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const handleClose=()=>{
        document.body.style.overflow='scroll'
        closeneworg(false)
    }
    return (
        <div className={`${styles.container} ${styles.accesstoken_model}`}>
            <div className={styles.body}>

                <div className={styles.model_nav}>
                    <a onClick={() => handleClose()} className={styles.model_close} role="button"><img src="/images/close.svg" alt='icon' /> </a>
                </div>
                <div className={styles.main}>
                    <h3 className={styles.model_title}>Create new organization</h3>
                    <p>New organization will have separate teams and settings from your current organization</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className={styles.model_label}> Name</label>
                        <input
                            type="text"
                            className={`${styles.model_input} form_control`}
                            name="name" 
                            placeholder="Enter organization name"
                            {...register("name", { required: true })}
                        />
                        {errors.name && <p className={`${styles.validations} validations`}>This field is required</p>}
                        <div className={styles.model_btn}>
                            <button onClick={() =>  handleClose()} type="button" className={`${styles.model_canel_btn} btn btn-primary`}>Cancel</button>
                            <button type="submit" className={`${styles.model_save_btn} btn btn-primary`}>Create Organization</button>
                        </div>
                    </form>

                </div>

            </div>


        </div>

    )
}