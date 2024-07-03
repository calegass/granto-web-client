import styled from "styled-components";

export const PagButton = styled.button`
    padding: 0.75rem 1.5rem;
    margin: 5px 15px;
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

    &:disabled {
        background-color: ${(props) => props.theme.colors.granto_button_disabled};
        cursor: not-allowed;
    }
`;

export const PagSpan = styled.span`
    font-size: 1.2rem;
    margin: 0 1rem;
    color: ${(props) => props.theme.colors.primary};
`;
