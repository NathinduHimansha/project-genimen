import React from 'react';
import { NavLink } from 'react-router-dom';
import './menucard.css';

function MenuCard(props) {
  const { img, title, subTitle, btnLink } = props;

  return (
    <div className="menu-card">
      <article className="startcard -mb-40">
        <div className="startcard-img ">
          <img src={img} className="startcard-menu-img" />
        </div>
        <div className="startcard-info">
          <h2 className="startcard-title">{title}</h2>
          <h3 className="startcard-sub-title">{subTitle}</h3>

          <p className="startcard-text">{props.children}</p>

          <div className="startcard-start">
            <NavLink to={btnLink}>
              <button className="startcard-start-btn">ANALYSE</button>
            </NavLink>
          </div>
        </div>
      </article>
    </div>
  );
}

export default MenuCard;
