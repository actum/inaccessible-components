import Header from '../Header';
import Head from 'next/head';
import {useRouter} from 'next/router';

export default function Layout({ children }) {
  const router = useRouter();
  const {asPath} = router

  const renderContent = (children) => (
    <div className="container">
      { asPath !== '/' && <Header /> }
      {children}
    </div>
  )

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="ACTUM Collection of inaccessible components used for education purposes" />
      </Head>
      {
        // Do not render the main landmark on the accordion page
        // To demonstrate the accordion issue "Usage of the header element is invalid in this case."
        asPath !== '/page-accordion' ? (
          <main>
            {renderContent(children)}
          </main>
        ) : renderContent(children)
      }
    </>
  )
}
