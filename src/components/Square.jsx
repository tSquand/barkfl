import React from "react";
import { Link } from "react-router-dom";

function Square({ imageUrl, text, link }) {
  return (
    <div className='square'>
      <Link to={link}>
        <img src={imageUrl} alt='Square' className='square-image' />
        <p className='square-text'>{text}</p>
      </Link>
    </div>
  );
}

export default Square;
