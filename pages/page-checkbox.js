import Head from 'next/head'
import Layout from '../core-components/Layout'
import Checkbox from '../components/Checkbox'

export default function PageCheckbox() {
  return (
    <>
      <Head>
        <title>Checkbox | Inaccessible components</title>
      </Head>

      <Layout>
        <h1>Checkbox</h1>

        <p>This page contains the inaccessible version of the component.</p>

        <h2>Inaccessible version</h2>
        <Checkbox />
      </Layout>
    </>
  )
}
