import styles from '../styles/Login.module.css';
import { useForm } from "react-hook-form";
import Api from '../components/api/api';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';


export default function Signin() {
    const router = useRouter()
    const { register, handleSubmit, watch, setError,formState: { errors } } = useForm();
    const [msg, setmsg] = useState(false);

    const onSubmit = (data) => {
        Api.Reset_pswEmail(data)
            .then(res => {
                if (res.data.status = "Success") {
                    setmsg(res.data.message)
                    setTimeout(() => {
                        setmsg('')
                    }, 2000);
                  
                }

            })
            .catch(error => {
                    setmsg(error.response.data.message)
                    setTimeout(() => {
                        setmsg('')
                    }, 2000);
                  
            })


    }


    return (
        <div className={styles.wrapper_signup}>
            <main className={styles.main_signup}>
                <img src='/images/logo.svg' alt='logo' />
                <div className={styles.signup_area}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className={styles.label}>Please Enter Your Registered Email:</label>
                        <input
                            maxLength={40}
                            placeholder="Enter your email address"
                            name="email"
                            className={`${styles.signup_input} ${styles.inp} form_control`}
                            {...register("email",{required:'This field is required',pattern:{
                                value:/^[A-Z0-9_%+-.^*!$`~]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message:'Invalid Email Address'
                              }})}
                        />
                         {<p className={'validations'}>{errors.email?.message}</p>}
                         <div className={styles.center}>
                         <span>{msg}</span>
                        <button type='submit' className={`${styles.signup_btn} btn btn-primary`}>Submit</button>
                        </div>
                    </form>
                    <div className={styles.forgotRemember}>
                    <h4>Don&#39;t have an account?</h4>
                    <Link href="/signup"><a className={styles.forgotLinks}>Sign up</a></Link>
                    </div>
                    <div  className={styles.forgotRemember}>
                    <h4>Already have an account?</h4>
                    <Link href="/"><a className={styles.forgotLinks}>Sign In</a></Link>
                    </div>
                </div>
            </main>
        </div>
    )
}
