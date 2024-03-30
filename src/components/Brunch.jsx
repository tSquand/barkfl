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
          <div>
            <button
              className='menu-btn'
              onClick={() => openPdfInNewTab(brunchUrl)}
            >
              View Brunch Menu
            </button>

            <img src='asset3.png' className='bark-logo-img'></img>
          </div>
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
