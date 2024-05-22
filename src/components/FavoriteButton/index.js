import React, { useEffect, useState } from "react";

// Styles
import { Wrapper, Button } from "./FavoriteButton.styles";

const FavoriteButton = ({ track }) => {
  // State for checking favorite's
  const [isFavorite, setIsFavorite] = useState(false);

  // Updated functionality to store favorites in session storage and not favorites .json
  // useEffect(() => {
  //   const checkFavoriteStatus = async () => {
  //     try {
  //       const response = await fetch(`/favorites/${track.trackId}`);
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const data = await response.json();
  //       setIsFavorite(data.isFavorite);
  //     } catch (error) {
  //       console.error('Failed to check favorite status:', error);
  //     }
  //   };

  //   checkFavoriteStatus();
  // }, [track.trackId]);

  // const handleSaveFavorite = async () => {
  //   try {
  //     const response = await fetch('/favorites', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ track }),
  //     });
  //     if (response.ok) {
  //       setIsFavorite(true);
  //     } else {
  //       const data = await response.json();
  //       alert(data.error);
  //     }
  //   } catch (error) {
  //     console.error('Failed to save favorite track:', error);
  //   }
  // };

  // const handleRemoveFavorite = async () => {
  //   try {
  //     const response = await fetch(`/favorites/${track.trackId}`, {
  //       method: 'DELETE',
  //     });
  //     if (response.ok) {
  //       setIsFavorite(false);
  //     } else {
  //       const data = await response.json();
  //       alert(data.error);
  //     }
  //   } catch (error) {
  //     console.error('Failed to remove favorite track:', error);
  //   }
  // };

  // Stores favorite in session storage
  useEffect(() => {
    const favorites = JSON.parse(sessionStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.some((fav) => fav.trackId === track.trackId));
  }, [track.trackId]);
  // Function that stores favorite in session storage
  const handleSaveFavorite = () => {
    const favorites = JSON.parse(sessionStorage.getItem("favorites")) || [];
    if (!favorites.some((fav) => fav.trackId === track.trackId)) {
      favorites.push(track);
      sessionStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };
  // Function that removes favorite in session storage
  const handleRemoveFavorite = () => {
    let favorites = JSON.parse(sessionStorage.getItem("favorites")) || [];
    favorites = favorites.filter((fav) => fav.trackId !== track.trackId);
    sessionStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(false);
  };

  return (
    <Wrapper>
        <Button
          onClick={isFavorite ? handleRemoveFavorite : handleSaveFavorite}
        >
          {isFavorite ? "Remove from Favorites" : "Save to Favorites"}
        </Button>
    </Wrapper>
  );
};

export default FavoriteButton;
