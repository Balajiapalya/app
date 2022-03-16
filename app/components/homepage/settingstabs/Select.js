import React,{useState} from 'react'
import Api from '../../api/api'

const Select = ({item,data}) => {
    const [opt,setOpt]=useState('state')
    const [selected,setSelected]=useState([{}])
   
    const handleChange=(e)=>{
        
        setOpt(e.target.value)
     
      setSelected([{email:item.email,roleId:parseInt(e.target.value)}])

        Api.Selected_option(selected).then(res=>console.log(res))
    }
    return (
        <>
            <select value={opt==='state'?item.roleId:opt} onChange={(e) => handleChange(e)}>
               {data.map(i=><>
                <option value={i.id}>{i.name}</option>
               </>)}
            </select>
        </>
    )
}
export default Select