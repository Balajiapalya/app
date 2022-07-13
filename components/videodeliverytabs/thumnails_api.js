import styles from '../../styles/videodelivery_tabs.module.css';
import { useForm } from "react-hook-form";
import Api from '../api/api';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
export default function Thumbnails_api() {
    const [thumbnailurl, set_thumbnailurl] = useState();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [toggleposition, settoggleposition] = useState(2);
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
    const onSubmit = thumbnail => {
        // console.log(JSON.parse(thumbnail.code))
        Api.Create_thumbnail(JSON.parse(thumbnail.code))
            .then(res => {
                if (res.data.code = 200) {
                    set_thumbnailurl(res.data.data.url)
                }
            })
    }
    const handleCopy = (event) => {
        let copiedText = event.target.parentNode.parentNode.firstChild;
        console.log(copiedText)
        copiedText.style.display = "block"
        setTimeout(function () {
            copiedText.style.display = ""
        }, 1000)
    }
    return (
        <div>
            <div className={styles.thumbnail_api}>
                <div className={styles.Videodelivery_addnewassets}>
                    <h2>Create thumbnail using image API</h2>


                    <div className={styles.post}>

                        <div className={styles.language_select}>
                            <button className={toggleposition == 1 ? `${styles.model_btn} ${styles.active}` : `${styles.model_btn}`} onClick={() => togglebtn(1)}><img className={styles.languge_img} src='/images/python.png' alt='python' />Python</button>
                            <button className={toggleposition == 2 ? `${styles.model_btn} ${styles.active}` : `${styles.model_btn}`} onClick={() => togglebtn(2)}><img className={styles.languge_img} src='/images/node-js.png' alt='node' />Node</button>
                            <button className={toggleposition == 3 ? `${styles.model_btn} ${styles.active}` : `${styles.model_btn}`} onClick={() => togglebtn(3)}><img className={styles.languge_img} src='/images/php.png' alt='php' />PHP</button>
                            <button className={toggleposition == 4 ? `${styles.model_btn} ${styles.active}` : `${styles.model_btn}`} onClick={() => togglebtn(4)}><img className={styles.languge_img} src='/images/go.png' alt='go' />Go</button>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className={styles.code}>
                                {toggleposition == 2 ?
                                    <textarea
                                        defaultValue={`${JSON.stringify(
                                            {
                                                "videoPositionInSec": 3,
                                                "width": 100,
                                                "height": 200
                                            }
                                            , undefined, 2)}`}
                                        id="JSONFormat"
                                        className={`${styles.code_input} form_control`}
                                        type='text'
                                        name='code'
                                        {...register("code", { required: true })}
                                    /> : null}
                            </div>
                            <button type="submit" className={styles.btn}>Run Request</button>
                            <span className={styles.image_form_border} />
                            <h4>Download image from below URL:</h4>
                            <div className={styles.thumbnail_copy}>
                                <span className={styles.copyMsg} >Copied</span>
                                <p className={styles.thumbnail_copy_link}>{thumbnailurl}</p>
                                <div className={styles.copy_img}>
                                    <CopyToClipboard text={thumbnailurl}>
                                        <img src='/images/iconionic-ios-copy.svg' alt='copy' onClick={(event) => handleCopy(event)} />
                                    </CopyToClipboard>

                                </div>
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    )
}