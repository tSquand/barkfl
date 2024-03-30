import React from "react";

function Menu() {
  const pdfUrl = import.meta.env.BASE_URL + "Bark-Menu.pdf#view=fitH";

  const openPdfInNewTab = (url) => {
    window.open(url, "_blank");
  };

  const isMobile = window.innerWidth <= 768;
  return (
    <div>
      <div className='container text-center'>
        {isMobile ? (
          <button onClick={() => openPdfInNewTab(pdfUrl)}>
            Open PDF in New Tab
          </button>
        ) : (
          <iframe
            title='PDF Viewer'
            src={pdfUrl}
            width='80%'
            height='900px'
          ></iframe>
        )}
      </div>
    </div>
  );
}

export default Menu;
