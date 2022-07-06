import styles from '../styles/Login.module.css';
import { useForm } from "react-hook-form";
import Api from '../components/api/api';
import { useRouter } from 'next/router'
import Link from 'next/link';
import { useState,useEffect } from 'react';
export default function Signin() {
  const [error, seterror] = useState([]);
  const [validation, setValidation] = useState(false);
  const { register, handleSubmit, watch, formState: { errors },reset } = useForm();
  // const watchField=watch(['login','password']);
  const [mail,setMail]=useState()
  const [pswd,setPswd]=useState();
  const [req,setReq]=useState(false)
  const [reqEmail,setReqEmail]=useState(false)

  const onSubmit = login_details => {
    // login_details.password = btoa(login_details.password)
    login_details.password=btoa(pswd);
    login_details.login=mail
    if(pswd==''){
      setReq(true)
    }else{
      setReq(false)
    }
    if(mail==''){
      setReqEmail(true)
    }else{
      setReqEmail(false)
    }
    if(login_details.login.length>1 && login_details.password.length>1){
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
        reset()
      })
      .catch(error => {
        setValidation(true)
        if (error.response.data.code == 400) {
          seterror(error.response.data.message)
        }
      })
    }
  }
  // const handleChange = () => {
  //   setValidation(false)
  // }
  useEffect(()=>{

    const handleEnter=(e)=>{
      const subBtn=document.getElementById('submitBtn')
      if(e.key=="Enter"){
        subBtn.click()
      }
    }
    //if more than one cookie is present in browser
   let all=document.cookie.split(';')
   all.forEach(val =>{
    let value=val.split('=')[0]
    //for chrome or firefox
 if(value=='Jwt-token' || value==' Jwt-token'){
  window.location.pathname = '/';
 }
    
  })

    document.addEventListener('keydown',handleEnter)
  },[mail,pswd])
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
              <label className={styles.label}><h4>Email</h4></label>
              {/* <input
                autoComplete='current-password'
                type="email"
                placeholder="Enter email address"
                name="login"
                className={`${styles.signup_input} form_control`}
                {...register("login", { required:watchField[1]!=undefined && watchField[1].length>1?false:true })}
                onChange={() => handleChange()}
              /> */}
              <input
                autoComplete='current-password'
                type="email"
                placeholder="Enter email address"
                name="login"
                className={`${styles.signup_input} form_control`}
                onChange={(e) => `${setMail(e.target.value)} ${setValidation(false)}`}
              />
            </div>
            {reqEmail && <p className={'validations'}>This field is required</p>}
            <div>
              <label className={styles.label}><h4>Password</h4></label>
              {/* <input
                autoComplete='current-password'
                type="password"
                placeholder="Enter password"
                name="password"
                className={`${styles.signup_input} form_control`}
                {...register("password", { required:watchField[1]!=undefined && watchField[1].length>1?false:true })}
                onChange={() => handleChange()}
              /> */}
              <input
                autoComplete='current-password'
                type="password"
                placeholder="Enter password"
                name="password"
                className={`${styles.signup_input} form_control`}
                onChange={(e) => `${setPswd(e.target.value)} ${setValidation(false)}`}
              />
              {validation && <span className='error'>{error}</span>}
            </div>
            {req && <p className={'validations'}>This field is required</p>}<br />
            <button type='submit' className={`${styles.signup_btn} btn btn-primary`} id="submitBtn">Sign in </button>
            <Link href="/email"><h4 className={styles.forgotpw}>Forgot Password?</h4></Link>
          </form>
          <h4 className={styles.already_account}>Don&#39;t have an account?</h4>
          <Link href="/signup"><a className={styles.signin_link}>Sign up</a></Link>
        </div>
      </main>
    </div>
  )
}
