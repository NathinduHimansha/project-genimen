import React from 'react';
import logo from '../../assests/geniman_logo_new.png';
import search from '../../assests/Search.png';
import './exkey.css';
import Bargraph from '../../components/graphs/BarGraph';
// import WordCloud from '../../components/graphs/WordCloud';
import FancyHeading from '../../components/text/FancyHeading';
import Button from '../../components/buttons/Button';

class Exkey extends React.Component {
  analyzeAgain() {
    var i = 0;
    var counter = setInterval(function () {
      i++;
      // document.querySelector('.counter_right').textContent = i + '%';
      // document.querySelector('.counter_left').textContent = i + '%';

      if (i === 100) {
        clearInterval(counter);

        // document.querySelector('.counter_right').style.border = 'unset';
        // document.querySelector('.counter_right').style.display = 'none';
        // document.querySelector('.spinner_right').style.display = 'none';

        // document.querySelector('.counter_left').style.border = 'unset';
        // document.querySelector('.counter_left').style.display = 'none';
        // document.querySelector('.spinner_left').style.display = 'none';

        // document.querySelector('.frequency-bars ').style.visibility = 'visible';
        // document.querySelector('.word-cloud ').style.display = 'block';

        document
          .getElementsByClassName('progress-percentage')[0]
          .classList.add('barchart_animation');
        document
          .getElementsByClassName('progress-percentage')[1]
          .classList.add('barchart_animation');
        document
          .getElementsByClassName('progress-percentage')[2]
          .classList.add('barchart_animation');
        document
          .getElementsByClassName('progress-percentage')[3]
          .classList.add('barchart_animation');
        document
          .getElementsByClassName('progress-percentage')[4]
          .classList.add('barchart_animation');
        document
          .getElementsByClassName('progress-percentage')[5]
          .classList.add('barchart_animation');
        document
          .getElementsByClassName('progress-percentage')[6]
          .classList.add('barchart_animation');
        document
          .getElementsByClassName('progress-percentage')[7]
          .classList.add('barchart_animation');
        document
          .getElementsByClassName('progress-percentage')[8]
          .classList.add('barchart_animation');
      }
    }, 30);
  }

  render() {
    return (
      <div className="main-body">
        <div className="animated_heading">
          {/* <FancyHeading
            className="keywordTopic"
            heading="LOOK WHAT PEOPLE ARE TALKING OF PHONES..."
          ></FancyHeading> */}
        </div>
        <div className="body-split">
          <div className="-mt-60">
            <div className="analytics-container cards-split -mt-40">
              <div className="card-left">
                <div className="card-heading-name-left">
                  <h3 className="heading3 -medium">TREND</h3>
                </div>
                {/* <div className="container_left">
                  <div className="spinner_left"></div>
                </div>
                <div className="counter_left">0%</div> */}

                <div className="frequency-bars" style={{ visibility: 'visible' }}>
                  {[
                    { percentage: 32, label: 'gorilla glass' },
                    { percentage: 20, label: '108Mp camera' },
                    { percentage: 100, label: 'facial recognition' },
                    { percentage: 17, label: 'wonderful' },
                    { percentage: 50, label: 'Good Storage' },
                    { percentage: 67, label: 'onscreen fingerprint' },
                    { percentage: 98, label: 'LCD Display' },
                    { percentage: 14, label: 'Budget' },
                    { percentage: 62, label: 'Snap Dragon chip' },
                  ].map((item, i) => (
                    <Bargraph key={i} percentage={item.percentage} label={item.label}></Bargraph>
                  ))}
                </div>
              </div>
              <div className="card-right">
                <div className="card-heading-name-right">
                  <h3 className="heading3 -medium">OTHER KEYWORDS</h3>
                </div>
                <div
                  id="word_cloud"
                  className="bubble-chart"
                  style={{ visibility: 'hidden' }}
                ></div>
                {/* <WordCloud></WordCloud> */}
                {/* <div className="container_right">
                <div className="spinner_right"></div>
              </div>
              <div className="counter_right">0%</div>{' '} */}
                <div className="analyze_again">
                  <div className="-flex -mt-40">
                    <div className="-flex-right">
                      <Button onClick={this.analyzeAgain} iconSrc={search} loading={false}>
                        Start Analysing
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Exkey;
