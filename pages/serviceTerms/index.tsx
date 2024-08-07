import Link from "next/link";
import { Container, Main, Title, Description } from "@/components/sharedstyles";
import Head from "next/head";

export default function About() {
  return (
    <Container>
      <Head>
        <title>Scriptors - Termos de Serviço</title>
        <meta name="description" content="scriptors project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Title>About Page</Title>
        <Description>
          <Link href="/">&larr; Go Back</Link>
        </Description>
      </Main>
    </Container>
  );
}
