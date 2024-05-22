import { useState, useEffect } from "react";

const useFavoriteServer = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  // fetch from server json file (initially used but replace with useFavoritesSession)
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await fetch("/favorites");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setFavorites(data);
        setError(null);
      } catch (error) {
        setError("Failed to fetch favorites: " + error.message);
        setFavorites([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  return { favorites, loading, error };
};

export default useFavoriteServer;
