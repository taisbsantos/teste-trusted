import React, { useState, useEffect, useRef } from 'react';
import * as S from './styles';
import { UsuariosGithubDTO, githubService } from '../../../core/usecase/Github';


interface FiltroFormProps {
    onFilter: (filtro: string, valor: string) => void;
}

const FiltroForm: React.FC<FiltroFormProps> = ({ onFilter }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [filtro, setFiltro] = useState('id');

  const handleChangeFiltro = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFiltro(event.target.value);
  };
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputRef.current) {
      const valor = inputRef.current.value;
      onFilter(filtro, valor); 
    }
  };

  return (
    <S.Form onSubmit={handleSubmit} >
    <S.Title>Filtrar usuários</S.Title>
    <S.FormGroup>
      <S.Select onChange={handleChangeFiltro}>
        <option key={"id"} value={"id"}> ID</option>
        <option key={"login"} value={"login"}> Login</option>
      </S.Select>
      <S.Input ref={inputRef} type={filtro === 'id' ? 'number' : 'text'} name='valor' />
      <S.SubmitButton type="submit">pesquisar</S.SubmitButton>
    </S.FormGroup>
  </S.Form>
  );

};
export default FiltroForm;

