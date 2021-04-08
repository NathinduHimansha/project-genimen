import React from 'react';
import MenuCard from '../../components/menucard/MenuCard';
import sturasimg from '../../assests/stimg1.png';
import IconHeading from '../../components/text/IconHeading';
import { NavLink } from 'react-router-dom';

function HomeStartView() {
  return (
    <div className="navbar-page-container -mb-40">
      <div className="app-heading-header content-padding -flex -flex-col">
        <div className="-mb-30">
          <NavLink to="/analytics/uras" className="-text-decoration-none">
            <IconHeading size="extra-small" iconUrl="var(--arrow-back-icon)">
              <h4 className="heading4 -no-margin">
                <span className="header-go-back">Back</span>
              </h4>
            </IconHeading>
          </NavLink>
        </div>
        <h2 className="fancy-heading -no-margin">SELECT OPTION TO ANALYSE</h2>
      </div>

      <div className="menu-card-grid">
        <MenuCard
          img={sturasimg}
          title="sentiment by features"
          subTitle="Select Features and analyse the insight"
          btnLink="/analytics/uras"
        >
          Select features you want to analyse and get an insight. This will give you a sentiment
          score of the selected features from variety of phones and overall score for the features
        </MenuCard>

        <MenuCard
          img={sturasimg}
          title="sentiment by features"
          subTitle="Select Features and analyse the insight"
          btnLink=""
        >
          Select features you want to analyse and get an insight. This will give you a sentiment
          score of the selected features from variety of phones and overall score for the features
        </MenuCard>
        <MenuCard
          img={sturasimg}
          title="sentiment by features"
          subTitle="Select Features and analyse the insight"
          btnLink=""
        >
          Select features you want to analyse and get an insight. This will give you a sentiment
          score of the selected features from variety of phones and overall score for the features
        </MenuCard>
      </div>
    </div>
  );
}

export default HomeStartView;
