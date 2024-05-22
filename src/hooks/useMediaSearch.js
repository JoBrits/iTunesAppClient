// src/hooks/useMediaSearch.js
import { useState, useEffect } from 'react';

const useMediaSearch = (term, mediaType) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMedia = async () => {
      if (!term) {
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/search?term=${term}&media=${mediaType}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setResults(data.results);
      } catch (error) {
        setError('Failed to fetch media: ' + error.message);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, [term, mediaType]);

  return { results, loading, error };
};

export default useMediaSearch;