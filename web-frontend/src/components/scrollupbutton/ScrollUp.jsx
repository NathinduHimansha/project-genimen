import React, { useEffect, useState } from 'react';
// import arrowup from '../../assests/TopUpArrow.png';
import downarrow from '../../assests/DropDownArrow.png';
import darkarrowup from '../../assests/UpArrowDark.png';
import './scrollup.css';

export default function ScrollUp() {
  const [visible, setVisibile] = useState(false);

  // button showing position
  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setVisibile(true);
    } else {
      setVisibile(false);
    }
  };

  //scrolling position
  const scrollToTop = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-top">
      {visible && (
        <div className="scroll-top-wrapper" onClick={scrollToTop}>
          <img
            // style={{ width: '40px' }}
            src={downarrow}
            alt="Scroll-Up-Icon"
            title="Click to Scroll Up"
          />
        </div>
      )}
    </div>
  );
}
