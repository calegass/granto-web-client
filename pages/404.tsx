import { Title, Description, Container, Main, Card, FlexContainer, StyledLink } from "@/components/sharedstyles";
import Head from "next/head";

export default function NotFound() {
  return (
    <Container>
      <Head>
        <title>Scriptors - 404</title>
        <meta name="description" content="scriptors project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
