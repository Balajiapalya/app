import styles from '../styles/Login.module.css';
import { useForm } from "react-hook-form";
import Api from '../components/api/api';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState,useEffect } from 'react';


export default function Signup() {
  const router = useRouter();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [error, seterror] = useState([]);
  const onSubmit = mail => {
    Api.Imporsonate(mail).then(res=>console.log(res))

  };
  useEffect(()=>{
    const inp=document.querySelector('.form_control')
    inp.focus()
  },[])
  return (
    <div className={styles.wrapper_signup}>
      <main className={styles.main_signup}>
        <img src='/images/logo.svg' alt='logo' />
        <div className={styles.signup_area}>
          <h2 className={styles.signup_title}>
            Imporsonate As
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className={styles.label}>Email</label>
            <input
              maxLength={40}
              placeholder="Enter your email address"
              name="email"
              className={`${styles.signup_input} ${styles.inp} form_control`}
              {...register("email",{required:'This field is required',pattern:{
                value:/^[A-Z0-9_%+-.^*!$`~]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message:'invalid email address'
              }})}
            />
            {<p className={'validations'}>{errors.email?.message}</p>}
            <span className='error'>{error}</span>
            <button type='submit' className={`${styles.signup_btn} btn btn-primary`}>Proceed</button>
          </form>
        </div>
      </main>
    </div>
  )
}
