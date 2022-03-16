import styles from '../../styles/model.module.css'
import { useForm } from 'react-hook-form';
import Api from '../../components/api/api';
import { useEffect, useState } from 'react';
import {useRouter} from 'next/router'

export default function Newmember_invite({ closeModel }) {
  const router=useRouter();
  const [data,setdata]=useState([]);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = admin_invite_code => {
    Api.Newmember_invite_data(admin_invite_code)
      .then(res=>{
        window.location.reload()
      })
      .catch(error=>{
        console.log(error)
      })
  }
  useEffect(() => {
    Api.Get_roles_data()
    .then(res => {
      setdata(res.data.data)
    })
  }, {})
  
  return (
    <div className={`${styles.model} ${styles.Newmember}`}>
      <div className={styles.model_main}>
        <div className={styles.model_nav}>
          <h3 className={styles.model_title}>Invite New Member</h3>
          <a className={styles.model_close} role="button" onClick={() => closeModel(false)} ><img src="Images/close.png" alt='icon' /> </a>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} >
          <label className={styles.model_label}>Email Address</label>
          <input
            type="email"
            className={`${styles.model_input} form_control`}
            name="email"
            {...register("email", { required: true })}
          />
          {errors.email && <p className={`${styles.validations} validations`}>This field is required</p>}

          <div>
            <label className={styles.model_label}>Role</label>

            <select 
              className={styles.model_selection} name="roleId"
              {...register("roleId", { required: true,valueAsNumber: true,
               })}>
              {data.map((item,key)=>
                <>
                  <option key={key} value={parseInt(item.id)}>{item.name}</option>
                </>)}
            </select>
          </div>
          <div className={styles.model_btn}>
            <button type="submit" className={`${styles.model_save_btn} btn btn-primary`} >Send Invitation</button>
          </div>
        </form>
      </div>
    </div>
  )
}
