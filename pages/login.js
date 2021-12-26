import styles from '../styles/Login.module.css';
import Link from 'next/link';

export default function Login() {
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
        <input type="text" placeholder="Enter your email address" name="login" className={`${styles.signup_input} form_control`}  />

        <Link href="signupinvitation"><a><button type="button" className={`${styles.signup_btn} btn btn-primary`}>Sign Up</button></a></Link>

        <h4 className={styles.already_account}>Already have an account?</h4>
        <a href="#" className={styles.signin_link}>Sign in</a>  
        </div>
      </main>
    </div>
  )
}
