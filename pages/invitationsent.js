import styles from '../styles/signupinvitation.module.css';
export default function Signup_invitation() {
  return (
    <div className={styles.wrapper_signup}>
      <main className={styles.main_signup}>
        <div className={styles.logo_title}>
          <img className={styles.file} src="Images/Logo.png" alt='logo'></img>
        </div>
        <div className={styles.signup_area}>
          <h3 className={styles.signup_title}>
            Email invitation sent!
          </h3>
          <p>Check your email for invitation link from Videograph, follow the link to complete Signup.</p>
        </div>
      </main>
    </div>
  )
}