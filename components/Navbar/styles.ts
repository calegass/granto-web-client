// styles.ts

import styled from 'styled-components';

export const Nav = styled.nav`
    background-color: #4510A3; 
    padding: 1rem 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const NavContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    button {
        background: none;
        border: none;
        color: #ddd;
        text-decoration: none;
        cursor: pointer;
        font-size: 1.5rem;
        &:hover {
            color: #0CD2AB;
        }
    }
`;

export const NavLinks = styled.ul`
    list-style: none;
    display: flex;
    gap: 1.5rem;
    li {
        button {
            background: none;
            border: none;
            color: #fff;
            font-size: 1rem;
            cursor: pointer;
            &:hover {
                color: #0CD2AB;
                text-decoration: none;
            }
        }
    }
`;

export const NavLink = styled.button`
    background: none;
    border: none;
    color: inherit;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    &:hover {
        text-decoration: underline;
    }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  background: #4510A3;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 1000;
  margin-top: 8px;
`;

export const DropdownItem = styled.a`
  display: block;
  padding: 8px 16px;
  cursor: pointer;
  color: #fff;
  &:hover {
    color: #0CD2AB;
  }
`;

export const DropdownButton = styled.button`
  display: block;
  padding: 8px 16px;
  cursor: pointer;
`;