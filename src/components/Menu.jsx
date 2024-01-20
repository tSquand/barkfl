import React from "react";

function Menu() {
  const pdfUrl = import.meta.env.BASE_URL + "Bark-Menu.pdf";
  const brunchUrl = import.meta.env.BASE_URL + "brunch-menu.pdf";

  return (
    <div>
      <div className='container text-center'>
        <h1 className='menu-heading'>
          Specials posted daily{" "}
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
            <img src='logo-facebook.svg' className='icon' alt='Facebook'></img>
          </a>
        </h1>
        <iframe
          title='PDF Viewer'
          src={pdfUrl}
          width='80%'
          height='900px'
        ></iframe>
        <iframe
          title='PDF Viewer'
          src={brunchUrl}
          width='80%'
          height='900px'
        ></iframe>
      </div>
    </div>
  );
}

export default Menu;
