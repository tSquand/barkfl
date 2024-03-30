import React from "react";

function NightMenu() {
  const nightMenuUrl =
    import.meta.env.BASE_URL + "late-night-menu.pdf#view=fitH";
  return (
    <div>
      <div className='container text-center'>
        <iframe
          id='nightIframe'
          title='PDF Viewer'
          src={nightMenuUrl}
          width='80%'
          height='900px'
        ></iframe>
      </div>
    </div>
  );
}
export default NightMenu;
