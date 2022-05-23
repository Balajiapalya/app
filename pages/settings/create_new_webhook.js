import styles from '../../styles/model.module.css';
import styleDis from '../../styles/webhooks.module.css';
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Api from '../../components/api/api';
import { useState, useEffect,useRef } from 'react'
import Image from 'next/image'

export default function Create_new_webhook({ closewebhook,table }) {
    const [data, setData] = useState([])
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [option, setOption] = useState();
    const [select, setSelect] = useState(false)
    useEffect(() => {
        Api.Get_environment_types_data().then(res =>
            setData(res.data.data))
    }, [])

    const onSubmit = webhook_data => {
        // document.body.style.overflow = 'scroll'
        let newObj = Object.fromEntries(Object.entries(webhook_data).slice(0, 2))
        newObj.environmentUUID = localStorage.getItem('envuuid')
        Api.Create_webhook_data(newObj).then(res =><>
        {closePopup()}
        {closewebhook(false)}
        </>)
    }
    const closePopup = () => {
        // document.body.style.overflow = 'scroll';
        // closewebhook(false)
        let inpopUp=document.querySelector('.inpopup');
        inpopUp.parentElement.classList.add(`${styleDis.no_display}`);
        table.classList.remove(`${styleDis.no_display}`);
    }

    const handleSelect = () => {
        setSelect(!select)
     }
     const handleOption = (option) => {
        setOption(option.name)
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
    return (
        <div className={`${styles.container} ${styles.newwebhook_model} inpopup`} >
            <div className={styles.body}>
                <div className={styles.model_nav}>
                    <a className={styles.model_close} role="button" onClick={() => closePopup()}><Image src="/images/asset_status/iconClose.svg" alt='icon' width='20' height='20' /> </a>
                </div>
                <div className={styles.main}>
                    <h3 className={styles.model_title}>New Webhook</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className={styles.model_label}>Environment</label>
                        {/* <div className={styles.select}>
                            <select name="environmentId"
                                className={`${styles.development} ${styles.model_selection}`}
                                {...register("environmentId", { required: true })}>
                                {data.map(option =>
                                    <>
                                        <option key={option.id} value={option.id}>{option.name}</option>
                                    </>)}
                            </select>
                            {errors.Environment && <p className={`${styles.validations} validations`}>This field is required</p>}
                            <img className={styles.file} src="/images/iconawesome-folder.svg" alt='icon'></img>
                            <button type="text" className={styles.up}><img src="/images/updown.svg" alt='icon'></img></button>
                        </div> */}

                        <div ref={selectDropdown} className={styles.select}>
                            <div className={`${styles.development} ${styles.model_selection}`} onClick={() => handleSelect()}>
                                {option ? option : 'Development'}
                                <img className={styles.selectFile} src="/images/iconawesome-folder.svg" alt='icon'></img>
                            </div>

                            <img onClick={() => handleSelect()} className={styles.drpdwn} src="/images/updown.png" alt='icon'></img>
                            {select &&
                                <div className={styles.dropdown}>
                                    <input className={styles.searchSelect} placeholder="Search by name" onChange={(e) => searchHandle(e)} />
                                    <div className={styles.allOptions}>
                                        {data.map(option =>
                                            <div key={option.id} value={option.id} onClick={() => handleOption(option)} id="opt">{option.name}</div>
                                        )}
                                    </div>
                                </div>
                            }
                        </div>


                        <label className={styles.model_label}>URL to notify:</label>
                        <input
                            type="text"
                            className={`${styles.model_input} form_control`}
                            name="url"
                            placeholder="Enter url"
                            {...register("url", { required: true })}></input>

                        {errors.URL && <p className={`${styles.validations} validations`}>This field is required</p>}
                        <p className={styles.access_token_link}>All events will be sent to this URL.To learn more about the types of events see our <a href="" className={styles.access_token_data}>docs</a></p>
                        <div className={styles.model_btn_token}>
                            <button type="button" className={`${styles.model_canel_btn} btn btn-primary`} onClick={() => closePopup()}>Cancel</button>
                            <button type="submit" className={`${styles.save_btn} btn btn-primary`} >create Webhook</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}