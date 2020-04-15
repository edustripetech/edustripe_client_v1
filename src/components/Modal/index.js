import React from 'react';

const Modal = ({ children, onInit }) => {

  const modalRef = React.createRef();
  const [visible, setVisible] = React.useState(false);

  onInit({ setVisible });

  const onClickOutsideModal = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setVisible(false);
    }
  }

  React.useEffect(() => {
    window.addEventListener('click', onClickOutsideModal);

    return () => {
      window.removeEventListener('click', onClickOutsideModal);
    };
  });
  
  return visible
    ? (
      <div className="custom-modal-container">
        <div className="custom-modal" ref={modalRef}>
          {children}
        </div>
      </div>
    )
    : null;
};

export default Modal;
