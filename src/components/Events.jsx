import React, { useState, useEffect } from "react";

const apiKey = import.meta.env.VITE_REACT_APP_FLICKR_API_KEY;
const userId = "199024380@N06";
const photosetId = "72177720310696534";

function Events() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${apiKey}&photoset_id=${photosetId}&user_id=${userId}&format=json&nojsoncallback=1`
    )
      .then((response) => response.json())
      .then((data) => {
        const photos = data.photoset.photo;

        setImages(photos);
        setIsLoading(false);
      });
  }, []);

  const buildImageUrl = (image) => {
    return `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_n.jpg`;
  };

  if (isLoading) {
    return <div>...</div>;
  }

  return (
    <div className='container text-center'>
      <h1>Upcoming Events</h1>
      {images.map((image) => (
        <button
          key={image.id}
          onClick={() => setSelectedImage(buildImageUrl(image))}
          className='image-wrapper'
        >
          <img
            src={buildImageUrl(image)}
            alt={image.title}
            title={image.title}
          />
        </button>
      ))}
    </div>
  );
}

export default Events;
