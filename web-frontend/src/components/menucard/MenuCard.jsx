import React from 'react';
import startimg from '../../assests/stimg1.png';
import './menucard.css';

function MenuCard(props) {
  const { img, title, subTitle, btnLink } = props;

  const buttonClick = () => {};

  return (
    <div className="menu-card">
      <article class="startcard">
        <div class="startcard-img">
          <img src={img} className="startcard-menu-img" />
        </div>
        <div class="startcard-info">
          <h2 class="startcard-title">{title}</h2>
          <h3 class="startcard-sub-title">{subTitle}</h3>

          <p class="startcard-text">
            {props.children}
            {/* Select features you want to analyse and get an insight. This will give you a sentiment
            score of the selected features from variety of phones and overall score for the features{' '} */}
          </p>

          <div class="startcard-start">
            <button onClick={() => buttonClick()} class="startcard-start-btn">
              START
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default MenuCard;
