import styles from '../styles/Login.module.css';
import { useForm } from "react-hook-form";
import Api from '../components/api/api';
import { useRouter } from 'next/router'

export default function Signin() {
    const router = useRouter()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();


const onSubmit=(data)=>{
    if(data.passwordOne===data.password){
       router.push({pathname:'/signin'})
    }
}

    return (
        <div className={styles.wrapper_signup}>
            <main className={styles.main_signup}>
                <h1 className={styles.logo_title}>
                Videograph
                </h1>
                <div className={styles.signup_area}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className={styles.label}><h3>Enter New Password:</h3></label>
                    <input
                        type="password"
                        placeholder="Enter new password"
                        name="password"
                        className={`${styles.signup_input} form_control`}
                        {...register("passwordOne", { required: true })}
                    />
                    {errors.passwordOne && <p className={'validations'}>This field is required</p>}
                    <label className={styles.label}><h3>Confirm password:</h3></label>
                    <input
                        type="password"
                        placeholder="Confirm password"
                        name="password"
                        className={`${styles.signup_input} form_control`}
                        {...register("password", { required: true })}
                    />
                    {errors.password && <p className={'validations'}>This field is required</p>}
                     <button type='submit' className={`${styles.signup_btn} btn btn-primary`}>Submit</button>
                    </form>
                </div>
            </main>
        </div>
    )
}
