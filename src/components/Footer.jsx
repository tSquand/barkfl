import React from "react";

const address = "507+All+Saints+St,+Tallahassee,+FL,+32303";
const phoneNumber = "850-900-5936";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='row'>
          <div className='col-md-4 text-center'>
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
              <a className='phone-link hours-text' href={`tel:${phoneNumber}`}>
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
            <p className='hours-text'>
              <strong>Kitchen closes at midnight Wednesday-Saturday!</strong>
            </p>
          </div>
          <div className='col-md-4 text-center'>
            <img src='asset3.png' className='bark-logo-img'></img>
          </div>
          <div className='col-md-4 text-center'>
            <p className='footer-email'>
              <a className='custom-link' href='mailto:thebarkfl@gmail.com'>
                <strong>thebarkfl@gmail.com</strong>
              </a>{" "}
              - General inquiry
            </p>
            <p className='footer-email'>
              <a className='custom-link' href='mailto:thebarkbooking@gmail.com'>
                <strong>thebarkbooking@gmail.com</strong>
              </a>{" "}
              - Event booking
            </p>
            <p className='footer-email'>
              <a
                className='custom-link'
                href='mailto:thebarkcatering@gmail.com'
              >
                <strong>thebarkcatering@gmail.com</strong>
              </a>{" "}
              - Catering
            </p>
            <p className='footer-email'>
              <a
                className='custom-link'
                href='mailto:harvestspoonfl@gmail.com.com'
              >
                <strong>harvestspoonfl@gmail.com</strong>
              </a>{" "}
              - Harvest Spoon Catering
            </p>
            <div className='footer-icons'>
              <a
                href='https://thebarkfl.square.site/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src='logo-square.svg' className='icon' alt='Square'></img>
              </a>
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
              <a
                href='https://www.instagram.com/thebarkfl/?hl=en'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src='logo-instagram.svg'
                  className='icon'
                  alt='Instagram'
                ></img>
              </a>
              <a
                href='https://www.facebook.com/TheBarkFL'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src='logo-facebook.svg'
                  className='icon'
                  alt='Facebook'
                ></img>
              </a>
              <a
                href='mailto:thebarkfl@gmail.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src='logo-email.svg' className='icon' alt='Email'></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
