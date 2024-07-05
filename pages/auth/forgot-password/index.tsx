import { Title, Description, Container, Main, Card, FlexContainer, StyledLink } from "../../../styles/forgot-password";

export default function NotFound() {
  return (
    <Container>
      <Main>
        <Title>Esqueceu a senha?</Title>
        <Description>
          Não se preocupe, através da conta de e-mail cadastrada, envie um e-mail para o suporte:
          {' '}
          <a href="mailto:suporte@suporte.com">suporte@suporte.com</a>!
        </Description>
        <FlexContainer>
          <Card>
            <StyledLink href="/">Início &rarr;</StyledLink>
          </Card>
        </FlexContainer>
      </Main>
    </Container>
  )
}
