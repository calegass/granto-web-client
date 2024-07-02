import * as S from './styles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';
import dynamic from 'next/dynamic';
import React, { useState, useEffect, useRef } from 'react';

const Login = dynamic(() => import('@/components/Login'), { ssr: false });

const Navbar = () => {
  const { loggedIn, logout } = useAuth();
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [email, setEmail] = useState<string | null>(null); // Adicionado estado para o email
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleNavigation = (path: string) => {
    if (router.asPath !== path) {
      router.push(path);
    }
    setDropdownOpen(false);
  };

  const handleDropdownItemClick = (path: string) => {
    handleNavigation(path);
    setDropdownOpen(false);
  };

  const handleLogout = async () => {
    try {
      await logout();
      setDropdownOpen(false);
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  const handleLoginSuccess = () => {
    setLoginOpen(false);
    setEmail(localStorage.getItem('email'));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  useEffect(() => {
    setDropdownOpen(false);
    if (typeof window !== 'undefined') {
      const storedEmail = localStorage.getItem('email');
      setEmail(storedEmail || 'Email não encontrado');
    }
  }, [loggedIn]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
              <li>
                  <div ref={dropdownRef}>
                    <S.NavButton onClick={() => setDropdownOpen(!isDropdownOpen)} aria-label="User menu">
                      {email}
                    </S.NavButton>
                    {isDropdownOpen && (
                      <S.DropdownMenu>
                        <Link href="/profile" passHref>
                          <S.DropdownItem onClick={() => handleDropdownItemClick('/profile')}>Meus arquivos</S.DropdownItem>
                        </Link>
                        <S.DropdownItem onClick={handleLogout} aria-label="Logout">
                          Sair
                        </S.DropdownItem>
                      </S.DropdownMenu>
                    )}
                  </div>
                </li>
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
      <Login isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} onSuccess={handleLoginSuccess}/>
    </>
  );
};

export default Navbar;
