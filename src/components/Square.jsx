import React from "react";

function Square({ imageUrl, text, link, onClick }) {
  const handleClick = (event) => {
    event.preventDefault(); // Prevent default behavior
    onClick(link); // Call the onClick function with the link value
  };

  return (
    <div className='square' onClick={handleClick}>
      <a href={link} rel='noopener noreferrer'>
        <img src={imageUrl} alt='Square' className='square-image' />
        <p className='square-text'>{text}</p>
      </a>
    </div>
  );
}

export default Square;
