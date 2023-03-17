import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toaster = () => {
  return (
    <ToastContainer
    position= "top-center"
    autoClose= '2500'
    hideProgressBar= 'true'
    closeOnClick= 'true'
    pauseOnHover= 'true'
    draggable= 'true'
    theme= "colored"
    font-family= 'Space Grotesk, sans-serif'
    />
  );
};

export default Toaster;