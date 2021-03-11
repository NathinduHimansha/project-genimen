import React from 'react';

const NetPolarity = (props) => {
  let { size, iconUrl, utilClasses } = props;
  const getIconSizeClass = (size) => {
    const pref = 'icon-';
    return `${pref}${size}`;
  };
  const iconSizeClass = getIconSizeClass(size);
  utilClasses = utilClasses ? utilClasses : [];

  return (
    <div className="icon-wrapper">
      <div
        style={{ backgroundImage: iconUrl }}
        className={iconSizeClass + ' icon-background ' + utilClasses.join(' ')}
      />
      {props.children}
    </div>
  );
};

export default NetPolarity;
