import React from 'react';

// Image
import searchIcon from "../../images/search-icon.svg";
import { Wrapper, Content } from "./SearchBar.styles";

const SearchBar = ({ term, setTerm, handleSearch }) => {
  
  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search icon" />
        {/* Controlled Component */}
        <input
          type="text"
          placeholder="Search iTunes"
          onChange={(event) => setTerm(event.target.value)}
          value={term}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
