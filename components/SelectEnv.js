import React from 'react'
import { useState, useRef, useEffect } from 'react'
import styles from "../styles/settings.module.css";
import Api from './api/api'

const SelectEnv = ({ id, env, valueDefault, setPopup, i, setLoad, defaultEnv }) => {
    const [defaultOpt, setDefaultOpt] = useState(defaultEnv)
    // const [newOpt, setNewOpt] = useState(id)
    const [selected, setSelected] = useState();
    const [productSelect, setProductSelect] = useState(false)
    const [idSubmit, setIdSubmit] = useState(id)
    const [errName, setErrName] = useState(false)
    const [newInput, setNewInput] = useState(valueDefault)

    // const handleSelectChange = (e) => {
    //     setNewOpt(e.target.value)
    // }
    useEffect(() => {
        setNewInput(valueDefault)
    }, [])
    const handleSave = (e) => {
        e.preventDefault()
        if (newInput.match(/^[^\s]+(?:$|.*[^\s]+$)/) === null) {
            setErrName(true)
        }
        let data = localStorage.getItem('envuuid');
        const obj = new Object()
        obj.name = newInput ? newInput : valueDefault;
        obj.environmentTypeId = parseInt(idSubmit)
        if (newInput.match(/^[^\s]+(?:$|.*[^\s]+$)/) !== null) {
            Api.Update_env(obj, data).then(res => setLoad(false))
        }
    }

    // dropdown
    const searchHandle = (e) => {
        let count = 0;
        let options = document.querySelectorAll('#opt')
        for (let i = 0; i < options.length; i++) {
            let name = options[i].innerHTML.toLowerCase()
            let searchValue = e.target.value.toLowerCase()
            if (name.indexOf(searchValue) > -1) {
                options[i].style.display = 'block'
            } else {
                options[i].style.display = 'none'
                count++
            }
        }
        let div = document.querySelector('.noReslt');
        if (options.length == count) {
            div.style.display = 'block'
        } else {
            div.style.display = 'none'
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
    const handleChange = (e) => {
        setErrName(false)
        setNewInput(e.target.value)
      }
    return (
        <>
            <div className={styles.select}>
                <input
                    maxLength={40}
                    className={styles.dev_head}
                    name="name"
                    defaultValue={valueDefault}
                    onChange={(e) => handleChange(e)}
                />
                {errName && <p className='validations'>This field is required</p>}
                <div ref={dropdownprod}>
                    <div className={styles.model_selection} onClick={() => setProductSelect(!productSelect)}>
                        <div>{selected ? selected : defaultOpt}</div>
                        <img className={styles.dropdownOneInvite} onClick={() => setProductSelect(!productSelect)} src="/images/iconawesome-chevrondown.svg" alt='icon'></img>
                    </div>

                    {
                        productSelect && <div className={styles.inviteOptions}>
                            <input maxLength={40} className={styles.searchSelectInvite} placeholder="Search by name" onChange={(e) => searchHandle(e)} />
                            <div className={styles.allOptionsInvite}>
                                {env.map(product =>
                                    <div key={product.id} className={styles.prodopt} value={product.id} id="opt" onClick={() => handleSelected(product)}>{product.name}</div>)}
                                <div style={{ display: 'none' }} className='noReslt'>No result found</div>
                            </div>
                        </div>
                    }
                </div>
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
