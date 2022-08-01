import styles from '../styles/Login.module.css';
import { useForm } from "react-hook-form";
import Api from '../components/api/api';
import { useRouter } from 'next/router'
import Link from 'next/link';
import { useState, useEffect } from 'react';
// import { yupResolver } from '@hookform/resolvers/yup'
// import * as yup from 'yup'

// const schema = yup.object().shape({
//   login: yup.string().email('Please enter valid email').required('This field is required'),
//   password: yup.string().required('This field is required')
// })
export default function Signin() {
  const [error, seterror] = useState([]);
  const [count, setCount] = useState(0)
  const { register, setError, handleSubmit,setValue ,formState: { errors } } = useForm();
 
  const router = useRouter()
  let timer
  const onSubmit = login_details => {
    if (login_details.password.match(/^\s*$/) === null) {
      login_details.password = login_details.password.trim()
      login_details.password = btoa(login_details.password)
      let check=document.getElementById('remember')
      if(check.checked===true){
        document.cookie=`email=${login_details.login}`
        document.cookie=`pswd=${login_details.password}`
      }else{
        document.cookie = 'email=;expires=' + new Date().toUTCString();
        document.cookie = 'pswd=;expires=' + new Date().toUTCString();
      }
      Api.SignIn_details(login_details)
        .then(res => {
          if (res.data.status == "Success") {
            document.cookie = `Jwt-token=${res.data.data.token}`;
            localStorage.setItem('uuid', (res.data.data.organizations[0].uuid));
            localStorage.setItem('Jwt-token', (res.data.data.token));
            localStorage.setItem('orgName', res.data.data.organizations[0].name);
            localStorage.setItem('ownername', res.data.data.firstName);
            localStorage.setItem('ownerLastname', res.data.data.lastName)
            localStorage.setItem('userID', res.data.data.uuid);
            window.location.pathname = '/';
          }
        })
        .catch(error => {
          console.log(error.response)
          setCount(count + 1)
          if (count == 3) {
            const btn = document.querySelector('.btn')
            btn.disabled = true;
            btn.style.backgroundColor = '#2893eb';
            btn.style.cursor = 'not-allowed'
            timer = setTimeout(() => {
              console.log('timeout')
              btn.disabled = false
              btn.style.backgroundColor = '#2863eb'
              btn.style.cursor = 'pointer'
              setCount(0)
            }, [1000 * 10])
          }
          if (error.response.data.code == 400) {
            document.cookie = 'email=;expires=' + new Date().toUTCString()
            document.cookie = 'pswd=;expires=' + new Date().toUTCString()
            seterror(error.response.data.message)
            setTimeout(() => {
              seterror('')
            }, 1000 * 3);
          }
        })
    }else{
      setError('password', { message: 'This field is required' })
    }
  }

  useEffect(() => {
    const mail = document.getElementById('email')
    mail.focus()
    //if more than one cookie is present in browser to redirect to '/' if already loggedin
    let all = document.cookie.split(';')
    all.forEach(val => {
      let value = val.split('=')[0]
      //for chrome or firefox
      if (value == 'Jwt-token' || value == ' Jwt-token') {
        router.push({
          pathname: '/'
        })
      }
    })
    
    // remember me
    if(document.cookie.match('email')!==null && document.cookie.match('pswd')!==null){
          setValue('login',document.cookie.split(`email=`).pop().split(';')[0]);
          setValue('password',atob(document.cookie.split(`pswd=`).pop().split(';')[0]));     
          let check=document.getElementById('remember')
          check.checked=true
    }

  }, [])
  
  return (
    <div className={styles.wrapper_signup}>
      <main className={styles.main_signup}>
        <img src='/images/logo.svg' alt='logo' />
        <div className={styles.signup_area}>
          <h3 className={styles.signup_title}>
            Signin into your account
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className={`${styles.label} ${styles.req}`}>Email</label>
              <input
                maxLength={40}
                id="email"
                placeholder="Enter email address"
                name="login"
                className={`${styles.signup_input} form_control`}
                {...register("login",{required:'This field is required',pattern:{
                  value:/^[A-Z0-9_%+-.^*!$`~]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message:'invalid email address'
                }})}
              />
            </div>
            <p className={'validations'}>{errors.login?.message}</p>
            <div>
              <label className={`${styles.label} ${styles.req}`}>Password</label>
              <input
                id="password"
                maxLength={40}
                autoComplete='current-password'
                type="password"
                placeholder="Enter password"
                name="password"
                className={`${styles.signup_input} form_control`}
                {...register("password",{required:'This field is required',pattern:{
                  value:/^[^\s]+(?:$|.*[^\s]+$)/,
                  message:'Entered value cannot start/end or have only white space'
              }})}
              />
              {error && !errors.password && !errors.login && <span className='error'>{error}</span>}
            </div>
            <p className={'validations'}>{errors.password?.message}</p>
            <div className={styles.rememberMe}>
              <input id="remember" type="checkbox"/>
              <div className={styles.logInRem}>Remember me</div>
            </div>
            <button type='submit' className={`${styles.signup_btn} btn`} id="submitBtn">Sign in </button>
            <Link href="/email"><h4 className={styles.forgotpw}>Forgot Password?</h4></Link>
          </form>
          <h4 className={styles.already_account}>Don&#39;t have an account?</h4>
          <Link href="/signup"><a className={styles.signin_link}>Sign up</a></Link>
        </div>
      </main>
    </div>
  )
}
