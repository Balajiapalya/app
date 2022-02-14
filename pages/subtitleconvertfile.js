import styles from '../styles/stream_statistics.module.css'
import Navbar from '../components/common/navbar'
import Link from 'next/link'
import { useState } from 'react'

export default function Subtitle_convertfile() {

    return (
        <div className={styles.container}>
            <div>
                <Navbar />
            </div>
            <div className={styles.Subtitleconvertor}>
                <div className={styles.padding}>
                    <div className={styles.Subtitleconvertor_title}>
                        <h1>Subtitle Convertor</h1>
                        <p>Easliy Convert your subtitle files from one format to another with our tool.</p>
                    </div>
                    <div className={styles.convertfile}>
                        <h3>Your file is ready for download!</h3>
                        <p>if the download doesnt start automatically<a>click here</a></p>
                        <div className={styles.model_btn}>
                        
                        <button type="button" className={`${styles.model_save_btn} btn btn-primary`}>convert another file</button>
                    </div>
                    </div>
                       
                </div>
            </div>
        </div>
    )
}