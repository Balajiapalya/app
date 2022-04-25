import styles from '../../styles/model.module.css';
import { useForm } from 'react-hook-form';
import Api from '../../components/api/api';
import { useEffect, useState } from 'react'
import SecretKey from '../../components/dialog/SecretKey'

export default function New_Access_token({ closetoken }) {
   const [data, setData] = useState([])
   const { register, handleSubmit, watch, formState: { errors } } = useForm();
   const [productType, setProductType] = useState([])
   const [items, setItems] = useState([])
   const [newToken, setNewToken] = useState(false)
   const [resp,setRes]=useState([])

   useEffect(() => {
      Api.Get_environment_types_data().then(res =>
         setData(res.data.data))
      Api.Get_product_data().then(res => <>
         {setItems(res.data.data[1])}
         {setProductType(res.data.data[0])}
      </>)
   }, [])
   const onSubmit = access_data => {
      if (access_data.video) {
         access_data.canRead = true
         access_data.canWrite = true
      }

      access_data.permissions = []
      let obj = new Object()
      if (access_data.video) {
         obj.productTypeId = parseInt(productType.id)
         obj.canRead = access_data.canRead
         obj.canWrite = access_data.canWrite
         access_data.permissions.push(obj)
      }

      if (access_data.data) {
         let objTwo = new Object()
         objTwo.productTypeId = parseInt(items.id)
         objTwo.canRead = true
         access_data.permissions.push(objTwo)
      }

      let sliced = Object.fromEntries(Object.entries(access_data).slice(5, 7))
      sliced.envUUID = localStorage.getItem('envuuid')
      if (access_data.video || access_data.data) {
         Api.Create_aaccess_token_data(sliced).then(res =>
            setRes(res.data.data)
         )
            .catch(error => {
               console.log(error)
            })

      }
      setNewToken(true)
   }

   const videoAll = watch('video')
const handleClose=()=>{
   document.body.style.overflow='scroll'
   closetoken(false)
}

   return (
      <div className={`${styles.container} ${styles.accesstoken_model}`}>
         <div className={styles.body}>
            <div className={styles.model_nav}>
               <a className={styles.model_close} role="button" onClick={() => handleClose()}><img src="images/close.png" alt='icon' /> </a>
            </div>
            <div className={styles.main}>
               <h3 className={styles.model_title}>New Access Token</h3>
               <form onSubmit={handleSubmit(onSubmit)}>
                  <label className={styles.model_label}>Environment</label>
                  <div className={styles.select}>
                     <select
                        name="environmentTypeId"
                        className={`${styles.development} ${styles.model_selection}`}
                        {...register("environmentTypeId", { required: true, valueAsNumber: true })}
                     >
                        {errors.Environment && <p className={`${styles.validations} validations`}>This field is required</p>}

                        {data.map(option =>
                           <>
                              <option key={option.id} value={option.id}>{option.name}</option>
                           </>)}
                     </select>
                     <img className={styles.file} src="images/iconawesome-folder.png" alt='icon'></img>
                     <button type="text" className={styles.up}><img src="images/updown.png" alt='icon'></img></button>
                  </div>

                  <div className={styles.access_token}>
                     <h4 className={styles.access_token_permission}>Permission</h4>
                     <p className={styles.access_token_link}>To know more permission please visit our <a href="#" className={styles.access_token_data}>token access guide</a></p>
                  </div>
                  <div className={styles.access_token_checkbox}>

                     <input
                        type="checkbox"
                        name="permissions"
                        id={productType.id}
                        value='true'
                        {...register("video")}
                     />
                     <label htmlFor="video"> {productType.name}</label><br />
                     <input type="checkbox" checked={videoAll} className={styles.read} name="canRead"  {...register("canRead")} />
                     <label htmlFor="read" > Read</label><br />
                     <input type="checkbox" checked={videoAll} className={styles.write} name="canWrite" {...register("canWrite")} />
                     <label htmlFor="write" >Write</label><br />
                     <input type="checkbox" className={styles.data} name="data" id={items.id} {...register("data", { required: false })} />
                     <label htmlFor="data">{items.name}(read-only)</label>
                  </div>
                  <label className={styles.model_label}>Access token name</label>
                  <input type="text" className={`${styles.model_input} form_control`} name="name" placeholder="Development" {...register("name", { required: true })} />
                  {errors.name && <p className={`${styles.validations} validations`}>This field is required</p>}
                  <div className={styles.model_btn}>
                     <button type="button" className={`${styles.model_canel_btn} btn btn-primary`} onClick={() => handleClose()}>Cancel</button>
                     <button type="submit" className={`${styles.model_save_btn} btn btn-primary`}>create Token</button>
                     {newToken && <SecretKey setNewToken={setNewToken} closetoken={closetoken} res={resp}/>}
                  </div>
               </form>
            </div>
         </div>

      </div>

   )
}