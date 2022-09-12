import Head from 'next/head'
import Layout from '../core-components/Layout'
import Tabs from '../components/Tabs'

export default function PageTabs() {
  return (
    <>
      <Head>
        <title>blank</title>
      </Head>

      <Layout>
        <h1>Tabs</h1>

        <p>This page contains the inaccessible version of the component.</p>

        <h2>Inaccessible version</h2>
        <Tabs />
      </Layout>
    </>
  )
}
