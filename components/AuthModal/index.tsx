import React, { useRef, useEffect } from 'react';
import * as S from './styles';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthenticate: () => void;
  onUploadWithoutAuth: () => void;
  onLoginOpen: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onAuthenticate, onUploadWithoutAuth, onLoginOpen }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;

  const handleLoginClick = () => {
    onClose();
    onLoginOpen();
  };

  return (
    <S.ModalBackdrop>
      <S.ModalContent ref={modalRef}>
        <S.ModalTitle>Deseja autenticar antes de enviar o arquivo?</S.ModalTitle>
        <S.Description>
          É importante fazer o Login para que os documentos enviados possam<br />
          ser associados ao seu usuário, fazendo com que você tenha<br />
          acesso ao seu histórico de resultados!
        </S.Description>
        <S.ModalButton onClick={handleLoginClick}>Sim, autenticar e enviar</S.ModalButton>
        <S.ModalButton onClick={onUploadWithoutAuth}>Não, enviar sem autenticar</S.ModalButton>
        <S.ModalButton onClick={onClose}>Cancelar</S.ModalButton>
      </S.ModalContent>
    </S.ModalBackdrop>
  );
};

export default AuthModal;
