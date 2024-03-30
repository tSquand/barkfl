import React from "react";

function Menu() {
  const pdfUrl = import.meta.env.BASE_URL + "Bark-Menu.pdf#view=fitH";

  const isMobile = window.innerWidth <= 768;

  return (
    <div>
      <div>
        <div className='container text-center'>
          <iframe
            title='PDF Viewer'
            src={pdfUrl}
            width={isMobile ? "100%" : "80%"}
            height='900px'
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Menu;
