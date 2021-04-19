import React from 'react';

const Button = (props) => {
  let {
    value,
    type,
    iconSrc,
    utilClasses,
    iconSide,
    loading,
    onClick,
    outline,
    disabled,
    loginIconSrc,
  } = props;
  outline = outline || false;
  loading = loading || false;
  iconSrc = iconSrc ? iconSrc : '';
  loginIconSrc = loginIconSrc ? loginIconSrc : '';
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
    return iconSrc || loginIconSrc ? 'icon-btn' : '';
  };
  const getOutlineClass = () => {
    return outline ? 'primary-btn-outline' : '';
  };
  const isDisabled = () => {
    return disabled || loading;
  };

  return (
    <button
      onClick={onClick}
      type={type || ''}
      value={value || ''}
      className={
        getIconClass() +
        ' btn primary-btn ' +
        getOutlineClass() +
        iconBtnSideClass() +
        ' ' +
        utilClasses.join(' ')
      }
      disabled={isDisabled()}
    >
      {loginIconSrc ? <img className="icon-btn-left nav-propic" src={loginIconSrc} /> : ''}
      <span className={'-bold -no-wrap ' + hideOnLoad()}>{props.children}</span>
      {iconSrc ? <img className={iconImgSideClass() + ' ' + hideOnLoad()} src={iconSrc} /> : ''}
      {showSpinnerOnLoad()}
    </button>
  );
};

export default Button;
