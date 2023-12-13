import React from "react";

function Menu() {
  const pdfUrl = import.meta.env.BASE_URL + "Bark-Menu.pdf";

  return (
    <div className='container text-center'>
      <iframe
        title='PDF Viewer'
        src={pdfUrl}
        width='80%'
        height='900px'
      ></iframe>
    </div>
  );
}

export default Menu;
