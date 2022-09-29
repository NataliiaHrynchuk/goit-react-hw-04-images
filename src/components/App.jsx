import React, { useState, useEffect } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery.js';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import SearchForm from './Searchbar/SearchForm';
import * as SC from './Searchbar/Searchbar.style';
import * as API from 'services/api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function App() {
  const [imagesName, setImagesName] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [totalPage, setTotalPage] = useState('');
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFormSubmit = query => {
    setImagesName(query);
    setPage(1);
    setImages([]);
    setTotalPage('');
  }


  const toggleModal = async largeImg => {
    await setSelectedImage(largeImg);
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (!imagesName) {
      return;
    }
    setStatus(Status.PENDING);
    API
      .getImages( imagesName, page )
      .then((data) => {
        const totalPage = Math.ceil(data.totalHits / 12);
        const receivedValues = data.hits.map(
          ({ id,
            webformatURL,
            largeImageURL,
            tags,
          }) => {
            return {
              id,
              webformatURL,
              largeImageURL,
              tags,
            };
          }
        );
        setImages(prevImages => [...prevImages, ...receivedValues]);
        setTotalPage(totalPage);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      })
  }, [imagesName, page]);


  return (
    <>
      <SC.Searchbar >
        <SearchForm onSubmit={handleFormSubmit} />
      </SC.Searchbar>

      {status === Status.REJECTED && <p>{error.message}</p>}
      {images &&
        <ImageGallery
          images={images}
          toggleModal={toggleModal}
        />}
      {status === Status.PENDING && <Loader />}
      {page < totalPage &&
        <Button
          children='Load more'
          onClick={() => setPage(page => page + 1)} />
      }
      {showModal && <Modal
        onClose={toggleModal}><img src={selectedImage} alt="" />
      </Modal>

      }
    </>
  );
};
