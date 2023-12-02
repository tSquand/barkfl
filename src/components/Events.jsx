import React, { useState, useEffect } from "react";
import "./events.css";

const apiKey = import.meta.env.VITE_REACT_APP_FLICKR_API_KEY;
const userId = "199024380@N06";
const photosetId = "72177720310696534";

function Events() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${apiKey}&photoset_id=${photosetId}&user_id=${userId}&format=json&nojsoncallback=1`
    )
      .then((response) => response.json())
      .then((data) => {
        const photos = data.photoset.photo;

        const filteredImages = photos
          .filter((image) => {
            const currentDate = new Date();
            const imageDate = new Date(image.title);
            return imageDate > currentDate;
          })
          .sort((a, b) => {
            // Sort images based on their dates
            const dateA = new Date(a.title);
            const dateB = new Date(b.title);
            return dateA - dateB;
          });

        setImages(filteredImages);
        setIsLoading(false);
      });
  }, []);

  const buildImageUrl = (image) => {
    return `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_n.jpg`;
  };

  const openModal = (image) => {
    setSelectedImage(buildImageUrl(image));
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  if (isLoading) {
    return <div>...</div>;
  }

  return (
    <div className='container flyers text-center'>
      <h1>Upcoming Events</h1>
      {images.map((image) => (
        <button
          key={image.id}
          onClick={() => openModal(image)}
          className='image-wrapper'
        >
          <img
            src={buildImageUrl(image)}
            alt={image.title}
            title={image.title}
          />
        </button>
      ))}

      {showModal && (
        <div className='my-modal' onClick={closeModal}>
          <div onClick={(e) => e.stopPropagation()}>
            <span className='close'>&times;</span>
            <img
              src={selectedImage}
              alt='Selected Image'
              className='modal-image'
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Events;
