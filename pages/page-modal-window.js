import Head from 'next/head'
import Layout from '../core-components/Layout'
import Modal from '../components/Modal'
import AccessibleModal from '../components/Modal/Accessible'

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

        <h3>Issues</h3>
        <p>Expand each issue to see the user impact.</p>

        <details>
          <summary>The modal window has no background overlay.</summary>
          Modal windows should usually have a dark overlay in the background so users are focused on the information in the modal window while not being able to interact with the outside content.
        </details>

        <details>
          <summary>The close button is too small.</summary>
          It is very difficult for users (especially for those with tremors) to activate the close button. The clickable area should be much bigger.
        </details>

        <details>
          <summary>The close button is missing an accessible name.</summary>
          Visually impaired users with assistive technologies do not know what the button is for, as screen readers would announce only &quot;X button&quot;. While this can be clear to some users, it is not clear to all.
        </details>

        <details>
          <summary>Users can scroll while the modal window is opened.</summary>
          The page should prevent users from scrolling when the modal window is opened as they should not be able to interact with the rest of the page.
        </details>

        <details>
          <summary>Interactive elements inside the modal window have no focus styles.</summary>
          Sighted keyboard users cannot see what element inside the modal window is are currently focused.
        </details>

        <details>
          <summary>Users are able to interact with the rest of the page while the modal window is opened.</summary>
          Users should focus only on the modal window before they close it. Otherwise, keyboard users might not realize they are already away from the modal window.
        </details>

        <details>
          <summary>After the modal window is opened, the focus is not set inside.</summary>
          Without setting focus inside to the modal window, keyboard users might never reach it as it can be hidden deep in the DOM. It is the best practice to move focus on certain user interactions, such as opening the modal window.
        </details>

        <details>
          <summary>After the modal window is closed, the focus is not set back to the button that opened it.</summary>
          The modal window is a temporary stop for users. Keyboard users should be able to continue their journey from the point where they got into the modal window.
        </details>

        <details>
          <summary>The modal window is reachable even when it is closed.</summary>
          The inactive modal window must be hidden (or not rendered at all) from both assistive-technology and sighted users. Focusing into the invisible place is an anti-pattern.
        </details>

        <details>
          <summary>Usage of the <code>role</code> attribute is wrong.</summary>
          There is no <code>modal</code> role. Instead, the <code>dialog</code> role should be used to help assistive technologies with identification of the dialog.
        </details>

        <details>
          <summary>The modal window cannot be closed with the <code>Escape</code> key.</summary>
          Keyboard users must be able to close the opened modal window with the <code>Escape</code> key.
        </details>

        <details>
          <summary>Usage of the <code>aria-describedby</code> attribute is wrong.</summary>
          While <code>aria-describedby</code> might optionally be used on the element with the <code>role=&quot;dialog&quot;</code> to provide more information about the modal content, in this case, it is targetting the button, which is invalid. Instead, there should be the <code>aria-labelledby</code> attribute pointing to the modal heading so screen reader users have the title announced when they open and get focused into the modal window.
        </details>

        <details>
          <summary>The modal window is invisibly overlapping content on smaller resolutions.</summary>
          On mobile resolutions, the inactive modal window with <code>opacity: 0</code> is overlapping a part of content, so the &quot;Go to Homepage&quot; link is not clickable, and the text not user-selectable.
        </details>

        <details>
          <summary>A part of the opened modal window&apos;s content is invisible on smaller resolutions.</summary>
          On mobile resolutions, the opened modal window width is larger than the viewport, so the content is invisible.
        </details>

        <details>
          <summary>The <code>marquee</code> element is distracting and deprecated.</summary>
          The moving content inside the <code>marquee</code> element is distracting, can be difficult to read and the element itself is deprecated.
        </details>

        <details>
          <summary>The link inside the modal window content does not have clear text.</summary>
          Links with text like &quot;click here&quot;, &quot;read more&quot;, and so on do not provide enough information for users of assistive technologies who tab through the interactive content. Each link should make sense if presented alone without the surrounding context.
        </details>

        <h3>Considerations</h3>

        <p>Usage of certain technique depends on circumstances. Expand each consideration to learn more.</p>

        <details>
          <summary>Consider a usage of the <code>aria-modal=&quot;true&quot;</code> attribute.</summary>
          Some screen readers, when navigating by arrows, allow navigating outside the dialog even with the active focus trap. Using <code>aria-modal=&quot;true&quot;</code> will increase chances that users will not leave the dialog by browsing.
        </details>

        <details>
          <summary>Consider focusing the element with <code>role=&quot;dialog&quot;</code>.</summary>
          Sometimes, focusing the first focusable element straight away might not be wanted, and the focus can go directly to the element with <code>role=&quot;dialog&quot;</code>, if it has an accessible name via <code>aria-label</code> or <code>aria-labelledby</code>.
        </details>

        <details>
          <summary>Consider options for closing the modal window.</summary>
          There are multiple types of modal windows. For instance, closing the modal with the <code>Escape</code> key, clicking the close button, or clicking the overlay is not wanted when you need users to confirm the message, agree to terms, or similar interactions when they can for example choose from proceeding with or canceling an action.
        </details>

        <details>
          <summary>Consider specifying the <code>type</code> of a <code>button</code>.</summary>
          A <code>button</code> without the <code>type</code> attribute defaults to the <code>type=&quot;submit&quot;</code>. While this is important for forms, it is the best practice to always specify the <code>type</code> as it clearly defines what the <code>button</code> does no matter where it is.
        </details>

        <h2>Accessible version</h2>

        <AccessibleModal />
      </Layout>
    </>
  )
}
