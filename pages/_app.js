import '../styles/globals.css'
// import Layout from './layout'

// function MyApp({ Component, pageProps }) {

//   // return  (
//     // <div>
//       {/* <Layout> */}
//       return  <Component {...pageProps} />
//     //   </Layout>
//     // </div>

//   // );  
// } 
function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
