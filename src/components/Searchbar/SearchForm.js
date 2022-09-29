import React from "react";
import { useState } from "react";
import {HiOutlineSearch} from "react-icons/hi";
import { SearchFormBtn } from './SearchFormBtn';
import * as SC from './Searchbar.style';

export default function SearchForm({ onSubmit }) {
  const [query, setQuery] = useState('');
                
  const handleNameChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };
        
  const handleSubmit = event => {
    event.preventDefault();
    if (query === ' ') {
      alert('Enter images name');
      return;
    }
    onSubmit(query);
    setQuery(' ');
  };

  return (
    <SC.SearchForm onSubmit={handleSubmit}>
      <SearchFormBtn type="submit">
        <HiOutlineSearch />
      </SearchFormBtn>

      <SC.SearchFormInput
        type="text"
        name="imagesName"
        value={query}
        onChange={handleNameChange}
        autoFocus
        autocomplete="off"
        placeholder="Search images and photos"
      />
    </SC.SearchForm>
  )
};
