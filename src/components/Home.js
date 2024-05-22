import React, { useState } from "react";

// components
import HeroImage from "./HeroImage";
import SearchBar from "./SearchBar";
import SearchFilter from "./SearchFilter";
import Spinner from "./Spinner";
import Grid from "./Grid";
import Thumb from "./Thumb";

// hooks
import useMediaSearch from "../hooks/useMediaSearch";

// Image
import NoImage from "../images/no_image.jpg";

function Home() {
  const [term, setTerm] = useState("");
  const [mediaType, setMediaType] = useState('all');
  const { results, error, loading } = useMediaSearch(term, mediaType);

  // The term and mediaType states will trigger the useMediaSearch hook
  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {/* {Show Hero image if search results are returned */}
      <HeroImage
          image={results[0] ? results[0].artworkUrl100 : NoImage}
          title={results[0] ? results[0].artistName : 'Itunes Search API React App'}
          text={results[0] ? results[0].trackName : 'By Johan Brits'}
        />
      {/* Components that fetch and set results */}
      <div className="search">
        <SearchBar term={term} setTerm={setTerm} handleSearch={handleSearch} />
        <SearchFilter mediaType={mediaType} setMediaType={setMediaType} />
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading ? (
        // Custom Spinner for loader
        <Spinner/>
      ) : (
        <Grid header={term ? "Search Results" : ""}>
        {results.map((result) => (
          <Thumb
            key={result.trackId}
            // place holder img loaded if no image
            image={
              result.artworkUrl100
                ? result.artworkUrl100
                : NoImage
            }
            resultId={result.trackId}
            title={result.artistName}
            text={result.trackName}
            kind={result.kind}
          />
        ))}
      </Grid>
      )}
    </div>
  );
}

export default Home;
