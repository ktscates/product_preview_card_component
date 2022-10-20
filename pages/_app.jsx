import Head from "next/head";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <main>
       <Head>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon1.ico" />
          <title>Product Preview Card Component</title>
        </Head>
        <Component {...pageProps} />

    </main>
  )
}

export default MyApp
