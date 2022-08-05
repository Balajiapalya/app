import styles from '../../styles/model.module.css';
import { useEffect, useState, useRef } from 'react'
import Api from '../../components/api/api';

const EvnDropDown=(props)=>{
    const [option, setOption] = useState()
   //  const [data, setData] = useState([])
    const [select, setSelect] = useState(false)
   //  const [defaultEnv, setDefaultEnv] = useState()
    useEffect(()=>{
      //   Api.Get_env_data().then(res => <>
      //       {setData(res.data.data)}
      //       {setDefaultEnv(res.data.data[0].name)}
      //    </>)
    },[])
    const handleSelect = () => {
        setSelect(!select)
        
     }
     const handleOption = (option) => {
        setOption(option.name)
        props.setuuid(option.uuid)
        setSelect(false)
      //   props.setRoleError(false)
     }
     const searchHandle = (e) => {
      let count=0;
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
        let div=document.querySelector('.noReslt');
    if(options.length==count){ 
      div.style.display='block'
    }else{
      div.style.display='none'
    }
     }
    let selectDropdown = useRef()
    useEffect(() => {
      let opt=document.querySelector('.selector')
      let count=-1
      const functn=(e)=>{      
      if(opt!==null && e.keyCode===40){
         if(count<opt.children.length-2){
         count=count+1;
         opt.children[count].focus()  
         }else{
            count=-1
            count=count+1;
            opt.children[count].focus()
         }
      }else if(opt!==null && e.keyCode===38){  
         if(count>0){
            count=count-1;
            opt.children[count].focus()
            }else{
               count=opt.children.length-2
               // count=count-1;
               opt.children[count].focus()
            }
      }
      if(opt!==null && e.keyCode===13){
         data.map(item=>{
            if(opt.children[count].innerHTML===item.name){
               handleOption(item)
            }

         })
      }  
    
     
   }
  
     
      document.addEventListener('keydown',functn)
      
       const handleDropdown = (e) => {
          if (!selectDropdown.current.contains(e.target)) {
             setSelect(false)
          }
       }
       document.addEventListener('mouseup', handleDropdown)
       return () => {
          document.removeEventListener('mouseup', handleDropdown)
       }
       
    }, [select])
    return(
        <>
            <label className={styles.model_label}>Environment</label>
                  <div ref={selectDropdown} className={styles.select}>
                     <div className={`${styles.development} ${styles.model_selection}`} onClick={() => handleSelect()}>
                        {option ? option : props.defaultEnv}
                        <img className={styles.selectFile} src="/images/iconawesome-folder.svg" alt='icon'></img>
                     </div>
                     <img onClick={() => handleSelect()} className={styles.drpdwn} src="/images/updown.png" alt='icon'></img>

                     {select &&
                        <div className={styles.dropdown}>
                           <input maxLength={40} className={styles.searchSelect} placeholder="Search by name" onChange={(e) => searchHandle(e)} />
                           <div className={`${styles.allOptions} selector`}>
                              {props.data.map(option =>
                                    <div tabIndex='0' key={option.uuid} onClick={() => handleOption(option)} id="opt">{option.name}</div>
                              )}
                              <div style={{display:'none'}} className='noReslt'>No result found</div>
                           </div>
                           
                        </div>
                     }
                  </div>
        </>
    )
}
export default EvnDropDown