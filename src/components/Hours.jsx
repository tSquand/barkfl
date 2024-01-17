import "./styles.css";
import Square from "./Square";

function Hours({ address }) {
  const phoneNumber = "850-900-5936";

  const squaresData = [
    {
      imageUrl: "menu-pic.jpg",
      text: "View the menu",
      link: "/square1",
    },
    {
      imageUrl: "brunch-pic.jpg",
      text: "View the brunch menu",
      link: "/square2",
    },
    {
      imageUrl: "catering-pic.jpg",
      text: "Catering",
      link: "/square3",
    },
    {
      imageUrl: "event-pic.jpg",
      text: "Events",
      link: "/square4",
    },
  ];
  return (
    <div>
      <img
        src='bark-welcome.jpg'
        className='welcome-banner'
        alt='welcome'
      ></img>
      <div className='squares-container'>
        {squaresData.map((square, index) => (
          <Square key={index} {...square} />
        ))}
      </div>
      <div className='container text-center'>
        <div className='hours-page'>
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
      What goes here
    </div>
  );
}

export default Hours;
