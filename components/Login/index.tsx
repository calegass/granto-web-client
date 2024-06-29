import React, { useState } from 'react';
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

  if (!isOpen) return null;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      onSuccess();
    } catch (error: any) {
      console.error('Erro ao fazer login:', error.message);
      setError('Erro ao fazer login. Verifique suas credenciais e tente novamente.');
    }
  };

  return (
    <S.Backdrop>
      <S.ModalContainer>
        <S.CloseButton onClick={onClose}>&times;</S.CloseButton>
        <S.Form onSubmit={handleLogin}>
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
            <button type="submit">Entrar</button>
            <button type="button">Registrar</button>
          </S.ButtonContainer>
        </S.Form>
      </S.ModalContainer>
    </S.Backdrop>
  );
};

export default Login;
