import styled from "styled-components"

export const MyRegister = styled.div`

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: stretch;
  justify-content: flex-start;
  align-items: center;
}

  .SpanRegister {
    width: 95vw;

    display: flex;
    align-items: center;
    justify-content: space-between;

    max-height: 710px;
    max-width: 369px;

    margin: 15px;
  }

  .Logo {
    color: #ff577f;

    margin: 0;

    font-size: xx-larger;
  }

  .LoginBtn {
    background-color: #212529;
    color: white;

    border: none;

    width: 28%;
    height: 100%;
    padding: 5px 26px;

    font-weight: 700;
    font-size: large;

    line-height: 1.438rem;
    border-radius: 10px;
    transition-duration: $defaultDuration;
    transition-property: transform;
  
    @include hideTapHighlightColor();
    @include hardwareAccel();
    @include improveAntiAlias();
  }
    .LoginBtn:hover { 
      transform: scale(1.1) rotate(4deg);
    }

  .Tittle {
    color: white;

    font-weight: 700;
    font-size: large;

    line-height: 2rem;
    margin-bottom: 23px;
    margin-top: 20px;
  }

  .MyForm {
    width: 95vw;
    height: 200vh;
    max-height: 760px;
    max-width: 450px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #212529;
    border-radius: 10px;

    margin-top: 20px;
  }

  .Tittles {
    color: white;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 18px;
    width: 80%;
    height: 20%;

    font-weight: 500;
    font-size: medium;
    line-height: 5px;
  }

  .Space {
    width: 100%;
    height: 25px;

    border: 2px solid #f8f9fa;
    background: #343b41;

    border-radius: 5px;
    color: white;
  }

  .SubmitBtn {
    border: none;

    width: 80%;
    height: 10%;

    font-weight: 600;

    font-size: large;
    line-height: 1.313rem;
    
    color: #ffffff;
    background-color: #ff577f;
    border-radius: 4.06066px;
    margin-top: 20px;
    margin-bottom: 10px;
    transition-duration: $defaultDuration;
    transition-property: transform;
  
    @include hideTapHighlightColor();
    @include hardwareAccel();
    @include improveAntiAlias();
  }
    .SubmitBtn:hover { 
      transform: scale(1.1) rotate(4deg);
    }

  .errorMessage {
    font-size: small;
    color: red;
    margin: 0 0 20px 0;
  }
  @media (max-height: 776px) {
    .errorMessage {
      margin-left: 10px;
    }
  }
`;