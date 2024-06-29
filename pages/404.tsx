import { Title, Description, Container, Main, Card, FlexContainer, StyledLink } from "@/components/sharedstyles";

export default function NotFound() {
  return (
    <Container>
      <Main>
        <Title>Not Found, 404</Title>
        <Description>Página não encontrada!</Description>
        <FlexContainer>
          <Card>
            <StyledLink href="/">Início &rarr;</StyledLink>
          </Card>
        </FlexContainer>
      </Main>
    </Container>
  )
}
