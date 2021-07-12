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
        <meta name="description" content="Shmuel Leider is a Javascript fullstack Software Developer with over 5 years experience, based out of brooklyn. He is familiar with typescript, nodejs, mongodb, express, graphql, react... " />
        <meta name="keywords" content="javascript,typescript,nodejs,mongodb,expressjs,graphql,react,reactjs,nextjs,css,scss,html5,css3,docker,git,github,scss" />
        <title>Portfolio | Shmuel Leider</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
