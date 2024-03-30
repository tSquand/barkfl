function Catering() {
  const pdfUrl = import.meta.env.BASE_URL + "catering-menu.pdf#view=fitH";
  const openPdfInNewTab = (url) => {
    window.open(url, "_blank");
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <div className='container text-center'>
      {isMobile ? (
        <div>
          <button className='menu-btn' onClick={() => openPdfInNewTab(pdfUrl)}>
            View Catering Menu
          </button>

          <img src='asset3.png' className='bark-logo-img'></img>
        </div>
      ) : (
        <div>
          <iframe
            title='PDF Viewer'
            src={pdfUrl}
            width='80%'
            height='900px'
          ></iframe>
          <p className='text-center harvest-link'>
            More catering options from the team at BARK found at{" "}
            <a className='custom-link' href='https://harvestspoonfl.com/'>
              <strong> harvestspoonfl.com!</strong>
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default Catering;
