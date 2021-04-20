import React, { Component, useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './homepage.css';

import propic from '../../assests/ProfilePic.png';
import warning from '../../assests/WarningRed.png';

import Button from '../../components/buttons/Button';
import Logobanner from '../../components/logobanner/Logobanner';
import Modal from '../../components/modal/Modal';

import { Context } from '../../components/sate_management/GlobalStore';
import { logOut } from '../../common/utils';

function HomePageNew() {
  const [state, dispatch] = useContext(Context);
  const onLogOut = () => {
    dispatch({ type: 'LOGOUT' });
    logOut();
    setOpenModal(false);
  };
  const [openLogoutConfrimModal, setOpenModal] = useState(false);

  return (
    <div>
      {/* logout confirmation */}
      <Modal show={openLogoutConfrimModal}>
        <div className="modal-header -flex -flex-center -full-width">
          <img src={warning} style={{ width: '110px', opacity: '0.8' }} />
        </div>
        <div className="modal-content -mt-10 -mb-10">
          <h3 className="heading3 -no-margin -text-center -medium">Are you sure?</h3>
          <h5 className="-text-center heading5 -mt-10 -mb-5">
            You must login back to use our services!
          </h5>
        </div>
        <div className="modal-content modal-footer">
          <div className="-flex -full-width -flex-center">
            <Button
              onClick={() => {
                setOpenModal(false);
              }}
              outline={true}
              utilClasses={['red-outline logout-modal-button']}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                onLogOut();
              }}
              utilClasses={['logout-modal-button']}
            >
              Confirm
            </Button>
          </div>
        </div>
      </Modal>

      {/* homepage body */}
      <div className="homepage-body">
        <div className="homepage-loginbtn">
          {state.login ? (
            <Button
              onClick={() => setOpenModal(true)}
              iconSrc={propic}
              iconSide="left"
              utilClasses={['home-login-btn-propic']}
            >
              | Logout
            </Button>
          ) : (
            <NavLink to="/login" className="-text-decoration-none">
              <Button>
                <span>Login</span>
              </Button>
            </NavLink>
          )}
        </div>

        <div className="homepage-logo">
          <Logobanner />
        </div>

        <div className="homepage-welcometxt">
          <div className="welcometxt-top">
            <div>
              <span>Predict</span>
              <span>Analyse</span>
            </div>
          </div>
          <div className="welcometxt-bottom">
            <div>
              <span>Design</span>
            </div>
          </div>
        </div>

        <div className="homepage-start-button">
          <NavLink to="/analytics" className="-text-decoration-none">
            <Button>
              <img className="homepage-startbtnrow" /> START ANALYSING
            </Button>
          </NavLink>
        </div>

        <div className="homepage-bg-annimation">
          <div className="hbga-circle circle-xxlargee circle-shade1"></div>
          <div className="hbga-circle circle-xlarge circle-shade2"></div>
          <div className="hbga-circle circle-large circle-shade3"></div>
          <div className="hbga-circle circle-mediun circle-shade4"></div>
          <div className="hbga-circle circle-small circle-shade5"></div>
        </div>
      </div>
    </div>
  );
}

export default HomePageNew;
