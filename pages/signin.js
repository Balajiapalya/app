import styles from '../styles/Login.module.css';
import { useForm } from "react-hook-form";
import Api from '../components/api/api';
import {useRouter} from 'next/router'
import Link from 'next/link';

export default function Signin() {
const router=useRouter()
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = login_details => {
    Api.SignIn_details(login_details)
    .then(res=>{
      console.log(res)
      if(res.data.status=="Success"){
        document.cookie = `Jwt-token=${res.data.data.token}`;

        localStorage.setItem("uuid",(res.data.data.uuid))
        localStorage.setItem('Jwt-token', (res.data.data.token))
       router.push({pathname:'/'})
      }
    })
  }
  return (
    <div className={styles.wrapper_signup}>
      <main className={styles.main_signup}>
        <h1 className={styles.logo_title}>
          Videograph
        </h1>

        <div className={styles.signup_area}>
          <h3 className={styles.signup_title}>
           Sign In
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className={styles.label}><h3>Username or email:</h3></label>
            <input
              autoComplete='current-password'
              type="email"
              placeholder="Enter your email address"
              name="login"
              className={`${styles.signup_input} form_control`}
              {...register("login", { required: true })}
            />
            </div>
            {errors.login && <p className={'validations'}>This field is required</p>}
            <div>
            <label className={styles.label}><h3>Password:</h3></label>
            <input
              autoComplete='current-password'
              type="password"
              placeholder="Enter your password"
              name="password"
              className={`${styles.signup_input} form_control`}
              {...register("password", { required: true })}
            />
            </div>
            {errors.password && <p className={'validations'}>This field is required</p>}<br/>
            <Link href="/email"><h4 className={styles.forgotpw}>Forgotten password?</h4></Link>
            <button type='submit' className={`${styles.signup_btn} btn btn-primary`}>Submit</button>
          </form>
          <h4 className={styles.already_account}>Don&#39;t have an account?</h4>
          <Link href="/signup"><a className={styles.signin_link}>Sign up</a></Link>
        </div>
      </main>
    </div>
  )
}
