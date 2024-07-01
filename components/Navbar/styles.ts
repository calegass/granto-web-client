// styles.ts
import styled from 'styled-components';

export const Nav = styled.nav`
    background-color: ${(props) => props.theme.colors.granto_color};
    padding: 1rem 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    z-index: 10;
    position: relative;
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
        color: #333;
        text-decoration: none;
        cursor: pointer;
        font-size: 1.5rem;
        &:hover {
            color: #555;
        }
    }
`;

export const NavLinks = styled.ul`
    list-style: none;
    display: flex;
    gap: 1.5rem;
    align-items: center; // Adiciona o alinhamento vertical
`;

export const NavButton = styled.button`
    padding: 0.75rem 1.5rem;
    background-color: ${(props) => props.theme.colors.granto_button};
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${(props) => props.theme.colors.granto_button_hover};
    }
`;

export const NavLink = styled.a`
    background: none;
    border: none;
    color: white;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    display: flex;
    align-items: center; // Garante que o link esteja centralizado verticalmente
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

export const ProfileLink = styled.a`
    padding: 0.75rem 1.5rem;
    background-color: ${(props) => props.theme.colors.granto_button};
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
    display: flex;
    align-items: center; // Garante que o link esteja centralizado verticalmente
    text-decoration: none;

    &:hover {
        background-color: ${(props) => props.theme.colors.granto_button_hover};
    }
`;
