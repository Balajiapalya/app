import styles from '../styles/Login.module.css';
import { useForm } from "react-hook-form";
import Api from '../components/api/api';
import { useRouter } from 'next/router'
import {useState} from 'react'

export default function Signin() {
    const [mismatch,setMismatch]=useState(false)
    const [length,setLength]=useState(false)
    const router = useRouter()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();


const onSubmit=(passwrd)=>{
        if(passwrd.password===passwrd.confirmPaswrd){
            const slicedData=Object.fromEntries(Object.entries(passwrd).slice(0,2))
            slicedData.password=btoa(passwrd.password)
                Api.Reset_password(slicedData)
               router.push({pathname:'/signin'})
            }else{
                setMismatch(true)
            }
    
    
}
const handleChange=()=>{
    setMismatch(false)
}

    return (
        <div className={styles.wrapper_signup}>
            <main className={styles.main_signup}>
                <h1 className={styles.logo_title}>
                Videograph
                </h1>
                <div className={styles.signup_area}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className={styles.label}><h3>Enter reset code</h3></label>
                    <input
                        type="text"
                        placeholder="Enter new password"
                        name="resetCode"
                        className={`${styles.signup_input} form_control`}
                        {...register("resetCode", { required: true })}
                        onChange={()=>handleChange()}
                    />
                    {errors.resetCode && <p className={'validations'}>This field is required</p>}
                    <label className={styles.label}><h3>Enter new password</h3></label>
                    <input
                        type="password"
                        placeholder="Confirm password"
                        name="password"
                        className={`${styles.signup_input} form_control`}
                        {...register("password", { required: true })}
                        onChange={()=>handleChange()}
                    />
                    {errors.password && <p className={'validations'}>This field is required</p>}
                    <label className={styles.label}><h3>Confirm new password</h3></label>
                    <input
                        type="password"
                        placeholder="Confirm password"
                        name="confirmPaswrd"
                        className={`${styles.signup_input} form_control`}
                        {...register("confirmPaswrd", { required: true })}
                        onChange={()=>handleChange()}
                    />
                    {errors.confirmPaswrd && <p className={'validations'}>This field is required</p>}
                    {mismatch && <p className={'validations'}>Password mismatch</p>}
                     <button type='submit' className={`${styles.signup_btn} btn btn-primary`}>Submit</button>
                    </form>
                </div>
            </main>
        </div>
    )
}
