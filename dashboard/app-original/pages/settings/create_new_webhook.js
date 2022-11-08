import styles from '../../styles/model.module.css';
import styleDis from '../../styles/webhooks.module.css';
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Api from '../../components/api/api';
import { useState, useEffect,useRef } from 'react'
import Image from 'next/image'
import EvnDropDown from '../../components/utils/EnvDropDown'

export default function Create_new_webhook({ closewebhook,table }) {
    const [data, setData] = useState([]);
    const [defaultEnv, setDefaultEnv] = useState()
    const { register,setError, handleSubmit, watch, formState: { errors },reset } = useForm();
    const [option, setOption] = useState();
    const [uuid,setuuid] = useState('');
    const [select, setSelect] = useState(false);
    // const [roleError,setRoleError]=useState(false)
    
    useEffect(()=>{
          Api.Get_env_data().then(res => <>
            {setData(res.data.data)}
            {setDefaultEnv(res.data.data[0].name)}
         </>)
    },[])
    const onSubmit = webhook_data => {
        // let newObj = Object.fromEntries(Object.entries(webhook_data).slice(0, 2))
       
        if(uuid==''){
            uuid=data[0].uuid
            // setRoleError(true)
        }
        webhook_data.environmentUUID = uuid
        if(webhook_data.url.match(/^\s*$/)!=null){
            setError('url',{message:'This field is required'})
        }
        
        if(webhook_data.url.match(/^\s*$/)===null){
            webhook_data.url= webhook_data.url.trim()
            Api.Create_webhook_data(webhook_data).then(res =><>
                {closePopup()}
                {closewebhook(false)}
                </>)
                reset()
        }
       
    }
    const closePopup = () => {
        let inpopUp=document.querySelector('.inpopup');
        inpopUp.parentElement.classList.add(`${styleDis.no_display}`);
        table.classList.remove(`${styleDis.no_display}`);
    }

    
    return (
        <div className={`${styles.container} ${styles.newwebhook_model} inpopup`} >
            <div className={styles.body}>
                <div className={styles.model_nav}>
                    <a className={styles.model_close} role="button" onClick={() => closePopup()}><Image src="/images/asset_status/iconClose.svg" alt='icon' width='20' height='20' /> </a>
                </div>
                <div className={styles.main}>
                    <h3 className={styles.model_title}>New Webhook</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <EvnDropDown  data={data} defaultEnv={defaultEnv} setuuid={setuuid}/>
                        {/* {roleError && <p className={`validations`}>Please select the environment</p>} */}
                        <label className={styles.model_label}>URL to notify:</label>
                        <input
                            maxLength={60}
                            type="text"
                            className={`${styles.model_input} form_control`}
                            name="url"
                            placeholder="Enter url"
                            {...register("url", {required:'This field is required',pattern:{
                                value:/^[^\s]+(?:$|.*[^\s]+$)/,
                                message:'Entered value cannot start/end or have only white space'
                            }})}></input>

                        {/* {errors.url && <p className={`${styles.validations} validations`}>This field is required</p>} */}
                        {<p className={'validations'}>{errors.url?.message}</p>}
                        <p className={styles.access_token_link}>All events will be sent to this URL.To learn more about the types of events see our <a href="https://documenter.getpostman.com/view/19432362/UyxqDPLG" target='_blank' rel="noopener noreferrer" className={styles.access_token_data}>docs</a></p>
                        <div className={styles.model_btn_token}>
                            <button type="button" className={`${styles.model_canel_btn} btn btn-primary`} onClick={() => closePopup()}>Cancel</button>
                            <button type="submit" className={`${styles.save_btn} btn btn-primary`} >Create Webhook</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}