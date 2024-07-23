import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Head from "next/head";
import { Container, Main, Title, Description } from "@/components/sharedstyles";
import FileListWithPagination from '@/components/FileListPagination';
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";
import axiosInstance from '@/utils/axiosInstance';
import Loading from '@/components/Loading';
import styled from 'styled-components';


// container para a pagina ficar grande entre o header e o footer enquanto o conteudo nao chega do back
const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;


interface MyFile {
  id: string;
  name: string;
  uploadDate: string;
}

const Profile = () => {
  const { loggedIn } = useAuth();
  const router = useRouter();
  const [files, setFiles] = useState<MyFile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loggedIn) {
      router.push('/'); // Redireciona para a tela principal se não estiver logado
    }
  }, [loggedIn, router]);

  useEffect(() => {
    const fetchUserFiles = async () => {
      // console.log("Profile: ");
      // console.log(localStorage.getItem('token'));
      try {
        const response = await axiosInstance.get('/user_files',  {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
        setFiles(response.data); // Define os arquivos recebidos do backend no estado local
      } catch (error) {
        console.error('Erro ao buscar arquivos do usuário:', error);
      } finally {
        setLoading(false); // Defina o carregamento como falso quando a requisição for concluída
      }
    };

    fetchUserFiles();
  }, []);

  const handleFileClick = (file: MyFile) => {
    console.log('File clicked:', file);
    // Aqui você pode definir o comportamento ao clicar no arquivo, por exemplo, redirecionar para outra página
    router.push(`/file/${file.id}`); // Exemplo de redirecionamento
  };

  if (loading) {
    return <ContainerLoading>
        <Loading show={loading} />
      </ContainerLoading>
  }

  const P = styled.p`
    margin: 1rem 0;
  `;

  return (
    <Container>
      <Head>
        <title>Scriptors - Perfil</title>
        <meta name="description" content="scriptors project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Title>Histórico:</Title>
        <Description>
          <Link href="/">&larr; Voltar</Link>
          <P>Você pode clicar no arquivo para ver seus detalhes e exportá-lo:</P>
        </Description>
        {files.length > 0 ? (
          <FileListWithPagination files={files} filesPerPage={5} onFileClick={handleFileClick} />
        ) : (
          <P>Nenhum arquivo inserido ainda.</P> // Mensagem quando não há arquivos
        )}
      </Main>
    </Container>
  );
};

export default Profile;
