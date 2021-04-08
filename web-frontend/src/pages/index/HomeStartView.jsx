import React from 'react';
import MenuCard from '../../components/menucard/MenuCard';
import sturasimg from '../../assests/stimg1.png';

function HomeStartView() {
  return (
    <div>
      <MenuCard
        img={sturasimg}
        title="sentiment by features"
        subTitle="Select Features and analyse the insight"
        btnLink=""
      >
        Select features you want to analyse and get an insight. This will give you a sentiment score
        of the selected features from variety of phones and overall score for the features
      </MenuCard>
    </div>
  );
}

export default HomeStartView;
