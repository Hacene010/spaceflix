import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
  background-color: ${({ theme }) => theme.pageBackground};
  min-height: 100vh;
  font-family: 'Bebas Neue', cursive;
  color: ${({ theme }) => theme.fontColor};
  transition: all 0.6s ease;
}`;

export const EarthTheme = {
  pageBackground: 'black',
  fontColor: 'rgb(229, 9, 20)',
};

export const MarsTheme = {
  pageBackground: 'rgb(229, 9, 20)',
  fontColor: 'black',
};
