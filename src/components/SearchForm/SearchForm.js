import React from "react";


import { SearchFormBtn } from '../SearchFormBtn/SearchFormBtn';
import * as SC from './SearchForm.style';

      class SearchForm extends React.Component {
        state = {
        imageName:'',
    }
        render() {
          return <SC.SearchForm>
            <SearchFormBtn>
      
            </SearchFormBtn>

            <SC.SearchFormInput
              type="text"
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
            />
          </SC.SearchForm>
        }
}
      
export default SearchForm;