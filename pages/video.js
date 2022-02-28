import styles from '../styles/videos.module.css'
import Layout from '../components/common/layout'
import Videodelivery_tabs from '../components/homepage/videodelivery_tabs'

export default function Video() {
    return (
        <div className={styles.container}>
            <div className={styles.videosdelivery_assets}>
                <div className={styles.padding}>
                    <div className={styles.header}>
                        <div className={styles.assets}>
                            <a>Asset List</a>
                            <p> &gt; Asianet-Roku  </p>

                        </div>
                        <div className={styles.header_asianet}>
                            <img className={styles.icon_stat} src="Images/Icon ionic-ios-stats@2x.png" alt="ios-stats"></img>
                            <h2>
                                Asianet-Roku
                                <img className={styles.edit_img} src="Images/Icon material-edit.png" alt="edit" /><span> Edit</span>
                            </h2>
                        </div>
                        
                    </div>
                    <div className={styles.close}> <img src='/Images/close.png' /></div>
                    <Videodelivery_tabs />
                </div>
            </div>
        </div>
    )

}
Video.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}