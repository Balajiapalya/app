import styles from '../../styles/videos.module.css';
import Layout from '../../components/common/layout';
import Videodelivery_tabs from '../../components/homepage/videodelivery_tabs';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Api from '../../components/api/api';


export default function Video() {
    const [headtitle, setheadttitle] = useState(true);
    const [save, setsave] = useState(false);

    const editName = () => {
        setheadttitle(false)
        setsave(true)
    }
    const saveName = () => {
        setsave(false);
        setheadttitle(true);
    }
    let title;
    if (process.browser) {
        title = localStorage.getItem('asset_title')
    }
    return (
        <div className={styles.container}>
            <div className={styles.videosdelivery_assets}>
                <div className='container'>
                    <div className={styles.padding}>
                        <div className={styles.header}>
                            <div className={styles.assets}>
                                <Link href="/videos"><a>Video List</a></Link>
                                <p> &gt; {title}</p>
                            </div>
                            <div className={styles.header_asianet}>
                                <img className={styles.icon_stat} src="/images/iconionic-ios-stats@2x.png" alt="ios-stats"></img>
                                <div className={styles.header_title_container}>
                                    <div className={styles.header_title}>
                                        {headtitle ?
                                            <h2>
                                                {title}
                                                <button onClick={() => editName()}><img className={styles.edit_img} src="/images/iconmaterial-edit.png" alt="edit" /><span> Edit</span></button>

                                            </h2> : null
                                        }
                                    </div>
                                    {save ?
                                        <div className={styles.input_title}>
                                            <input />
                                            <button onClick={() => saveName()}>Save</button>
                                        </div> : null}

                                </div>
                            </div>
                        </div>
                        <div className={styles.close}> <Link href="/videos"><a><img src='/images/close.png' /></a></Link></div>
                        <Videodelivery_tabs />
                    </div>
                </div>
            </div>
        </div>
    )

}
Video.getLayout = function getLayout(page) {
    return (
        <Layout>
            <div className="wrapper_body">

                {page}

            </div>
        </Layout>
    )
}