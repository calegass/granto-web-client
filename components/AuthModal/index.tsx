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

  return (
    <S.ModalBackdrop>
      <S.ModalContent>
        <S.ModalTitle>Deseja autenticar antes de enviar o arquivo?</S.ModalTitle>
        <S.ModalButton onClick={onLoginOpen}>Autenticar e Enviar</S.ModalButton> {/* Chamando a função onLoginOpen */}
        <S.ModalButton onClick={onUploadWithoutAuth}>Enviar sem Autenticar</S.ModalButton>
        <S.ModalButton onClick={onClose}>Cancelar</S.ModalButton>
      </S.ModalContent>
    </S.ModalBackdrop>
  );
};

export { AuthModal };
