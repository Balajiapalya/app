import styles from '../../styles/model.module.css'
import { useForm } from 'react-hook-form';
import Api from '../../components/api/api';
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import CreateSignKey from '../../components/dialog/CreateSignKey'

export default function Create_signing_key({ closesigninkeys }) {
    const [data, setData] = useState([])
    const [prod, setProd] = useState([])
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [option, setOption] = useState();
    const [select, setSelect] = useState(false)
    const [productSelect, setProductSelect] = useState(false)
    const [selected,setSelected]=useState()
    const [idSubmit,setIdSubmit]=useState()

    useEffect(() => {
        Api.Get_environment_types_data()
            .then(res =>
                setData(res.data.data))
        Api.Get_product_data()
            .then(res =>
                setProd(res.data.data))
    }, [])
    const [openCreate, setOpenCreate] = useState(false)
    const [signRes, setSignRes] = useState([])

    const onSubmit = signin_key => {
        signin_key.productTypeId=idSubmit
        signin_key.environmentUUID = localStorage.getItem('envuuid')
        Api.Create_signin_keys_data(signin_key).then(res => setSignRes(res.data.data))
        document.body.style.overflow = 'hidden'
        setOpenCreate(true)
    }
    const closePopUp = () => {
        document.body.style.overflow = 'scroll'
        closesigninkeys(false)
    }

    const handleSelect = () => {
        setSelect(!select)
    }
    const handleOption = (option) => {
        console.log(option)
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
    let dropdownprod = useRef()
    useEffect(() => {
        const handleDropdown = (e) => {
            if (!selectDropdown.current.contains(e.target)) {
                setSelect(false)
               
            }
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
    }
    return (
        <div className={`${styles.container} ${styles.newkey}`} >
            <div className={styles.body}>
                <div className={styles.model_nav}>
                    <a onClick={() => closePopUp()} className={styles.model_close} role="button"><Image src="/images/asset_status/iconClose.png" alt='icon' width='20' height='20' /> </a>

                </div>
                <div className={styles.main}>
                    <h3 className={styles.model_title}>New Signing Key</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className={styles.model_label}>Environment</label>
                        {/* <div className={styles.select}>
                            <select
                                name="environmentUUID"
                                className={`${styles.development} ${styles.model_selection}`}
                                {...register("environmentUUID", { required: true })}
                            >
                                {data.map(item => <>
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                </>)}
                            </select>

                            <img className={styles.file} src="/images/iconawesome-folder.png" alt='icon' />
                            <button type="text" className={styles.up}><img src="/images/updown.png" alt='icon'></img></button>
                        </div> */}

                        <div ref={selectDropdown} className={styles.select}>
                            <div className={`${styles.development} ${styles.model_selection}`} onClick={() => handleSelect()}>
                                {option ? option : 'Development'}
                                <img className={styles.selectFile} src="images/iconawesome-folder.png" alt='icon'></img>
                            </div>
                            <img onClick={() => handleSelect()} className={styles.drpdwn} src="images/updown.png" alt='icon'></img>
                            {select &&
                                <div className={styles.dropdown}>
                                    <input className={styles.searchSelect} placeholder="Search by name" onChange={(e) => searchHandle(e)} />
                                    <div className={styles.allOptions}>
                                        {data.map(option =>
                                            <div key={option.id} value={option.id} id="opt" onClick={()=>handleOption(option)}>{option.name}</div>
                                        )}
                                    </div>
                                </div>
                            }
                        </div>
                        <div>
                            <label className={styles.model_label}>Product</label>
                            {/* <select
                                name="productTypeId"
                                className={styles.model_selection}
                                {...register("productTypeId", { required: true, valueAsNumber: true })}
                            >
                                {prod.map(product =>
                                    <option key={product.id} value={product.id}>{product.name}</option>)}
                            </select> */}

                            <div ref={dropdownprod} className={styles.select}>
                                <div className={styles.model_selection} onClick={() => setProductSelect(!productSelect)}>
                                    {selected ? selected : 'Product'}
                                    
                                </div>
                                <img className={styles.drpdwn} onClick={() => setProductSelect(!productSelect)} src="images/updown.png" alt='icon'></img>
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
                        <div className={styles.model_btn}>
                            <button type="button" className={`${styles.model_canel_btn} btn btn-primary`} onClick={() => closePopUp()}>Cancel</button>
                            <button type="submit" className={`${styles.model_save_btn} btn btn-primary`} >create Signing Key</button>
                        </div>
                    </form>
                    {openCreate && <CreateSignKey setOpenCreate={setOpenCreate} signRes={signRes} closesigninkeys={closesigninkeys} />}
                </div>
            </div>
        </div>
    )
}