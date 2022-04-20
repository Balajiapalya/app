import styles from "../styles/Emailverification.module.css";
import { useForm } from "react-hook-form";
import Api from "../components/api/api";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Create_account() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [error,seterror] = useState([]);
    const reg = useRouter();
    const params = reg.query
    const onSubmit = createaccount_data => {
        createaccount_data.inviteCode = params.invitecode;
        createaccount_data.password = btoa(createaccount_data.password)
        Api.Create_account_data(createaccount_data)
            .then(res => {
                if (res.data.status = "Success") {
                    localStorage.setItem('orgName', res.data.data.organizations[0].name)
                    localStorage.setItem('uuid', res.data.data.organizations[0].uuid)
                    reg.push({
                        pathname: '/'
                    })
                }
            })
            .catch(error=>{ 
                if(error.response.data.code = 400){
                    seterror(error.response.data.message)
                }
            })   
    }
    return (
        <div className={styles.wapper_email}>
            <div className={styles.logo_title}>
                <img className={styles.file} src="/images/logo.png" alt="LOGO"></img>
            </div>
           
            <main className={styles.createaccount}>
               
                <form className={styles.createaccount_form} onSubmit={handleSubmit(onSubmit)}>
                     <h3 className='error'>{error}</h3>
                    <label className={styles.createaccount_label}>First Name</label>
                    <input
                        type="text"
                        autoComplete="current-password"
                        placeholder="Enter your first name"
                        name="firstName"
                        className={`${styles.createaccount_input} form_control`}
                        {...register("firstName", { required: true })}

                    />
                    {errors.firstName && <p className={'validations'}>This field is required</p>}

                    <label className={styles.createaccount_label}>Last Name</label>
                    <input
                        type="text"
                        autoComplete="current-password"
                        placeholder="Enter your last name"
                        name="lastName"
                        className={`${styles.createaccount_input} form_control`}
                        {...register("lastName", { required: true })}
                    />
                    {errors.lastname && <p className={'validations'}>This field is required</p>}
                    <label className={styles.createaccount_label}>
                        Organisation Name
                    </label>
                    <input
                        type="text"
                        autoComplete="current-password"
                        placeholder="Enter your organisation name"
                        name="organizationName"
                        className={`${styles.createaccount_input} form_control`}
                        {...register("organizationName", { required: true })}
                    />
                    {errors.organizationName && <p className={'validations'}>This field is required</p>}
                    <label className={styles.createaccount_label}>Password</label>
                    <input
                        type="password"
                        autoComplete="current-password"
                        placeholder="Must have atleast 8 characters"
                        name="password"
                        className={`${styles.createaccount_input} form_control`}
                        {...register("password", { required: true })}
                    />
                    {errors.password && <p className={'validations'}>This field is required</p>}
                    {/* <label  className={`${styles.createaccount_label} `}>invite Code</label>
                    <input
                        readOnly
                        value={params.invitecode}
                        type="text"
                        name="inviteCode"
                        className={`${styles.createaccount_input}  form_control`}
                        {...register("inviteCode", {required: true})}
                    /> */}

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
                    <button
                        type="submit"
                        className={`${styles.createaccount_btn} btn btn-primary`}
                    >
                        Create an Account
                    </button>
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
