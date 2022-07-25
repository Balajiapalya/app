import styles from '../styles/Login.module.css';
import { useForm } from "react-hook-form";
import Api from '../components/api/api';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState,useEffect } from 'react';
// import {yupResolver} from '@hookform/resolvers/yup'
// import * as yup from 'yup'

// const schema=yup.object().shape({
//   email:yup.string().email("Please enter valid email").required('This field is required')
// })

export default function Signup() {
  let invite_code;
  if (process.browser) {
    invite_code = localStorage.getItem("invite-code");
  }
  const invitecode = invite_code;
  const router = useRouter();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [error, seterror] = useState([]);
  const onSubmit = login_details => {
    
    Api.Sign_up_data(login_details)
      .then(res => {
        if (res.data.status = "Success") {
          router.push({
            pathname: `/invitationsent`
          })
        }
      })
      .catch(error => {
        seterror(error.response.data.message)
      })

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
            Create your account
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className={`${styles.label} ${styles.req}`}>Email</label>
            <input
              maxLength={30}
              placeholder="Enter your email address"
              name="email"
              className={`${styles.signup_input} form_control`}
              {...register("email",{required:'This field is required',pattern:{
                value:/^[A-Z0-9_%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message:'invalid email address'
              }})}
            />
            {/* {errors.email && <p className={'validations'}>This field is required</p>} */}
            {<p className={'validations'}>{errors.email?.message}</p>}
            <span className='error'>{error}</span>
            <span className={styles.invitation_info}>We will send an invitation link to your email.</span>
            <button type='submit' className={`${styles.btn} btn btn-primary`}>Sign Up</button>
          </form>
          <h4 className={styles.already_account}>Already have an account?</h4>
          <Link href="/signin"><a className={styles.signin_link}>Sign in</a></Link>
        </div>
      </main>
    </div>
  )
}
