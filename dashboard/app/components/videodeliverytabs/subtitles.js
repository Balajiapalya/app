import { Fragment } from 'react'
import styles from '../../styles/videodelivery_tabs.module.css'
import { useState, useEffect } from 'react'
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Api from '../api/api';

export default function Subtitles() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [toggleposition, settoggleposition] = useState(2);
    const [subtitle, setsubtitle] = useState([]);
    const togglebtn = (index) => {
        settoggleposition(index);
    }
    const printTheJSONInPrettyFormat = () => {
        var badJSON = document.getElementById('JSONFormat').value;
        var parseJSON = JSON.parse(badJSON);
        var JSONInPrettyFormat = JSON.stringify(parseJSON, undefined, 4);
        document.getElementById('JSONFormat').value =
            JSONInPrettyFormat;
    }
    useEffect(() => {
        subtitle_list();
        // delete_subtitle();
    }, [])
    const subtitle_list = () => {
        Api.Get_subtitle_list()
            .then(res => {
                if (res.data.status = "Success") {
                    setsubtitle(res.data.data);
                }
            })
            .catch(error => {
                if(error.response.data.message="Token expired"){
                    window.localStorage.clear();
                    document.cookie = 'Jwt-token=;expires=' + new Date().toUTCString()
                    window.location.href = '/signin'
                }
            })
    };
    const delete_subtitle = (e) => {
        Api.Delete_subtitle(e)
            .then(res => {
                if (res.data.status = "Success") {
                    Api.Get_subtitle_list()
                        .then(res => {
                            if (res.data.status = "Success") {
                                setsubtitle(res.data.data);
                            }
                        })
                }
            })
    };
    const onSubmit = subtitle => {
        Api.Create_subtitle(JSON.parse(subtitle.code))
            .then(res => {
                if (res.data.status="Success") {
                    Api.Get_subtitle_list()
                        .then(res => {
                            if (res.data.status = "Success") {
                                setsubtitle(res.data.data);
                            }
                        })
                }
            })
    };
    const created_date = (date) => {
        var y = new Date(date)
        return y.toLocaleString("en-AU", { day: "2-digit", month: "2-digit", year: "numeric" })
    }
    const created_time = (date) => {
        var t = new Date(date)
        return t.toLocaleString("en-IN", { hour: "2-digit", minute: "2-digit" });
    }
    return (
        <Fragment>

            <div className={styles.subtitles}>
                <div className={styles.subtitles_list}>
                    <h2>List of Subtitles</h2>
                    <div className={styles.subtitles_list_table}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Added on</th>
                                    <th>Name</th>
                                    <th>Subtitle ID</th>
                                    <th>Format</th>
                                    <th>Actions</th>

                                </tr>
                            </thead>
                            <tbody >
                                {subtitle.map((item,key) =>
                                    <tr key={key}>
                                        <td>{created_date(item.createdOn)}<br/>{created_time(item.createdOn)}</td>
                                        <td>{item.name}</td>
                                        <td className={styles.subtitle_id}>{item.uuid}</td>
                                        <td>{item.format}</td>
                                        <td className={styles.actionicons}>
                                            <img src="/images/download.svg" className={styles.download_img} alt="download" />
                                            <img onClick={() => delete_subtitle(item.uuid)} src="/images/iconmaterial-delete.svg" alt="delete" />

                                        </td>
                                    </tr>
                                )}


                            </tbody>
                        </table>
                    </div>

                </div>
                <div className={styles.subtitle_file}>
                    <div className={styles.Videodelivery_addnewassets}>
                        <h2>Upload subtitle files</h2>
                        <div className={styles.upload_file}>
                            <h2 className={styles.upload_file_heading}>Upload your file</h2>
                            <div className={styles.upload_btn_wrapper}>
                                <button className={styles.btn}>Select File</button>
                                {/* <input type="file" name="myfile" /> */}
                            </div>

                        </div>
                        <div className={styles.or}></div>
                        <div className={styles.or_text}><span>[or]</span></div>
                        <div className={styles.post}>
                            <h4>Post using Video URL:</h4>
                            {/* <p>Post https://api.videograph.com/vodeos/v1/assets</p> */}
                            {/* <span>Post body editor:</span> */}
                            <div className={styles.language_select}>
                                <button className={toggleposition == 1 ? `${styles.model_btn} ${styles.active}` : `${styles.model_btn}`} onClick={() => togglebtn(1)}><img className={styles.languge_img} src='/images/python.png' alt='python' />Python</button>
                                <button className={toggleposition == 2 ? `${styles.model_btn} ${styles.active}` : `${styles.model_btn}`} onClick={() => togglebtn(2)}><img className={styles.languge_img} src='/images/node-js.png' alt='node' />Node</button>
                                <button className={toggleposition == 3 ? `${styles.model_btn} ${styles.active}` : `${styles.model_btn}`} onClick={() => togglebtn(3)}><img className={styles.languge_img} src='/images/php.png' alt='php' />Php</button>
                                <button className={toggleposition == 4 ? `${styles.model_btn} ${styles.active}` : `${styles.model_btn}`} onClick={() => togglebtn(4)}><img className={styles.languge_img} src='/images/go.png' alt='go' />Go</button>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className={styles.code}>
                                    {toggleposition == 2 ?
                                        <textarea
                                            defaultValue={`${JSON.stringify(
                                                {
                                                    "url": "www.google.com",
                                                    "name": "English US",
                                                    "language_code": "en_US",
                                                    "support_closed_captions": false
                                                }
                                                , undefined, 2)}`}
                                            id="JSONFormat"
                                            className={`${styles.code_input} form_control`}
                                            type='text'
                                            name='code'
                                            {...register("code", { required: true })}
                                        /> : null}
                                </div>
                                <button className={styles.btn}>Run Request</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>


        </Fragment>
    )
}