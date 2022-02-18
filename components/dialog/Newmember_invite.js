import styles from '../../styles/model.module.css'
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function Newmember_invite({ closeModel }) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const invite_url = 'https://0d7503d0-c9e6-4e89-8f65-7a7cb892e370.mock.pstmn.io/profile/services/api/v1/organizations/1/invite'
  const onSubmit = data => {
    // console.log(data)
    axios.post(invite_url,data)
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
  }
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
            {...register("Email_address", { required: true })}
          />
          {errors.Email_address && <p className={`${styles.validations} validations`}>This field is required</p>}

          <div>
            <label className={styles.model_label}>Role</label>
            <select name="roles" 
            className={styles.model_selection}
            {...register("roles", { required: true })}
            >
              <option value="1">1</option>
              <option value="admin">admin</option>
              <option value="3">3</option>
              <option value="4">4</option>
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
