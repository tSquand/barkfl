import React from "react";

function Menu() {
  const pdfUrl = import.meta.env.BASE_URL + "Bark-Menu.pdf";
  const brunchUrl = import.meta.env.BASE_URL + "brunch-menu.pdf";

  return (
    <div>
      <div className='container text-center'>
        <iframe
          title='PDF Viewer'
          src={pdfUrl}
          width='80%'
          height='900px'
        ></iframe>
      </div>
      <div className='container text-center'>
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
