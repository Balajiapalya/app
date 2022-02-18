import styles from '../styles/model.module.css';
import { useForm } from 'react-hook-form';


export default function New_Access_token({ closetoken }) {
   const url = 'https://0d7503d0-c9e6-4e89-8f65-7a7cb892e370.mock.pstmn.io/profile/services/api/v1/api-access-tokens'
   const { register, handleSubmit, watch, formState: { errors } } = useForm();
   const onSubmit = data => {
      console.log(data)
      // axios.post(organisation_name_url, data)
      //     .then(response => {
      //         console.log(response)
      //     })
      //     .catch(error => {
      //         console.log(error)
      //     })
  }
   return (
      <div className={`${styles.container} ${styles.accesstoken_model}`}>
         <div className={styles.body}>

            <div className={styles.model_nav}>
               <a className={styles.model_close} role="button" onClick={() => closetoken(false)}><img src="Images/close.png" alt='icon' /> </a>
            </div>
            <div className={styles.main}>
               <h3 className={styles.model_title}>New Access Token</h3>
               <form onSubmit={handleSubmit(onSubmit)}>
                  <label className={styles.model_label}>Environment</label>
                  <div className={styles.select}>
                     <select
                        name="Environment"
                        className={`${styles.development} ${styles.model_selection}`}
                        {...register("Environment", { required: true })}
                     >
                        {errors.Environment && <p className={`${styles.validations} validations`}>This field is required</p>}
                        <option value="Development">Development</option>
                        <option value="video">video</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                     </select>
                     <img className={styles.file} src="Images/Icon awesome-folder.png" alt='icon'></img>
                     <button type="text" className={styles.up}><img src="Images/updown.png" alt='icon'></img></button>
                  </div>

                  <div className={styles.access_token}>
                     <h4 className={styles.access_token_permission}>Permission</h4>
                     <p className={styles.access_token_link}>To know more permission please visit our <a href="#" className={styles.access_token_data}>token access guide</a></p>
                  </div>
                  <div className={styles.access_token_checkbox}>
                     <input 
                        type="checkbox"
                        name="video"
                        id="video"
                        value="video"
                        {...register("video", { required: true })} 
                     />
                     <label htmlFor="video"> Video</label><br />
                     <input type="checkbox" className={styles.read} name="read" id="read" value="read" {...register("video", { required: false })} />
                     <label htmlFor="read" > Read</label><br />
                     <input type="checkbox" className={styles.write} name="write" id="write" value="write" {...register("write", { required: false })} />
                     <label htmlFor="write" >Write</label><br />
                     <input type="checkbox" className={styles.data} name="data" id="data" value="data" {...register("data", { required: false })} />
                     <label htmlFor="data">Data(read-only)</label>
                  </div>
                  <label className={styles.model_label}>Access token name</label>
                  <input type="text" className={`${styles.model_input} form_control`} name="name" placeholder="Development" {...register("name", { required: true })} />
                  {errors.Environment && <p className={`${styles.validations} validations`}>This field is required</p>}
                  <div className={styles.model_btn}>
                     <button type="button" className={`${styles.model_canel_btn} btn btn-primary`} onClick={() => closetoken(false)}>Cancel</button>
                     <button type="submit" className={`${styles.model_save_btn} btn btn-primary`}>create Token</button>
                  </div>
               </form>

            </div>

         </div>


      </div>




   )
}