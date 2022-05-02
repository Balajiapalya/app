import styles from "../../styles/settings.module.css";
import Layout from "../../components/common/layout";
import Api from "../../components/api/api";
import { useEffect, useState } from "react";
import Add_new_environment from "./add_new_environment";
import { useForm } from "react-hook-form";
import Router from 'next/router'
import SelectEnv from '../../components/SelectEnv'

export default function Environment() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [addnewenv, set_addnewenv] = useState(false);
  const [envdata, set_envdata] = useState([]);
  const [env, setenv] = useState([]);
  const [openModel, setopeninvitemember] = useState([]);
  const [closemodal, setclosemodal] = useState([]);
  const [valueDefault, setValue] = useState('')
  const [id, setId] = useState()
  const [newInput, setNewInput] = useState(valueDefault)
  const [load, setLoad] = useState(true)

  useEffect(() => {
    setLoad(true)
    Api.Env_data()
      .then((res) => {
        setenv(res.data.data);
      })
      .catch((error) => {
        if ((error.response.data.code = 401)) {
          window.localStorage.clear();
          document.cookie = "Jwt-token=;expires=" + new Date().toUTCString();
          window.location.href = "/signin";
        }
      });
    Api.Get_env_data()
      .then((res) => {
        if ((res.data.status = "Success")) {
          set_envdata(res.data.data);
          var envcount = res.data.data.length;
          let openArr = [];
          let closeArr = [];
          for (var i = 0; i < envcount; i++) {
            openArr.push(false);
            closeArr.push(true);
          }
          setopeninvitemember(openArr);
          setclosemodal(closeArr);
        }
      })
      .catch((error) => {
        if ((error.response.data.code = 401)) {
          window.localStorage.clear();
          document.cookie = "Jwt-token=;expires=" + new Date().toUTCString();
          window.location.href = "/signin";
        }
      });
    Add_org_stats();
  }, [addnewenv, load]);
  const Add_org_stats = () => {
    Api.Org_stats()
      .then(res =>
        console.log(res.data)
      )
      .catch(error=>
        console.log(error)
      )
  }
  const setPopups = (index, items) => {

    if (items) {

      setId(items.environmentTypeId)
      setValue(items.name)

      localStorage.setItem('envuuid', items.uuid)
    }
    openModel[index] = !openModel[index];
    closemodal[index] = !closemodal[index]
    setopeninvitemember(openModel);
    setclosemodal([...closemodal]);
    console.log(openModel[index], closemodal[index])
  }
  let orgname;
  if (process.browser) {
    orgname = localStorage.getItem("orgName");
  }
  const orgName = orgname;

  const handleChange = (e) => {
    setNewInput(e.target.value)
  }
  const handlePopUp = () => {
    document.body.style.overflow = 'hidden'
    set_addnewenv(true)
  }
  return (
    <div className={styles.container}>
      <div className={styles.settings}>
        <div className={styles.padding}>
          <div className={styles.header}>
            <h2>Environments</h2>
            <h3>{orgName}</h3>
          </div>
          <div className={styles.environments_button}>
            <p>
              An environment allows you to group your data. We have four types
              of environments Development, QA, Staging, and Production. You can
              change the names or create additional environments as needed.
            </p>
            <button onClick={() => handlePopUp()} className="btn">
              {" "}
              <img src="/images/iconfeather-plus.png" /> Add Environment
            </button>
          </div>
          <div className={styles.environments_table}>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Videos</th>
                  <th>Analytics</th>
                </tr>
              </thead>

              <tbody>
                {envdata.map((items, i) => (
                  <tr className={styles.env_table} key={i}>
                    <td className={styles.table_wr}>
                      <form>
                        {closemodal[i] && (
                          <div>
                            {items.name}
                            <a>
                              <img
                                className={styles.edit_img}
                                onClick={() => { setPopups(i, items) }}
                                src="/images/iconmaterial-edit.png"
                              />
                            </a>
                            <br />
                            {env.map((item, i) => <>
                              {item.id === items.environmentTypeId && <span key={i} className={styles.side_head}>{item.name}</span>}
                            </>)}
                          </div>
                        )}
                        {openModel[i] && (
                          <div>
                            <input
                              className={styles.dev_head}
                              name="name"
                              defaultValue={valueDefault}
                              onChange={(e) => handleChange(e)}
                            />
                            {errors.name && (
                              <p className={"validations"}>
                                This field is required
                              </p>
                            )}
                            <div className={styles.dev_select}>
                              <SelectEnv setLoad={setLoad} setPopup={setPopups} i={i} valueDefault={valueDefault} newInput={newInput} env={env} id={id} />
                            </div>
                          </div>
                        )}
                      </form>
                    </td>
                    <td>
                      <div className={styles.table_box}>
                        <div className={styles.box_content}>
                          <span className={styles.box_content_history}>
                            in last 7 days
                          </span>
                          <div className={styles.box_data}>
                            <div className={styles.box_data_types}>
                              <span className={styles.types_heading}>
                                Encoded
                              </span>
                              <br />
                              <span className={styles.types_value}>
                                {/* 40 mins */}
                              </span>
                            </div>
                            <div className={styles.box_data_types}>
                              <span className={styles.types_heading}>
                                Stored
                              </span>
                              <br />
                              <span className={styles.types_value}>
                                {/* 40 mins */}
                              </span>
                            </div>
                            <div className={styles.box_data_types}>
                              <span className={styles.types_heading}>
                                Streamed
                              </span>
                              <br />
                              <span className={styles.types_value}>
                                {/* 20 mins */}
                              </span>
                            </div>
                          </div>
                          <div>
                            <span className={styles.token_key_value}>
                              API tokens: {items.accessTokensCount}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className={styles.table_box}>
                        <div className={styles.box_content}>
                          <span className={styles.box_content_history}>
                            in last 7 days
                          </span>
                          <div className={styles.box_data}>
                            <div className={styles.box_data_types}>
                              <span className={styles.types_heading}>
                                Views
                              </span>
                              <br />
                              <span className={styles.types_value}>
                                {/* 20 */}
                              </span>
                            </div>
                            <div className={styles.box_data_types}>
                              <span className={styles.types_heading}>
                                Unique views
                              </span>
                              <br />
                              <span className={styles.types_value}>
                                {/* 15 */}
                              </span>
                            </div>
                            <div className={styles.box_data_types}>
                              <span className={styles.types_heading}>
                                Playing time
                              </span>
                              <br />
                              <span className={styles.types_value}>
                                {/* 20 mins */}
                              </span>
                            </div>
                          </div>
                          <div>
                            <span className={styles.token_key_value}>
                              Env Key: {items.environmentKey}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {addnewenv && <Add_new_environment closeenv={set_addnewenv} />}
    </div>
  );
}
Environment.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
