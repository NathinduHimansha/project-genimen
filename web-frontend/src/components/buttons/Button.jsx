import React from 'react';

const Button = (props) => {
  let { iconSrc, utilClasses, iconSide, loading } = props;
  loading = loading || false;
  iconSrc = iconSrc ? iconSrc : '';
  iconSide = iconSide ? iconSide : 'right';
  utilClasses = utilClasses ? utilClasses : [];
  const hideOnLoad = () => {
    return loading ? '-hidden' : '';
  };
  const iconBtnSideClass = () => {
    return iconSide == 'right' ? '' : '-flex-revers';
  };
  const showSpinnerOnLoad = () => {
    return loading ? <div className="spinner spinner-small"></div> : '';
  };
  const iconImgSideClass = () => {
    return iconSide == 'right' ? 'icon-btn-right' : 'icon-btn-left';
  };

  return (
    <button
      className={'btn primary-btn icon-btn ' + iconBtnSideClass() + ' ' + utilClasses.join(' ')}
      disabled={loading}
    >
      <span className={'-bold -no-wrap ' + hideOnLoad()}>{props.children}</span>
      <img className={iconImgSideClass() + ' ' + hideOnLoad()} src={iconSrc} />
      {showSpinnerOnLoad()}
    </button>
  );
};

export default Button;
