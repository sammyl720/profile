import '../styles/globals.css'
import Head from 'next/head'
import Layout from '../components/Layout'
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" referrerpolicy="no-referrer" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
