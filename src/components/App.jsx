import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery.js';
import { Button } from './Button/Button';
import SearchForm from './Searchbar/SearchForm';
import * as SC from './Searchbar/Searchbar.style';
import * as API from 'services/api';

export default class App extends Component {
  state = {
    imagesName: '',
    page: 1,
    images: [],
    totalPage: ''
  }

  handleFormSubmit = query => {
    this.setState({
      imagesName: query,
      page: 1,
      images: [],
      totalPage: ''
    });
  }

  loadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
      })
    )
  }
  
  componentDidUpdate(prevProps, prevState) {
    const {imagesName, page} = this.state;
    if (prevState.imagesName!== this.state.imagesName || prevState.page !== this.state.page) {
      API.getImages(imagesName, page).then((data) => {
        const { hits } = data;
        this.setState({ images: hits });
        const totalPage = data.totalHits / 12;
        this.setState({ totalPage: totalPage });
      });
    }
  }
  render() {
    return (
      <>
        <SC.Searchbar >
          <SearchForm onSubmit={this.handleFormSubmit}></SearchForm>
        </SC.Searchbar>
        {this.state.images &&
          <ImageGallery images={this.state.images}
          ></ImageGallery>}
        {this.state.page < this.state.totalPage && 
          <Button
            children='Load more'
            onClick={this.loadMore}>
          </Button>}
      </>
    );
  }
};
