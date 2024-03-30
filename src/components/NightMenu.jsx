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
          <button
            className='menu-btn'
            onClick={() => openPdfInNewTab(nightMenuUrl)}
          >
            View Late Night Menu
          </button>
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
