import React from 'react';
import './aboutus.css';
import CurrentLocation from '../../components/header/CurrentLocation';
import hacker from '../../assests/hacker.png';
import twitter from '../../assests/twitter.png';
import linkedin from '../../assests/linkedin.png';
import github from '../../assests/github.png';
import FancyHeading from '../../components/text/FancyHeading';

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
            <p className="aboutSubDescrip" style={{ marginLeft: '23%' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis nulla
              sollicitudin aliquam condimentum. Nunc tristique scelerisque est dignissim finibus.
              Praesent sapien ligula, porta vitae interdum congue, vehicula sit amet mauris.
              Suspendisse ut nisl eu arcu fringilla scelerisque. Duis diam metus, interdum et nisl
              nec, vestibulum eleifend felis. Praesent sed molestie nunc. Nam vel tellus id enim
              rhoncus pulvinar eu sit amet nisl. Vestibulum efficitur mattis tempus. Duis in
              tincidunt ligula. Etiam feugiat, libero non lobortis sodales, elit turpis auctor
              felis, quis pretium elit arcu non tortor. Aenean viverra tortor ut scelerisque
              volutpat. Nam vel consectetur nulla.
            </p>
            {/* <div className="triangle-up"></div> */}
          </div>
        </div>

        <div className="bodySplitAbout">
          {/* <h2 style={{ textAlign: 'center', paddingBottom: '5%', fontSize: '580%' }}>Devs'</h2> */}
          <div className="rowAbout">
            <div className="columnAbout">
              <div className="cardAbout">
                <img
                  src={hacker}
                  alt="Jane"
                  style={{
                    width: '50%',
                    marginLeft: '25%',
                    borderRadius: '50%',
                  }}
                />
                <div className="containerAbout">
                  <h2>Adeesha Walgamage</h2>

                  <p className="titleAbout">Developer</p>
                  <div className="aboutDescrip">
                    <p>Implementation of Backend,Frontend and Data-Science components</p>
                    <p>jane@example.com</p>
                  </div>
                  <p className="platformlogoAlign">
                    <a href="https://www.google.com">
                      <img
                        src={twitter}
                        style={{ width: '25%', height: '25%', borderRadius: '50%' }}
                        className="twitterAnimation"
                      ></img>
                    </a>

                    <a href="https://www.google.com">
                      <img
                        src={linkedin}
                        style={{ width: '25%', height: '25%' }}
                        className="linkedinAnimation"
                      ></img>
                    </a>

                    <a href="https://www.google.com">
                      <img
                        src={github}
                        style={{ width: '25%', height: '25%' }}
                        className="githubAnimation"
                      ></img>
                    </a>

                    {/* <button className="button">Contact</button> */}
                  </p>
                </div>
              </div>
            </div>

            <div className="columnAbout">
              <div className="cardAbout">
                <img
                  src={hacker}
                  alt="John"
                  style={{ width: '50%', marginLeft: '25%', borderRadius: '50%' }}
                />
                <div className="containerAbout">
                  <h2>Mohamed Rashad</h2>
                  <p className="titleAbout">Developer</p>
                  <div className="aboutDescrip">
                    <p>Implementation of Backend,Frontend and Data-Science components</p>
                    <p>john@example.com</p>
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

                    {/* <button className="button">Contact</button> */}
                  </p>
                </div>
              </div>
            </div>

            <div className="columnAbout">
              <div className="cardAbout">
                <img
                  src={hacker}
                  alt="Mike"
                  style={{ width: '50%', marginLeft: '25%', borderRadius: '50%' }}
                />
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

                    {/* <button className="button">Contact</button> */}
                  </p>
                </div>
              </div>
            </div>

            <div className="columnAbout">
              <div className="cardAbout">
                <img
                  src={hacker}
                  alt="John"
                  style={{ width: '50%', marginLeft: '25%', borderRadius: '50%' }}
                />
                <div className="containerAbout">
                  <h2>Nathindu Dias</h2>
                  <p className="titleAbout">Developer</p>
                  <div className="aboutDescrip">
                    <p>Implementation of Backend,Frontend and Data-Science components</p>
                    <p>john@example.com</p>
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

                    {/* <button className="button">Contact</button> */}
                  </p>
                </div>
              </div>
            </div>

            <div className="columnAbout">
              <div className="cardAbout">
                <img
                  src={hacker}
                  alt="John"
                  style={{ width: '50%', marginLeft: '25%', borderRadius: '50%' }}
                />
                <div className="containerAbout">
                  <h2>Malith Goonathilake</h2>
                  <p className="titleAbout">Developer</p>
                  <div className="aboutDescrip">
                    <p>Implementation of Backend,Frontend and Data-Science components</p>
                    <p>john@example.com</p>
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

                    {/* <button className="button">Contact</button> */}
                  </p>
                </div>
              </div>
            </div>

            <div className="columnAbout">
              <div className="cardAbout">
                <img
                  src={hacker}
                  alt="John"
                  style={{ width: '50%', marginLeft: '25%', borderRadius: '50%' }}
                />
                <div className="containerAbout">
                  <h2>Siranjan Abilash</h2>
                  <p className="titleAbout">Developer</p>
                  <div className="aboutDescrip">
                    <p>Implementation of Backend,Frontend and Data-Science components</p>
                    <p>john@example.com</p>
                  </div>
                  <p className="platformlogoAlign">
                    <a href="https://www.google.com">
                      <img
                        src={twitter}
                        style={{ width: '25%', height: '25%', borderRadius: '50%' }}
                        className="twitterAnimation"
                      ></img>
                    </a>

                    <a href="https://www.google.com">
                      <img
                        src={linkedin}
                        style={{ width: '25%', height: '25%' }}
                        className="linkedinAnimation"
                      ></img>
                    </a>

                    <a href="https://www.google.com">
                      <img
                        src={github}
                        style={{ width: '25%', height: '25%' }}
                        className="githubAnimation"
                      ></img>
                    </a>

                    {/* <button className="button">Contact</button> */}
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
