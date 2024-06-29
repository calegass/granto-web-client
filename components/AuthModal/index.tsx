import { useState } from 'react';
import * as S from './styles';
import {useRouter} from "next/router";
import {login} from "@/utils/auth";
import {useAuth} from "@/context/AuthContext";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthenticate: () => void;
  onUploadWithoutAuth: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onAuthenticate, onUploadWithoutAuth }) => {
  if (!isOpen) return null;

  return (
    <S.ModalBackdrop>
      <S.ModalContent>
        <S.ModalTitle>Deseja autenticar antes de enviar o arquivo?</S.ModalTitle>
        <S.ModalButton onClick={onAuthenticate}>Autenticar e Enviar</S.ModalButton>
        <S.ModalButton onClick={onUploadWithoutAuth}>Enviar sem Autenticar</S.ModalButton>
        <S.ModalButton onClick={onClose}>Cancelar</S.ModalButton>
      </S.ModalContent>
    </S.ModalBackdrop>
  );
};

export { AuthModal }
