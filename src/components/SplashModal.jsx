import React from "react";
import "./SplashModal.css";

const SplashModal = ({ onClose, children }) => {
  return (
    <div className='modal-overlay' onClick={onClose}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <button className='close-button' onClick={onClose}>
          X
        </button>
        <div>
          <h1>Looking to order online?</h1>
          <div className='order-options'>
            <div>
              Pick-up with Square
              <a
                href='https://thebarkfl.square.site/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src='logo-square.svg' className='icon' alt='Square'></img>
              </a>
            </div>
            <div>
              Delivery with DoorDash
              <a
                href='https://www.doordash.com/ja-JP/store/the-bark-tallahassee-352754/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src='logo-doordash.svg'
                  className='icon'
                  alt='Doordash'
                ></img>
              </a>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default SplashModal;
