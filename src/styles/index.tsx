import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-size: 1.6rem;
    font-family: Arial, Helvetica, sans-serif
  }
  
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }

  button {
    cursor: pointer;
    
    border: none;
    background-color: transparent;
  }

  input[type="checkbox"] {
    &, &:focus, &:hover {
      box-shadow: initial;
    }
  }
`
