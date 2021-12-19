import { GlobalProvider } from './../contexts/globalContext';
import GlobalLayout from './../layout/globalLayout';


function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
        <GlobalLayout>
          <Component {...pageProps} />
        </GlobalLayout>
      </GlobalProvider>
  )
}

export default MyApp
