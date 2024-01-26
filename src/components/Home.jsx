import "./styles.css";
import Square from "./Square";

function Home({ handleSquareClick }) {
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
        src='bark-welcomev2.jpg'
        className='welcome-banner'
        alt='welcome'
      ></img>

      <div className='about-section'>
        <div className='row'>
          <div className='col-md-6 about-content text-center'>
            <h1>Welcome to The BARK</h1>
            <h4>
              Established in 2017, the BARK is a vegetarian restaurant, venue
              space, and "fine dive bar" in Tallahassee, Florida. We serve
              homemade food with local produce and freshly baked bread, as well
              as craft cocktails and world-class PBR.
            </h4>{" "}
            <h3>
              We have rotating food, drink, and dessert specials - call or check
              our social media to learn what's cookin' today!
            </h3>
            <h2 className='menu-heading'>
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
            </h2>
            <h4>
              Come by for karaoke every Wednesday, live music, art markets, and
              more. (hyperlink to upcoming events tab)
            </h4>
            <h4>
              {" "}
              "There's always something fun happening at The Bark, unless
              there's not."
            </h4>
            <h4>Outdoor seating is available on our patio and Barking Lot. </h4>
            <h4>
              {" "}
              If we aren't answering the phone, it's probably monday (we're
              closed) or there's a show (it's loud)
            </h4>
            <button className='order-online-button'>Order Online</button>
          </div>
          <div className='col-md-4 text-center'>
            <img src='placeholder2.jpg' className='about-img' alt=''></img>
          </div>
        </div>
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

export default Home;

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
