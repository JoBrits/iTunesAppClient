// Styles
import { Wrapper, Content } from "./TrackInfo.styles";

const TrackInfo = ({ artistName, collectionName, primaryGenreName, previewUrl }) => {

  return (
    <Wrapper>
      <Content>
        <p>Artist: {artistName}</p>
        <p>Album: {collectionName}</p>
        <p>Genre: {primaryGenreName}</p>
        <audio controls>
          <source src={previewUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </Content>
    </Wrapper>
  );
};

export default TrackInfo;
