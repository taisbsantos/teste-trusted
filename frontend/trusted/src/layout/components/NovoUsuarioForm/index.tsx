import React, { useState, useEffect, useRef } from 'react';
import * as S from './styles';
import { githubService } from '../../../core/usecase/Github';


interface FiltroFormProps {
    addUsuarios: (usuarios: string[]) => void;
}

const NovoUsuarioForm: React.FC<FiltroFormProps> = ({ addUsuarios }) => {
    const inputNovoUsuario = useRef<HTMLInputElement | null>(null);
    const [novosUsuarios, setNovosUsuarios] = useState<string[]>([]);

    const handleNovosUsuarios = () => {
        if (inputNovoUsuario.current?.value !== undefined) {
            setNovosUsuarios([...novosUsuarios, inputNovoUsuario.current?.value]);
            inputNovoUsuario.current!.value = ''
        }
    }

    
  const handleConfirmarNovosUsuarios = () => {
    const enviarNovosUsuarios = async () => {
      try {
        await githubService.post(novosUsuarios);
        inputNovoUsuario.current!.value = '';
      } catch (error: any) {
        console.error(error.message);
      }

    }
    enviarNovosUsuarios();
    setNovosUsuarios([]);
  }
  
    return (
    <S.MainDiv>
        <S.InsercaoGroup>
            <S.Title>Inserir usuário</S.Title>
            <S.Input type="text" ref={inputNovoUsuario} />
            <S.InclusaoButton onClick={handleNovosUsuarios}>Incluir nomes</S.InclusaoButton>
        </S.InsercaoGroup>

        {novosUsuarios.length > 0 ? <S.ListaNovosUsuarios>
            <S.Title>Confirme os novos usuários </S.Title>
            {novosUsuarios.map((usuario, index) => (
                <React.Fragment key={index}>
                    <S.NovoUsuarioLabel>- {usuario}</S.NovoUsuarioLabel>
                </React.Fragment>
            ))}

            <S.InclusaoButton onClick={handleConfirmarNovosUsuarios}>Confirmar</S.InclusaoButton>
        </S.ListaNovosUsuarios> : <S.ListaNovosUsuarios></S.ListaNovosUsuarios>}
    </S.MainDiv>


    );
};
export default NovoUsuarioForm;

