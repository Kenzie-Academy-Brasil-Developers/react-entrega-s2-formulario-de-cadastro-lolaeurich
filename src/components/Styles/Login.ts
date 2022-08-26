import styled from "styled-components";

export const MyLogin = styled.div`

  .Logo {
    color: #ff577f;
    font-size: xx-large;
  
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

  .Tittle {
    color: white;
    font-weight: 700;
    font-size: x-large;

    margin-bottom: 20px;
    margin-top: 32px;
  }

  .Form {
    width: 90vw;
    height: 80vh;
    max-height: 500px;
    max-width: 360px;

    display: inline-flex;
    flex-direction: column;
    align-items: center;

    background-color: #212529;
    border-radius: 10px;
    margin-top: 20px;
  }

  .Email, .Password {
    color: white;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 18px;
    width: 80%;
    height: 20%;

    font-weight: 400;
    font-size: medium;
    line-height: 0px;
  }

  .Input1, .Input2 {
    width: 100%;
    height: 40%;

    border: 0.9772px solid #f8f9fa;
    background: #343b41;
    border-radius: 5px;

    color: white;
  }

  .LoginBtn {
    border: none;

    width: 80%;
    height: 10%;

    font-weight: 700;
    font-size: large;
    line-height: 1.313rem;
    color: #ffffff;
    background-color: #ff577f;

    border-radius: 10px;
    margin-bottom: 27px;
    transition-duration: 0.4s;
  } 

.LoginBtn:hover {
  background-color: #4CAF50; /* Green */
  color: white;
}
  
  .Error, .Error2 {
    font-size: small;
    color: red;
    margin: 0;
  }

  .Quote {
    font-weight: 500;
    font-size: medium;

    line-height: 0.875rem;
    color: #868e96;

    margin-bottom: 24px;
  }

  .RegisterBtn {
    border: none;

    width: 80%;
    height: 10%;

    font-weight: 700;
    font-size: medium;

    line-height: 1.313rem;

    color: #ffffff;
    background-color: #868e96;

    border-radius: 10px;
    margin-bottom: 27px;
    transition-duration: 0.4s;
  } 

.RegisterBtn:hover {
  background-color: #4CAF50; /* Green */
  color: white;
}
}
`;