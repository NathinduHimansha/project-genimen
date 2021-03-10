import React from 'react';
import display from '../../assests/Display.png';
import size from '../../assests/Size.png';
import fingerprint from '../../assests/FingerPrint.png';
import headphoneJack from '../../assests/HeadphoneJack.png';
import './card.css';

const SampleSelect = (props) => {
  return (
    <div style={{ marginTop: '20px', marginBottom: '20px' }}>
      <div className="feature-types feature-types-selection-menu -flex -flex-col -flex-center">
        <div className="pre-icon">
          <div className="pre-icon-wrapper icon-medium">
            <img src={display} className="" />
          </div>
          <label htmlFor="select-feature-type-display" className="select-label">
            <h2 className="heading2 -regular feature-type-heading">Display</h2>
          </label>
          <select
            defaultValue="select-feature"
            className="select large heading3 -regular -flex-right"
            id="select-feautre-type-display"
          >
            <option value="select-feature" disabled>
              Select Feature
            </option>
            <option value="display">Curved</option>
          </select>
        </div>
        <div className="pre-icon">
          <div className="pre-icon-wrapper icon-medium">
            <img src={size} className="" />
          </div>
          <label htmlFor="select-feature-type-size" className="select-label">
            <h2 className="heading2 -regular feature-type-heading">Size</h2>
          </label>
          <select
            defaultValue="select-feature"
            className="select large heading3 -regular -flex-right"
            id="select-feautre-type-size"
          >
            <option value="select-feature" disabled>
              Select Feature
            </option>
            <option value="display">Normal</option>
          </select>
        </div>
        <div className="pre-icon">
          <div className="pre-icon-wrapper icon-medium">
            <img src={fingerprint} className="icon-scale-fingerprint" />
          </div>
          <label htmlFor="select-feature-type-fingerprint" className="select-label">
            <h2 className="heading2 -regular feature-type-heading">Fingerprint</h2>
          </label>
          <select
            defaultValue="select-feature"
            className="select large heading3 -regular -flex-right"
            id="select-feautre-type-fingerprint"
          >
            <option value="select-feature" disabled>
              Select Feature
            </option>
            <option value="display">Onscreen</option>
          </select>
        </div>
        <div className="pre-icon">
          <div className="pre-icon-wrapper icon-medium">
            <img src={headphoneJack} className="icon-scale-headphone-jack" />
          </div>
          <label htmlFor="select-feature-type-headphone-jack" className="select-label">
            <h2 className="heading2 -regular feature-type-heading">Headphone-Jack</h2>
          </label>
          <select
            defaultValue="select-feature"
            className="select large heading3 -regular -flex-right"
            id="select-feautre-type-headphone-jack"
          >
            <option value="select-feature" disabled>
              Select Feature
            </option>
            <option value="display">Curved</option>
          </select>
        </div>

        {/* <div className="feature-type-icons -flex -flex-col -flex-center"> */}
        {/* <h2 className="heading2 -regular">Display</h2> */}
        {/* <h2 className="heading2 -regular">Size</h2> */}
        {/* <h2 className="heading2 -regular">Fingerprint</h2> */}
        {/* <h2 className="heading2 -regular">Headphone-Jack</h2> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default SampleSelect;
