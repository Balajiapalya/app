import React, { useState } from 'react'
import Api from '../../api/api'
import styles from '../../../styles/settings.module.css';

const Select = ({ item, data }) => {
    const [isActive,setIsActive]=useState(false)
    const [selected,setSelected]=useState([])
    const [opt, setOpt] = useState(item.roleId)
    
    // const handleChange = (e) => {
    //     setOpt(e.target.value)
    //     let element = new Object()
    //     element.email = item.email
    //     element.roleId = parseInt(e.target.value)
    //     let arr = []
    //     arr.push(element)
    //     Api.Selected_option(arr).then(res => console.log(res))
    // }



    const handleChange = (i) => {
        setOpt(i.name)
        let element = new Object()
        element.email = item.email
        element.roleId = parseInt(i.id)
        let arr = []
        arr.push(element)
        Api.Selected_option(arr).then(res => console.log(res))
        setIsActive(false)
    }

    return (
        // <div>
        //     <select onChange={(e) => handleChange(e)}>
        //         {data.map(i => <>
        //             <option selected={opt == i.id} value={i.id}>{i.name}</option>
        //         </>)}
        //     </select>
        // </div>

        <div className={styles.dropdown}>
        <div className={styles.dropdownBtn} onClick={()=>setIsActive(!isActive)}>Owner<img src="/images/iconawesome-chevrondown.png"/></div>
        
        {isActive && <div className={styles.dropdownContent}>
            {data.map((i,ind) => 
                <div key={ind} onClick={()=>handleChange(i)} className={styles.dropdownItem}>{i.name}{item.roleId===i.id &&<img src="/images/check-circle.png"/>}</div>
            )}
        </div>}
    </div>


    )
}
export default Select