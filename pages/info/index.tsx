import Link from "next/link";
import { Container, Main, Title, Description } from "@/components/sharedstyles";
import Head from "next/head";

export default function Infos() {
  return (
    <Container>
      <Head>
        <title>Scriptors - Termos de Serviço</title>
        <meta name="description" content="scriptors project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Title>About Page</Title>
        <section id="section1">
          <h2>Section 1</h2>
          <p>Content of Section 1...</p>
        </section>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <section id="section2">
          <h2>Section 2</h2>
          <p>Content of Section 2...</p>
        </section>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <section id="section3">
          <h2>Section 3</h2>
          <p>Content of Section 3...</p>
        </section>
        <Description>
          <Link href="/">&larr; Go Back</Link>
        </Description>
      </Main>
    </Container>
  );
}
