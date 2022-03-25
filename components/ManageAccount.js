import styles from '../styles/accounts.module.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react'
import Api from './api/api'

const ManageAccount = () => {
    const { register, handleSubmit, watch, formState: { errors },reset } = useForm();
    const [password, set_password] = useState(false);
    const [change_password, set_change_password] = useState(true);
    const [mismatch,setMismatch]=useState(false)

    const onSubmit = (passwrd) => {   
       if(passwrd['newPassword']== passwrd['confirmPassword']){
        passwrd['oldPassword']=btoa(passwrd['oldPassword'])
        passwrd['newPassword']=btoa(passwrd['newPassword'])
        const sliced = Object.fromEntries(Object.entries(passwrd).slice(0, 2)) 
        Api.Password_Change(sliced).then(res=>{
            set_change_password(true); 
            set_password(false)
        })
            .catch(err=>{
                setMismatch(true)
            })
       }else{
        setMismatch(true)
       } 
    }
    const handleChange=()=>{
        setMismatch(false)
        
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.manage_account}>
                <h2>Manage Account</h2>
                {change_password &&
                    <div className={styles.model_btn}>
                        <button onClick={() => { set_change_password(false); set_password(true) }} type="button" className={`${styles.model_save_btn} btn btn-primary`}>Change Password</button>
                    </div>
                }
                {password && <div>
                    <label className={styles.model_label}>Current Password</label>
                    <input {...register("oldPassword", { required: true })} type="password" onChange={()=>handleChange()} className={`${styles.model_input} form_control empty`} name="oldPassword" />
                    {errors.oldPassword && <p className={`${styles.validations} validations`}>This field is required</p>}
                    <label className={styles.model_label}>New Password</label>
                    <input {...register("newPassword", { required: true })} type="password" onChange={()=>handleChange()} className={`${styles.model_input} form_control empty`} name="newPassword" />
                    {errors.newPassword && <p className={`${styles.validations} validations`}>This field is required</p>}
                    <label className={styles.model_label}>Confirm New Password</label>
                    <input {...register("confirmPassword", { required: true })} type="password"  onChange={()=>handleChange()} className={`${styles.model_input} form_control empty`} 
                    name="confirmPassword"/>
                         {errors.confirmPassword && <p className={`${styles.validations} validations`}>This field is required</p>}
                         {mismatch && <p className={styles.mismatch}>Password mismatch</p>}
                    <div className={styles.model_btn}>
                        <button type="submit" className={`${styles.model_save_btn} ${styles.bgcolor_blue} btn btn-primary`}>Change Password</button>
                    </div>
                </div>}
            </div >
        </form>
    )
}
export default ManageAccount



{/* <div onClick={() => { set_change_password(true); set_password(false) }}> */}