import Head from 'next/head'
import Layout from '../core-components/Layout'
import Breadcrumb from '../components/Breadcrumb'
import AccessibleBreadcrumb from '../components/Breadcrumb/Accessible'

export default function PageBreadcrumb() {
  return (
    <>
      <Head>
        <title>Breadcrumb | Inaccessible components</title>
      </Head>

      <Layout>
        <h1>Breadcrumb</h1>

        <p>This page contains the inaccessible version of the component including the description of issues, and also the accessible version of the component for comparison.</p>

        <h2>Inaccessible version</h2>
        <Breadcrumb />

        <h3>Issues</h3>
        <p>Expand each issue to see the user impact.</p>

        <details>
          <summary>Breadcrumb links have no visual focus.</summary>
          Although the breadcrumb links are accessible by keyboard, sighted keyboard users cannot see where they are focused as there is no outline around the links. They are lost in the darkness.
        </details>

        <details>
          <summary>There is not enough contrast between links and the background colors.</summary>
          Users with moderately low vision cannot read the text because they do not see it.
        </details>

        <details>
          <summary>The set of links is structured using an unordered list.</summary>
          Breadcrumb follows the page structure, so the order of links is important. The ordered list should be used instead.
        </details>

        <details>
          <summary>The breadcrumb navigations is not easily located for screen reader users.</summary>
          The <code>nav</code> element with a proper label should be used to identify the breadcrumb as a navigation landmark.
        </details>

        <details>
          <summary>The links separators create a redundant and potentially distracting verbosity for screen reader users.</summary>
          To prevent screen readers announement of the visual separators between links, they should be added via CSS.
        </details>

        <details>
          <summary>The <code>aria-label</code> attributes on links are unnecessary and invalid.</summary>
          There is no reason to put the <code>aria-label</code> on the breadcrumb links as the title inside the link is descriptive enough. Also, because the <code>aria-label</code> (&quot;Breadcrumb Level 1&quot;) does not start with the same text as the link title (&quot;Level 1&quot;), it is impossible for users using speech recognition to interact with the link by verbal control.
        </details>

        <details>
          <summary>The last item in the breadcrumb is not marked as the currently active link.</summary>
          The last link should have the <code>aria-current</code> attribute to indicate the current item within a set of related elements.
        </details>

        <details>
          <summary>The layout breaks on smaller resolutions.</summary>
          The breadcrumb items do not wrap on smaller resolutions causing content overflow and a horizontal scrollbar appears.
        </details>

        <h2>Accessible version</h2>
        <AccessibleBreadcrumb />
      </Layout>
    </>
  )
}
