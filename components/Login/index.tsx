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
    e.preventDefault(); // Evita o comportamento padrão de submit do formulário
    console.log('handleLogin chamado'); // Log para depuração

    try {
      await login(email, password);
      console.log(localStorage.getItem('token')); // Log para depuração
      console.log('Login bem-sucedido'); // Log para depuração
      onSuccess();
    } catch (error: any) {
      console.error('Erro ao fazer login:', error.message);
      setError('Erro ao fazer login. Verifique suas credenciais e tente novamente.');
    }
  };

  const handleRegister = () => {
    console.log('handleRegister chamado'); // Log para depuração
    // Adicione o código para o registro
  }

  return (
    <S.Backdrop>
      <S.ModalContainer>
        <S.CloseButton onClick={onClose}>&times;</S.CloseButton>
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
            <button type="button">Registrar</button>
          </S.ButtonContainer>
        </S.Form>
      </S.ModalContainer>
    </S.Backdrop>
  );
};

export default Login;
