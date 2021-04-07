import React from 'react';
import startimg from '../../assests/stimg1.png';
import './testcard.css';

function testcard() {
  return (
    <div className="menu-card">
      <article class="startcard">
        <div class="startcard-img">
          <img src={startimg} className="startcard-menu-img" />
        </div>
        <div class="startcard-info">
          <h2 class="startcard-title">sentiment by features</h2>
          <h3 class="startcard-sub-title">Select Features and analyse the insight</h3>

          <p class="startcard-text">
            Select Features you want to analyse and get an insight. This will give you a sentiment
            score of the selected features from variety of phones and overall score for the features{' '}
          </p>

          <div class="startcard-start-btn">
            <button class="startcard-start-btn">Start</button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default testcard;
