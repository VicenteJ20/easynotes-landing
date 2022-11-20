import '../styles/globals.css'
import Head from 'next/head'
import { Navbar } from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>EasyNotes</title>
        <meta name="description" content="The best way to take notes, reminders and organize your digital life." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
