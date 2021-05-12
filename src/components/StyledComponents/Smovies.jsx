import styled from 'styled-components';

const SMovies = styled.div`
  h2 {
    font-size: 1.7em;
    margin-left: 20px;
  }
  ul {
    position: relative;
    flex-wrap: nowrap;
    display: flex;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 30px;
  }

  img {
    width: 100%;
    border-radius: 7px;
  }
  li {
    padding-right: 1px;
    padding-left: 1px;
  }

  .arrow {
    width: 20px;
  }

  .arrowRight {
    background-color: transparent;
    border: none;
    position: absolute;
    bottom: 0;
    top: 0;
    right: 0;
    width: 30px;

    :hover {
      background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0) 10%,
        rgba(0, 0, 0, 0.85) 100%
      );
    }
    path {
      fill: white;
    }
  }

  .arrowLeft {
    background-color: transparent;
    border: none;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    z-index: 0;
    width: 30px;
    :hover {
      background: linear-gradient(
        to left,
        rgba(0, 0, 0, 0) 10%,
        rgba(0, 0, 0, 0.85) 100%
      );
    }
    path {
      fill: white;
    }
  }
  figcaption {
    margin-left: 40px;
    position: absolute;
    width: 300px;
    height: 100%;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: 0.2s all ease-in-out;
    text-transform: uppercase;
    font-weight: 400;
    color: white;
    font-size: 30px;
    -webkit-text-stroke: 1px black;

    ::before,
    ::after {
      content: '';
      position: absolute;
      transition: 0.5s all ease-in-out;
    }

    ::before {
      width: 100%;
      height: 90%;
      border-left: 2px solid #e50914;
      border-right: 2px solid #e50914;
      transform: scaleY(0);
    }

    ::after {
      width: 100%;
      height: 90%;
      border-top: 2px solid #e50914;
      border-bottom: 2px solid #e50914;
      transform: scaleX(0);
    }

    &:hover {
      opacity: 1;
      ::before {
        transform: scaleY(1);
      }
      ::after {
        transform: scaleX(1);
      }
    }
  }
`;

export default SMovies;
