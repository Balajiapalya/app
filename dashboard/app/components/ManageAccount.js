import styles from '../styles/accounts.module.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react'
import Api from './api/api'
// import {yupResolver} from '@hookform/resolvers/yup'
// import * as yup from 'yup'

// const schema=yup.object().shape({
//   oldPassword:yup.string().required('This field is required'),
//   newPassword:yup.string().required('This field is required').matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
//   ),
//   confirmPassword:yup.string().oneOf([yup.ref('newPassword'),null])
// })

const ManageAccount = ({toast}) => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const [password, set_password] = useState(false);
    const [change_password, set_change_password] = useState(true);
    const [mismatch, setMismatch] = useState(false)
    const [length,setLength]=useState(false)

    const onSubmit = (passwrd) => {
            if (passwrd['newPassword'] == passwrd['confirmPassword']) {
                passwrd['oldPassword'] = btoa(passwrd['oldPassword'])
                passwrd['newPassword'] = btoa(passwrd['newPassword'])
                const sliced = Object.fromEntries(Object.entries(passwrd).slice(0, 2))
                Api.Password_Change(sliced).then(res => {
                    toast('Password changed successfully',{
                        hideProgressBar: true,
                    })
                    set_change_password(true);
                    set_password(false)
                })
                    .catch(err => {
                        setMismatch(err.response.data.message)
                        setTimeout(() => {
                          setMismatch('')
                        }, 1000*3);

                        reset()
                    })
            } else {
                setMismatch(true)
                reset()
            }
        

    }
    // const handleChange = () => {
    //     setMismatch(false)
        
    // }

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
                    <input {...register("oldPassword",{required:'This field is required'})} type="password" className={`${styles.model_input} form_control empty`} name="oldPassword" />
                    {/* {errors.oldPassword && <p className={`${styles.validations} validations`}>This field is required</p>} */}
                    {<p className={'validations'}>{errors.oldPassword?.message}</p>}
                    <label className={styles.model_label}>New Password</label>
                    <input {...register("newPassword",{required:"This field is required",pattern:{
                        value:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[A-Z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                        message:'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
                    }})} type="password" className={`${styles.model_input} form_control empty`} name="newPassword" />
                    {<p className={'validations'}>{errors.newPassword?.message}</p>}
                    {/* {errors.newPassword && <p className={`${styles.validations} validations`}>This field is required</p>} */}
                    <label className={styles.model_label}>Confirm New Password</label>
                    <input {...register("confirmPassword",{required:"This field is required",validate:val=>val==watch('newPassword'),message:'mismatch'})} type="password" className={`${styles.model_input} form_control empty`}
                        name="confirmPassword" />
                        {console.log(watch('newPassword'))}
                         {<p className={'validations'}>{errors.confirmPassword && 'mismatch'}</p>}
                    {/* {errors.confirmPassword && <p className={`${styles.validations} validations`}>This field is required</p>} */}
                    {mismatch && <p className={styles.mismatch}>{mismatch}</p>}
                    <div className={styles.model_btn}>
                        <button type="submit" className={`${styles.model_save_btn} ${styles.bgcolor_blue} btn btn-primary`}>Change Password</button>
                    </div>
                </div>}
            </div >
        </form>
    )
}
export default ManageAccount

