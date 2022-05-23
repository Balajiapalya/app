import React from 'react'
import { useState } from 'react'
import styles from "../styles/settings.module.css";
import Api from './api/api'

const SelectEnv = ({ id, env, newInput, valueDefault,setPopup,i,setLoad }) => {
    const [defaultOpt, setDefaultOpt] = useState(id)
    const [newOpt, setNewOpt] = useState(id)
    const handleSelectChange = (e) => {
        setNewOpt(e.target.value)
    }
    const handleSave = (e) => {
        e.preventDefault()
        
        let data = localStorage.getItem('envuuid');
        const obj = new Object()
        obj.name = newInput ? newInput : valueDefault;
        obj.environmentTypeId = parseInt(newOpt)
        Api.Update_env(obj, data).then(res=>setLoad(false))
    }
    return (
        <>
            <select
                name="environmentTypeId"
                onChange={(e) => handleSelectChange(e)}
            >
                {env.map((item, key) => (
                    <option key={key} selected={defaultOpt === item.id} value={parseInt(item.id)}>
                        {item.name}
                    </option>
                ))}
            </select>

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
