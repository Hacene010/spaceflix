import styled from 'styled-components';

const SCarrousel = styled.div`
  width: 80vw;
  padding-top: 20px;
  margin: auto;

  .each-slideshow-indicator::before {
    background: ${({ theme }) => theme.fontColor || 'yellowgreen'};
  }

  img {
    height: 75vh;
    width: 100%;
  }
`;
export default SCarrousel;
