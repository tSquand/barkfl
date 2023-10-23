function Contact({ address }) {
  const phoneNumber = "850-900-5936";
  return (
    <div className='container text-center'>
      <h1>Contact</h1>
      <div className='row align-items-start'>
        <div>
          <h3>FOLLOW US</h3>
          <div>
            <a
              href='https://www.instagram.com/thebarkfl/?hl=en'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src='logo-instagram.svg'
                className='icon'
                alt='Instagram Logo'
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
                alt='Facebook Logo'
              ></img>
            </a>
          </div>
          <h3>PHONE</h3>
          <p>
            <a className='phone-link' href={`tel:${phoneNumber}`}>
              (850) 900-5936
            </a>
          </p>
          <h3>EMAIL</h3>
          <p>
            <a className='custom-link' href='mailto:thebarkfl@gmail.com'>
              thebarkfl@gmail.com
            </a>
          </p>
          <h3>ADDRESS</h3>
          <p>
            <a
              className='custom-link'
              href={`https://www.google.com/maps/search/?api=1&query=${address}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              507 All Saints St, Tallahassee, FL, 32301
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
