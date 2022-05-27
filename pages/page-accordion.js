import Head from 'next/head'
import Layout from '../core-components/Layout'
import Accordion from '../components/Accordion'
import AccessibleAccordion from '../components/Accordion/Accessible'

export default function PageAccordion() {
  return (
    <>
      <Head>
        <title>Accordion | Inaccessible components</title>
      </Head>

      <Layout>
        <h1>Accordion</h1>

        <p>This page contains the inaccessible version of the component including the description of issues, additional considerations, and also the accessible version of the component for comparison.</p>

        <h2>Inaccessible version</h2>
        <Accordion />

        <h3>Issues</h3>
        <p>Expand each issue to see the user impact.</p>

        <details>
          <summary>Accordion headers are not accessible by keyboard.</summary>
          Keyboard users cannot access the content in the accordion because the accordion headers are not focusable.
        </details>

        <details>
          <summary>The accordion is not operational by function keys.</summary>
          Keyboard users should be able to use several function keys for easier navigation between accordion items: <em>Arrow Up</em>, <em>Arrow Down</em>, <em>Home</em>, and <em>End</em> (if it would be focusable).
        </details>

        <details>
          <summary>The keyboard event for interacting with the component is missing.</summary>
          There is only the <code>mouseDown</code> event implemented, which works for mouse users, but does not work for keyboard users, therefore there is no way for them how to open the accordion item (if it would be focusable).
        </details>

        <details>
          <summary>Contents of accordion items are hidden visually but still discoverable.</summary>
          When the accordion item is closed, its content should not be visible but also not operable, e.g. keyboard users should not be able to tab into interactive elements inside, and screen reader users should not be able to read the content.
        </details>

        <details>
          <summary>Usage of the <code>header</code> element is invalid in this case.</summary>
          Because there is no landmark wrapping the main page content, all 3 <code>header</code> elements are treated as banner landmarks (there should be just one such per page). Also, this <code>header</code> should only be used inside other sectioning elements to be scoped.
          <br />
          <a href="https://dequeuniversity.com/rules/axe/4.4/landmark-no-duplicate-banner?application=AxeChrome" target="_blank" rel="noreferrer noopener">Read more about the banner landmark</a>.
          <br />
          <a href="https://www.tempertemper.net/blog/implicit-aria-landmark-roles#what-to-do" target="_blank" rel="noreferrer noopener">Read more about sectioning elements</a>.
        </details>

        <details>
          <summary>The accordion has missing aria attributes.</summary>
          Although this does not work for all screen readers, it&apos;s a good practice to create a relationship between the accordion header and content via <code>aria-controls</code> and <code>id</code> attributes to identify which element or elements the widget controls.
        </details>

        <details>
          <summary>Usage of <code>aria-selected=&quot;true&quot;</code> on the header element is invalid.</summary>
          The <code>aria-selected=&quot;true&quot;</code> is only valid for <code>gridcell</code>, <code>option</code>, <code>row</code>, and <code>tab</code> roles.
          <br />
          <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected" target="_blank" rel="noreferrer noopener">Read more about <code>aria-selected</code></a>.
        </details>

        <details>
          <summary>Font size is set in pixels.</summary>
          When font size is not set in relative units, such as <code>rem</code> or <code>em</code>, then increasing or decreasing font size settings in the browser won&apos;t have any effect. This is important for users who adjust their font size to their preferences.
        </details>

        <details>
          <summary>The accordion has a fixed width.</summary>
          In this case, it&apos;s causing overflow issues with a horizontal scrollbar on mobile devices since the accordion is not responsive.
        </details>

        <details>
          <summary>The accordion content has a fixed height.</summary>
          This is an anti-pattern as the content text can overflow and be invisible to users.
        </details>

        <details>
          <summary>An order of the accordion header and accordion content is switched via the CSS <code>order</code> property.</summary>
            This is confusing for sighted keyboard users in general because the visual order does not follow the logical order and when tabbing through the page, they can jump around the layout in a confusing way.
            <br />
            <a href="https://alastairc.uk/2017/06/the-responsive-order-conflict/" target="_blank" rel="noreferrer noopener">Read more about the order issue</a>.
        </details>

        <details>
          <summary>The arrow SVG icon is invisible in the dark version of a high contrast mode.</summary>
          While it&apos;s not a critical issue in this case, users with the high contrast mode turned on might not realize there&apos;s an accordion on the page because they cannot see the icon.
        </details>

        <details>
          <summary>The mouse pointer cursor is over the whole accordion item (including content), but the actual clickable area is much smaller.</summary>
          Again not a critical issue, however, users expect to see the pointer cursor to perform an action and when they click on the empty space, it does not do anything.
        </details>

        <h3>Considerations</h3>

        <p>Usage of certain technique depends on circumstances. Expand each consideration to learn more.</p>

        <details>
          <summary>Consider usage of a list.</summary>
          When there is many accordion items, it is useful for screen reader users to know how many of them there are. When using <code>ul</code>/<code>ol</code> and <code>li</code> elements, this is announced automatically.
        </details>

        <details>
          <summary>Consider usage of headings.</summary>
          Headings might be used for accordion items titles when it would make sense for these sections to be a part of the document structure.
        </details>

        <details>
          <summary>Consider usage of landmark regions.</summary>
          If the content sections inside accordion items are important subsections of a page, and users should be able to navigate there directly anywhere from the page, use the <code>landmark</code> role (explicit or implicit) together with the <code>aria-labelledby</code> attribute.
        </details>

        <h2>Accessible version</h2>
        <AccessibleAccordion />
      </Layout>
    </>
  )
}
