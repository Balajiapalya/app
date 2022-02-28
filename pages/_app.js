import '../styles/globals.css'
import Login from './login'

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)
  
    // return getLayout(<Component {...pageProps} />)
  

  return getLayout(<Component {...pageProps} />)
  // return <Login/>
}

export default MyApp
