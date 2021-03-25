import React from 'react'
import { ToastProvider, useToasts } from 'react-toast-notifications';

export default function ReactToast(props) {
    const userType = props.type;
    const userMessage = props.message;
    const userClose = props.close;
    const userTime = props.timeout;
    
    const { addToast } = useToasts();
    console.log("func cmop")
    console.log(userClose)
    console.log(userTime)



    function SwitchCase(props) {
        switch(props.value) {
          case 'success':
            addToast(userMessage , {
        appearance: userType,
        id: 'toast-success',
        autoDismiss:userClose,
        autoDismissTimeout:userTime,
      });
          case 'error':
            addToast(userMessage , {
        appearance: userType,
        id: 'toast-error',
        autoDismiss:userClose,
        autoDismissTimeout:userTime,
      });

      case 'warning':
            addToast(userMessage , {
        appearance: userType,
        id: 'toast-warning',
        autoDismiss:userClose,
        autoDismissTimeout:userTime,
      });

      case 'info':
            addToast(userMessage , {
        appearance: userType,
        id: 'toast-info',
        autoDismiss:userClose,
        autoDismissTimeout:userTime,
      });
          default:
            return '';
        }}
      
    
    return (
        <div className="container">
        <SwitchCase value={userType} />
    </div>
    )
}
