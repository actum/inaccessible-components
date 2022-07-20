import Head from 'next/head'
import Layout from '../core-components/Layout'
import Modal from '../components/Modal'

export default function PageModal() {
  return (
    <>
      <Head>
        <title>Modal window | Inaccessible components</title>
      </Head>

      <Layout>
        <h1>Modal window</h1>

        <p>This page contains the inaccessible version of the component including the description of issues, additional considerations, and also the accessible version of the component for comparison.</p>

        <h2>Inaccessible version</h2>

        <Modal />
      </Layout>
    </>
  )
}
