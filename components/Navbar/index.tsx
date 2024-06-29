// components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import * as S from './styles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';
import Login from '@/components/Login';

const Navbar = () => {
  const { loggedIn, logout } = useAuth();
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [email, setEmail] = useState<string | null>(null); // Adicionado estado para o email
  const router = useRouter();

  const handleNavigation = (path: string) => {
    if (router.asPath !== path) {
      router.push(path);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  const handleLoginSuccess = () => {
    setLoginOpen(false); // Fechar o modal de login
    setEmail(localStorage.getItem('email')); // Atualizar o email após login
  };

  useEffect(() => {
    if (loggedIn) {
      const storedEmail = localStorage.getItem('email');
      setEmail(storedEmail || 'Email não encontrado');
    }
  }, [loggedIn]);

  return (
    <>
      <S.Nav>
        <S.NavContainer>
          <S.Logo>
            <button onClick={() => handleNavigation('/')} aria-label="Go to homepage">
              Logo e Nome
            </button>
          </S.Logo>
          <S.NavLinks>
            <li>
              <Link href="/">
                <S.NavLink>Home</S.NavLink>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <S.NavLink>Sobre</S.NavLink>
              </Link>
            </li>

            {loggedIn ? (
              <>
                <li>
                  <Link href="/profile">
                    <S.NavLink>
                      {email}
                    </S.NavLink>
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout} aria-label="Logout">
                    Sair
                  </button>
                </li>
              </>
            ) : (
              <li>
                <button onClick={() => setLoginOpen(true)} aria-label="Open login modal">
                  Autenticar
                </button>
              </li>
            )}
          </S.NavLinks>
        </S.NavContainer>
      </S.Nav>
      <Login isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} onSuccess={handleLoginSuccess} />
    </>
  );
};

export default Navbar;
