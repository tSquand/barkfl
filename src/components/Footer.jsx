import React from "react";

const address = "507+All+Saints+St,+Tallahassee,+FL,+32303";
const phoneNumber = "850-900-5936";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='row'>
          <div className='col-md-6 text-center'>
            <p className='hours-text'>
              <a
                className='custom-link'
                href={`https://www.google.com/maps/search/?api=1&query=${address}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                507 All Saints St, Tallahassee, FL, 32301
              </a>
            </p>
            <p>
              <a className='phone-link' href={`tel:${phoneNumber}`}>
                (850) 900-5936
              </a>
            </p>
            <p className='hours-text'>
              <strong>Monday</strong> CLOSED
            </p>
            <p className='hours-text'>
              <strong>Tuesday</strong> 11:00am - 10:00pm
            </p>
            <p className='hours-text'>
              <strong>Wednesday - Saturday</strong> 11:00am - 2:00am
            </p>
            <p className='hours-text'>
              <strong>Sunday</strong> 11:00am - 10:00pm
            </p>
            <p>
              <strong>Kitchen closes at midnight Wednesday-Saturday!</strong>
            </p>
          </div>
          <div className='col-md-6'>
            <h4>Follow Us</h4>
            {/* Add your social media links/icons here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
