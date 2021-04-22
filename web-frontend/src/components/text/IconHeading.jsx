import React from 'react';

const IconHeading = (props) => {
  let { size, iconUrl, utilClasses, align } = props;
  align = align === undefined ? 'left' : align;
  const getIconSizeClass = (size) => {
    const pref = 'icon-';
    return `${pref}${size}`;
  };
  const iconSizeClass = getIconSizeClass(size);
  utilClasses = utilClasses ? utilClasses : [];

  return (
    <div className="icon-wrapper">
      {align == 'left' ? (
        <>
          <div
            style={{ backgroundImage: iconUrl }}
            className={`${iconSizeClass} icon-background ${utilClasses.join(' ')}`}
          />
          {props.children}
        </>
      ) : (
        <>
          {props.children}
          <div
            style={{ backgroundImage: iconUrl }}
            className={`${iconSizeClass} icon-background ${utilClasses.join(' ')}`}
          />
        </>
      )}
    </div>
  );
};

export default IconHeading;
