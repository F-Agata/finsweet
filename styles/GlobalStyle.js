import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans&family=Roboto:wght@400;700&display=swap');
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family:  'Roboto', sans-serif;
      }
  
      body {
        background: white;
      }
      
      input {
        outline: none;
        box-sizing: border-box !important;
        font-family:  'Roboto', sans-serif;
      }
      
      textarea {
        outline: none;
        box-sizing: border-box !important;
        font-family:  'Roboto', sans-serif;
      }
`
export default GlobalStyle
