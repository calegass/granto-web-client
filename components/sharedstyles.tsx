import styled from "styled-components";
import Link from "next/link";

export const A = styled.a`
  color: ${({ theme }) => theme.colors.granto_color};
  text-decoration: underline;
  &:hover,
  :focus,
  :active {
      color: ${({ theme }) => theme.colors.granto_button};
    text-decoration: underline;
  }
`;

const Container = styled.div`
    flex-direction: column;
    padding: 2rem 0.5rem;  // Add padding-top to accommodate navbar and padding-bottom for footer
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`;

const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: rgb(50, 50, 50);
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  text-decoration: none;

  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    &:hover,
    :focus,
    :active {
      text-decoration: underline;
    }
  }
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.granto_color};
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`;

const CodeTag = styled.code`
  background: #fafafa;
  border-radius: 5px;
  margin: 0 0.75rem;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family:
    Menlo,
    Monaco,
    Lucida Console,
    Liberation Mono,
    DejaVu Sans Mono,
    Bitstream Vera Sans Mono,
    Courier New,
    monospace;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  max-width: 800px;
  margin-top: 3rem;
`;

const Card = styled.div`
  padding: 1.5rem;
  color: inherit;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 10px;
  transition:
    color 0.15s ease,
    border-color 0.15s ease;
  width: 100%;

  &:hover,
  :active {
    color: #0070f3;
    border-color: #0070f3;
  }
    
  a {
      font-size: 1.5rem;
      color: inherit;
      text-decoration: none;
  }
`;

const StyledLink = styled(Link)`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
`;

export { Container, Main, Title, Description, CodeTag, FlexContainer, Card, StyledLink }
