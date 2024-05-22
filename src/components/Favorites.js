import React from 'react';

// components
import HeroImage from "./HeroImage";
import Spinner from "./Spinner";
import Grid from "./Grid";
import Thumb from "./Thumb";

// hooks
import useFavoritesSession from '../hooks/useFavoritesSession';

// Image
import NoImage from "../images/no_image.jpg";

function Favorites() {
  const { favorites, loading, error } = useFavoritesSession();

  if (loading) {
    return <p>Loading favorites...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  if (favorites.length === 0) {
    return <p>No favorite tracks saved.</p>;
  }

  return (
    <div>
      {/* {Show Hero image if search results are returned */}
      {favorites[0] ? (
        <HeroImage
          image={favorites[0].artworkUrl100}
          title={favorites[0].artistName}
          text={favorites[0].trackName}
        />
      ) : null}
      
      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading ? (
        // Custom Spinner for loader
        <Spinner/>
      ) : (
        <Grid header={favorites.length !== 0 ? "My Favorites" : "No favorite tracks saved"}>
        {favorites.map((favorite) => (
          <Thumb
            key={favorite.trackId}
            // place holder img loaded if no image
            image={
              favorite.artworkUrl100
                ? favorite.artworkUrl100
                : NoImage
            }
            resultId={favorite.trackId}
            title={favorite.artistName}
            text={favorite.trackName}
            kind={favorite.kind}
          />
        ))}
      </Grid>
      )}
    </div>
  );
}

export default Favorites;
