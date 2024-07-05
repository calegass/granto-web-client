import Link from "next/link";
import { Container, Main, Title, Description } from "@/components/sharedstyles";
import Head from "next/head";
import styled from "styled-components";

const Section = styled.section`
  margin-bottom: 2rem;
  h2 {
  text-align: center;
  color: ${({ theme }) => theme.colors.granto_color};
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  p {
    text-align: center;
    font-size: 1.25rem;
    a {
      color: ${({ theme }) => theme.colors.granto_color};
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    
  }
`;

export default function Infos() {
  return (
    <Container>
      <Head>
        <title>Scriptors - Informações</title>
        <meta name="description" content="scriptors project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Title>Algumas informações<br/>sobre o projeto:</Title>
        <br/>
        <Section id="section1">
          <h2>Quem somos:</h2>
          <p>Os integrantes da equipe são:<br/><br/>
            <br/>
            Matheus Calegari Moizinho - <a href="https://www.linkedin.com/in/matheus-calegari/">LinkedIn</a><br/>

            <br/>
            Rangel Neves Souza - <a href="https://www.linkedin.com/in/rangelneves/">LinkedIn</a><br/>

            <br/>
            Rafael Jardim Caroni - <a href="https://www.linkedin.com/in/rafael-caroni/">LinkedIn</a><br/>

            <br/>
            <p>Orientador: </p>Jefferson Beethoven Martins - <a href="https://www.linkedin.com/in/jefferson-beethoven-martins-7997b8261/">LinkedIn</a><br/>

          </p>
        </Section>
        <Section id="section2">
          <h2>Termos de Serviço</h2>
          <p>Esse projeto foi desenvolvido exclusivamente para <br/>
          fins educacionais e não deve ser utilizado em produção. <br/>
          O uso desse projeto é de responsabilidade do usuário. <br/>
          Desenvolvemos esse projeto participando do edital: <a href="https://www.gov.br/pt-br/noticias/educacao-e-pesquisa/2021/07/inscricoes-abertas-para-o-edital-de-inovacao-para-a-industria">Edital</a> <br/>
          <br/>


          </p>
        </Section>

        <Section id="section3">
          <h2>Política de Privacidade</h2>
          <p>
          Não coletamos nenhum dado sensível dos usuários <br/>
          de acordo com a LGPD. <br/>
          Nosso projeto tem fins educacionais e todas as <br/>
          ferramentas utilizadas são open-source ou possuem <br/>
          licença de uso. <br/>
          <br/>
          A logotipo foi desenvolvida na ferramenta gratuita e <br/>
          podendo ser usada para fins educacionais no site: <a href="https://www.canva.com/">Canva</a> <br/><br/>
          A LLM utilizada foi a Lamma3, com uso legal para<br/>
           fins educacionais e pode ser encontrada <br/>
          no site: <a href="https://www.ollama.com/">Llama3</a><br/>

          </p>
        </Section>
        <Section id="section4">
          <h2>Contato</h2>
          <p>
          Para entrar em contato com a equipe, envie um e-mail para <br/>
          qualquer um dos integrantes da equipe: <br/><br/>
          <a href="mailto:matheus.moizinho@estudante.iftm.edu.br

          ">matheus.moizinho@estudante.iftm.edu.br
          </a>
          </p>
        </Section>
        <Description>
          <Link href="/">&larr; Voltar</Link>
        </Description>
      </Main>
    </Container>
  );
}
