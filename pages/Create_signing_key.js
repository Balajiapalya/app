import styles from '../styles/model.module.css'
import { useForm } from 'react-hook-form';
import Api from '../components/api/api';
import Image from 'next/image'

export default function Create_signing_key({ closesigninkeys }) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = signin_key => {
        Api.Create_signin_keys_data(signin_key)
    }
    return (
        <div className={`${styles.container} ${styles.newkey}`} >
            <div className={styles.body}>
                <div className={styles.model_nav}>
                    <a onClick={() => closesigninkeys(false)} className={styles.model_close} role="button"><Image src="/Images/close.png" alt='icon' width='20' height='20' /> </a>

                </div>
                <div className={styles.main}>
                    <h3 className={styles.model_title}>New Signing Key</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className={styles.model_label}>Environment</label>
                        <div className={styles.select}>
                            <select
                                name="Environment"
                                className={`${styles.development} ${styles.model_selection}`}
                                {...register("Environment", { required: true })}
                            >
                                <option value="Development">Development</option>
                                <option value="video">video</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>

                            <img className={styles.file} src="/Images/Icon awesome-folder.png" alt='icon'/>
                            <button type="text" className={styles.up}><img src="/Images/updown.png" alt='icon'></img></button>
                        </div>
                        <div>
                            <label className={styles.model_label}>Product</label>

                            <select 
                                name="product"
                                className={styles.model_selection}
                                {...register("product", { required: true })}
                            >
                                <option value="1">1</option>
                                <option value="video">video</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                        <div className={styles.model_btn}>
                            <button type="button" className={`${styles.model_canel_btn} btn btn-primary`} onClick={() => closesigninkeys(false)}>Cancel</button>
                            <button type="submit" className={`${styles.model_save_btn} btn btn-primary`} >create Signing Key</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}