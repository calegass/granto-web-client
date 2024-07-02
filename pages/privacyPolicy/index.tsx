import Link from "next/link";
import { Container, Main, Title, Description } from "@/components/sharedstyles";
import Head from "next/head";

export default function About() {
  return (
    <Container>
      <Head>
        <title>Scriptors - Política de Privacidade</title>
        <meta name="description" content="scriptors project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Title>About Page</Title>
        <Description>
          <ul>
            <li><Link href="#section1">Section 1</Link></li>
            <li><Link href="#section2">Section 2</Link></li>
            <li><Link href="#section3">Section 3</Link></li>
          </ul>
        </Description>
        <section id="section1">
          <h2>Section 1</h2>
          <p>Content of Section 1...</p>
        </section>
        <section id="section2">
          <h2>Section 2</h2>
          <p>Content of Section 2...</p>
        </section>
        <section id="section3">
          <h2>Section 3</h2>
          <p>Content of Section 3...</p>
        </section>
      </Main>
    </Container>
  );
}
