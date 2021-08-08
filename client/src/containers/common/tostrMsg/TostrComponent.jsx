// import React from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function executeTostr(msg, config={}) {

    toast.configure();

    let options = {
        // top-center, top-right, top-left, bottom-right, bottom-left, bottom-center
            position: config.position || 'top-right',
        // false or number in ms
            autoClose: config.autoClose || 3000,
        // false or element (react-element)
            closeButton: config.closeButton || true,
        // bool
            hideProgressBar: config.hideProgressBar || false,
        // bool
            pauseOnHover: config.pauseOnHover || true,
        // bool
            pauseOnFocusLoss: config.hideprogressBar || true,
        // bool
            closeOnClick: config.hideprogressBar || false,
        // toastClassName: config.toastClassName || '',
        // bool
            draggable: config.draggable || false,
        // string or number
            containerId: config.containerId || ''
    }

    switch (config.type) {
        case 'success':
            toast.success(msg, options);
            break;
        case 'error':
            toast.error(msg, options);
            break;
        case 'info':
            toast.info(msg, options);
            break;
        case 'warn':
            toast.warn(msg, options);
            break;
    
        default:
            toast(msg, options);
            break;
    }
    
  }
