import styles from '../styles/model.module.css';
import { useForm } from 'react-hook-form';
import Api from '../components/api/api';
import { useEffect, useState } from 'react'

export default function New_Access_token({ closetoken }) {
   const [data, setData] = useState([])
   const { register, handleSubmit, watch, formState: { errors } } = useForm();

   useEffect(() => {
      Api.Get_environment_types_data().then(res =>
         setData(res.data.data))
   }, [])

   const onSubmit = access_data => {
      Api.Create_aaccess_token_data(access_data)
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
                        name="environmentId"
                        className={`${styles.development} ${styles.model_selection}`}
                        {...register("environmentId", { required: true })}
                     >
                        {errors.Environment && <p className={`${styles.validations} validations`}>This field is required</p>}

                        {data.map(option =>
                           <>
                              <option key={option.id} value={option.id}>{option.name}</option>
                           </>)}
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
                     <input type="checkbox" className={styles.read} name="read" id="read"  {...register("video", { required: false })} />
                     <label htmlFor="read" > Read</label><br />
                     <input type="checkbox" className={styles.write} name="write" id="write"  {...register("write", { required: false })} />
                     <label htmlFor="write" >Write</label><br />
                     <input type="checkbox" className={styles.data} name="data" id="data" {...register("data", { required: false })} />
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