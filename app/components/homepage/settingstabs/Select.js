import React,{useState} from 'react'
import Api from '../../api/api'

const Select = ({item,data}) => {
    const [opt,setOpt]=useState(item.roleId)

    const handleChange=(e)=>{
        
        setOpt(e.target.value)
     
    let element=new Object()
        element.email=item.email
        element.roleId=parseInt(e.target.value)
    let arr=[]
    arr.push(element)
        // let a=JSON.stringify(element)
        Api.Selected_option(arr).then(res=>console.log(res))
    }
    return (
        <>
            <select onChange={(e) => handleChange(e)}>
               {data.map(i=><>
                <option selected={opt==i.id} value={i.id}>{i.name}</option>
               </>)}
            </select>
        </>
    )
}
export default Select