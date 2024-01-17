import React from "react";

function Square({ imageUrl, text, link }) {
  return (
    <div className='square'>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <img src={imageUrl} alt='Square' className='square-image' />
        <p>{text}</p>
      </a>
    </div>
  );
}

export default Square;
