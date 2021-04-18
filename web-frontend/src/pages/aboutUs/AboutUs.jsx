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
            <p className="labelAbout">OUR STORY</p>
            {/* <h1 className="aboutDescripHeading">GET TO KNOW ABOUT PROJECT GENIMEN</h1> */}
            <p className="aboutSubDescrip" style={{ marginLeft: '8%' }}>
              Headquartered in Sri Lanka with offices in Oslo, Norway, 99x is one of Asia’s best
              workplaces and a global leader in agile product engineering and technology innovation.
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
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
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
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
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
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
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
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
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
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
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
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
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
