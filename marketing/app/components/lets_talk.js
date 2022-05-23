import styles from '../styles/pop_up.module.css';


export default function Lets_talk( {closemodel}) {
    return (
        <div className={styles.container}>
            <div className={styles.pop_up}>
                <div className={styles.pop_up_container}>
                    <div className={styles.close}>
                        <img onClick={()=>closemodel(false)} src='./close.svg' />
                    </div>
                    <div className={styles.pop_up_content}>
                        <h1>
                            Manage entire video life cycle including
                            encoding, storage and streaming using
                            developer friendly APIs.
                        </h1>
                        <div className={styles.content}>
                            <img src='./iconawesome-check-circle.svg' alt='check' />
                            <p>Deploy live & on-demand video streaming in minutes instead of months.</p>
                        </div>
                        <div className={styles.content}>
                            <img src='./iconawesome-check-circle.svg' alt='check' />
                            <p>No need to maintain video technology expertise in-house.  </p>
                        </div>
                        <div className={styles.content}>
                            <img src='./iconawesome-check-circle.svg' alt='check' />
                            <p>Don’t worry about building complex video infrastructure upfront. </p>
                        </div>
                        <div className={styles.content}>
                            <img src='./iconawesome-check-circle.svg' alt='check' />
                            <p>Low cost, Pay-as-you-go with no upfront investment. </p>
                        </div>
                    </div>
                    <div className={styles.pop_up_form}>
                        <h3>
                            Let's talk! Share your contact info.
                        </h3>
                        <form>
                            <div className={styles.form_content}>
                                <label>Name*</label>
                                <input></input>
                            </div>
                            <div className={styles.form_content}>
                                <label>Email Address*</label>
                                <input></input>
                            </div>
                            <div className={styles.form_content}>
                                <label>Phone number*</label>
                                <input></input>
                            </div>
                            <div className={styles.form_content}>
                                <label>Company name*</label>
                                <input></input>
                            </div>
                            <button>Request Demo</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
