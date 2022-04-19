import styles from '../../styles/model.module.css'
import { useForm } from 'react-hook-form';
import Api from '../../components/api/api';
import Image from 'next/image'
import {useEffect,useState} from 'react'
import CreateSignKey from '../../components/dialog/CreateSignKey'

export default function Create_signing_key({ closesigninkeys }) {
    const [data, setData] = useState([])
    const [prod,setProd]=useState([])
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    useEffect(() => {
        Api.Get_environment_types_data()
        .then(res =>
            setData(res.data.data))
        Api.Get_product_data()
        .then(res=>
            setProd(res.data.data))
    }, [])
    const [openCreate,setOpenCreate]=useState(false)

    const onSubmit = signin_key => {
        signin_key.environmentUUID=localStorage.getItem('envuuid')
        Api.Create_signin_keys_data(signin_key).then(res=>console.log(res))
        
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
                                name="environmentUUID"
                                className={`${styles.development} ${styles.model_selection}`}
                                {...register("environmentUUID", { required: true })}
                            >
                                {data.map(item => <>
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                </>)}
                            </select>

                            <img className={styles.file} src="/Images/Icon awesome-folder.png" alt='icon' />
                            <button type="text" className={styles.up}><img src="/Images/updown.png" alt='icon'></img></button>
                        </div>
                        <div>
                            <label className={styles.model_label}>Product</label>

                            <select
                                name="productTypeId"
                                className={styles.model_selection}
                                {...register("productTypeId", { required: true,valueAsNumber: true })}
                            >
                                {prod.map(product=>
                                    <option key={product.id} value={product.id}>{product.name}</option>)}
                            </select>
                        </div>
                        <div className={styles.model_btn}>
                            <button type="button" className={`${styles.model_canel_btn} btn btn-primary`} onClick={() => closesigninkeys(false)}>Cancel</button>
                            <button onClick={()=>setOpenCreate(true)} type="submit" className={`${styles.model_save_btn} btn btn-primary`} >create Signing Key</button>
                        </div>
                    </form>
                    {openCreate && <CreateSignKey setOpenCreate={setOpenCreate}/>}              
                </div>
            </div>
        </div>
    )
}