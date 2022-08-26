import styled from "styled-components"

export const HomeHub = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

  .Header {
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 32px;
    align-items: center;
    padding: 19px 0 0 0;
  }

  .Logo {
    color: #ff577f;
    margin: 0;
    font-size: larger;
    --h: 1.2em;   /* the height */
    
    line-height: var(--h);
    text-shadow: 
    0 calc(var(--h) - var(--_t,0em)) white;
    overflow: hidden;
    transition: .5s;
  }
  .Logo:hover {
    --_t: var(--h);
  }

  .BtnSair {
    background-color: #212529;
    color: white;
    border: none;
    width: 28%;
    max-width: 100px;
    max-height: 32px;
    height: 93%;

    font-weight: 600;
    font-size: medium;
    line-height: 1.438rem;
    border-radius: 4px;
 
    transition-duration: 0.4s;
  } 

.BtnSair:hover {
  background-color: #4CAF50; /* Green */
  color: white;
}

  .H2 {
    display: none;

    color: white;
    padding: 0 319px 0 0;
  }

  .Quote {
    display: none;

    color: #f8f9fa;
    padding: 0 209px 0 0;
  }


  @media (min-width: 550px) {
    .Dash{
      flex-direction: row;
      justify-content: space-evenly;
    }
    .H2 {
      display: inline;
    }
    .Quote{
      display: inline;
    }
  }

  .Dash {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    align-items: center;
    width: 100%;
    height: 20%;

    border: #212529 0.5px solid;
  }  
  
    .H1 {
      font-weight: 700;
      font-size: large;
     
      color: #f8f9fa;
    }

    .P {
      color: #ff577f;
      font-weight: 500;
      font-size: medium;
    }
  }
`;