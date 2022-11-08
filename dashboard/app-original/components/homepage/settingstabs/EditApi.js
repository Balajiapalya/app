import styles from '../../../styles/apiaccess.module.css';
import {  useEffect,useState } from "react";
import Api from "../../api/api";
const EditApi = ({item,setValue,value,setRender}) => {
    useEffect(()=>{
        setValue(item.name)
    },[])
    const [noSpace,setNoSpace]=useState(false)
    const submitEdit = (e) => {
        e.preventDefault()
        if(value.match(/^[^\s]+(?:$|.*[^\s]+$)/)==null){
            setNoSpace(true)
        }
        localStorage.setItem('accessId', e.target.value)
        let accessId = localStorage.getItem('accessId')
        let newObj = new Object()
        newObj.name = value
        if (value && value.match(/^[^\s]+(?:$|.*[^\s]+$)/)!==null) {
            Api.EditApiAccessToken(newObj, accessId).then(res => setRender(true))
        }
    }
    return (
        <>
            <form>
                <div className={styles.save}>
                    <input maxLength={30} defaultValue={item.name} type="text" name="name" onChange={(e) => `${setValue(e.target.value)} ${setNoSpace(false)}`} />
                    <button value={item.accessTokenId} onClick={(e) => `${submitEdit(e)}`} className={styles.save}>Save</button>

                </div>
                {noSpace && <p className={`${styles.wrap} validations`}>This field is required without space at start/end</p>}
            </form>
        </>
    )
}
export default EditApi