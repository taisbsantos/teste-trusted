import styled from 'styled-components'

export const StyledTable = styled.table`
  width: 90%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #000;
    padding: 8px;
  }

  @media (max-width: 1280px) {
    width: 100%;
  }
`;

export const StyledButton = styled.button`
  margin: 5px;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color:white;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const StyledPagination = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin: 0 10px;
  }
`;


export const StyledFootTable = styled.td`
    width: 100%;
`;

export const StyledTr = styled.tr`
&:nth-child(even) {
  background-color: #f2f2f2;
}

&:nth-child(odd) {
  background-color: #ffffff;
}
`
export const StyledHead = styled.th`
  background-color: #f2f2f2;

`