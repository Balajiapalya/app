import React, { useState, useEffect, useRef } from 'react'
import Api from '../../api/api'
import styles from '../../../styles/settings.module.css';

const Select = ({ item, data ,setOptChanged,optChanged}) => {
    const [isActive, setIsActive] = useState(false)
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

    let node = useRef();

    useEffect(() => {

        let maybehandler = (e) => {

            if (!node.current.contains(e.target)) {
                setIsActive(false);
            };
        };
        document.addEventListener('mouseup', maybehandler);
        return () => {
            document.removeEventListener('mouseup', maybehandler);
        };

    }, []);




    const handleChange = (i, ind) => {
        let element = new Object()
        element.email = item.email
        element.roleId = parseInt(i.id)
        let arr = []
        arr.push(element)
        Api.Selected_option(arr).then(res => {
            setOptChanged(!optChanged)
            setOpt(i.id)
        })
        setIsActive(false)
    }
    return (
        <div ref={node} className={styles.dropdown}>
            <div className={styles.dropdownBtn} onClick={() => setIsActive(!isActive)}>
                {opt == 2 ? 'Admin' : opt == 3 ? 'Member' : ''}
                <img src="/images/iconawesome-chevrondown.png" />
            </div>
            {isActive && <div className={styles.dropdownContent}>
                {data.map((i, ind) =>
                    <div key={ind} onClick={() => handleChange(i, ind)} className={styles.dropdownItem}>{i.name}{i.id === opt && <img src="images/check.svg" />}</div>
                )}
            </div>}
        </div>


    )
}
export default Select