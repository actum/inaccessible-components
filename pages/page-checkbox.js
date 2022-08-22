import Head from 'next/head'
import Layout from '../core-components/Layout'
import Checkbox from '../components/Checkbox'
import AccessibleCheckbox from '../components/Checkbox/Accessible'
import AccessibleAriaCheckbox from '../components/Checkbox/Accessible/ARIA'

export default function PageCheckbox() {
  return (
    <>
      <Head>
        <title>Checkbox | Inaccessible components</title>
      </Head>

      <Layout>
        <h1>Checkbox</h1>

        <p>This page contains the inaccessible version of the component including the description of issues, and also the accessible version of the component for comparison.</p>

        <h2>Inaccessible version</h2>
        <Checkbox />

        <h3>Issues</h3>
        <p>Expand each issue to see the user impact.</p>

        <details>
          <summary>Two checkboxes are used instead of one.</summary>
          A custom checkbox can be created either by using visually hidden native checkbox, or using ARIA and JavaScript. But only one of these approaches should be used.
          <br /><br />
          When using the native checkbox, no JavaScript or ARIA (such as <code>aria-checked</code>) is needed because the checkbox is just hidden behind the box but still focusable and interactive, therefore its functionality is still available. When the state needs to be controlled for example in a React application, then utilize the <code>checked</code> attribute.
          <br /><br />
          When using ARIA with JavaScript, the element must have:

          <ul>
            <li><code>role=&quot;checkbox&quot;</code> for assistive technologies to treat it like checkbox</li>
            <li><code>tabindex=&quot;0&quot;</code> to be focusable</li>
            <li><code>aria-checked</code> to represent the state</li>
            <li><code>click</code> and <code>keydown</code> (Space character) events to be interactive</li>
          </ul>
        </details>

        <details>
          <summary>Input is missing the <code>id</code> attribute.</summary>
          The <code>for</code> attribute of a <code>&lt;label&gt;</code> element expects an ID of an input field to provide an accessible name and also make the label itself clickable. The input, however, uses only <code>name</code> attribute, which does not create the relationship. The ID must be present on the input.
        </details>

        <details>
          <summary><code>onClick</code> function is redundant.</summary>
          When <code>&lt;label&gt;</code> is connected to the input field with ID, then it becomes clickable automatically and controls the state of the checkbox.
          <br /><br />
          When the checkbox is made with ARIA, the accessible name is computed from the contents of the <code>&lt;div role=&quot;checkbox&quot;&gt;
          </code>.
        </details>

        <details>
          <summary>Focus indicator is not sufficient.</summary>
          Changing 1px black input border to grey color on focus is almost invisible indicator in this case.
        </details>

        <details>
          <summary>The SVG tick icon is not visible in the dark version of a high contrast mode.</summary>
          It is critical for all sighted users to see the tick icon to identify whether the checkbox is checked or not.
        </details>

        <h3>Considerations</h3>

        <p>Usage of certain technique depends on circumstances. Expand each consideration to learn more.</p>

        <details>
          <summary>Consider implementing a hover effect.</summary>
          It is easier for sighted users to perceive that checkbox with label are interactive when the UI reacts to the hover effect. Changing the background color or border is usually a good indicator.
        </details>

        <details>
          <summary>Consider usage of relative units instead of pixels.</summary>
          While not needed for conformance, if users change their text size, the checkbox size does not change. It might be also hard for users to select or find a small checkbox when the text size is very large. By using relative units instead of pixels, the size of checkbox will adapt to the text size.
        </details>

        <h2>Accessible version</h2>

        <h3>With native checkbox</h3>
        <AccessibleCheckbox />

        <h3>With ARIA checkbox</h3>
        <AccessibleAriaCheckbox />
      </Layout>
    </>
  )
}
