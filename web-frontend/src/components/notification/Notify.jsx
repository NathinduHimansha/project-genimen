import React from 'react';
import { ToastProvider, useToasts } from 'react-toast-notifications';

function withToastHook(Component) {
  return function ToastWrappedComponent(props) {
    const { addToast } = useToasts();
    return <Component {...props} toastHook={addToast} />;
  };
}
export default withToastHook;
