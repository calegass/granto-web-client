import styled from 'styled-components';

export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const ModalContent = styled.div`
    background-color: ${(props) => props.theme.colors.granto_color};
    color: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 80%;
    text-align: center;
    z-index: 1001;
`;

export const ModalTitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 1rem;
`;

export const ModalButton = styled.button`
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
    & + & {
        margin-left: 1rem;
    }
`;

export const Description = styled.p`
    font-size: 1rem;
    margin-bottom: 2rem;
    color: ${(props) => props.theme.colors.granto_button};
    max-width: 100%;
    word-wrap: break-word; /* Permite a quebra de palavras longas */
    white-space: pre-wrap; /* Mantém quebras de linha e espaços */
    overflow-wrap: break-word; /* Outra propriedade para quebra de palavras longas */
`;
