import styles from '../../styles/model.module.css';
import styleDis from '../../styles/apiaccess.module.css'
import { useForm } from 'react-hook-form';
import Api from '../../components/api/api';
import { useEffect, useState, useRef } from 'react'
import SecretKey from '../../components/dialog/SecretKey'
import Image from 'next/image'

export default function New_Access_token({ table, closetoken }) {
   const [data, setData] = useState([])
   const { register, handleSubmit, watch, formState: { errors } } = useForm();
   const [productType, setProductType] = useState([])
   const [items, setItems] = useState([])
   const [newToken, setNewToken] = useState(false)
   const [resp, setRes] = useState([])
   const [select, setSelect] = useState(false)
   const [option, setOption] = useState()
   const[uuid,setuuid] = useState()
  
   const [sys, setSys] = useState([])
   const [readSelect, setRead] = useState(true)
   const [writeSelect, setWrite] = useState(true)
   const [envSelect, setEnvSelect] = useState([]);

   useEffect(() => {
      Api.Get_env_data().then(res =>
         setData(res.data.data))
      Api.Get_product_data().then(res => <>
         {setItems(res.data.data[1])}
         {setProductType(res.data.data[0])}
         {setSys(res.data.data[2])}
      </>)
      Api.Get_env_data()
      .then(res => {
          if (res.data.status = "Success") {
              setEnvSelect(res.data.data)
          }
      })
      return () => {
         setData([])
         setItems([])
         setProductType([])
         setSys([])
         setEnvSelect([])
      }
   }, [])
   const onSubmit = access_data => {
      // console.log(access_data)
      if (access_data.video) {
         access_data.canRead = true
         access_data.canWrite = true
      }
      let vidElement=document.querySelector('.videoMain').checked
      const dataCheck = document.querySelector('.dataCheck').checked

      access_data.permissions = []
      let obj = new Object()
      if (vidElement) {
         obj.productTypeId = parseInt(productType.id)
         obj.canRead = access_data.canRead
         obj.canWrite = access_data.canWrite
         access_data.permissions.push(obj)
      }

      if (dataCheck) {
         let objTwo = new Object()
         objTwo.productTypeId = parseInt(items.id)
         objTwo.canRead = true
         access_data.permissions.push(objTwo)
      }
      console.log(dataCheck)
      let sliced = Object.fromEntries(Object.entries(access_data).slice(4, 7))
      sliced.envUUID = uuid
      if (vidElement || access_data.data) {
         Api.Create_aaccess_token_data(sliced).then(res =>
            setRes(res.data.data)
         )
            .catch(error => {
               console.log(error)
            })

      }
      setNewToken(true)
   }

   // const videoAll = watch('canWrite')

   const handleClose = () => {
      let inpopUp = document.querySelector('.inpopup');
      inpopUp.parentElement.classList.add(`${styleDis.no_display}`);
      table.classList.remove(`${styleDis.no_display}`);
   }

   const handleSelect = () => {
      setSelect(!select)
   }
   const handleOption = (option) => {
      console.log(option.uuid)
      setOption(option.name)
      setuuid(option.uuid)
      setSelect(false)
   }
   const searchHandle = (e) => {
      let options = document.querySelectorAll('#opt')
      for (let i = 0; i < options.length; i++) {
         let name = options[i].innerHTML.toLowerCase()
         let searchValue = e.target.value.toLowerCase()
         if (name.indexOf(searchValue) > -1) {
            options[i].style.display = 'block'
         } else {
            options[i].style.display = 'none'

         }
      }
   }

   let selectDropdown = useRef()
   useEffect(() => {
      const handleDropdown = (e) => {
         if (!selectDropdown.current.contains(e.target)) {
            setSelect(false)
         }
      }
      document.addEventListener('mouseup', handleDropdown)
      return () => {
         document.removeEventListener('mouseup', handleDropdown)
      }
   }, [])

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
   // const handleRead=()=>{
   //    const read=document.querySelector('#read');
   //    setRead(!readSelect)
   //    if(read.checked){
   //       read.checked=readSelect;
   //    }
   // }
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
         // read.checked=false;
      }
   }
   const handleRead=()=>{
      const video = document.querySelector('.videoMain')
      const read = document.querySelector('#read')
      const dataCheck = document.querySelector('.dataCheck')
      if(read.checked){
         read.checked=true;
         video.checked=true
      }else{
         read.checked=false;
         video.checked=false;
         dataCheck.checked=false;
      }
      
   }
   const handleData=()=>{
      const dataCheck = document.querySelector('.dataCheck')
      const read = document.querySelector('#read');
      if(dataCheck.checked){
         read.checked=true;
      }
   }
  
   return (
      <div className={`${styles.container} ${styles.accesstoken_model} inpopup`}>
         <div className={styles.body}>
            <div className={styles.model_nav}>
               <a className={styles.model_close} role="button" onClick={() => handleClose()}><Image src="/images/asset_status/iconClose.svg" alt='icon' width='20' height='20' /> </a>
            </div>
            <div className={styles.main}>
               <h3 className={styles.model_title}>New Access Token</h3>
               <form onSubmit={handleSubmit(onSubmit)}>
                  <label className={styles.model_label}>Environment</label>
                  {/* <div className={styles.select}>
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
                     <img className={styles.file} src="images/iconawesome-folder.svg" alt='icon'></img>
                     <button type="text" className={styles.up}><img src="images/updown.svg" alt='icon'></img></button>
                  </div> */}

                  <div ref={selectDropdown} className={styles.select}>
                     <div className={`${styles.development} ${styles.model_selection}`} onClick={() => handleSelect()}>
                        {option ? option :''}
                        <img className={styles.selectFile} src="/images/iconawesome-folder.svg" alt='icon'></img>
                     </div>
                     <img onClick={() => handleSelect()} className={styles.drpdwn} src="/images/updown.png" alt='icon'></img>

                     {select &&
                        <div className={styles.dropdown}>
                           <input className={styles.searchSelect} placeholder="Search by name" onChange={(e) => searchHandle(e)} />
                           <div className={styles.allOptions}>
                              {envSelect.map(option =>
                                 <div key={option.id} value={option.id} onClick={() => handleOption(option)} id="opt">{option.name}</div>
                              )}
                             
                           </div>
                        </div>
                     }
                  </div>

                  <div className={styles.access_token}>
                     <h4 className={styles.access_token_permission}>Permission</h4>
                     <p className={styles.access_token_link}>To know more permission please visit our <a href="#" className={styles.access_token_data}>token access guide</a></p>
                  </div>
                  <div className={styles.access_token_checkbox}>

                     {/* <input
                        type="checkbox"
                        name="permissions"
                        id={productType.id}
                        {...register("video")}
                     />
                     <label htmlFor={productType.id}> {productType.name}</label><br />
                     <input type="checkbox" id="read" checked={videoAll} className={styles.read} name="canRead"  {...register("canRead")} />
                     <label htmlFor="read"> Read</label><br />
                     <input type="checkbox" id="write" checked={videoAll} className={styles.write} name="canWrite" {...register("canWrite")} />
                     <label htmlFor="write" >Write</label><br /> */}

                     <input
                        type="checkbox"
                        name="permissions"
                        id={productType.id}
                        className='videoMain'
                        {...register("video")}
                        onChange={() => handleCheckBox()}
                     />
                     <label htmlFor={productType.id}> {productType.name}</label><br />
                     <input type="checkbox" id="read" className={styles.read} name="canRead" {...register("canRead")} onChange={() => handleRead()}/>
                     <label htmlFor="read"> Read</label><br />
                     <input type="checkbox" id="write" className={styles.write} name="canWrite" {...register("canWrite")} onChange={() => handleWrite()} />
                     <label htmlFor="write" >Write</label><br />

                     <input type="checkbox" className={`${styles.data} dataCheck`} name="data" id={items.id} {...register("data", { required: false })} onChange={() => handleData()}/>
                     <label htmlFor={items.id}>{items.name}(read-only)</label><br />
                     <input
                        type="checkbox"
                        name="permissions"
                        id={sys.id}
                        className={styles.data}
                        {...register("system")}
                     />
                     <label htmlFor={sys.id}>{sys.name}</label>
                  </div>
                  <label className={styles.model_label}>Access token name</label>
                  <input type="text" className={`${styles.model_input} form_control`} name="name" placeholder="Development" {...register("name", { required: true })} />
                  {errors.name && <p className={`${styles.validations} validations`}>This field is required</p>}
                  <div className={styles.model_btn_token}>
                     <button type="button" className={`${styles.model_canel_btn} btn btn-primary`} onClick={() => handleClose()}>Cancel</button>
                     <button type="submit" className={`${styles.save_btn} btn btn-primary`}>create Token</button>
                     {newToken && <SecretKey setNewToken={setNewToken} closetoken={closetoken} close={handleClose} res={resp} />}
                  </div>
               </form>
            </div>
         </div>

      </div>

   )
}