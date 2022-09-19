import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery.js';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import {Modal} from './Modal/Modal';
import SearchForm from './Searchbar/SearchForm';
import * as SC from './Searchbar/Searchbar.style';
import * as API from 'services/api';

export default class App extends Component {
  state = {
    imagesName: '',
    page: 1,
    images: [],
    totalPage: '',
    status: 'idle',
    error: null,
    showModal: false,
    selectedImage: null,
  }

  handleFormSubmit = query => {
    this.setState({
      imagesName: query,
      page: 1,
      images: [],
      totalPage: '',
      
    });
  }

  loadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
      })
    )
  }
  
  toggleModal = async largeImg => {
    await this.setState({ selectedImage: largeImg });
    this.setState(({ showModal }) => ({
      showModal: !showModal
    }));
  };
  

  componentDidUpdate(prevProps, prevState) {
    const {imagesName, page} = this.state;
    if (prevState.imagesName!== this.state.imagesName || prevState.page !== this.state.page) {
      this.setState({ status: 'pending' });
      API.getImages(imagesName, page)
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
        this.setState(prevState => ({
          images: [...prevState.images, ...receivedValues],
          totalPage: totalPage,
          status: 'resolved',
        }));
        })
      .catch (error => this.setState({ error, status: 'rejected' }));
    }
  }
  render() {
    const {page, status, error, images, totalPage, showModal, selectedImage} = this.state;
    return (
      <>
        <SC.Searchbar >
          <SearchForm onSubmit={this.handleFormSubmit}></SearchForm>
        </SC.Searchbar>
        {status === 'pending' && <Loader />}
        {status === 'rejected' && <p>{error.message}</p>}
        {images &&
          <ImageGallery
            images={images}
            toggleModal={this.toggleModal}
          ></ImageGallery>}
        {page < totalPage && 
          <Button
            children='Load more'
            onClick={this.loadMore}>
          </Button>}
        {showModal && <Modal
          onClose={this.toggleModal}><img src={selectedImage} alt="" />
        </Modal>
          
        }
      </>
    );
  }
};
