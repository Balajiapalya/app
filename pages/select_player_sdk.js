import styles from '../styles/select_player_sdk.module.css';


export default function Select_player_sdk() {
    return (
        <div className={styles.container}>
            <div className={styles.close_png}> <img src='/images/close.svg' /></div>
            <div className={styles.content}>
                <div className={styles.sdk_heading}>Select a Player SDK</div>
                <div className={styles.sdk_content}>
                    <p>
                        We publish new players SDKs as they become available.
                        If you can&apos;t find an integration that you are interested in, please  <a className={styles.contact_us}>contact us</a> .
                    </p>
                </div>
                <div>
                    <div className={styles.sdk_wrapper}>
                        <div className={styles.sdk_wrapper_cards}>
                            <img src='/images/Image 22.png' alt='HTML' /><br/>
                            <span>HTML5 Video Element</span>
                        </div>
                        <div className={styles.sdk_wrapper_cards}>
                            <img src='/images/Image 23.png' alt='HTML' /><br/>
                            <span>Video.js</span>
                        </div>
                        <div className={styles.sdk_wrapper_cards}>
                            <img src='/images/Image 24.png' alt='HTML' /><br/>
                            <span>Exo Player V2</span>
                        </div>
                        <div className={styles.sdk_wrapper_cards}>
                            <img src='/images/Image 25.png' alt='HTML' /><br/>
                            <span>JW Player 7</span>
                        </div>
                        <div className={styles.sdk_wrapper_cards}>
                            <img src='/images/Image 26.png' alt='HTML' /><br/>
                            <span>THEOPlayer 2.x </span>
                        </div><div className={styles.sdk_wrapper_cards}>
                            <img src='/images/Image 27.png' alt='HTML' /><br/>
                            <span>Akamai Media Player</span>
                        </div>
                        <div className={styles.sdk_wrapper_cards}>
                            <img src='/images/Image 28.png' alt='HTML' /><br/>
                            <span>iOS 8+ and tvOS 9+</span>
                        </div>
                        <div className={styles.sdk_wrapper_cards}>
                            <img src='/images/Image 29.png' alt='HTML' /><br/>
                            <span>FlowPlayer</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}