import styles from '../styles/stream_statistics.module.css'
import Navbar from '../components/common/navbar'
import Link from 'next/link'
import { useState } from 'react'

export default function Subtitleconvertor() {

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
                    <div className={styles.upload_file}>
                        <h2>1.upload your subtle file</h2>
                        <div className={styles.upload_btn_wrapper}>
                            <button className={styles.btn}>Upload File</button>
                            <input type="file" name="myfile" />
                        </div>
                    </div>
                    <div className={styles.select_output}>

                        <h2>2.select the format output</h2>

                        <select name="format" placeholder="Select format" className={styles.model_selection}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <div className={styles.model_btn}>
                          <Link href="subtitleconvertfile"><a><button type="button" className={`${styles.model_canel_btn} btn btn-primary`}>Convert subtitles</button></a></Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}