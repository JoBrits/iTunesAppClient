import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

// Styles
import { Image, Wrapper, Text } from "./Thumb.styles";

const Thumb = ({ image, resultId, title, text, kind }) => {
  return (
    <div>
      <Link to={`/track/${resultId}`}>
        <Wrapper>
          <Image src={image} alt="iTunes thumb" />
          <Text>
            <h2>{title}</h2>
            <p>{text}</p>
            <p>{kind}</p>
          </Text>
        </Wrapper>
      </Link>
    </div>
  );
};

// Property type validation
Thumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
};

export default Thumb;
