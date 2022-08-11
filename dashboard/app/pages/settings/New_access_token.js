import styles from '../../styles/model.module.css';
import styleDis from '../../styles/apiaccess.module.css'
import { useForm } from 'react-hook-form';
import Api from '../../components/api/api';
import { useEffect, useState, useRef } from 'react'
import SecretKey from '../../components/dialog/SecretKey'
import Image from 'next/image'
import EvnDropDown from '../../components/utils/EnvDropDown'

export default function New_Access_token({ table, closetoken }) {
   const { register, setError,handleSubmit, reset,watch, formState: { errors } } = useForm();
   const [productType, setProductType] = useState([])
   const [items, setItems] = useState([])
   const [newToken, setNewToken] = useState(false)
   const [resp, setRes] = useState([])
   const [uuid, setuuid] = useState('')
   const [sys, setSys] = useState([])
   const [data, setData] = useState([]);
   const [defaultEnv, setDefaultEnv] = useState()
   // const [roleError,setRoleError]=useState(false)
   

   useEffect(() => {
      Api.Get_product_data().then(res => <>
         {setItems(res.data.data[1])}
         {setProductType(res.data.data[0])}
         {setSys(res.data.data[2])}
      </>)

      Api.Get_env_data().then(res => <>
         {setData(res.data.data)}
         {setDefaultEnv(res.data.data[0].name)}
      </>)
      return () => {
         // setData([])
         setItems([])
         setProductType([])
         setSys([])
      }
   }, [])
   const onSubmit = access_data => {
      if(uuid===''){
         uuid=data[0].uuid
         // setRoleError(true)

       }
      
      if (access_data.video) {
         access_data.canRead = true
         access_data.canWrite = true
      }
      let vidElement = document.querySelector('.videoMain').checked
      const dataCheck = document.querySelector('.dataCheck').checked
      const read = document.querySelector('#read').checked;
      const write = document.querySelector('#write').checked
      const syst = document.querySelector('#sys').checked
      const sysRead = document.querySelector('#sysRead').checked;
      const sysWrite = document.querySelector('#sysWrite').checked;

      access_data.permissions = []
      let obj = new Object()
      obj.productTypeId = parseInt(productType.id)
      if (vidElement) {
         obj.canRead = read
         obj.canWrite = write;
         access_data.permissions.push(obj)
      } else if (read) {
         obj.canRead = read;
         access_data.permissions.push(obj)
      }
      let objTwo = new Object()
      if (dataCheck) {
         objTwo.productTypeId = parseInt(items.id)
         objTwo.canRead = true;
         access_data.permissions.push(objTwo)
      }
      let objThree = new Object()
      if (syst) {
         objThree.productTypeId = parseInt(sys.id)
         objThree.canRead = sysRead;
         objThree.canWrite = sysWrite;
         access_data.permissions.push(objThree)
      }

      let sliced = Object.fromEntries(Object.entries(access_data).slice(5, 7))
      sliced.envUUID = uuid
      //to check if only space exists
      if(sliced.name.match(/^\s*$/)!=null){
         setError('name',{message:'This field is required'})
      }
      if (sliced.name.match(/^\s*$/)===null && uuid!=='') {
        sliced.name= sliced.name.trim()
         let secret = document.querySelector('.secretKey')
         let token=document.querySelector('.createToken')
         Api.Create_aaccess_token_data(sliced).then(res =><>
            {setRes(res.data.data)}
         {token.classList.add(`${styleDis.no_display}`)}
      {secret.classList.remove(`${styleDis.no_display}`)}
      {secret.classList.add(`${styleDis.display}`)}
      {reset()}
      </>)
            .catch(error => {
               console.log(error)
            })

         setNewToken(true)

      }

   }


   const handleClose = () => {
      let inpopUp = document.querySelector('.inpopup');
      inpopUp.parentElement.classList.add(`${styleDis.no_display}`);
      table.classList.remove(`${styleDis.no_display}`);
   }

   

   const handleCheckBox = () => {
      const video = document.querySelector('.videoMain')
      const read = document.querySelector('#read')
      const write = document.querySelector('#write')
      if (video.checked) {
         read.checked = true;
         write.checked = true;
      } else {
         read.checked = false;
         write.checked = false;
      }
   }

   const handleWrite = () => {
      const write = document.querySelector('#write')
      const video = document.querySelector('.videoMain')
      const read = document.querySelector('#read')
      if (write.checked) {
         write.checked = true;
         read.checked = true;
         video.checked = true;
      } else if (read.checked) {
         write.checked = false;
         video.checked = false;
      }
   }
   const handleRead = () => {
      const video = document.querySelector('.videoMain')
      const read = document.querySelector('#read')
      const dataCheck = document.querySelector('.dataCheck')
      if (read.checked) {
         read.checked = true;
      } else {
         read.checked = false;
         dataCheck.checked = false;
      }

   }
   const handleSys = () => {
      const sys = document.querySelector('#sys')
      const sysRead = document.querySelector('#sysRead');
      const sysWrite = document.querySelector('#sysWrite');
      if (sys.checked) {
         sysRead.checked = true;
         sysWrite.checked = true;
      } else {
         sysRead.checked = false;
         sysWrite.checked = false;
      }
   }

   return (
      <div className={`${styles.container} ${styles.accesstoken_model} inpopup`}>
         <div className={`${styles.body} createToken`}>
            <div className={styles.model_nav}>
               <a className={styles.model_close} role="button" onClick={() => handleClose()}><Image src="/images/asset_status/iconClose.svg" alt='icon' width='20' height='20' /> </a>
            </div>
            <div className={styles.main}>
               <h3 className={styles.model_title}>New Access Token</h3>
               <form onSubmit={handleSubmit(onSubmit)}>
                  <EvnDropDown data={data} defaultEnv={defaultEnv} setuuid={setuuid}/>
                  {/* {roleError && <p className={`validations`}>Please select the environment</p>} */}
                  <div className={styles.access_token}>
                     <h4 className={styles.access_token_permission}>Permission</h4>
                     <p className={styles.access_token_link}>To know more permission please visit our <a href="https://documenter.getpostman.com/view/19432362/UyxqDPLG" target='_blank' rel="noopener noreferrer" className={styles.access_token_data}>token access guide</a></p>
                  </div>
                  <div className={styles.access_token_checkbox}>
                     <input
                        type="checkbox"
                        name="permissions"
                        id={productType.id}
                        className='videoMain'
                        {...register("video")}
                        onChange={() => handleCheckBox()}
                     />
                     <label htmlFor={productType.id}> {productType.name}</label><br />
                     <input type="checkbox" id="read" className={styles.read} name="canRead" {...register("canRead")} onChange={() => handleRead()} />
                     <label htmlFor="read"> Read</label><br />
                     <input type="checkbox" id="write" className={styles.write} name="canWrite" {...register("canWrite")} onChange={() => handleWrite()} />
                     <label htmlFor="write" >Write</label><br />

                     <input type="checkbox" className={`${styles.data} dataCheck`} name="data" id={items.id} {...register("data", { required: false })} />
                     <label htmlFor={items.id}>{items.name}(read-only)</label><br />
                     <input
                        type="checkbox"
                        name="permissions"
                        id='sys'
                        className={styles.data}
                        {...register("system")}
                        onChange={() => handleSys()}
                     />
                     <label htmlFor='sys'>{sys.name}</label><br />
                     <input id='sysRead' className={styles.read} type="checkbox" />
                     <label> Read</label><br />
                     <input id='sysWrite' className={styles.write} type="checkbox" />
                     <label>Write</label><br />
                  </div>
                  <label className={styles.model_label}>Access token name</label>
                  <input maxLength={50} type="text" className={`${styles.model_input} form_control`} name="name" placeholder="Development" {...register("name", {required:'This field is required',pattern:{
                                    value:/^[^\s]+(?:$|.*[^\s]+$)/,
                                    message:'Entered value cannot start/end or have only white space'
                                }})} />
                  {<p className={'validations'}>{errors.name?.message}</p>}
                  
                  <div className={styles.model_btn_token}>
                     <button type="button" className={`${styles.model_canel_btn} btn btn-primary`} onClick={() => handleClose()}>Cancel</button>
                     <button type="submit" className={`${styles.save_btn} btn btn-primary`}>Create Token</button>
                     {/* {newToken && <SecretKey setNewToken={setNewToken} closetoken={closetoken} close={handleClose} res={resp} />} */}
                  </div>
               </form>
            </div>
         </div>
         <div className={`${styleDis.no_display} secretKey`}>
            <SecretKey setNewToken={setNewToken} closetoken={closetoken} close={handleClose} res={resp} popup={process.browser && document.querySelector('.createToken')}/>
         </div>
      </div>

   )
}