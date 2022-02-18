import styles from '../styles/model.module.css';
import { useForm } from 'react-hook-form'
import axios from 'axios'


export default function Create_new_webhook({ closewebhook }) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const webhook_url = 'https://0d7503d0-c9e6-4e89-8f65-7a7cb892e370.mock.pstmn.io/profile/services/api/v1/webhooks'
    const onSubmit = data => {
        // console.log(data)
        axios.post(webhook_url,data)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className={`${styles.container} ${styles.newwebhook_model}`} >
            <div className={styles.body}>
                <div className={styles.model_nav}>
                    <a className={styles.model_close} role="button" onClick={() => closewebhook(false)}><img src="/Images/close.png" alt='icon' /> </a>
                </div>
                <div className={styles.main}>
                    <h3 className={styles.model_title}>New Webhook</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className={styles.model_label}>Environment</label>
                        <div className={styles.select}>
                            <select name="Environment" 
                            className={`${styles.development} ${styles.model_selection}`}
                            {...register("Environment", { required: true })}>
                                <option value="Devlopment">Development</option>
                                <option value="video">video</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                            {errors.Environment && <p className={`${styles.validations} validations`}>This field is required</p>}
                            <img className={styles.file} src="/Images/Icon awesome-folder.png" alt='icon'></img>
                            <button type="text" className={styles.up}><img src="/Images/updown.png" alt='icon'></img></button>
                        </div>


                        <label className={styles.model_label}>URL to notify:</label>
                        <input 
                         type="text"
                         className={`${styles.model_input} form_control`} 
                         name="URL" 
                         placeholder="Enter url" 
                         {...register("URL", { required: true })}></input>
                        
                        {errors.URL && <p className={`${styles.validations} validations`}>This field is required</p>}
                        <p className={styles.access_token_link}>All events will be sent to this URL.To learn more about the types of events see our <a href="" className={styles.access_token_data}>docs</a></p>
                        <div className={styles.model_btn}>
                            <button type="button" className={`${styles.model_canel_btn} btn btn-primary`} onClick={() => closewebhook(false)}>Cancel</button>
                            <button type="submit" className={`${styles.model_save_btn} btn btn-primary`} >create Webhook</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}