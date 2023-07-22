import React, { useEffect, useRef, useState } from 'react';
import * as S from './styles'
import Table from '../../layout/components/Table';
import { UsuariosGithubDTO, githubService } from '../../core/usecase/Github';
import LogoGithub from '../../assets/imgs/logotipoGit.png'
import FiltroForm from '../../layout/components/FiltroForm';
import NovoUsuarioForm from '../../layout/components/NovoUsuarioForm';

const Home: React.FC = () => {

  const inputNovoUsuario = useRef<HTMLInputElement | null>(null);
  const [novosUsuarios, setNovosUsuarios] = useState<string[]>([]);
  const [usuarios, setUsuarios] = useState<UsuariosGithubDTO[]>(
    [{
      login: '',
      id: undefined,
      name: '',
      public_repos: undefined,
      followers: undefined,
      following: undefined
    }]
  );

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await githubService.findAll();
        if (Array.isArray(response.data)) {
          setUsuarios(response.data);
        } else if (response.data) {
          setUsuarios([response.data]);
        }
      } catch (error: any) {
        console.error(error.message);
      }
    }
    fetchUsuarios();
  }, []);

  const handleFilter = async (filtro: string, valor: string) => {
    try {
      const response = await githubService.findBy(filtro, valor);

      if (Array.isArray(response.data)) {
        setUsuarios(response.data);
      } else if (response.data) {
        setUsuarios([response.data]);
      }

    } catch (e) {
      console.error("Usuario não encontrado");
    }

  };

  const handleNovosUsuarios = () => {
    if (inputNovoUsuario.current?.value !== undefined) {
      setNovosUsuarios([...novosUsuarios, inputNovoUsuario.current?.value]);
      inputNovoUsuario.current!.value = ''
    }
  }

  return (
    <S.indexMain>
      <img src={LogoGithub} alt="logo github" width="5%" />
      <FiltroForm onFilter={handleFilter}></FiltroForm>
      <NovoUsuarioForm addUsuarios={handleNovosUsuarios}></NovoUsuarioForm>
      <S.tableDiv>
        <Table usuarios={usuarios} />
      </S.tableDiv>
    </S.indexMain>
  );
};

export default Home;