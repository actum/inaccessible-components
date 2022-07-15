import Header from '../Header';
import Head from 'next/head';
import {useRouter} from 'next/router';

export default function Layout({ children }) {
  const router = useRouter();
  const {asPath} = router

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="ACTUM Collection of inaccessible components used for education purposes" />
      </Head>
      <main>
        <div className="container">
          { asPath !== '/' && <Header /> }
          {children}
        </div>
      </main>
    </>
  )
}
