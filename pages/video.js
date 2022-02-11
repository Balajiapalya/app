import styles from '../styles/videos.module.css'
import Link from 'next/link'
import Navbar from '../components/homepage/navbar'
import Videodelivery_tabs from '../components/homepage/videodelivery_tabs'

export default function Video() {
    return (
        <div className={styles.container}>
            <div>
                <Navbar/>
            </div>
            <div className={styles.videosdelivery_assets}>
                <div className={styles.padding}>
                    <div className={styles.header}>
                    <div className={styles.assets}>
                    <a>Asset List</a>
                    <p> &gt; Asianet-Roku </p>
                </div>
                <div className={styles.header}>
                    {/* <img/> */}
                    <img src="Icon ionic-ios-stats@2x.png" alt="ios-stats"></img>
                    <h2>
                        Asianet-Roku 
                    </h2>
                </div>
                    </div>
                    <Videodelivery_tabs/>
                </div>
            </div>
        </div>
    )

}