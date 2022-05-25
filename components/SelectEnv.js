import React from 'react'
import { useState, useRef, useEffect } from 'react'
import styles from "../styles/settings.module.css";
import Api from './api/api'

const SelectEnv = ({ id, env, newInput, valueDefault, setPopup, i, setLoad }) => {
    const [defaultOpt, setDefaultOpt] = useState(id)
    const [newOpt, setNewOpt] = useState(id)
    const [selected, setSelected] = useState();
    const [productSelect, setProductSelect] = useState(false)
    const [idSubmit, setIdSubmit] = useState()

    const handleSelectChange = (e) => {
        setNewOpt(e.target.value)
    }
    const handleSave = (e) => {
        e.preventDefault()

        let data = localStorage.getItem('envuuid');
        const obj = new Object()
        obj.name = newInput ? newInput : valueDefault;
        obj.environmentTypeId = parseInt(newOpt)
        Api.Update_env(obj, data).then(res => setLoad(false))
    }

    // dropdown
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

            if (!dropdownprod.current.contains(e.target)) {
                setProductSelect(false)
            }
        }
        document.addEventListener('mouseup', handleDropdown)
        return () => {
            document.removeEventListener('mouseup', handleDropdown)
        }
    }, [])
    const handleSelected = (prod) => {
        setSelected(prod.name)
        setIdSubmit(prod.id)
        setProductSelect(false)
    }
    return (
        <>
            {/* <select
                name="environmentTypeId"
                onChange={(e) => handleSelectChange(e)}
            >
                {env.map((item, key) => (
                    <option key={key} selected={defaultOpt === item.id} value={parseInt(item.id)}>
                        {item.name}
                    </option>
                ))}
            </select> */}
        
            <div ref={dropdownprod} className={styles.select}>
                <div className={styles.model_selection} onClick={() => setProductSelect(!productSelect)}>
                    <div>{selected ? selected : 'Development'}</div>
                    <img className={styles.dropdownOneInvite} onClick={() => setProductSelect(!productSelect)} src="/images/iconawesome-chevrondown.svg" alt='icon'></img>
                </div>
                
                {
                    productSelect && <div className={styles.inviteOptions}>
                        <input className={styles.searchSelectInvite} placeholder="Search by name" onChange={(e) => searchHandle(e)} />
                        <div className={styles.allOptionsInvite}>
                            {env.map(product =>
                                <div key={product.id} className={styles.prodopt} value={product.id} id="opt" onClick={() => handleSelected(product)}>{product.name}</div>)}
                        </div>
                    </div>
                }
            </div>

            <div className={styles.dev_options}>
                <a
                    onClick={() => setPopup(i)}
                    className={styles.dev_Cancel}
                >
                    Cancel
                </a>
                <button onClick={(e) => handleSave(e)} className={styles.dev_save}>
                    Save
                </button>
            </div>
        </>
    )
}
export default SelectEnv
