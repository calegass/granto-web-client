import styled from 'styled-components';

export const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
`;

export const InputFile = styled.input`
    display: none;
`;

export const Label = styled.label`
    padding: 1.5rem;
    color: ${({ theme }) => theme.colors.granto_color};
    text-decoration: none;
    border: 1px solid ${({ theme }) => theme.colors.granto_color};
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    width: 100%;
    display: block;
    text-align: center;
    cursor: pointer;

    &:hover,
    :active {
        color: #0CD2AB;
        border-color: #0CD2AB;
    }

    span {
        font-size: 1.5rem;
        color: inherit;
        text-decoration: none;
    }
`;

export const FileName = styled.p`
    font-size: 1.25rem;
    margin-bottom: 1rem;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
`;

export const Button = styled.button`
    padding: 1.5rem;
    font-size: 1.5rem;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.granto_color};
    text-decoration: none;
    border: 1px solid ${({ theme }) => theme.colors.granto_color};
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    cursor: pointer;

    &:hover,
    :active {
        color: ${({ theme }) => theme.colors.granto_button};
        border-color: ${({ theme }) => theme.colors.granto_button};
    }

    span {
        font-size: 1.5rem;
        color: inherit;
        text-decoration: none;
    }
`;
