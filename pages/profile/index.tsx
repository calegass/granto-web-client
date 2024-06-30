import Link from "next/link";
import { Container, Main, Title, Description } from "@/components/sharedstyles";
import Head from "next/head";


export default function Profile(){
    return(    
        <Container>
            <Head>
            <title>Profile</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <Main>
            <Title>Profile Page</Title>
            <Description>
                <Link href="/">&larr; Go Back</Link>
            </Description>
            </Main>
        </Container>
    )
}