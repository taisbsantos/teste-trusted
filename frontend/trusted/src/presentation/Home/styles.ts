import styled from 'styled-components'


export const indexMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:100%;
    margin-top:3%;

    @media (max-width: 1280px) {
      align-items: left;
      hegth:100vh;
      width:100%;
    }
`

export const tableDiv = styled.div`
    padding-top:2%;
    margin-bottom:4%;
    width:85%;
    heigth:30%;
    @media (max-width: 1280px) {
      width: 80%;
      margin-left:0;
    }
  
    
`
