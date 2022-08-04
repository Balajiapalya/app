import styles from '../styles/Login.module.css';
import { useForm } from "react-hook-form";
import Api from '../components/api/api';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';



export default function Signin() {
    const router = useRouter()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [msg, setmsg] = useState(false);

    const onSubmit = (data) => {
        Api.Reset_pswEmail(data)
            .then(res => {
                if (res.data.status = "Success") {
                    setmsg(res.data.message)
                }

            })
            .catch(error => {
                setmsg(error.response.data.message)

            })


    }


    return (
        <div className={styles.wrapper_signup}>
            <main className={styles.main_signup}>
                <img src='/images/logo.svg' alt='logo' />
                <div className={styles.signup_area}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className={styles.label}><h3>Enter your email address:</h3></label>
                        <input
                            maxLength={40}
                            type="email"
                            placeholder="Enter your email address"
                            name="email"
                            className={`${styles.signup_input} ${styles.inp} form_control`}
                            {...register("email",{required:'This field is required',pattern:{
                                value:/^[A-Z0-9_%+-.^*!$`~]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message:'invalid email address'
                              }})}
                        />
                         {<p className={'validations'}>{errors.email?.message}</p>}
                         <span className='error'>{msg}</span>
                        
                        <button type='submit' className={`${styles.signup_btn} btn btn-primary`}>Submit</button>
                    </form>

                </div>
            </main>
        </div>
    )
}
