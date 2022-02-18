import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Settings from './settings';
import Layout from './layout';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Videograph</title>
        <meta name="description" content="powered by yupp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <Settings/>
      
      
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}