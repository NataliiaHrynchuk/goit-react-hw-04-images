import {Component} from 'react';
import SearchForm from './Searchbar/SearchForm';
import * as SC from './Searchbar/Searchbar.style';

export default class App extends Component {
  state = {
    imagesName: ''
  }

  handleFormSubmit = query => {
    this.setState({ imagesName: query });
  }
  render() {
     return (
    <SC.Searchbar >
      <SearchForm onSubmit={this.handleFormSubmit}></SearchForm>
    </SC.Searchbar>
  );
  }
 
};
