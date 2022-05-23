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
                            type="email"
                            placeholder="Enter your email address"
                            name="email"
                            className={`${styles.signup_input} form_control`}
                            {...register("email", { required: true })}
                        />
                        {errors.email && <p className={'validations'}>This field is required</p>}
                        <p className='msg'>{msg}</p>
                        <button type='submit' className={`${styles.signup_btn} btn btn-primary`}>Submit</button>
                    </form>

                </div>
            </main>
        </div>
    )
}
