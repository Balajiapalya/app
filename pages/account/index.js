import styles from "../../styles/accounts.module.css";
import Layout from "../../components/common/layout";
import { useEffect, useState } from "react";
import Create_new_organization from "./create_new_organization";
import Api from "../../components/api/api";
import { useForm } from "react-hook-form";
import ManageAccount from "../../components/ManageAccount";

export default function Accounts() {
  const [openneworg, set_openneworg] = useState(false);
  const [neworg, setnewrog] = useState([]);
  const [highlightedorg, sethighlightedorg] = useState(0);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
//   const [color, setcolor] = useState(false);
//   const [img, setimg] = useState(false);

  const onSubmit = (update_user_data) => {
    Api.User_update(update_user_data).then((res) => {
      if ((res.data.status = "Success")) {
        
        localStorage.setItem("ownername", res.data.data.firstName);
        localStorage.setItem("ownerLastname", res.data.data.lastName);
      }
    });
  };

  useEffect(() => {
    Api.Get_User_update().then((res) => {
        console.log(res.data);
      if(res && res.data && res.data.data && res.data.data.organizations){
          
        var horg = 0;
        // console.log( res.data.data.organizations.length);
       
        for(let i = 0;i < res.data.data.organizations.length; i++){
            // console.log(res.data.data.organizations);
        
            console.log(res.data.data.organizations[i].uuid);
            // console.log(localStorage.getItem("uuid"));
            if(res.data.data.organizations[i].uuid === localStorage.getItem("uuid")){
                horg = i;
            }
        }
        console.log(horg);
        sethighlightedorg(horg);

    }
    //   localStorage.getItem("uuid")

      setnewrog(res.data.data.organizations);

    });
  }, []);
  const selectOrganization = (e,key) => {

    // console.log(key);
    let uuid;
    if (process.browser) {
      uuid = localStorage.setItem("uuid", e.target.value);
    }

    sethighlightedorg(key);
    // setimg(true);
  };
  const handlelogout = () => {
    window.localStorage.clear();
    document.cookie = "Jwt-token=;expires=" + new Date().toUTCString();
    window.location.pathname = "/signin";
  };
  let email;
  let firstname;
  let lastname;
  if (process.browser) {
    email = localStorage.getItem("ownerEmail");
    firstname = localStorage.getItem("ownername");
    lastname = localStorage.getItem("ownerLastname");
  }
  const ownerEmail = email;
  const ownerFirstname = firstname;
  const ownerLastname = lastname;
  return (
    <div className={styles.container}>
      <div className={styles.settings}>
        <div className={styles.padding}>
          <div className={styles.header}>
            <h2>Accounts</h2>
            <h3>Yupptv</h3>
          </div>

          <div className={styles.border_bottom}>
            <div className={styles.data}>
              <p>
                An environment allows you to group your data. We have four types
                of environment Development,QA,Staging, and production.You can
                change the names or create additional envirnoments as needed.
              </p>
            </div>
            <div className={styles.logout}>
              <img
                className={styles.logout_img}
                src="/Images/Icon feather-log-out(blue).png"
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
          <div className={styles.Accounts_detials}>
            <div className={styles.detials}>
              <div className={styles.personal_detials}>
                <h2>Personal Detials</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label className={styles.model_label}>First Name</label>
                  <input
                    defaultValue={ownerFirstname}
                    type="text"
                    className={`${styles.model_input} form_control`}
                    name="firstname"
                    placeholder="sunil"
                    {...register("firstName", { required: true })}
                  />
                  {errors.firstName && (
                    <p className={"validations"}>This field is required</p>
                  )}

                  <label className={styles.model_label}>Last Name</label>
                  <input
                    defaultValue={ownerLastname}
                    type="text"
                    className={`${styles.model_input} form_control`}
                    name="lastName"
                    placeholder="Gavaskar"
                    {...register("lastName", { required: true })}
                  />
                  {errors.lasttName && (
                    <p className={"validations"}>This field is required</p>
                  )}

                  <label className={styles.model_label}>Email</label>
                  <input
                    type="text"
                    className={`${styles.model_input} form_control ${styles.bg_color}`}
                    placeholder="sunil@gmail.com"
                    defaultValue={ownerEmail}
                    readOnly
                  />

                  <div className={styles.model_btn}>
                    <button
                      type="submit"
                      className={`${styles.model_save_btn} btn btn-primary`}
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
              <div className={styles.organization}>
                <h2>Organization</h2>
                <table>
                  <tbody>
                    {neworg.map((items,key) => {
                      return (
                        <tr key={items.id}>
                          <td className={styles.title}>
                            <button
                              style={
                                key==highlightedorg
                                  ? { backgroundColor: "#f5f7fd" }
                                  : { backgroundColor: null }
                              }
                              className={styles.org_btn}
                              onClick={(e) => selectOrganization(e,key)}
                              value={items.uuid}
                            >
                              {items.name}{" "}
                              {key==highlightedorg && (
                                <img src="/Images/Icon awesome-check-circle.png"></img>
                              )}
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div className={styles.model_btn}>
                  <button
                    onClick={() => set_openneworg(true)}
                    type="submit"
                    className={`${styles.model_save_btn} btn btn-primary`}
                  >
                    Create Organization
                  </button>
                </div>
              </div>
            </div>
            {openneworg && (
              <Create_new_organization closeneworg={set_openneworg} />
            )}
            <ManageAccount />
          </div>
        </div>
      </div>
    </div>
  );
}
Accounts.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};