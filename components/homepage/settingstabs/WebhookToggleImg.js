import { useState, useEffect } from "react";

const WebhookToggleImg = ({item}) => {
    console.log(item)
    const [activeState,setActiveState]=useState(true)
    const [deactivateState,setDeactivateState]=useState(false)

    const handleActive=()=>{
        setActiveState(!activeState)
        setDeactivateState(!deactivateState)
    }
    return (
        <>
            {activeState && <a onClick={() => handleActive()}><img src="/images/checkbox_checked.svg"></img></a>}
            {deactivateState && <a onClick={() => handleActive()}><img src="/images/checkbox_unchecked.svg"></img></a>}
        </>
    )
}
export default WebhookToggleImg