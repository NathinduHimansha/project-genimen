import React from 'react';
import startimg from '../../assests/stimg1.png';
import './menucard.css';

function MenuCard(props) {
  const { img, title, subTitle, btnLink } = props;

  const buttonClick = () => {};

  return (
    <div className="menu-card">
      <article className="startcard">
        <div className="startcard-img">
          <img src={img} className="startcard-menu-img" />
        </div>
        <div className="startcard-info">
          <h2 className="startcard-title">{title}</h2>
          <h3 className="startcard-sub-title">{subTitle}</h3>

          <p className="startcard-text">
            {props.children}
            {/* Select features you want to analyse and get an insight. This will give you a sentiment
            score of the selected features from variety of phones and overall score for the features{' '} */}
          </p>

          <div className="startcard-start">
            <button onClick={() => buttonClick()} className="startcard-start-btn">
              START
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default MenuCard;
