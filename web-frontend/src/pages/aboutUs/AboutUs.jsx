import React from 'react';
import './aboutus.css';
import CurrentLocation from '../../components/header/CurrentLocation';
import hacker from '../../assests/hacker.png';
import twitter from '../../assests/twitter.png';
import linkedin from '../../assests/linkedin.png';
import github from '../../assests/github.png';

const AboutUs = () => {
  return (
    <div className="navbar-page-container -mb-40" style={{ margin: '0%' }}>
      <div className="mainAboutPage">
        <div className="heading_align">
          <div className="app-heading-header content-padding -flex -flex-col">
            <div className="-mb-30">
              {/*showing the current location of the page when it navigates from one page to another*/}
              <CurrentLocation></CurrentLocation>
            </div>
            <h2 className="fancy-heading -no-margin" style={{ fontWeight: 'bold' }}>
              JOURNEY OF TEAM ZERO ONE
            </h2>
          </div>
          <div className="about-sectionAbout">
            <p className="labelAbout">
              <span className="strike">STORY OF GENIMEN</span>
            </p>
            {/*description about the project*/}
            <p className="aboutSubDescrip" style={{ marginLeft: '23%' }}>
              The problem discussed arises with the nature of the modern-day market. With immense
              competition and humongous customer base to cater it is often considered tedious and
              difficult to approach the market with new services and products. Especially this is an
              amplification of the problem when considered the routes to approach the market. This
              project aims to simplify the research and the time that needed when coming up with new
              strategies to establish new products.
            </p>

            {/*down pointed animation*/}
            <div className="arrowAnimation">
              <i class="arrow down"></i>
            </div>
          </div>
        </div>

        <div className="bodySplitAbout">
          <div className="rowAbout">
            <div className="columnAbout">
              <div className="cardAbout">
                {/*team member image*/}
                <img
                  src={hacker}
                  alt="Jane"
                  style={{
                    width: '50%',
                    marginLeft: '25%',
                    borderRadius: '50%',
                    boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    marginTop: '5%',
                  }}
                />

                {/*Adeesha Walgamage*/}
                <div className="containerAbout">
                  {/*Name of the team member*/}
                  <h2>Adeesha Walgamage</h2>

                  <p className="titleAbout">Developer</p>
                  <div className="aboutDescrip">
                    {/*Contribution for the project*/}
                    <p>Implementation of Backend,Frontend and Data-Science components</p>

                    {/*email og the team member*/}
                    <p>adeesha.2018357.iit.ac.lk</p>
                  </div>

                  {/*twitter logo with respective link to the account*/}
                  <p className="platformlogoAlign">
                    <a href="https://twitter.com/big_macow">
                      <img
                        src={twitter}
                        style={{ width: '25%', height: '25%', borderRadius: '50%' }}
                        className="twitterAnimation"
                      ></img>
                    </a>

                    {/*linkedin logo with respective link to the account*/}
                    <a href="https://www.linkedin.com/in/manthila-walgamage-534b32197/">
                      <img
                        src={linkedin}
                        style={{ width: '25%', height: '25%' }}
                        className="linkedinAnimation"
                      ></img>
                    </a>

                    {/*github logo with respective link to the account*/}
                    <a href="https://github.com/manthilaDev">
                      <img
                        src={github}
                        style={{ width: '25%', height: '25%' }}
                        className="githubAnimation"
                      ></img>
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="columnAbout">
              <div className="cardAbout">
                <img
                  src={hacker}
                  alt="John"
                  style={{
                    width: '50%',
                    marginLeft: '25%',
                    borderRadius: '50%',
                    boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    marginTop: '5%',
                  }}
                />

                {/*Mohamed Rashad*/}
                <div className="containerAbout">
                  <h2>Mohamed Rashad</h2>
                  <p className="titleAbout">Developer</p>
                  <div className="aboutDescrip">
                    <p>Implementation of Backend,Frontend and Data-Science components</p>
                    <p>rashad.2018470@iit.ac.lk</p>
                  </div>
                  <p className="platformlogoAlign">
                    <a href="https://mobile.twitter.com/RashadRashadzcc">
                      <img
                        src={twitter}
                        style={{ width: '25%', height: '25%', borderRadius: '50%' }}
                        className="twitterAnimation"
                      ></img>
                    </a>

                    <a href="https://lk.linkedin.com/in/mohamed-rashad-06b532148">
                      <img
                        src={linkedin}
                        style={{ width: '25%', height: '25%' }}
                        className="linkedinAnimation"
                      ></img>
                    </a>

                    <a href="https://github.com/bsucker98">
                      <img
                        src={github}
                        style={{ width: '25%', height: '25%' }}
                        className="githubAnimation"
                      ></img>
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="columnAbout">
              <div className="cardAbout">
                <img
                  src={hacker}
                  alt="Mike"
                  style={{
                    width: '50%',
                    marginLeft: '25%',
                    borderRadius: '50%',
                    boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    marginTop: '5%',
                  }}
                />

                {/*Tharindu De Silva*/}
                <div className="containerAbout">
                  <h2>Tharindu De Silva</h2>
                  <p className="titleAbout">Developer</p>
                  <div className="aboutDescrip">
                    <p>Implementation of Backend,Frontend and Data-Science components</p>
                    <p>tharindu.2018367@iit.ac.lk</p>
                  </div>
                  <p className="platformlogoAlign">
                    <a href="https://twitter.com/andrewdesilvasl">
                      <img
                        src={twitter}
                        style={{ width: '25%', height: '25%', borderRadius: '50%' }}
                        className="twitterAnimation"
                      ></img>
                    </a>

                    <a href="https://www.linkedin.com/in/tharindu-de-silva-50895717a/">
                      <img
                        src={linkedin}
                        style={{ width: '25%', height: '25%' }}
                        className="linkedinAnimation"
                      ></img>
                    </a>

                    <a href="https://github.com/mr-desilva">
                      <img
                        src={github}
                        style={{ width: '25%', height: '25%' }}
                        className="githubAnimation"
                      ></img>
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="columnAbout">
              <div className="cardAbout">
                <img
                  src={hacker}
                  alt="John"
                  style={{
                    width: '50%',
                    marginLeft: '25%',
                    borderRadius: '50%',
                    boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    marginTop: '5%',
                  }}
                />

                {/*Nathindu Dias*/}
                <div className="containerAbout">
                  <h2>Nathindu Dias</h2>
                  <p className="titleAbout">Developer</p>
                  <div className="aboutDescrip">
                    <p>Implementation of Backend,Frontend and Data-Science components</p>
                    <p>nathindu.2018455@iit.ac.lk</p>
                  </div>
                  <p className="platformlogoAlign">
                    <a href="https://twitter.com/NathinduDias">
                      <img
                        src={twitter}
                        style={{ width: '25%', height: '25%', borderRadius: '50%' }}
                        className="twitterAnimation"
                      ></img>
                    </a>

                    <a href="https://www.linkedin.com/in/nathindu-dias-746ba915b/">
                      <img
                        src={linkedin}
                        style={{ width: '25%', height: '25%' }}
                        className="linkedinAnimation"
                      ></img>
                    </a>

                    <a href="https://github.com/NathinduHimansha">
                      <img
                        src={github}
                        style={{ width: '25%', height: '25%' }}
                        className="githubAnimation"
                      ></img>
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="columnAbout">
              <div className="cardAbout">
                <img
                  src={hacker}
                  alt="John"
                  style={{
                    width: '50%',
                    marginLeft: '25%',
                    borderRadius: '50%',
                    boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    marginTop: '5%',
                  }}
                />

                {/*Malith Goonathilake*/}
                <div className="containerAbout">
                  <h2>Malith Goonathilake</h2>
                  <p className="titleAbout">Developer</p>
                  <div className="aboutDescrip">
                    <p>Implementation of Backend,Frontend and Data-Science components</p>
                    <p>malith.2018402@iit.ac.lk</p>
                  </div>

                  <p className="platformlogoAlign">
                    <a href="https://www.google.com">
                      <img
                        src={twitter}
                        style={{ width: '25%', height: '25%', borderRadius: '50%' }}
                        className="twitterAnimation"
                      ></img>
                    </a>

                    <a href="https://www.linkedin.com/in/oshadha-goonathilake-89552a198">
                      <img
                        src={linkedin}
                        style={{ width: '25%', height: '25%' }}
                        className="linkedinAnimation"
                      ></img>
                    </a>

                    <a href="https://github.com/Malith404">
                      <img
                        src={github}
                        style={{ width: '25%', height: '25%' }}
                        className="githubAnimation"
                      ></img>
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="columnAbout">
              <div className="cardAbout">
                <img
                  src={hacker}
                  alt="John"
                  style={{
                    width: '50%',
                    marginLeft: '25%',
                    borderRadius: '50%',
                    boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    marginTop: '5%',
                  }}
                />

                {/*Sriranjan Abilash*/}
                <div className="containerAbout">
                  <h2>Sriranjan Abilash</h2>
                  <p className="titleAbout">Developer</p>
                  <div className="aboutDescrip">
                    <p>Implementation of Backend,Frontend and Data-Science components</p>
                    <p>abilash.2018379@iit.ac.lk</p>
                  </div>
                  <p className="platformlogoAlign">
                    <a href="https://mobile.twitter.com/ragav_krishic">
                      <img
                        src={twitter}
                        style={{ width: '25%', height: '25%', borderRadius: '50%' }}
                        className="twitterAnimation"
                      ></img>
                    </a>

                    <a href="https://www.linkedin.com/mwlite/in/sriranjan-abilash">
                      <img
                        src={linkedin}
                        style={{ width: '25%', height: '25%' }}
                        className="linkedinAnimation"
                      ></img>
                    </a>

                    <a href="https://github.com/abi-krish-me">
                      <img
                        src={github}
                        style={{ width: '25%', height: '25%' }}
                        className="githubAnimation"
                      ></img>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
