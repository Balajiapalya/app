import styles from '../../styles/model.module.css';
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Api from '../../components/api/api';
import { useState, useEffect } from 'react'

export default function Create_new_webhook({ closewebhook }) {
    const [data, setData] = useState([])
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    useEffect(() => {
        Api.Get_environment_types_data().then(res =>
            setData(res.data.data))
    }, [])

    const onSubmit = webhook_data => {
        document.body.style.overflow='scroll'
        let newObj=Object.fromEntries(Object.entries(webhook_data).slice(1,2))
        newObj.environmentUUID=localStorage.getItem('envuuid')
        Api.Create_webhook_data(newObj).then(res=>closewebhook(false))
    }
    const closePopup=()=>{
        document.body.style.overflow='scroll';
        closewebhook(false)
    }
    return (
        <div className={`${styles.container} ${styles.newwebhook_model}`} >
            <div className={styles.body}>
                <div className={styles.model_nav}>
                    <a className={styles.model_close} role="button" onClick={() => closePopup()}><img src="/images/close.png" alt='icon' /> </a>
                </div>
                <div className={styles.main}>
                    <h3 className={styles.model_title}>New Webhook</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className={styles.model_label}>Environment</label>
                        <div className={styles.select}>
                            <select name="environmentId"
                                className={`${styles.development} ${styles.model_selection}`}
                                {...register("environmentId", { required: true })}>
                                {data.map(option =>
                                    <>
                                        <option key={option.id} value={option.id}>{option.name}</option>
                                    </>)}
                            </select>
                            {errors.Environment && <p className={`${styles.validations} validations`}>This field is required</p>}
                            <img className={styles.file} src="/images/iconawesome-folder.png" alt='icon'></img>
                            <button type="text" className={styles.up}><img src="/images/updown.png" alt='icon'></img></button>
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
                        <div className={styles.model_btn}>
                            <button type="button" className={`${styles.model_canel_btn} btn btn-primary`} onClick={() => closePopup()}>Cancel</button>
                            <button type="submit" className={`${styles.model_save_btn} btn btn-primary`} >create Webhook</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}