import React, { useState, useEffect } from 'react';
import * as S from './styles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';
import dynamic from 'next/dynamic';

const Login = dynamic(() => import('@/components/Login'), { ssr: false });

const Navbar = () => {
  const { loggedIn, logout } = useAuth();
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
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
    setLoginOpen(false);
    setEmail(localStorage.getItem('email'));
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
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
              <img src="/white-logo.png" alt="Logo" style={{ height: '40px' }} />
            </button>
          </S.Logo>
          <S.NavLinks>
            <li>
              <Link href="/" passHref>
                <S.NavLink>Home</S.NavLink>
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                <S.NavLink>Sobre</S.NavLink>
              </Link>
            </li>

            {loggedIn ? (
              <>
                <li>
                  <Link href="/profile" passHref>
                    <S.ProfileLink>
                      Histórico: {email}
                    </S.ProfileLink>
                  </Link>
                </li>
                <li>
                  <S.NavButton onClick={handleLogout} aria-label="Logout">
                    Sair
                  </S.NavButton>
                </li>
              </>
            ) : (
              <li>
                <S.NavButton onClick={() => setLoginOpen(true)} aria-label="Open login modal">
                  Autenticar
                </S.NavButton>
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
