// styles.ts

import styled from 'styled-components';

export const Nav = styled.nav`
    background-color: ${(props) => props.theme.colors.primary};
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
    li {
        button {
            background: none;
            border: none;
            color: #fff;
            font-size: 1rem;
            cursor: pointer;
            &:hover {
                color: #ddd;
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
