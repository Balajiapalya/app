import styles from '../styles/Login.module.css';
import { useForm } from "react-hook-form";
import Api from '../components/api/api';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Signup() {
  let invite_code;
  if (process.browser) {
    invite_code = localStorage.getItem("invite-code");
  }
  const invitecode =invite_code ;
  const router = useRouter();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = login_details => {
    Api.Sign_up_data(login_details)
      .then(res => {
        console.log(res.data.data.inviteCode)
        console.log(res.data.status)
        if (res.data.status = "Success") {
          
          localStorage.setItem('invite-code', (res.data.data.inviteCode))
          localStorage.getItem('invite-code')
          router.push({
            pathname: `/register`,
            query: { invitecode: invitecode } })
        }
      })
      .catch(error => {
        console.log(error)
      })
  };
  return (
    <div className={styles.wrapper_signup}>
      <main className={styles.main_signup}>
        <h1 className={styles.logo_title}>
          Videograph
        </h1>
        <div className={styles.signup_area}>
          <h3 className={styles.signup_title}>
            create your Videograph account
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              autoComplete='current-password'
              type="email"
              placeholder="Enter your email address"
              name="login"
              className={`${styles.signup_input} form_control`}
              {...register("email", { required: true })}
            />
            {errors.email && <p className={'validations'}>This field is required</p>}
            <button type='submit' className={`${styles.signup_btn} btn btn-primary`}>Sign Up</button>
          </form>
          <h4 className={styles.already_account}>Already have an account?</h4>
          <Link href="/signin"><a className={styles.signin_link}>Sign in</a></Link>
        </div>
      </main>
    </div>
  )
}
