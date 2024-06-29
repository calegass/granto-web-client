import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  text-decoration: none;
`;

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
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
  :focus,
  :active {
    color: #0070f3;
    border-color: #0070f3;
  }
`;

const StyledLink = styled(Link)`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
`;

export { Container, Main, Title, Description, FlexContainer, Card, StyledLink }
