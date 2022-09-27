import Head from 'next/head'
import Layout from '../core-components/Layout'
import Tabs from '../components/Tabs'
import AccessibleTabs from '../components/Tabs/Accessible'

export default function PageTabs() {
  return (
    <>
      <Head>
        <title>blank</title>
      </Head>

      <Layout>
        <h1>Tabs</h1>

        <p>This page contains the inaccessible version of the component including the description of issues, additional considerations, and also the accessible version of the component for comparison.</p>

        <h2>Inaccessible version</h2>
        <Tabs />

        <h3>Issues</h3>
        <p>Expand each issue to see the user impact.</p>

        <details>
          <summary>Tab list and tab panel are not next to each other.</summary>
          Both list and panel should be next to each other - both visually and in DOM. Using screen magnification software, or large zoom, it may be impossible to detect tab panel switching.
        </details>

        <details>
          <summary>Tabs are focusable but not interactive.</summary>
          Although it is possible to tab through tabs, it is not possible to activate the tab by keyboard.
        </details>

        <details>
          <summary>Tab panels are hidden only visually.</summary>
          Inactive tab panels are still accessible by keyboard and its content discoverable. This can confuse visual users and destroys the purpose of tabs for screen reader users in the first place.
        </details>

        <details>
          <summary>Missing ARIA attributes.</summary>
          Tabs are a custom JavaScript widget, there is no native HTML element to use for that. Therefore, a couple of attributes need to be added:

          <ul>
            <li><code>role=&quot;tablist&quot;</code> - a wrapper for the list of tabs</li>
            <li><code>role=&quot;tab&quot;</code> - a tab control also providing a label for the connected tabpanel</li>
            <li><code>role=&quot;tabpanel&quot;</code> - a wrapper for the tab panel content</li>
            <li><code>aria-labelledby</code> on the tablist to provide an accessible name</li>
            <li><code>aria-selected</code> on the tab to indicate selected tabs</li>
            <li><code>aria-controls</code> on the tab to connect tab with tabpanel</li>
            <li><code>tabindex</code> on the tab to control the tab sequence of tabs</li>
            <li><code>aria-labelledby</code> on the tabpanel to provide an accessible name</li>
          </ul>
        </details>

        <details>
          <summary>Missing keyboard support.</summary>
          To make the component accessible and convenient to use for keyboard users, the following key support should be added:
          <br />
          Note: Focusing the tab automatically activates it.

          <ul>
            <li><code>Tab</code> key - tabbing into the tablist should focus the selected tab, and tabbing again should leave the tablist.</li>
            <li><code>Left arrow</code> and <code>Right arrow</code> keys - moving focus between tabs is done by arrows, not the <code>Tab</code> key.</li>
            <li><code>Home</code> key moves the focus to the first tab.</li>
            <li><code>End</code> key moves the focus to the last tab.</li>
          </ul>
        </details>

        <details>
          <summary>Wrong &quot;Google&quot; link location.</summary>
          The Google link leads to the apple.com, should be leading to google.com.
        </details>

        <details>
          <summary>Contrast of the currently selected tab is too low.</summary>
          The dark blue color used to highlight the active tab against the inactive tabs styled by black text is barely visible with low contrast.
        </details>

        <details>
          <summary>Color is used alone to style links in text.</summary>
          Color alone is not a sufficient way to distinguish links from normal text. Low vision or color-blind users would miss that completely, except for when the color contrast is very high.
        </details>

        <details>
          <summary><code>max-height</code> is used on the tab panel.</summary>
          The tab panel limits the height of the content inside even without using vertical scrollbar. On smaller resolutions (or with more content), users would lose a part of the content.
        </details>

        <details>
          <summary>Incorrect page title.</summary>
          The title of the page says just &quot;blank&quot;, it is not descriptive for users.
        </details>

        <h3>Considerations</h3>

        <p>Usage of certain technique depends on circumstances. Expand each consideration to learn more.</p>

        <details>
          <summary>Consider changing tab switch from hover to click event.</summary>
          Hovering over something should not ideally cause change in context, but there are exceptions. Tabs are usually switched either by activation or selecting them by arrows.
        </details>

        <details>
          <summary>Consider making the tabpanel focusable.</summary>
          If there are no focusable elements in panels, users might miss the content in the panel. In such situations it is recommended to put the <code>tabindex=&quot;0&quot;</code> to the tabpanel.
        </details>

        <details>
          <summary>Consider using links or buttons as tabs.</summary>
          Depending on circumstances, tabs can also be developed as buttons or links (anchors). This should depend on the content importance and amount.
        </details>

        <h2>Accessible version</h2>

        <h3 id="fe-libs-frameworks">Front end libraries and frameworks</h3>
        <AccessibleTabs />
      </Layout>
    </>
  )
}
