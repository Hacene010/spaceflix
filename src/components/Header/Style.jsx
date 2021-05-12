import styled from 'styled-components';

const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  font-size: 45px;

  .navbar {
    display: flex;
    align-items: center;
    padding-left: 300px;

    .categories {
      display: flex;
      align-items: center;
      .movies {
        padding-right: 50px;
      }
      .series {
        padding-left: 50px;
        padding-right: 50px;
        border-right: solid 2px;
        border-left: solid 2px;
      }
      .documentaries {
        padding-left: 50px;
      }
    }
  }
  .button {
    color: black;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    background-color: transparent;
    position: relative;
    .planete {
      height: 120px;
    }
    .barre {
      height: 120px;
      transform: rotate(90deg);
    }

    .mars-mode {
      font-size: 35px;
      font-weight: bold;
      position: absolute;
      top: 26px;
      &:hover {
        color: rgb(229, 9, 20);
      }
    }
    .earth-mode {
      font-size: 35px;
      font-weight: bold;
      position: absolute;
      top: 1px;
      transform: rotate(45deg);
      line-height: 170%;
      margin-right: 10px;
    }
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default SHeader;
