import Head from "next/head";
import Layout from "../core-components/Layout";
import RadioGroup from "../components/Radio";

export default function PageRadios() {
  return (
    <>
      <Head>
        <title>Inaccessible and accessible components</title>
      </Head>

      <Layout>
        <h1>Radio group</h1>

        <p>
          This page contains the inaccessible version of the component.
        </p>

        <h2>Inaccessible version</h2>

        <RadioGroup />
      </Layout>
    </>
  );
}
