import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Settings from '../pages/settings/settings';
import Layout from '../components/common/layout';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Videograph</title>
        <meta name="description" content="powered by yupp" />
        <link rel="icon" href="images/favicon/favicon-16x16.png" />
      </Head>
      <Settings />
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <div className="wrapper_body">
        <div className="container">
          {page}
        </div>
      </div>
    </Layout>
  )
}
export async function getServerSideProps(context) {
  if (!context.req.cookies['Jwt-token']) {
    context.res.statusCode = 302
    context.res.setHeader('Location', `signin`)
  }
  return { props: {} }
}