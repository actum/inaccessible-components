import { useState } from 'react';

export default function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseButtonClick = () => {
    setIsModalOpen(false)

    const focusableElements = document.querySelectorAll('button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const firstFocusableElement = focusableElements[0];

    setTimeout(() => {
      firstFocusableElement.focus()
    }, 300)
  }

  return (
    <>
      <div
        className={`modal__wrapper ${isModalOpen ? 'modal__wrapper--open' : ''}`}
      >
        <div
          className="modal"
          role="modal"
          aria-describedby="modal-1-close-btn"
        >
          <div className="modal__content">
            <h2 className="modal__title">
              Modal Title
            </h2>

            <p>Modal window is a user experience pattern that is useful when you want to bring the user&apos;s attention to something important without leaving the current context/page.</p>
            <marquee behavior="" direction="">
              <p>Recommendation: You might also learn more about the dialog role. <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role">Click here</a> to learn more.</p>
            </marquee>

            <button
              id="modal-1-close-btn"
              className="modal__close-btn"
              onClick={handleCloseButtonClick}
            >X</button>
          </div>
        </div>
      </div>

      <button type="button" onClick={() => setIsModalOpen(true)}>
        Open modal window
      </button>
    </>
  );
}
