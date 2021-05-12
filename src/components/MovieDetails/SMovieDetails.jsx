import styled from 'styled-components';

const SMovieDetails = styled.div`
  color: #f7f5f5;
  .container {
    display: flex;
    justify-content: center;
  }

  h2 {
    font-weight: 700;
    font-size: 2.5em;
    padding: 10px;
  }

  .movie-infos {
    width: 30vw;
    padding-top: 200px;
    margin-left: 20px;

    p {
      padding: 5px;
      font-size: 25px;
    }

    .desc {
      font-size: 1.9em;
    }
  }
`;

export default SMovieDetails;
