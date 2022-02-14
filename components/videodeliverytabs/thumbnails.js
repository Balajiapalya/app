import { Fragment } from 'react'
import styles from '../../styles/videodelivery_tabs.module.css'
import { useState } from 'react'
import Link from 'next/link';

export default function Thumbnails() {

    return (
        <Fragment>

            <div className={styles.thumbnails}>
                <h2>Create Thumbnail using tool</h2>
<div className={styles.create_image}>
<label className={styles.model_label}>Time</label>

                    <input type="text" className={styles.model_input} name="Time" placeholder="00:22:33" />
                    <div className={styles.imagewidth}>
                    <label className={styles.model_label}>Image Width</label>
                    <input type="text" className={styles.model_input} name="imagewidth" placeholder="Enter width in px Default is 320px" />
                    </div>
                    <div className={styles.imageheight}>
                    <label className={styles.model_label}>Image height</label>
                    <input type="text" className={styles.model_input} name="imageheight" placeholder="Enter height in px" />
                    </div>
                    <div className={styles.create_btn}>
                    <button className={styles.btn}>create image</button>
                    </div>
                    <h4>Download image from below URL</h4>
                    <p>https://image.videograph.com/FV6sRk7mbi3E3GM1BfNMV2DT7</p>
                    
</div>



            
            <div className={styles.Videodelivery_addnewassets}>
                <h2>Create Thumbnail using image Api</h2>
               
                
                <div className={styles.post}>
                   
                    <div className={styles.language_select}>
                        <button className={styles.model_btn}>Python</button>
                        <button className={styles.model_btn}>Node</button>
                        <button className={styles.model_btn}>Php</button>
                        <button className={styles.model_btn}>Go</button>
                    </div>
                    <div className={styles.code}>


                    </div>
                    <button className={styles.btn}>Run Request</button>
                    <h4>Download image from below URL</h4>
                    <p>https://image.videograph.com/FV6sRk7mbi3E3GM1BfNMV2DT7</p>
                </div>
            </div>
        </div>


        </Fragment >
    )
}