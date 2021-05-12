import styled from 'styled-components';

const SMovieDetails = styled.div`
  .container {
    display: flex;
    justify-content: space-evenly;
  }
  .title-img {
    img {
      padding-top: 10px;
      height: 650px;
    }
  }
  h2 {
    text-align: center;
    font-weight: 700;
    font-size: 2.5em;
    padding: 20px;
  }

  .movie-infos {
    width: 30vw;
    padding-top: 80px;
    margin-left: 20px;

    p {
      padding: 5px;
      font-size: 25px;
    }

    .desc {
      font-size: 1.9em;
    }
    .youtube {
      padding-top: 25px;
    }
  }
`;

export default SMovieDetails;
