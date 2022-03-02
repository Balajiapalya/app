import styles from '../styles/Login.module.css';
import { useForm } from "react-hook-form";
import Api from '../components/api/api';

export default function Signin() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = login_details => {
    Api.Sign_up_data(login_details)
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
              type="email"
              placeholder="Enter your email address"
              name="login"
              className={`${styles.signup_input} form_control`}
              {...register("email", { required: true })}
            />
            </div>
            {errors.email && <p className={'validations'}>This field is required</p>}
            <div>
            <label className={styles.label}><h3>Password:</h3></label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              className={`${styles.signup_input} form_control`}
              {...register("password", { required: true })}
            />
            </div>
            {errors.password && <p className={'validations'}>This field is required</p>}

            <button type='submit' className={`${styles.signup_btn} btn btn-primary`}>Submit</button>


          </form>
          <h4 className={styles.already_account}>Don't have an account?</h4>
          <a type='button' className={styles.signin_link}>Sign up</a>
        </div>
      </main>
    </div>
  )
}
