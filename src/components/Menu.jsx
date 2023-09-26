import React from "react";

function Menu() {
  const pdfUrl = import.meta.env.BASE_URL + "foodmenu.pdf";

  return (
    <div className='container text-center'>
      <iframe
        title='PDF Viewer'
        src={pdfUrl}
        width='80%'
        height='900px' // Adjust the height as needed
      ></iframe>
    </div>
  );
}

export default Menu;
