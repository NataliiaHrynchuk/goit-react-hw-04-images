import React from "react";


import { SearchFormBtn } from './SearchFormBtn';
import * as SC from './Searchbar.style';

      class SearchForm extends React.Component {
        state = {
        query:'',
        }
        
        handleNameChange = event => {
          this.setState({ query : event.currentTarget.value.toLowerCase( )});
        };
        
        handleSubmit = event => {
          event.preventDefault();
          if (this.state.query === ' ' ) {   
            alert('Enter images name');                       
             return;                                                                                                   
         }

          this.props.onSubmit(this.state.query);  
          console.log(this.state.query); 
          this.setState({query: ' ' })                                      
        };


        render() {
          return <SC.SearchForm onSubmit={this.handleSubmit}>
            <SearchFormBtn>
      
            </SearchFormBtn>

            <SC.SearchFormInput
              type="text"
              name="imagesName"
              value={this.state.query}
              onChange={this.handleNameChange}
              autocomplete="off"
              placeholder="Search images and photos"
            />
          </SC.SearchForm>
        }
}
      
export default SearchForm;