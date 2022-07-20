import styles from '../../styles/model.module.css'
import { useForm } from 'react-hook-form';
import Api from '../../components/api/api';
import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router'

export default function Newmember_invite({ closeModel }) {
  const router = useRouter();
  const [data, setdata] = useState([]);
  const [selected, setSelected] = useState();
  const [productSelect, setProductSelect] = useState(false)
  const [idSubmit, setIdSubmit] = useState()
  const [roleError,setRoleError]=useState(false)
  const [responseError,setResponseError]=useState('')


  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = admin_invite_code => {
    admin_invite_code.roleId=idSubmit;
    if(admin_invite_code.roleId==undefined){
      setRoleError(true)
    }
    if(admin_invite_code.roleId!==undefined){
    Api.Newmember_invite_data(admin_invite_code)
      .then(res => {
        closeModel(false)

      })
      .catch(error => {
        setResponseError(error.response.data.message)
        setTimeout(() => {
          setResponseError('')
        }, 1000*3);
       
      })
    }
  }
  useEffect(() => {
    Api.Get_roles_data()
      .then(res => {
        setdata(res.data.data)
      })
  }, [])

  // dropdown
  const searchHandle = (e) => {
    const count=0
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
    console.log(options.length,count)
    let div=document.querySelector('.noReslt');
    if(options.length==count){
      
      div.style.display='block'
    }else{
      div.style.display='none'
    }
    
}

let dropdownprod = useRef()
useEffect(() => {
    const handleDropdown = (e) => {
       
        if(!dropdownprod.current.contains(e.target)){
             setProductSelect(false)
        }
    }
    document.addEventListener('mouseup', handleDropdown)
    return () => {
        document.removeEventListener('mouseup', handleDropdown)
    }
}, [])
const handleSelected=(prod)=>{
    setSelected(prod.name)
    setIdSubmit(prod.id)
    setProductSelect(false)
}

  

  return (
    <div className={`${styles.model} ${styles.Newmember}`}>
      <div className={styles.model_container}>
        <div className={styles.model_main}>
          <div className={styles.model_nav}>
            <h3 className={styles.model_title}>Invite New Member</h3>
            <a className={styles.model_close} role="button" onClick={() => closeModel(false)} ><img src="/images/close.svg" alt='icon' /> </a>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} >
            <div className={styles.model_form}>
              <label className={styles.model_label}>Email Address</label>
              <input
                type="email"
                className={`${styles.model_input} form_control`}
                name="email"
                {...register("email", { required: true })}
              />
              {errors.email && <p className={`validations`}>This field is required</p>}

              <div>
                <label className={styles.model_label}>Role</label>

                {/* <select
                  className={styles.model_selection} name="roleId"
                  {...register("roleId", {
                    required: true, valueAsNumber: true,
                  })}>
                  {data.map((item, key) =>
                    <>
                      <option key={key} value={parseInt(item.id)}>{item.name}</option>
                    </>)}
                </select> */}

                <div ref={dropdownprod} className={styles.select}>
                  <div className={styles.model_selection} onClick={() => `${setProductSelect(!productSelect)} ${setRoleError(false)}`}>
                    {selected ? selected : 'Owner'}
                  </div>
                  <img className={styles.dropdownOneInvite} onClick={() => `${setProductSelect(!productSelect)} ${setRoleError(false)}`} src="/images/iconawesome-chevrondown.svg" alt='icon'></img>
                  {
                    productSelect && <div className={styles.inviteOptions}>
                      <input className={styles.searchSelectInvite} placeholder="Search by name" onChange={(e) => searchHandle(e)} />
                      <div className={styles.allOptionsInvite}>
                        {data.map(product =>
                          <div key={product.id} value={product.id} id="opt" onClick={() => handleSelected(product)}>{product.name}</div>)}
                          <div style={{display:'none'}} className='noReslt'>No result found</div>
                      </div>
                    </div>
                  }
                  {roleError && <p className={`validations`}>Please select the role</p>}
                  {responseError && <p className={`validations`}>{`${responseError}`}</p>}
                </div>
                
              </div>     
            </div>
            <div className={styles.model_btn}>
              <button type="submit" className={`${styles.model_save_btn} btn btn-primary`} >Send Invitation</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
