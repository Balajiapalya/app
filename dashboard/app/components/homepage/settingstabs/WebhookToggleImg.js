import { useState, useEffect } from "react";
import Api from "../../api/api";

const WebhookToggleImg = ({item,set_chackedActive,checkedActive}) => {
    // const [activeState,setActiveState]=useState(item.isEnable)
    const handleActive=()=>{
        // setActiveState(!activeState)
        let id=item.uuid
        let obj=new Object();
        obj.isEnabled=!item.isEnable
        if(id!==undefined){
            Api.WebhookUpdate(obj,id).then(res=>
                set_chackedActive(!checkedActive))
        }
    }
    
    return (
        <>
            {item.isEnable ? <a onClick={() => handleActive()}><img src="/images/checkbox_checked.svg"></img></a>:
            <a onClick={() => handleActive()}><img src="/images/checkbox_unchecked.svg"></img></a>}
        </>
    )
}
export default WebhookToggleImg