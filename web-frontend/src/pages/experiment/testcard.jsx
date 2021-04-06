import React from 'react';
import startimg from '../../assests/stimg1.png';
import './testcard.css';

function testcard() {
  return (
    <div className="menu-card">
      <article class="card">
        <div class="thumb">
          <img src={startimg} className="menu-img" />
        </div>
        <div class="infos">
          <h2 class="title">sentiment by features</h2>
          <h3 class="seats">Select Features and analyse the insight</h3>

          <p class="txt">
            Select Features you want to analyse and get an insight. This will give you a sentiment
            score of the selected features from variety of phones and overall score for the features{' '}
          </p>

          <div class="details-div">
            <button class="details">Start</button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default testcard;
