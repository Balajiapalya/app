import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import Login from './login'
// import Premiumfeatures_Enable from '../components/dialog/premiumfeatures_Enable'
// import Activities_tabs from '../components/homepage/activities_tabs'
// import Activities from './activities'
// import Stream_statistics from './stream_statistics'
// import Stream_statistics_enable from './stream_statistics_enable'
// import Statistics_unlockpremium from './statistics_unlockpremium'
// import Stream_preview from '../components/dialog/stream_preview'
// import Unlockpremiumfeatures from './unlockedpremiumfeatures'
// import Premiumfeatures_monitor from '../components/dialog/Premiumfeatures_monitor'
// import Stream_premiumenable from './stream_premiumenable'
// import Stream_unlockfeatures from './stream_unlockfeatures'
import Settings from './settings'
// import Videodelivery_addnewassets from './videodelivery_addnewassets'
// import Videodelivery_tabs from '../components/homepage/videodelivery_tabs'
// import Subtitles from '../components/videodeliverytabs/subtitles'

// import Signupinvitation from './Signup_invitation'
// import Create_new_webhook from './create_new_webhook'
// import Delete_signing_key from '../components/dialog/Delete_signing_key'
// import Delete__stream from '../components/dialog/Delete_stream'
// import Delete_webhook from '../components/dialog/Delete_webhook'
// import Disable_premiumfeatures from '../components/dialog/Disable_premiumfeatures'
// import Edit_organization_name from '../components/dialog/Edit_organisation_name'
// import Newmember_invite from '../components/dialog/Newmember_invite'
// import Payment_history from '../components/dialog/payment_history'
// import Premium_payment_details_edit from '../components/dialog/Premium_payment_details_edit'
// import Removeuser from '../components/dialog/removeuser'
// import Revoke_access from '../components/dialog/Revoke_access'
import Layout from './layout'







export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Videograph</title>
        <meta name="description" content="powered by yupp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Login /> */}
      <Settings/>
      {/* <Premiumfeatures/> */}
      {/* <Activities_tabs/> */}
      {/* <Activities/> */}
      {/* <Stream_statistics/> */}
      {/* <Stream_statistics_enable/> */}
      {/* <Statistics_unlockpremium/> */}
      {/* <Stream_preview/> */}
      {/* <Unlockpremiumfeatures/> */}
      {/* <Enablepremiumfeatures/> */}
      {/* <Stream_premiumenable/> */}
      {/* <Stream_unlockfeatures/> */}
      {/* <Videodelivery_addnewassets/> */}
      {/* <Videodelivery_tabs/> */}
      {/* <Subtitles/> */}
      {/* <Subtitleconvertor/> */}
      {/* <Subtitleconvertfile/> */}
      {/* <Video/> */}
      {/* <Layout/> */}
      {/* <Create_new_webhook/> */}
      {/* <Delete_signing_key/> */}
      {/* <Delete__stream/> */}
      {/* <Delete_webhook/> */}
      {/* <Disable_premiumfeatures/> */}
      {/* <Edit_organization_name/> */}
      {/* <Newmember_invite/> */}
      {/* <Payment_history/> */}
      {/* <Premium_payment_details_edit/> */}
      {/* <Premiumfeatures_Enable/> */}
      {/* <Premiumfeatures_monitor/> */}
      {/* <Removeuser/> */}
      {/* <Revoke_access/> */}
      {/* <Stream_preview/> */}
      
    </div>
  )
}
