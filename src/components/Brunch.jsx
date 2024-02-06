import React from "react";

function Brunch() {
  const brunchUrl = import.meta.env.BASE_URL + "brunch-menu.pdf#view=fitH";
  return (
    <div>
      <div className='container text-center'>
        <iframe
          id='brunchIframe'
          title='PDF Viewer'
          src={brunchUrl}
          width='80%'
          height='900px'
        ></iframe>
      </div>
    </div>
  );
}

export default Brunch;
