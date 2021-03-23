import React from 'react';

const Button = (props) => {
  let { iconSrc, utilClasses, iconSide, loading, onClick, outline } = props;
  outline = outline || false;
  loading = loading || false;
  iconSrc = iconSrc ? iconSrc : '';
  iconSide = iconSide ? iconSide : 'right';
  utilClasses = utilClasses ? [utilClasses] : [];
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
  const getIconClass = () => {
    return iconSrc ? 'icon-btn' : '';
  };
  const getOutlineClass = () => {
    return outline ? 'primary-btn-outline' : '';
  };

  return (
    <button
      onClick={onClick}
      className={
        getIconClass() +
        ' btn primary-btn ' +
        getOutlineClass() +
        iconBtnSideClass() +
        ' ' +
        utilClasses.join(' ')
      }
      disabled={loading}
    >
      <span className={'-bold -no-wrap ' + hideOnLoad()}>{props.children}</span>
      {iconSrc ? <img className={iconImgSideClass() + ' ' + hideOnLoad()} src={iconSrc} /> : ''}
      {showSpinnerOnLoad()}
    </button>
  );
};

export default Button;
