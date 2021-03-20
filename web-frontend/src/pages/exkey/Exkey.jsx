import React from 'react';
import search from '../../assests/Search.png';
import './exkey.css';
import Bargraph from '../../components/graphs/BarGraph';
// import WordCloud from '../../components/graphs/WordCloud';
import FancyHeading from '../../components/text/FancyHeading';
import Button from '../../components/buttons/Button';
import banner from '../../assests/MagnifierAnalysingBanner.png';
import magnify_barChart from '../../assests/bar_chart.png';

class Exkey extends React.Component {
  analyzeAgain() {
    document.querySelector('.loader_description').style.animation =
      'typewriter_loadingDescription 2s steps(10) 10ms normal both';

    document.querySelectorAll('.bar_loading').forEach(function (current) {
      let startWidth = 0;
      const endWidth = current.dataset.size;

      /* 
      setInterval() time sholud be set as trasition time / 100. 
      In our case, 2 seconds / 100 = 20 milliseconds. 
      */
      const interval = setInterval(frame, 30);

      function frame() {
        if (startWidth >= endWidth) {
          clearInterval(interval);
        } else {
          startWidth++;
          current.style.width = `${endWidth}%`;
          current.firstElementChild.innerText = `${startWidth}%`;
        }
      }
    });

    var i = 0;
    var counter = setInterval(function () {
      i++;

      document.querySelector('.analyze_again ').style.visibility = 'hidden';
      document.querySelector('.analysing_banner ').style.visibility = 'hidden';
      document.querySelector('.loader_progress ').style.visibility = 'visible';

      if (i === 100) {
        clearInterval(counter);

        document.querySelector('.frequency-bars ').style.visibility = 'visible';
        document.querySelector('.card-left ').style.visibility = 'visible';
        document.querySelector('.card-right ').style.visibility = 'visible';
        document.querySelector('.loader_progress ').style.visibility = 'hidden';

        // document.querySelector('.word-cloud ').style.display = 'block';

        document
          .getElementsByClassName('progress-percentage')[0]
          .classList.add('barchart_animation');

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
          <div className="-mb-40">
            <FancyHeading
              heading="LOOK WHAT PEOPLE ARE TALKING OF PHONES..."
              style={{ visibility: 'hidden' }}
            ></FancyHeading>
            <hr className="heading-sep" />
          </div>
        </div>

        <div className="body-split">
          <div className="-mt-60">
            <div className="analytics-container cards-split -mt-40">
              <div className="card-left" style={{ visibility: 'hidden' }}>
                <div className="card-heading-name-left">
                  <h3 className="heading3 -medium">TREND</h3>
                  <div className="analysing_banner" style={{ visibility: 'visible' }}>
                    <img className="magnify_banner" src={banner} style={{ width: '400px' }} />
                    <img
                      className="magnify_barChart"
                      src={magnify_barChart}
                      style={{ width: '400px', height: '300px' }}
                    />
                  </div>
                </div>

                <div className="frequency-bars" style={{ visibility: 'hidden' }}>
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

              <div className="card-right" style={{ visibility: 'hidden' }}>
                <div className="card-heading-name-right -mb-auto -flex-middle">
                  <h3 className="heading3 -medium">OTHER KEYWORDS</h3>
                </div>
                <div
                  id="word_cloud"
                  className="bubble-chart"
                  style={{ visibility: 'hidden' }}
                ></div>

                <div className="loader_progress" style={{ visibility: 'hidden' }}>
                  <div className="line_progress"></div>
                  <div className="line_progress"></div>
                  <div className="line_progress"></div>
                  <div className="line_progress"></div>
                  <div className="wrapper_progressBar">
                    <div className="progress-bar">
                      <div className="bar_loading" data-size="100">
                        <span className="perc"></span>
                      </div>
                    </div>
                  </div>
                  <div className="loader_description" id="loader_descriptionID">
                    <h2 className="heading3 -medium -no-margin feature-type-heading">
                      ANALYSING IN PROGRESS...
                    </h2>
                  </div>
                </div>

                <div className="analyze_again" style={{ visibility: 'visible' }}>
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
