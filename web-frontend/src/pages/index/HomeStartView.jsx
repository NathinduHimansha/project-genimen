import React from 'react';
import MenuCard from '../../components/menucard/MenuCard';
import sturasimg from '../../assests/stimg1.png';
import stpssaimg from '../../assests/stimg2.png';
import stexkeyimg from '../../assests/stimg3.png';
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
        <h2 className="fancy-heading -no-margin">SELECT AN OPTION TO ANALYSE</h2>
      </div>

      <div className="menu-card-grid">
        <MenuCard
          img={sturasimg}
          title="sentiment according to features"
          subTitle="Select Features and analyse the insight"
          btnLink="/analytics/uras"
        >
          Select features you want to analyse and get an insight. This will give you a sentiment
          score of the selected features from variety of phone models and overall score for the
          features
        </MenuCard>

        <MenuCard
          img={stpssaimg}
          title="sentiment according to brands"
          subTitle="Select brands and analyse the insight"
          btnLink="/analytics/pssa"
        >
          Select mobile brands which you want to analyse and get an insight. This will give you a
          sentiment score of the selected mobile brand from variety of common mobile phone models
        </MenuCard>
        <MenuCard
          img={stexkeyimg}
          title="trending features visualization"
          subTitle="analyse the most trending features"
          btnLink="/analytics/exkey"
        >
          This will give you a good insight on trending features of the mobile phones.By analysing
          this you get an good idea on what are the features mostly consumers prefer and what should
          be in your product
        </MenuCard>
      </div>
    </div>
  );
}

export default HomeStartView;
