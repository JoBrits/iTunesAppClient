import React from "react";

import { Wrapper, Content } from "./SearchFilter.styles";

const SearchFilter = ({ mediaType, setMediaType }) => {
  return (
    <Wrapper>
      <Content>
        {/* Controlled Component */}
        <select
          id="mediaType"
          value={mediaType}
          onChange={(e) => setMediaType(e.target.value)}
        >
          {/* Media kinds as listed on https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/UnderstandingSearchResults.html#//apple_ref/doc/uid/TP40017632-CH8-SW1 under JSON result keys and values:*/}
          <option value="all">All</option>
          <option value="movie">Movie</option>
          <option value="music">Music</option>
          <option value="podcast">Podcast</option>
          <option value="audiobook">Audiobook</option>
          <option value="shortFilm">Short Film</option>
          <option value="tvShow">TV Show</option>
          <option value="software">Software</option>
          <option value="ebook">Ebook</option>
        </select>
      </Content>
    </Wrapper>
  );
};

export default SearchFilter;
