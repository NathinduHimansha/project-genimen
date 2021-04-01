import React, { useEffect, useState } from "react";
import arrowup from '../../assests/TopUpArrow.png';
import darkarrowup from '../../assests/UpArrowDark.png';
import './scrollup.css'

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
      behavior: "smooth",
      top: 0
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-top">
      {visible && (
        <div onClick={scrollToTop}>
          <img style={{ width: '40px' }}
         
            src={arrowup}
            alt="Scroll-Up-Icon"
            title="Click to Scroll Up"
          />
        </div>
      )}
    </div>
  );
}
