import styles from "../../styles/accounts.module.css";
import Layout from "../../components/common/layout";
import { useEffect, useState } from "react";
import Create_new_organization from "./create_new_organization";
import Api from "../../components/api/api";
import { useForm } from "react-hook-form";
import ManageAccount from "../../components/ManageAccount";
import Navbar from "../../components/common/navbar";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ConfirmLogOut from '../../components/common/ConfirmLogOut'

export default function Accounts() {
  const [openneworg, set_openneworg] = useState(false);
  const [neworg, setnewrog] = useState([]);
  const [highlightedorg, sethighlightedorg] = useState(0);
  const [orgname, setorgname] = useState("")
  const [toastMsg,setToastMsg]=useState(false)
  const [logoutPopup,setLogoutPopup]=useState(false)
  // const [saved,setSaved]=useState(false)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (update_user_data) => {
    Api.User_update(update_user_data).then((res) => {
      if ((res.data.status = "Success")) {
        localStorage.setItem("ownername", res.data.data.firstName);
        localStorage.setItem("ownerLastname", res.data.data.lastName);
        // setSaved(true)
        // setTimeout(()=>{
        //   setSaved(false)
        // },[1000*3])
        toast.info('Changes saved', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }).catch(error => {
      if(error.response.data.message="Token expired"){
          window.localStorage.clear();
          window.location.href = '/signin'
      }
  });
  };

  useEffect(() => {
    Api.Get_User_update().then((res) => {
      var horg = 0;
      if (res && res.data && res.data.data && res.data.data.organizations) {
        let Index = res.data.data.organizations.findIndex(org => org.uuid === localStorage.getItem("uuid"));
        horg = Index;
      }
      sethighlightedorg(horg);
      setnewrog(res.data.data.organizations);
    }).catch(error => {
      if(error.response.data.message="Token expired"){
          window.localStorage.clear();
          window.location.href = '/signin'
      }
  })
    const toastFun=()=>{
      toast.info('Organization created', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setToastMsg(false)
  }
  {toastMsg && toastFun()}

  }, [openneworg]);
  const selectOrganization = (e, key) => {

    if (process.browser) {
      localStorage.setItem("uuid", e.target.value);
      localStorage.setItem("orgName", e.target.innerText)
      setorgname(e.target.innerText)
      // console.log(orgname)
    }
    sethighlightedorg(key);
  };
  const handlelogout = () => {
    // window.localStorage.clear();
    // document.cookie = "Jwt-token=;expires=" + new Date().toUTCString();
    // window.location.pathname = "/signin";
    setLogoutPopup(true)
  };

  let email;
  let firstname;
  let lastname;
  let Orgname;
  if (process.browser) {
    // email = localStorage.getItem("ownerEmail");
    email=localStorage.getItem("email");
    firstname = localStorage.getItem("ownername");
    lastname = localStorage.getItem("ownerLastname");
    Orgname = localStorage.getItem("orgName");
  }
  const ownerEmail = email;
  const ownerFirstname = firstname;
  const ownerLastname = lastname;
  const Org_name = Orgname;
console.log(ownerEmail,'email')
  const handleNext = () => {
    // document.body.style.overflow = 'hidden'
    set_openneworg(true)
    let table = document.querySelector('.table');
    let popup = document.querySelector('.popup');
    let account = document.querySelector('.accounts')
    table.classList.add(`${styles.no_display}`)
    table.classList.remove(`${styles.display}`)
    account.classList.add(`${styles.no_display}`)
    account.classList.remove(`${styles.display}`)
    popup.classList.remove(`${styles.no_display}`)


  }
  return (

    <div className="wrapper_body">
      <div className="container">
        {/* <div className={styles.container}> */}
        <div className={styles.settings}>
          <div className={styles.padding}>
            <div className={styles.header}>
              <h2>Accounts</h2>
              <div className={styles.logout}>
                <img
                  className={styles.logout_img}
                  src="/images/iconfeather-log-out(blue).svg"
                  alt="logout"
                ></img>
                <button
                  className={styles.logout_btn}
                  onClick={() => handlelogout()}
                >
                  Log out{" "}
                </button>
              </div>
            </div>

            <div className={styles.border_bottom}>
            </div>
            <div className={styles.Accounts_detials}>
              <div className={styles.detials}>
                <div className={styles.personal_detials}>
                  <h2>Personal Detials</h2>
                  <form className={styles.personal_detials_form} onSubmit={handleSubmit(onSubmit)}>
                    <label className={styles.model_label}>First Name</label>
                    <input
                      maxLength={40}
                      defaultValue={ownerFirstname}
                      type="text"
                      className={`${styles.model_input} form_control`}
                      name="firstname"
                      placeholder="sunil"
                      {...register("firstName", {required:'This field is required',pattern:{
                        value:/^[^\s]+(?:$|.*[^\s]+$)/,
                        message:'Entered value cannot start/end or have only white space'
                    }})}
                    />
                    {<p className={'validations'}>{errors.firstName?.message}</p>}

                    <label className={styles.model_label}>Last Name</label>
                    <input
                      maxLength={40}
                      defaultValue={ownerLastname}
                      type="text"
                      className={`${styles.model_input} form_control`}
                      name="lastName"
                      placeholder="Gavaskar"
                      {...register("lastName",{required:'This field is required',pattern:{
                        value:/^[^\s]+(?:$|.*[^\s]+$)/,
                        message:'Entered value cannot start/end or have only white space'
                    }})}
                    />
                     {<p className={'validations'}>{errors.lastName?.message}</p>}

                    <label className={styles.model_label}>Email</label>
                    <input
                      type="text"
                      className={`${styles.model_input} form_control ${styles.bg_color}`}
                      // placeholder="sunil@gmail.com"
                      defaultValue={ownerEmail}
                      readOnly
                    />
                    {/* {saved && <p className={"validations"}>Changes saved</p>} */}
                    <div className={styles.model_btn}>
                      <button
                        type="submit"
                        className={`${styles.model_save_btn} btn btn-primary`}
                      >
                        Save changes
                      </button>
                    </div>
                  </form>
                </div>
                <div className={styles.organization}>
                  <h2>Organization</h2>
                  <div className={`${styles.organization_details} table`}>
                    <table>
                      <tbody>
                        {neworg.map((items, key) => {
                          return (
                            <tr key={items.id}>
                              <td className={styles.title}>
                                <Link href="/">
                                  <a>
                                    <button
                                      style={
                                        key == highlightedorg
                                          ? { backgroundColor: "#f5f7fd", color: "#212b36", fontFamily: "Inter-SemiBold" }
                                          : { backgroundColor: null }
                                      }
                                      className={styles.org_btn}
                                      onClick={(e) => selectOrganization(e, key)}
                                      value={items.uuid}
                                    >
                                      {items.name}{" "}
                                      {key == highlightedorg && (
                                        <img src="/images/asset_status/Ready.svg"></img>
                                      )}
                                    </button>
                                  </a>
                                </Link>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                    <div className={styles.model_btn}>
                      <button
                        onClick={() => handleNext()}
                        type="submit"
                        className={`${styles.model_save_btn} btn btn-primary`}
                      >
                        Create Organization
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.no_display} popup`}>
                <Create_new_organization table={process.browser && document.querySelector('.table')} accounts={process.browser && document.querySelector('.accounts')} closeneworg={set_openneworg} setToastMsg={setToastMsg}/>
              </div>
              <div className='accounts'>
                <ManageAccount toast={toast}/>
              </div>
            </div>
          </div>
        </div>
        <div className='hidden'><Navbar Orgname={orgname} /></div>
      </div>
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
      <ToastContainer />
      {logoutPopup && <ConfirmLogOut setLogoutPopup={setLogoutPopup}/>}
    </div>
    // </div>
  );
}
Accounts.getLayout = function getLayout(page) {
  return (
    <Layout>
      {/* <div className="wrapper_body"> */}

      {page}

      {/* </div> */}
    </Layout>)
};
