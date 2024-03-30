import React from "react";

function NightMenu() {
  const nightMenuUrl =
    import.meta.env.BASE_URL + "late-night-menu.pdf#view=fitH";
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
              onClick={() => openPdfInNewTab(nightMenuUrl)}
            >
              View Late Night Menu
            </button>
            <img src='asset3.png' className='bark-logo-img'></img>
          </div>
        ) : (
          <iframe
            id='nightIframe'
            title='PDF Viewer'
            src={nightMenuUrl}
            width='80%'
            height='900px'
          ></iframe>
        )}
      </div>
    </div>
  );
}
export default NightMenu;
