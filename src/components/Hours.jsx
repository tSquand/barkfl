import "./styles.css";
import Square from "./Square";

function Hours({ handleSquareClick }) {
  const squaresData = [
    {
      imageUrl: "menu-pic.jpg",
      text: "Menu \u2192",
      link: "menu",
    },
    {
      imageUrl: "brunch-pic.jpg",
      text: "Brunch Menu \u2192",
      link: "brunch",
    },
    {
      imageUrl: "catering-pic.jpg",
      text: "Catering \u2192",
      link: "catering",
    },
    {
      imageUrl: "event-pic.jpg",
      text: "Events \u2192",
      link: "events",
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
          <Square
            key={index}
            {...square}
            onClick={() => handleSquareClick(square.link)}
          />
        ))}
      </div>
    </div>
  );
}

export default Hours;

/*
      <div className='ordering-section container text-center'>
        <div className='row'>
          <h1>Order Online:</h1>
          <div className='order-options'>
            <div className='col-md-6'>
              <a
                href='https://thebarkfl.square.site/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src='logo-square.svg' className='icon' alt='Square'></img>
              </a>
            </div>
            <div className='col-md-6'>
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
      </div>
      */
