// styles.ts
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
`;

export const ModalContent = styled.div`
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 80%;
    text-align: center;
`;

export const ModalTitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 1rem;
`;

export const ModalButton = styled.button`
    background-color: ${(props) => props.theme.colors.granto_color};
    color: ${(props) => props.theme.colors.granto_button};
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${(props) => props.theme.colors.granto_button_hover};
    }

    & + & {
        margin-left: 1rem;
    }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background-color: ${(props) => props.theme.colors.granto_color};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

export const ErrorMessage = styled.p`
  color: #ff0000;
  margin-bottom: 1rem;
`;

export const SuccessMessage = styled.p`
  color: #00ff00;
  margin-bottom: 1rem;
`;

export const Form = styled.form`
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
      border-color: #0070f3;
      box-shadow: 0 0 0 3px rgba(0, 112, 243, 0.2);
    }
  }

  button {
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
  color: ${(props) => props.theme.colors.granto_button};
  text-decoration: none;
  font-size: 0.875rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  color: #ffffff;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: #ffffff;
  cursor: pointer;
`;

export const Span = styled.span`
  font-size: 12px;
  margin-bottom: 2px;
  text-align: center;
  color: #ffffff;
`;