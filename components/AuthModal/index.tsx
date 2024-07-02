import React from 'react';
import * as S from './styles';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthenticate: () => void;
  onUploadWithoutAuth: () => void;
  onLoginOpen: () => void; // Adicionando a função onLoginOpen
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onAuthenticate, onUploadWithoutAuth, onLoginOpen }) => {
  if (!isOpen) return null;

  const handleLoginClick = () => {
    onClose(); // Fechar o modal de autenticação
    onLoginOpen(); // Abrir o modal de login
  };

  return (
    <S.ModalBackdrop>
      <S.ModalContent>
        <S.ModalTitle>Deseja autenticar antes de enviar o arquivo?</S.ModalTitle>
        {/*<S.ModalButton onClick={onAuthenticate}>Sim, autenticar</S.ModalButton>*/}
        <S.ModalButton onClick={handleLoginClick}>Sim, autenticar e enviar</S.ModalButton> {/* Atualização do botão */}
        <S.ModalButton onClick={onUploadWithoutAuth}>Não, enviar sem autenticar</S.ModalButton>
        <S.ModalButton onClick={onClose}>Cancelar</S.ModalButton>
      </S.ModalContent>
    </S.ModalBackdrop>
  );
};

export default AuthModal;
