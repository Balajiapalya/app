// import head from 'next/head'
import styles from "../styles/Emailverification.module.css";
import Link from "next/link";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Create_account() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const createaccount_url = 'https://0d7503d0-c9e6-4e89-8f65-7a7cb892e370.mock.pstmn.io/profile/services/api/v1/users'
    const onSubmit = data => {
           
        // console.log(data);
        axios.post(createaccount_url,data)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className={styles.wapper_email}>
            <div className={styles.logo_title}>
                <img className={styles.file} src="/Images/Logo.png" alt="LOGO"></img>
            </div>
            <main className={styles.createaccount}>
                <form className={styles.createaccount_form} onSubmit={handleSubmit(onSubmit)}>
                    <label className={styles.createaccount_label}>First Name</label>
                    <input
                        type="text"
                        placeholder="Enter your first name"
                        name="First Name"
                        className={`${styles.createaccount_input} form_control`}
                        {...register("firstname", { required: true })}
                    />
                    {errors.firstname && <p className={'validations'}>This field is required</p>}

                    <label className={styles.createaccount_label}>Last Name</label>
                    <input
                        type="text"
                        placeholder="Enter your last name"
                        name="Last Name"
                        className={`${styles.createaccount_input} form_control`}
                        {...register("lastname", { required: true })}
                    />
                    {errors.lastname && <p className={'validations'}>This field is required</p>}
                    <label className={styles.createaccount_label}>
                        Organisation Name
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your organisation name"
                        name="organisation name"
                        className={`${styles.createaccount_input} form_control`}
                        {...register("organisationname", {required: true})}
                    />
                    {errors.organisationname && <p className={'validations'}>This field is required</p>}
                    <label className={styles.createaccount_label}>Password</label>
                    <input
                        type="password"
                        placeholder="Must have atleast 8 characters"
                        name="password"
                        className={`${styles.createaccount_input} form_control`}
                        {...register("password", {required: true})}
                    />
                    {errors.password && <p className={'validations'}>This field is required</p>}
                    <p className={styles.condition}>
                        {" "}
                        By creating an account you agree to our{" "}
                        <a href="#" className={styles.createaccount_link}>
                            Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className={styles.createaccount_link}>
                            Privacy policy
                        </a>
                    </p>
                    {/* <Link href="settings"> */}
                    {/* <a> */}
                    <button
                        type="submit"
                        className={`${styles.createaccount_btn} btn btn-primary`}
                    >
                        Create an Account
                    </button>
                    {/* </a> */}
                    {/* </Link> */}
                </form>
                <div className={styles.streamingneeds}>
                    <h3 className={styles.streamingneeds_title}>
                        One-stop-shop for all your streaming needs!
                    </h3>
                    <p className={styles.streamingneeds_main}>
                        Don&apos;t worry, you can change this information later.Once yor are
                        done creating your account.We will help you:
                    </p>
                    <ol className={styles.streamingneeds_list}>
                        <li className={styles.listdata}>
                            Integrate streaming video in a few lines of code.
                        </li>
                        <li className={styles.listdata}>
                            Upload and stream videos that play anywhere and look beautiful
                            every time.
                        </li>
                        <li className={styles.listdata}>
                            Analyze your performance using our Data solution industry-leading
                            Quality of Experience (QoE)
                        </li>
                    </ol>
                </div>
            </main>
        </div>
    );
}
