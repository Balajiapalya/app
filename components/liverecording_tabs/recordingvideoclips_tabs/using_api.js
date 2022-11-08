import { Fragment } from "react";
import styles from '../../../styles/videodelivery_tabs.module.css';
import Link from "next/link";
import { useState, useEffect } from "react";
import Api from '../../../components/api/api';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import MonacoEditor from "../../videodeliverytabs/create_videoclips.js/MonacoEditor";

function Using_api(props) {
    const router = useRouter();
    const streamId = router.query.streamId
    const [codeData, setCodeData] = useState(`${JSON.stringify(
                                
        {
            "startTime": 1665725137,
            "endTime": 1665725154
        }
    
    , undefined, 2)}`)
   
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const [toggleposition, settoggleposition] = useState(2);
    // const togglebtn = (index) => {
    //     settoggleposition(index);
    // }


    const onSubmit = video_url_data => {
        try {       
            Api.Live_create_clip(JSON.parse(codeData),streamId)
                .then(res => {
                    if (res.data.status == "Success") {
                        res&&res.data&&res.data.data&&props.props.setReloadAfterPost(!props.props.reloadAfterPost)
                        // console.log(res, 'res')
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }
        catch (e) {
            toast.error('syntax error', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

    }
    const handleChange = (e) => {
        setCodeData(e)
    }
    return (

        <div className={styles.Videodelivery_addnewassets}>
            <div className={styles.post}>

                <div className={styles.language_select}>
                    {/* <button className={toggleposition == 1 ? `${styles.model_btn} ${styles.active}` : `${styles.model_btn}`} onClick={() => togglebtn(1)}><img className={styles.languge_img} src='/images/python.png' alt='python' />Python</button> */}
                    {/* <button className={toggleposition == 2 ? `${styles.model_btn} ${styles.active}` : `${styles.model_btn}`} onClick={() => togglebtn(2)}><img className={styles.languge_img} src='/images/node-js.png' alt='node' />Node</button> */}
                    {/* <button className={toggleposition == 3 ? `${styles.model_btn} ${styles.active}` : `${styles.model_btn}`} onClick={() => togglebtn(3)}><img className={styles.languge_img} src='/images/php.png' alt='php' />Php</button>
                    <button className={toggleposition == 4 ? `${styles.model_btn} ${styles.active}` : `${styles.model_btn}`} onClick={() => togglebtn(4)}><img className={styles.languge_img} src='/images/go.png' alt='go' />Go</button> */}
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.code}>
                        <MonacoEditor codeData={codeData} setCodeData={setCodeData}/>
                    </div>
                    <button className={styles.btn} type="submit">Run Request</button>
                </form>

                <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>

        </div>
    )
}
export default Using_api;