import React, { useEffect, useState, useContext } from 'react';
import { Context } from '../../components/sate_management/GlobalStore';
import propic from '../../assests/ProfilePic.png';

function testlogin() {
  const [state, dispatch] = useContext(Context);

  return (
    <div>
      <div
        className={`-flex -flex-center  ${
          state.login ? 'nav-profile-wrapper' : 'nav-profile-hidden'
        }`}
      >
        <div className="nav-profile-wrapper">
          <h1>hjnjhjkhkjh</h1>
        </div>
        {/* <div className="nav-user-wrapper">
          <div className="nav-propic-wrapper">
            <img className="nav-propic" src={propic} onClick={() => {}} />
          </div>
          <div className="nav-user-det">
            <span className="nav-username">nathindu</span>
            <a
              className="nav-user-logout-btn"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              <span className="nav-user-logout">Logout</span>
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default testlogin;
