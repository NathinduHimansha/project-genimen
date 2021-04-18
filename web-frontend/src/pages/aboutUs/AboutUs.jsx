import React from 'react';
import './aboutus.css';
import CurrentLocation from '../../components/header/CurrentLocation';
import hacker from '../../assests/hacker.png';
import twitter from '../../assests/twitter.png';
import linkedin from '../../assests/linkedin.png';
import github from '../../assests/github.png';

import FancyHeading from '../../components/text/FancyHeading';
import { useToasts } from 'react-toast-notifications';
import { useHistory } from 'react-router';

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
            {/*main topic of the heading*/}
            <h2 className="fancy-heading -no-margin">TEAM STORY</h2>
          </div>
          <div className=" -mt-60 -mb-90 content-padding">
            <FancyHeading decoratorClassName="fancy-heading2-decorator">
              <h2 className="heading2 -medium -no-margin heading2-sep-margin">
                {/*subtopic of the heading*/}
                Devs'
              </h2>
            </FancyHeading>
            {/*line seperator after the subtopic*/}
            <hr className="heading-sep" />
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
                    borderColor: 'black',
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
                        style={{ width: '15%', height: '15%', borderRadius: '50%' }}
                        className="twitterAnimation"
                      ></img>
                    </a>

                    <a href="https://www.google.com">
                      <img
                        src={linkedin}
                        style={{ width: '15%', height: '15%' }}
                        className="linkedinAnimation"
                      ></img>
                    </a>

                    <a href="https://www.google.com">
                      <img
                        src={github}
                        style={{ width: '15%', height: '15%' }}
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
                <img src={hacker} alt="Mike" style={{ width: '50%', marginLeft: '25%' }} />
                <div className="containerAbout">
                  <h2>Tharindu De Silva</h2>
                  <p className="titleAbout">Developer</p>
                  <div className="aboutDescrip">
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>mike@example.com</p>
                  </div>
                  <p className="platformlogoAlign">
                    <a href="https://www.google.com">
                      <img
                        src={twitter}
                        style={{ width: '15%', height: '15%', borderRadius: '50%' }}
                        className="twitterAnimation"
                      ></img>
                    </a>
                    <a href="https://www.google.com">
                      <img
                        src={linkedin}
                        style={{ width: '15%', height: '15%' }}
                        className="linkedinAnimation"
                      ></img>
                    </a>
                    <a href="https://www.google.com">
                      <img
                        src={github}
                        style={{ width: '15%', height: '15%' }}
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
                <img src={hacker} alt="John" style={{ width: '50%', marginLeft: '25%' }} />
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
                        style={{ width: '15%', height: '15%', borderRadius: '50%' }}
                        className="twitterAnimation"
                      ></img>
                    </a>
                    <a href="https://www.google.com">
                      <img
                        src={linkedin}
                        style={{ width: '15%', height: '15%' }}
                        className="linkedinAnimation"
                      ></img>
                    </a>
                    <a href="https://www.google.com">
                      <img
                        src={github}
                        style={{ width: '15%', height: '15%' }}
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
                <img src={hacker} alt="John" style={{ width: '50%', marginLeft: '25%' }} />
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
                        style={{ width: '15%', height: '15%', borderRadius: '50%' }}
                        className="twitterAnimation"
                      ></img>
                    </a>
                    <a href="https://www.google.com">
                      <img
                        src={linkedin}
                        style={{ width: '15%', height: '15%' }}
                        className="linkedinAnimation"
                      ></img>
                    </a>
                    <a href="https://www.google.com">
                      <img
                        src={github}
                        style={{ width: '15%', height: '15%' }}
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
                <img src={hacker} alt="John" style={{ width: '50%', marginLeft: '25%' }} />
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
                        style={{ width: '15%', height: '15%', borderRadius: '50%' }}
                        className="twitterAnimation"
                      ></img>
                    </a>
                    <a href="https://www.google.com">
                      <img
                        src={linkedin}
                        style={{ width: '15%', height: '15%' }}
                        className="linkedinAnimation"
                      ></img>
                    </a>
                    <a href="https://www.google.com">
                      <img
                        src={github}
                        style={{ width: '15%', height: '15%' }}
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
                <img src={hacker} alt="John" style={{ width: '50%', marginLeft: '25%' }} />
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
                        style={{ width: '15%', height: '15%', borderRadius: '50%' }}
                        className="twitterAnimation"
                      ></img>
                    </a>
                    <a href="https://www.google.com">
                      <img
                        src={linkedin}
                        style={{ width: '15%', height: '15%' }}
                        className="linkedinAnimation"
                      ></img>
                    </a>
                    <a href="https://www.google.com">
                      <img
                        src={github}
                        style={{ width: '15%', height: '15%' }}
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
