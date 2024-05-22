import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// components
import HeroImage from "./HeroImage";
import Spinner from "./Spinner";
import TrackInfo from './TrackInfo/Index';
import FavoriteButton from "./FavoriteButton";

const TrackDetails = () => {
  const { trackId } = useParams();
  const [track, setTrack] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrack = async () => {
      try {
        const response = await fetch(`/track/${trackId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTrack(data.results[0]);
        setError(null);
      } catch (error) {
        setError('Error fetching track details: ' + error.message);
        setTrack(null);
      } finally {
        setLoading(false);
      }
    };

    fetchTrack();
  }, [trackId]);

  if (loading) {
    return <Spinner/>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  if (!track) {
    return <p>No track found</p>;
  }

  return (
    <>
      {/* {Show Hero image if search results are returned */}
      {track ? (
        <HeroImage
          image={track.artworkUrl100}
          title={track.trackName}
          text={`Album: ${track.collectionName}`}
        />
      ) : null}
      {/* Send through full track object for saving favorite  */}
      <TrackInfo 
        trackDetails={track}
        artistName={track.artistName}
        collectionName={track.collectionName}
        primaryGenreName={track.primaryGenreName}
        previewUrl={track.previewUrl}
      />
      {/* Add to Favorites */}
      <FavoriteButton track={track} />
    </>
  );
};

export default TrackDetails;