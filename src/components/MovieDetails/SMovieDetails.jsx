import styled from 'styled-components';

const SMovieDetails = styled.div`
  color: #f7f5f5;
  .container {
    display: flex;
    justify-content: space-evenly;
  }
  h2 {
    font-weight: 800;
    font-size: 2.3em;
    padding: 10px;
  }

  .movie-infos {
    width: 30vw;
    padding-top: 200px;
    margin-left: 20px;

    p {
      padding: 5px;
    }

    .desc {
      font-size: 1.9em;
    }
    button {
      background-color: yellow;
    }
  }
`;

export default SMovieDetails;
