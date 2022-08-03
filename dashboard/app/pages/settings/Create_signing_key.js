import styles from '../../styles/model.module.css'
import styleDis from '../../styles/signinkeys.module.css';
import { useForm } from 'react-hook-form';
import Api from '../../components/api/api';
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import CreateSignKey from '../../components/dialog/CreateSignKey'
import EvnDropDown from '../../components/utils/EnvDropDown'

export default function Create_signing_key({ closesigninkeys, table }) {
    const [prod, setProd] = useState([])
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [uuid,setuuid] = useState('');
    const [productSelect, setProductSelect] = useState(false)
    const [selected,setSelected]=useState()
    const [idSubmit,setIdSubmit]=useState()
    // const [roleError,setRoleError]=useState(false)
    // const [prodError,setProdError]=useState(false)
    const [defaultEnv, setDefaultEnv] = useState()
    const [data, setData] = useState([])

    useEffect(() => {
          Api.Get_env_data().then(res => <>
            {setData(res.data.data)}
            {setDefaultEnv(res.data.data[0].name)}
         </>)
        Api.Get_product_data()
            .then(res =>{<>
                {setSelected(res.data.data[0].name)}
                {setProd(res.data.data)}
                </> })
                
    }, [])
    const [openCreate, setOpenCreate] = useState(false)
    const [signRes, setSignRes] = useState([])

    const onSubmit = signin_key => {
       
        if(uuid==''){
            uuid=data[0].uuid
            // setRoleError(true)
        }
        signin_key.environmentUUID = uuid
        if(idSubmit===undefined){
            // setProdError(true)
            idSubmit=prod[0].id
        }
        signin_key.productTypeId=idSubmit
        if(signin_key.productTypeId!=undefined && signin_key.environmentUUID!=undefined){
            Api.Create_signin_keys_data(signin_key).then(res => setSignRes(res.data.data))
            setOpenCreate(true)
        }
        
    }
    const closePopUp = () => {
        let inpopUp=document.querySelector('.inpopup');
      inpopUp.parentElement.classList.add(`${styleDis.no_display}`);
      table.classList.remove(`${styleDis.no_display}`);
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
        // setProdError(false)
    }
    return (
        <div className={`${styles.container} ${styles.newkey} inpopup`} >
            <div className={styles.body}>
                <div className={styles.model_nav}>
                    <a onClick={() => closePopUp()} className={styles.model_close} role="button"><Image src="/images/asset_status/iconClose.svg" alt='icon' width='20' height='20' /> </a>

                </div>
                <div className={styles.main}>
                    <h3 className={styles.model_title}>New Signing Key</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                         <EvnDropDown data={data} defaultEnv={defaultEnv} setuuid={setuuid}/>
                         {/* {roleError && <p className={`validations`}>Please select the environment</p>} */}
                        <div>
                            <label className={styles.model_label}>Product</label>
                            <div ref={dropdownprod} className={styles.select}>
                                <div className={styles.model_selection} onClick={() => setProductSelect(!productSelect)}>
                                    {selected ? selected : ''}      
                                </div>
                                <img className={styles.dropdownOne} onClick={() => setProductSelect(!productSelect)} src="/images/iconawesome-chevrondown.svg" alt='icon'></img>
                                {
                                    productSelect && <div className={styles.dropdown}>
                                        <input className={styles.searchSelect} placeholder="Search by name" onChange={(e) => searchHandle(e)} />
                                        <div className={styles.allOptions}>
                                            {prod.map(product =>
                                                <div key={product.id} value={product.id} id="opt" onClick={()=>handleSelected(product)}>{product.name}</div>)}
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                        {/* {prodError && <p className={`validations`}>Please select the product</p>} */}
                        <div className={styles.model_btn_token}>
                            <button type="button" className={`${styles.model_canel_btn} btn btn-primary`} onClick={() => closePopUp()}>Cancel</button>
                            <button type="submit" className={`${styles.save_btn} btn btn-primary`} >Create Signing Key</button>
                        </div>
                    </form>
                    {openCreate && <CreateSignKey setOpenCreate={setOpenCreate} signRes={signRes} closesigninkeys={closesigninkeys} close={closePopUp}/>}
                </div>
            </div>
        </div>
    )
}