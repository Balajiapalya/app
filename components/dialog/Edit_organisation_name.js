import styles from '../../styles/model.module.css';
import { useForm } from 'react-hook-form';
import Api from '../api/api';
import {useEffect} from 'react'

export default function Edit_organization_name({ closeorganization, setEditData }) {
    const { register, handleSubmit, watch, setError,formState: { errors } } = useForm();
    useEffect(()=>{
        const handleEsc=(e)=>{
          if(e.keyCode===27){
            closeorganization(false)
          }
        }
        document.addEventListener('keydown',handleEsc)
        return()=>{
          document.removeEventListener('keydown',handleEsc)
        }
      },[])
    const onSubmit = organisation_data => {
        // let trimmed=organisation_data.name.trim()
        // let obj=new Object()
        // obj.name=trimmed
        
        // if(obj.name!==''){
           
        Api.Edit_organisation_name_data(organisation_data)
            .then(res => {
                // localStorage.setItem('orgName', res.data.data.name)
                localStorage.setItem('orgName', organisation_data.name)
                // window.location.reload()
                setEditData(res.data.data)
                closeorganization(false)
            })
            .catch(error => {
                console.log(error)
            })
        // }
        
    }
    let data = localStorage.getItem('orgName')
    return (
        <div className={styles.model}>
            <div className={styles.model_container}>
                <div className={styles.model_main}>
                    <div className={styles.model_nav}>
                        <h3 className={styles.model_title}>Edit Organisation Name</h3>
                        <a className={styles.model_close} onClick={() => closeorganization(false)} ><img src="/images/close.svg" alt='icon' /> </a>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.model_form}>
                            <label className={styles.model_label}>Organisation Name</label>
                            <input
                                defaultValue={data}
                                type="text"
                                className={`${styles.model_input} form_control`}
                                name="name"
                                {...register("name", {required:'This field is required',pattern:{
                                    value:/^[^\s]+(?:$|.*[^\s]+$)/,
                                    message:'Entered value cannot start/end or have only white space'
                                }})}
                            />
                            {/* {errors.name && <p className={`${styles.validations} validations`}>This field is required</p>} */}
                            {<p className={'validations'}>{errors.name?.message}</p>}
                        </div>
                        <div className={styles.model_btn}>
                            <a><button type="button" className={`${styles.model_canel_btn} btn btn-primary`} onClick={() => closeorganization(false)}>Cancel</button></a>
                            <a> <button type="submit" className={`${styles.model_save_btn} btn btn-primary`} >Save Changes</button></a>
                        </div>
                    </form>

                </div>
            </div>


        </div>


    )
}