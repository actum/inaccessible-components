import Head from 'next/head'
import Layout from '../core-components/Layout'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Inaccessible components</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1>Inaccessible components</h1>

        <p>The intent of this project is to <strong>educate</strong> developers and anyone interested in web accessibility.</p>
        <p>A collection of inaccessible components demonstrates <strong>common accessibility and usability issues</strong> developers create (mostly unintentionally) when building websites.</p>
        <p>By realizing the impact of the issues, developers can understand <strong>what kind of barriers are various users facing</strong> so they can start remediating the issues, and learn how to create more accessible components.</p>

        <p>There are many patterns and ways how to make certain components accessible, including various options and features components can have. There might be multiple ways to deal with certain issues, and rather than covering all of the possible approaches, this project focuses on <strong>demonstrating the issues and showing one way of fixing them</strong>.</p>
        <p>Similarly, there are multiple ways how to write HTML, CSS, and JavaScript, and those used here are not aiming to be cutting-edge, best performing, or simply the best. The setup and design are simple, allowing focus on accessibility and usability.</p>

        <h2>List of components</h2>

        <p>Below is a list of inaccessible components including the description of their accessibility and usability issues, additional considerations, and also the accessible version of the component for comparison.</p>

        <ul>
        <li><Link href="/page-accordion">Accordion</Link></li>
        <li><Link href="/page-breadcrumb">Breadcrumb</Link></li>
        </ul>
      </Layout>
    </>
  )
}
