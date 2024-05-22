import styled from 'styled-components';

export const Wrapper = styled.div`
  
  position: relative;
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
  animation: animateMovieThumb 0.5s;

  :hover {
    opacity: 0.8;
  }

  @keyframes animateMovieThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Text = styled.div`
  position: relative;
  color: var(--lightGrey);
  padding: 1rem;

  h2 {
    font-size: var(--fontMed);

    @media screen and (max-width: 720px) {
      font-size: var(--fontSmall);
    }
  }

  p {
    font-size: var(--fontSml);
  
    @media screen and (max-width: 720px) {
      font-size: var(--fontSmall);
    }
  }

  @media screen and (max-width: 720px) {
    max-width: 100%;
  }
`;
