import styles from '../styles/Login.module.css';
import Link from 'next/link';
import { useForm } from "react-hook-form";


export default function Login() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {

    console.log(data);

  }
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
            type="email" 
            placeholder="Enter your email address" 
            name="login" 
            className={`${styles.signup_input} form_control`} 
            {...register("Mail_Id", {required: true})}
            />
            {errors.Mail_Id && <p>This field is required</p>}            

            <button type='submit' className={`${styles.signup_btn} btn btn-primary`}>Sign Up</button>

            
          </form>
          <h4 className={styles.already_account}>Already have an account?</h4>
            <a type='button' className={styles.signin_link}>Sign in</a>
        </div>
      </main>
    </div>
  )
}
