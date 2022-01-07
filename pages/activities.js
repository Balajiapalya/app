import styles from '../styles/model.module.css'
import Link from 'next/link'
import Activities_tabs from '../components/homepage/activities_tabs'

export default function Activities() {
    return (
        <div className= {styles.activities}>
            <div className={styles.main}>
                <div className={styles.nav}>
                    <h3 className={styles.title}>Activities</h3>
                    <Link href="/"><a className={styles.model_close} role="button"><img src="close.png" /></a></Link>
                
                  
                </div>

                <Activities_tabs />

            </div>

            
        </div>


    )

}