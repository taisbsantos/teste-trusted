import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { UsuariosGithubDTO } from '../../../core/usecase/Github';

const Table = (props: { usuarios: UsuariosGithubDTO[] }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [displayedData, setDisplayedData] = useState<UsuariosGithubDTO[]>();

  const itemsPerPage = 4;
  const totalPages = Math.ceil(props.usuarios.length / itemsPerPage);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedItems = props.usuarios.slice(startIndex, endIndex);
    setDisplayedData(displayedItems);
  }, [currentPage, props.usuarios]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <S.StyledButton
          key={i}
          onClick={() => handlePageChange(i)}
          disabled={currentPage === i}
        >
          {i}
        </S.StyledButton>
      );
    }
    return pageNumbers;
  };

  return (
    <div>
      <S.StyledTable>
        <thead>
          <S.StyledTr>
            <S.StyledHead>ID</S.StyledHead>
            <S.StyledHead>Login</S.StyledHead>
            <S.StyledHead>Name</S.StyledHead>
            <S.StyledHead>Public Repos</S.StyledHead>
            <S.StyledHead>Followers</S.StyledHead>
            <S.StyledHead>Following</S.StyledHead>
          </S.StyledTr>
        </thead>
        <tbody>
          {(displayedData !== undefined) ? displayedData.map((row, index) => (

            <S.StyledTr key={index}>
              <td>{row.id}</td>
              <td>{row.login}</td>
              <td>{row.name}</td>
              <td>{row.public_repos}</td>
              <td>{row.followers}</td>
              <td>{row.following}</td>
            </S.StyledTr>

          )) : ' '}
        </tbody>

        <tfoot>
          <tr >
            <S.StyledFootTable colSpan={6}>
              <S.StyledPagination>
                <S.StyledButton onClick={() => handlePageChange(1)} disabled={currentPage === 1}>
                  {'<<'}
                </S.StyledButton>
                <S.StyledButton onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                  {'<'}
                </S.StyledButton>
                {renderPageNumbers()}
                <S.StyledButton onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                  {'>'}
                </S.StyledButton>
                <S.StyledButton onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>
                  {'>>'}
                </S.StyledButton>
              </S.StyledPagination>
            </S.StyledFootTable>
          </tr>
        </tfoot>
      </S.StyledTable>

    </div>
  );
};

export default Table;

