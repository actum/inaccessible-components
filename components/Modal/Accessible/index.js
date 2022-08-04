import { useState } from 'react';
import FocusTrap from 'focus-trap-react';

export default function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => {
        setIsModalOpen(true)
      }}>
        Open accessible modal window
      </button>

      <div
        className={`a-modal__wrapper ${isModalOpen ? 'a-modal__wrapper--open' : ''}`}
        hidden={!isModalOpen}
      >
        <FocusTrap
          active={isModalOpen}
          focusTrapOptions={{
            onActivate: () => {
              document.body.classList.add("modal-open")
            },
            onDeactivate: () => {
              setIsModalOpen(false)
              document.body.classList.remove("modal-open")
            },
            clickOutsideDeactivates: true,
          }}
        >
          <div
            className="a-modal"
            aria-labelledby="modal-2-heading"
            role="dialog"
          >
            <div className="a-modal__content">
              <h2 className="a-modal__title" id="modal-2-heading">
                Modal Title
              </h2>

              <p>Modal window is a user experience pattern that is useful when you want to bring the user&apos;s attention to something important without leaving the current context/page.</p>
              <p>You might also learn more about the <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role">dialog</a> role.</p>

              <button
                type="button"
                className="a-modal__close-btn"
                aria-label="Close"
                onClick={() => {
                  setIsModalOpen(false)
                }}
              >X</button>
            </div>
          </div>
        </FocusTrap>
      </div>
    </>
  );
}
