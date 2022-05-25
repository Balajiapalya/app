
import styles from '../styles/Home.module.css';
import Lets_talk from '../components/lets_talk';
import { useState } from 'react';
import Link from 'next/link'
let DASHBOARD_HOST = process.env.VG_DASHBOARD_HOST

export default function Home() {
  const [openmodel,setmodel]=useState(false);
  return (
    <div className={styles.container_body}>
      <div className={styles.container}>
        <div className={styles.content_header}>
          <div className={styles.header_logo}>
            <img className={styles.logo} src="./logo.svg" alt="logo" />
          </div>
          <div className={styles.header_btns}>
            <button>API Docs</button>
           <button className={styles.sign_in_btn}><a href={`${DASHBOARD_HOST}/signin`}>Sign in</a></button>
            <button className={styles.sign_up_btn}><a href={`${DASHBOARD_HOST}/signup`}>Sign up</a></button>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.body_content}>
            <h2>Plug & Play APIs for Live &
              On-demand video streaming.
            </h2>
            <h4>
              Manage entire video life cycle from encoding, storage and streaming using developer friendly
              APIs.
            </h4>
            <div className={styles.content_btn}>
              <button className={styles.btn_get_started_free}>Get started free</button>
              <button onClick={()=>setmodel(true)} className={styles.btn_talk_to_us}>Talk to us</button>
            </div>
          </div>
          <div className={styles.content_img}>
            <img src="./banner_image.png" alt="banner_img" />
          </div>
        </div>


      </div>
      {openmodel&&<Lets_talk closemodel={setmodel}/> }
    </div>
  )
}
