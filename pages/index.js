import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Settings from './settings';
import Layout from '../components/common/layout';




export default function Home() {
 
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Videograph</title>
        <meta name="description" content="powered by yupp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Settings />  
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

// Home.getInitialProps = async (ctx,res) => {
//   console.log(ctx);
//   let data =null;
//   res.redirect('/login')
//   // return { props : data };
// };
export async function getServerSideProps(context) {
  console.log(context.req);
  if(!context.req.cookies['Jwt-token']){

      context.res.statusCode = 302
      context.res.setHeader('Location', `signin`) // Replace <link> with your url link
  }
  
  return {props: {}}
}