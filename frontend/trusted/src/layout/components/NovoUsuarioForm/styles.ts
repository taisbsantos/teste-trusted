import styled from 'styled-components';

export const Title = styled.h5`
  @media (max-width: 1280px) {
    margin-bottom:2%;
  }
`;

export const InsercaoGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  width:80%;
  margin-left:5%;
  
  @media (max-width: 1280px) {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: start;

  }
`;

export const InclusaoButton = styled.button`
  padding: 10px 20px;
  background-color: #74b886;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-right:10%;
  margin-left:1%;
  width:12%;

  @media (max-width: 1280px) {
    margin-top: 2%
    margin-left: 1%;
    width:40%;
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

export const ListaNovosUsuarios = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  width:80%;
  margin-left:5%;
  
  @media (max-width: 1280px) {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: start;

  }
`;


export const NovoUsuarioLabel = styled.p`
    margin:1%;
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  width:89%;
  margin-left:5%;
  
  @media (max-width: 1280px) {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: start;

  }
`;