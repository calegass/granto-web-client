import styled from 'styled-components';

export const ErrorMessage = styled.p`
    color: #ff0000;
    margin-bottom: 1rem;
`;


export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    padding: 0 2rem;
    background: linear-gradient(90deg, #0070f3, #7928ca);
    //background: #8c8c8c; /* Cor de fundo escura */
    color: #ffffff; /* Cor do texto */
`;

export const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
`;

export const Form = styled.div`
    background-color: #1e1e1e;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
`;

export const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
    color: #ffffff; /* Cor do título */
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;

    input {
        padding: 1rem;
        margin-bottom: 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 1rem;
        width: 100%;
        box-sizing: border-box;
        transition: border-color 0.3s ease;

        &:focus {
            outline: none;
            border-color: #0070f3; /* Cor do foco */
            box-shadow: 0 0 0 3px rgba(0, 112, 243, 0.2); /* Efeito de foco */
        }
    }

    button {
        padding: 0.75rem 1.5rem;
        background-color: #0070f3;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1rem;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #005bb5;
        }
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;

    button {
        width: 48%;
    }
`;

export const ForgotPassword = styled.a`
    display: block;
    margin-bottom: 1rem;
    text-align: right;
    color: #0070f3;
    text-decoration: none;
    font-size: 0.875rem;

    &:hover {
        text-decoration: underline;
    }
`;

export const RegisterLink = styled.a`
    display: block;
    text-align: center;
    color: #0070f3;
    text-decoration: none;
    margin-top: 1rem;
    font-size: 0.875rem;

    &:hover {
        text-decoration: underline;
    }
`;

export const InfoContainer = styled.div`
    width: 50%;
    padding: 2rem;
    color: #ffffff;
`;

export const BenefitsTitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-align: left;
`;

export const BenefitList = styled.ul`
    list-style: none;
    padding: 0;

    li {
        margin-bottom: 0.5rem;
        font-size: 1rem;
    }
`;
