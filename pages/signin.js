import styles from '../styles/Login.module.css';
import { useForm } from "react-hook-form";
import Api from '../components/api/api';
import { useRouter } from 'next/router'
import Link from 'next/link';
import { useState } from 'react';
export default function Signin() {
  const router = useRouter()
  const [error, seterror] = useState([]);
  const [validation,setValidation]=useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = login_details => {
    login_details.password=btoa(login_details.password)
    Api.SignIn_details(login_details)
      .then(res => {
        if (res.data.status == "Success") {
          document.cookie = `Jwt-token=${res.data.data.token}`;
          localStorage.setItem('uuid', (res.data.data.organizations[0].uuid));
          localStorage.setItem('Jwt-token', (res.data.data.token));
          localStorage.setItem('orgName', res.data.data.organizations[0].name);
          localStorage.setItem('ownername', res.data.data.firstName);
          localStorage.setItem('userID', res.data.data.uuid);
          window.location.pathname = '/';
        }
      })
      .catch(error => {
          setValidation(true)
        if (error.response.data.code = 400) {
          seterror(error.response.data.message)
        }
      })
  }
  const handleChange=()=>{
    setValidation(false)
  }
  return (
    <div className={styles.wrapper_signup}>
      <main className={styles.main_signup}>
        <h1 className={styles.logo_title}>
          Videograph
        </h1>

        <div className={styles.signup_area}>
          <h3 className={styles.signup_title}>
            Signin into your account
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className={styles.label}><h4>Email</h4></label>
              <input
                autoComplete='current-password'
                type="email"
                placeholder="Enter email address"
                name="login"
                className={`${styles.signup_input} form_control`}
                {...register("login", { required: true })}
                onChange={()=>handleChange()}
              />
            </div>
            {errors.login && <p className={'validations'}>This field is required</p>}
            <div>
              <label className={styles.label}><h4>Password</h4></label>
              <input
                autoComplete='current-password'
                type="password"
                placeholder="Enter password"
                name="password"
                className={`${styles.signup_input} form_control`}
                {...register("password", { required: true })}
                onChange={()=>handleChange()}
              />
              {validation && <span className='error'>{error}</span>}
            </div>
            {errors.password && <p className={'validations'}>This field is required</p>}<br />
            <button type='submit' className={`${styles.signup_btn} btn btn-primary`}>Sign in </button>
            <Link href="/email"><h4 className={styles.forgotpw}>Forgot password?</h4></Link>
          </form>
          <h4 className={styles.already_account}>Don&#39;t have an account?</h4>
          <Link href="/signup"><a className={styles.signin_link}>Sign up</a></Link>
        </div>
      </main>
    </div>
  )
}
