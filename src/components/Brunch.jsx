import React from "react";

function Brunch() {
  const brunchUrl = import.meta.env.BASE_URL + "brunch-menu.pdf#view=fitH";
  const openPdfInNewTab = (url) => {
    window.open(url, "_blank");
  };

  const isMobile = window.innerWidth <= 768;
  return (
    <div>
      <div className='container text-center'>
        {isMobile ? (
          <button
            className='menu-btn'
            onClick={() => openPdfInNewTab(brunchUrl)}
          >
            View Brunch Menu
          </button>
        ) : (
          <iframe
            id='brunchIframe'
            title='PDF Viewer'
            src={brunchUrl}
            width='80%'
            height='900px'
          ></iframe>
        )}
      </div>
    </div>
  );
}

export default Brunch;
