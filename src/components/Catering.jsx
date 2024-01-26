function Catering() {
  const pdfUrl = import.meta.env.BASE_URL + "catering-menu.pdf#view=fitH";

  return (
    <div className='container text-center'>
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
  );
}

export default Catering;
