import styles from '../styles/Login.module.css';
import { useForm } from "react-hook-form";
import Api from '../components/api/api';
import { useRouter } from 'next/router'

export default function Signin() {
    const router = useRouter()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

const onSubmit=(data)=>{
    Api.Reset_pswEmail(data).then(res=>console.log(res))
    .catch(err=>console.log(err))
    router.push({pathname:'/forgot_password'})
    // console.log(data)
}

    return (
        <div className={styles.wrapper_signup}>
            <main className={styles.main_signup}>
                <h1 className={styles.logo_title}>
                    Videograph
                </h1>
                <div className={styles.signup_area}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className={styles.label}><h3>Enter your email address:</h3></label>
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        name="email"
                        className={`${styles.signup_input} form_control`}
                        {...register("email", { required: true })}
                    />
                    {errors.email && <p className={'validations'}>This field is required</p>}
                     <button type='submit' className={`${styles.signup_btn} btn btn-primary`}>Next</button>
                    </form>
                </div>
            </main>
        </div>
    )
}
