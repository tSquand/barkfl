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
      text: "Brunch menu \u2192",
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
      <div className='ordering-links'>
        <p>doordash and square links here?</p>
      </div>
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
