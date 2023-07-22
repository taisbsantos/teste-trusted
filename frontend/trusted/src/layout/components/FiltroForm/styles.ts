import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items: center;
  width: 75%;

  @media (max-width: 1280px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
  }
`;

export const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  height: 25px;
  margin-left:2%;
  @media (max-width: 1280px) {
   margin-left:0%;
   margin-bottom:2%;
   margin-top:2%
  }
`;

export const Filtro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 10px;
    margin:7.5%;
`


export const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: flex-end;
  width:100%;
  
  @media (max-width: 1280px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    margin:1%;

  }
`;

export const Select = styled.select`
  padding: 8px 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const Title = styled.h5`
  @media (max-width: 1280px) {
    margin-bottom:2%;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #74b886;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-right:10%;
  margin-left:2%;

  @media (max-width: 1280px) {
    margin-left: 0%;
  }
`;