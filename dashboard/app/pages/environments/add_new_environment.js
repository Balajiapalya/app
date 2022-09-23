import styles from '../../styles/model.module.css';
import styleDis from "../../styles/settings.module.css";
import { useForm } from 'react-hook-form';
import Api from '../../components/api/api';
import { useEffect, useState,useRef } from 'react';
import { useRouter } from 'next/router'


export default function Add_new_environment({table, closeenv }) {

    const [env, setenv] = useState([]);
    const [selected,setSelected]=useState();
  const [productSelect, setProductSelect] = useState(false)
  const [idSubmit,setIdSubmit]=useState()
  const [validateType,setValidateType]=useState(false)
  

    const { register, handleSubmit,reset, watch, formState: { errors } } = useForm();
    const onSubmit = new_env_data => {
        new_env_data.environmentTypeId=idSubmit
        const uuid = localStorage.getItem("uuid");
        new_env_data.orgUUID = uuid;
        if(new_env_data.environmentTypeId==undefined){
            // setValidateType(true)
            new_env_data.environmentTypeId=1
        }
        
        if(new_env_data.environmentTypeId!==undefined){
        Api.Post_env(new_env_data)
            .then(res => {
                if (res.data.status = "Success") {
                    setSelected(env[0].name);
                    reset();
                    setIdSubmit()
                    closeenv(false);
                    closePopUp();
                }
            })
            .catch(error => {
                console.log(error)
            })
            
        }
    }
    useEffect(() => {
        Api.Env_data()
            .then(res => {
               return(<> {setenv(res.data.data)}
                {setSelected(res.data.data[0].name)}
               </>)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    const closePopUp = () => {
        let inpopUp=document.querySelector('.inpopup');
      inpopUp.parentElement.classList.add(`${styleDis.no_display}`);
      table.classList.remove(`${styleDis.no_display}`);
        closeenv(false)
    }
// dropdown
    const searchHandle = (e) => {
        let count=0;
        let options = document.querySelectorAll('#opt')
        for (let i = 0; i < options.length; i++) {
            let name = options[i].innerHTML.toLowerCase()
            let searchValue = e.target.value.toLowerCase()
            if (name.indexOf(searchValue) > -1) {
                options[i].style.display = 'block'
            } else {
                options[i].style.display = 'none';
                count++

            }
        }
        let div=document.querySelector('.noReslt');
        if(options.length==count){ 
          div.style.display='block'
        }else{
          div.style.display='none'
        }
    }

    let dropdownprod = useRef()
    useEffect(() => {
        const handleDropdown = (e) => {
           
            if(!dropdownprod.current.contains(e.target)){
                 setProductSelect(false)
            }
        }
        document.addEventListener('mouseup', handleDropdown)
        return () => {
            document.removeEventListener('mouseup', handleDropdown)
        }
    }, [])
    const handleSelected=(prod)=>{
        setSelected(prod.name)
        setIdSubmit(prod.id)
        setProductSelect(false)
        setValidateType(false)
    }
    return (
        <div className={`${styles.container} ${styles.accesstoken_model} inpopup`}>
            <div className={styles.body}>
                <div className={styles.model_nav}>
                    <a className={styles.model_close} role="button" onClick={() => closePopUp()}><img src="/images/close.svg" alt='icon' /> </a>
                </div>
                <div className={styles.main}>
                    <h3 className={styles.model_title}>Add New Environment</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className={styles.model_label}>Environment Name</label>
                        <input
                            maxLength={50}
                            type="text"
                            className={`${styles.model_input} form_control`}
                            name="name"
                            placeholder="Enter a name"
                            {...register("name", {required:'This field is required',pattern:{
                                value:/^[^\s]+(?:$|.*[^\s]+$)/,
                                message:'Entered value cannot start/end or have only white space'
                            }})}
                        />
                        {/* {errors.name && <p className={`${styles.validations} validations`}>This field is required</p>} */}
                        {<p className={'validations'}>{errors.name?.message}</p>}
                        <label className={styles.model_label}>Type</label>

                        {/* <select
                            name="environmentTypeId"
                            className={styles.model_selection}
                            {...register("environmentTypeId", { required: true, valueAsNumber: true, })}
                        >
                            {errors.environmentTypeId && <p className={`${styles.validations} validations`}>This field is required</p>}
                            {env.map((item, key) =>
                                <option key={key} value={parseInt(item.id)}>{item.name}</option>
                            )}
                        </select> */}

                        <div ref={dropdownprod} className={styles.select}>
                            <div className={styles.model_selection} onClick={() => setProductSelect(!productSelect)}>
                                {selected ? selected : ''}

                            </div>
                            <img className={styles.dropdownOne} onClick={() => setProductSelect(!productSelect)} src="/images/iconawesome-chevrondown.svg" alt='icon'></img>
                            {
                                productSelect && <div className={styles.dropdown}>
                                    <input maxLength={40} className={styles.searchSelect} placeholder="Search by name" onChange={(e) => searchHandle(e)} />
                                    <div className={styles.allOptions}>
                                        {env.map(product =>
                                            <div key={product.id} value={product.id} id="opt" onClick={() => handleSelected(product)}>{product.name}</div>)}
                                            <div style={{display:'none'}} className='noReslt'>No result found</div>
                                    </div>
                                </div>
                            }
                        </div>
                        {/* {validateType && <p className={'validations'}>Please select the type</p>} */}
                        <div className={styles.model_btn_token}>
                            <button type="button" className={`${styles.model_canel_btn} btn btn-primary`} onClick={() => closePopUp()}>Cancel</button>
                            <button type="submit" className={`${styles.save_btn} btn btn-primary`}>Add Environment</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}