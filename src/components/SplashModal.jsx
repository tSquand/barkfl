import React from "react";
import "./SplashModal.css";

const SplashModal = ({ onClose, children }) => {
  return (
    <div className='modal-overlay' onClick={onClose}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <div>
          <h1>Looking to order online?</h1>
          <div>
            <a
              href='https://thebarkfl.square.site/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Order for take-out via Square
            </a>
          </div>
          <div>
            <a
              href='https://www.doordash.com/ja-JP/store/the-bark-tallahassee-352754/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Order for delivery via DoorDash
            </a>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default SplashModal;
