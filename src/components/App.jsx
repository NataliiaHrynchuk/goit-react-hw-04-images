import {Component} from 'react';
import SearchForm from './Searchbar/SearchForm';
import * as SC from './Searchbar/Searchbar.style';
import * as API from 'services/api';

export default class App extends Component {
  state = {
    imagesName: '',
    page: 1,
  }

  handleFormSubmit = query => {
    this.setState({ imagesName: query });
  }

  componentDidUpdate(prevProps, prevState) {
    const {imagesName, page} = this.state;
    if (prevState !== this.state) {
      API.getImages(imagesName, page).then(console.log);
    }
  }
  render() {
     return (
    <SC.Searchbar >
      <SearchForm onSubmit={this.handleFormSubmit}></SearchForm>
    </SC.Searchbar>
  );
  }
 
};
