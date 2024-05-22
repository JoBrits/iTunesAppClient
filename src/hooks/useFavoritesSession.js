import { useState, useEffect } from "react";

const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // fetch from session storage
  useEffect(() => {
    try {
      const storedFavorites =
        JSON.parse(sessionStorage.getItem("favorites")) || [];
      setFavorites(storedFavorites);
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch favorites from session storage");
      setLoading(false);
    }
  }, []);

  return { favorites, loading, error };
};

export default useFavorites;
