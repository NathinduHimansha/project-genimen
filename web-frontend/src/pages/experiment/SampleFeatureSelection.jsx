import React, { useEffect } from 'react';
import IconHeading from '../../components/text/IconHeading';
import displayIcon from '../../assests/Display.png';
import sizeIcon from '../../assests/Size.png';
import fingerprintIcon from '../../assests/FingerPrint.png';
import headphoneJackIcon from '../../assests/HeadphoneJack.png';
import './feature-selection.css';

const SampleFeatureSelection = (props) => {
  const getIconUrl = (feature) => {
    if (feature.toLowerCase() == 'display') {
      return 'var(--display-icon)';
    }
    if (feature.toLowerCase() == 'size') {
      return 'var(--size-icon)';
    }
    if (feature.toLowerCase() == 'fingerprint') {
      return 'var(--fingerprint-icon)';
    }
    if (feature.toLowerCase() == 'headphone-jack') {
      return 'var(--headphone-jack-icon)';
    }
  };

  const display = getIconUrl('display');
  const size = getIconUrl('size');
  const fingerprint = getIconUrl('fingerprint');
  const headphoneJack = getIconUrl('headphone-jack');

  const featureTypes = [
    {
      feature: 'Display',
      types: ['Normal', 'Curved'],
      icon: display,
    },
    {
      feature: 'Size',
      types: ['Normal', 'Large'],
      icon: size,
    },
    {
      feature: 'Fingerprint',
      types: ['Onscreen', 'Rear'],
      icon: fingerprint,
    },
    {
      feature: 'Headphone-Jack',
      types: ['Available', 'None'],
      icon: headphoneJack,
    },
  ];

  const addIconUrl = (featureTypes) => {
    return featureTypes.map((feature) => {
      return {
        ...feature,
        icon: getIconUrl(feature.feature),
      };
    });
  };

  return (
    <div className="feature-types feature-types-selection-menu -flex -flex-col -flex-center">
      {featureTypes.map((feature, i) => (
        <div key={i} className="-flex -mb-20">
          <IconHeading size="small" iconUrl={feature.icon}>
            <label htmlFor="select-feature-type-display" className="select-label">
              <h2 className="heading3 -regular -no-margin feature-type-heading">
                {feature.feature}
              </h2>
            </label>
          </IconHeading>
          <select
            defaultValue="select-feature"
            className="select-feature select large heading4 -regular -flex-right"
            id="select-feautre-type-display"
          >
            <option value="select-feature" disabled>
              Select Type
            </option>
            {feature.types.map((type, i) => (
              <option key={type + i} value="display">
                {type}
              </option>
            ))}
          </select>
        </div>
      ))}

      {/* <div className="feature-type-icons -flex -flex-col -flex-center"> */}
      {/* <h2 className="heading2 -regular">Display</h2> */}
      {/* <h2 className="heading2 -regular">Size</h2> */}
      {/* <h2 className="heading2 -regular">Fingerprint</h2> */}
      {/* <h2 className="heading2 -regular">Headphone-Jack</h2> */}
      {/* </div> */}
    </div>
  );
};

export default SampleFeatureSelection;
