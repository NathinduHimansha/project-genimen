import React, { useEffect, useState } from 'react';
import './modal.css';

const Modal = ({ handleClose, show, children }) => {
  const showHideModalContainer = show ? 'modal display-modal' : 'modal hide-modal';
  const showHideModal = show ? 'modal-reveal' : 'modal-conceal';

  return (
    <div id="#logout-modal" className={showHideModalContainer}>
      <section className={`modal-main ${showHideModal}`}>{children}</section>
    </div>
  );
};
export default Modal;
