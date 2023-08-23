function Hours({ address }) {
  const phoneNumber = "850-900-5936";
  return (
    <div className='container-sm text-center'>
      <div className='hours-page'>
        <img className='img-fluid' src='barklogo.jpg'></img>
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
          <strong>Wednesday</strong> 11:00am - 2:00am
        </p>
        <p className='hours-text'>
          <strong>Thursday</strong> 11:00am - 2:00am
        </p>
        <p className='hours-text'>
          <strong>Friday</strong> 11:00am - 2:00am
        </p>
        <p className='hours-text'>
          <strong>Saturday</strong> 11:00am - 2:00am
        </p>
        <p className='hours-text'>
          <strong>Sunday</strong> 11:00am - 10:00pm
        </p>
        <p>
          <strong>Kitchen closes at midnight Wednesday-Saturday!</strong>
        </p>
      </div>
    </div>
  );
}

export default Hours;
