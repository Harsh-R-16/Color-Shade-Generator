import styled from "styled-components";
let Form = styled.form`
  display: flex;
  justify-content: center;
  margin: 0px AUTO;
  padding: 30px 40px;
  font-family: monospace;
  font-size: 20px;
  input {
    width: 150px;
    border: none;
    cursor: pointer;
    margin: 0px 28px;
  }
  label {
    font-weight: bold;
    letter-spacing: 1px;
  }
  button {
    background-color: white;
    font-family: monospace;
    color: black;
    border: none;
    font-weight: 600;
    letter-spacing: 1.5px;
    border: 1px solid black;
    cursor: pointer;
    padding: 2px 10px;
  }
  @media (max-width: 500px) {
    input {
      margin: 0px 5px;
      width: 80px;
    }
    label {
      letter-spacing: 0px;
    }
  }
`;

let Section = styled.section`
  width: 100%;
  margin: 0px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

let Div = styled.div`
  width: 19.999%;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: monospace;

  p {
    letter-spacing: 1px;
    margin: 5px 0px;
    font-size: 16px;
    font-weight: 600;
  }
  :nth-of-type(21) {
    width: 100%;
    margin: 10px 0%;
  }
  @media (max-width: 850px) {
    width: 33.3333%;
  }
  @media (max-width: 585px) {
    width: 50%;
  }
`;

export { Form, Section, Div };
