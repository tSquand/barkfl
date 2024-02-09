import React from "react";

function Menu() {
  const pdfUrl = import.meta.env.BASE_URL + "Bark-Menu.pdf#view=fitH";
  const brunchUrl = import.meta.env.BASE_URL + "brunch-menu.pdf#view=fitH";
  const lateNightUrl =
    import.meta.env.BASE_URL + "late-night-menu.pdf#view=fitH";

  const openPdfInNewTab = (url) => {
    window.open(url, "_blank");
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <div>
      <div>
        <div className='container text-center'>
          {isMobile ? (
            <div>
              <button
                className='btn btn-primary'
                onClick={() => openPdfInNewTab(pdfUrl)}
              >
                View Menu
              </button>
              <button
                className='btn btn-primary'
                onClick={() => openPdfInNewTab(brunchUrl)}
              >
                View Brunch Menu
              </button>
              <button
                className='btn btn-primary'
                onClick={() => openPdfInNewTab(lateNightUrl)}
              >
                View Late Night Menu
              </button>
            </div>
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
    </div>
  );
}

export default Menu;
