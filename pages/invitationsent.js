import styles from '../styles/signupinvitation.module.css';
export default function Signup_invitation() {
  return (
    <div className={styles.wrapper_signup}>
      <main className={styles.main_signup}>
        <div className={styles.logo_title}>
          <img className={styles.file} src="/images/logo.svg" alt='logo'></img>
        </div>
        <div className={styles.signup_area}>
          <img src='/images/invitation_sent.svg' alt='invitation_sent' />
          <h3 className={styles.signup_title}>
            Invitation link it&apos;s on the way!
          </h3>
          <p>Check your inbox for invitation email from Videograph,
            and click the link to complete Signup.</p>
        </div>
      </main>
    </div>
  )
}