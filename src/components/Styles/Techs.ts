import styled from "styled-components"

//revisar depois, pq não sei se entendi muito bem como fazer desse jeito.
const Div = styled.div`
 
  width: 100%;
  margin-top: 19px;

  .Techs {

    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

   .TechsTittle {
      color: white;

      font-family: "Inter";
      font-style: normal;

      font-weight: 600;
      font-size: 1rem;
    }

  .AddBtn {
    color: white;

    border: none;
    border-radius: 4px;

    width: 33px;
    height: 33px;

    background-color: #212529;
    transition-duration: 0.4s;
  } 

.AddBtn:hover {
  background-color: #4CAF50; /* Green */
  color: white;
}

  .MyMain {
    margin: auto;

    width: 95%;
    max-width: 780px;

    padding-top: 5px;
    padding-bottom: 5px;

    background-color: #212529;
    border-radius: 4px;
  }

  .Card {
    width: 95%;
    height: 49px;
    margin: auto;
    margin-bottom: 16px;
    margin-top: 5px;
    display: flex;
    align-items: center;
    background-color: #121214;
    border-radius: 4px;
  }

  .Card:hover {
    background-color: #343b41;
  }

  .CardText {
    display: flex;

    width: 90%;

    justify-content: space-between;
  }

   .Text2 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 0.875rem;

      color: white;
      margin-left: 10px;
    }

   .Text3{
      font-family: "Inter";
      font-style: normal;

      font-weight: 400;
      font-size: 0.75rem;

      line-height: 1.375rem;
      color: #868e96;
    }

  .DeleteBtn {
    display: none;

    margin: auto;
    border: none;

    background-color: transparent;
    color: rgba(255, 255, 255, 0.8);
  }
`
export default Div