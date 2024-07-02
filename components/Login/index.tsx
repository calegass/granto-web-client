import React, {useRef, useEffect, useState} from 'react';
import * as S from './styles';
import { useAuth } from '@/context/AuthContext';

interface LoginProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ isOpen, onClose, onSuccess }) => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>('');
  const modalRef = useRef<HTMLDivElement>(null);

  // remover a mensagem de erro ao fechar o modal
  useEffect(() => {
    if (!isOpen) {
      setError('');
    }
  }, [isOpen]);

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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('handleLogin chamado');

    try {
      await login(email, password);
      console.log(localStorage.getItem('token'));
      console.log('Login bem-sucedido');
      onSuccess();
    } catch (error: any) {
      console.error('Erro ao fazer login:', error.message);
      setError('Erro ao fazer login. Verifique suas credenciais e tente novamente.');
    }
  };

  const handleRegister = () => {
    console.log('handleRegister chamado');
    // Adicione o código para o registro
  }

  return (
    <S.Backdrop>
      <S.ModalContainer ref={modalRef}>
        {/*<S.CloseButton onClick={onClose}>&times;</S.CloseButton>*/}
        <S.Form>
          <S.Title>Faça o seu login ou registre-se</S.Title>
          {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
            required
          />
          <S.ForgotPassword href="/auth/forgot-password">Esqueci minha senha</S.ForgotPassword>
          <S.ButtonContainer>
            <button type="submit" onClick={handleLogin}>Entrar</button>
            <button type="button" onClick={handleRegister}>Registrar</button>
          </S.ButtonContainer>
        </S.Form>
      </S.ModalContainer>
    </S.Backdrop>
  );
};

export default Login;
