import React from 'react';
import logo from '../../assests/geniman_logo_new.png';
import search from '../../assests/Search.png';
import './exkey.css';
import Bargraph from '../../components/graphs/BarGraph';
// import WordCloud from '../../components/graphs/WordCloud';

class Exkey extends React.Component {
  analyzeAgain() {
    var i = 0;
    var counter = setInterval(function () {
      i++;
      document.querySelector('.counter_right').textContent = i + '%';
      document.querySelector('.counter_left').textContent = i + '%';

      if (i === 100) {
        clearInterval(counter);

        document.querySelector('.counter_right').style.border = 'unset';
        document.querySelector('.counter_right').style.display = 'none';
        document.querySelector('.spinner_right').style.display = 'none';

        document.querySelector('.counter_left').style.border = 'unset';
        document.querySelector('.counter_left').style.display = 'none';
        document.querySelector('.spinner_left').style.display = 'none';

        document.querySelector('.frequency-bars ').style.visibility = 'visible';
        document.querySelector('.bubble-chart ').style.visibility = 'visible';

        document.getElementsByClassName('progress-percentage')[0].classList.add('animation');
        document.getElementsByClassName('progress-percentage')[1].classList.add('animation');
        document.getElementsByClassName('progress-percentage')[2].classList.add('animation');
        document.getElementsByClassName('progress-percentage')[3].classList.add('animation');
        document.getElementsByClassName('progress-percentage')[4].classList.add('animation');
        document.getElementsByClassName('progress-percentage')[5].classList.add('animation');
        document.getElementsByClassName('progress-percentage')[6].classList.add('animation');
        document.getElementsByClassName('progress-percentage')[7].classList.add('animation');
        document.getElementsByClassName('progress-percentage')[8].classList.add('animation');
      }
    }, 30);
  }

  render() {
    return (
      <div className="main-container">
        <div className="body">
          <p className="keyword_topic">
            <b>LOOK WHAT PEOPLE ARE TALKING OF PHONES...</b>
          </p>
          <div className="body-left-split">
            <div className="card-left">
              <p className="topic-frequency-distribution-bargraph">Trend</p>
              <div className="container_left">
                <div className="spinner_left"></div>
              </div>
              <div className="counter_left">0%</div>
            </div>
          </div>
          <div className="frequency-bars" style={{ visibility: 'hidden' }} id="bars">
            {[
              { percentage: 32, label: 'gorilla glass' },
              { percentage: 20, label: '108Mp camera' },
              { percentage: 100, label: 'facial recognition' },
              { percentage: 17, label: 'wonderful' },
              { percentage: 50, label: '8GB Ram' },
              { percentage: 67, label: 'onscreen fingerprint' },
              { percentage: 98, label: 'LCD Display' },
              { percentage: 14, label: 'Budget' },
              { percentage: 62, label: 'Snap Dragon chip' },
            ].map((item, i) => (
              <Bargraph key={i} percentage={item.percentage} label={item.label}></Bargraph>
            ))}
          </div>
          <div className="body-right-split">
            <div className="card-right">
              <p className="keywords-topic">OTHER KEYWORDS</p>
              <div id="word_cloud" className="bubble-chart" style={{ visibility: 'hidden' }}>
                {/* <WordCloud></WordCloud> */}
              </div>
              <div className="container_right">
                <div className="spinner_right"></div>
              </div>
              <div className="counter_right">0%</div>{' '}
              <div className="-flex -mt-40">
                <div className="analyze_again">
                  <button
                    className="btn primary-btn icon-btn -flex-right"
                    onClick={this.analyzeAgain}
                    id="analyze_button"
                  >
                    <span className="-bold">Start Analysing</span>
                    <img className="left" src={search} style={{ width: '20px' }} />
                  </button>
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
