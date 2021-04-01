import React from 'react';
import './modal.css';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  const showHideModal = show ? 'modal-reveal' : 'modal-conceal';

  return (
    <div id="#logout-modal" className={showHideClassName}>
      <section className={`modal-main ${showHideModal}`}>{children}</section>
    </div>
  );
};
export default Modal;
