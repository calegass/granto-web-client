import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styled from 'styled-components';
import axiosInstance from '@/utils/axiosInstance';
import Loading from '@/components/Loading';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
`;

const Main = styled.main`
  max-width: 700px;
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.granto_color};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.75);
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.granto_button};
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const Description = styled.div`
  margin-top: 20px;

  p {
    color: white;
    margin-bottom: 10px;
    white-space: pre-line;
    strong {
      color: ${({ theme }) => theme.colors.granto_button};
    }
  }

  a {
    color: ${({ theme }) => theme.colors.granto_button};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  ul {
    list-style: none;
    padding-left: 20px;

    li {
      color: white;
      margin-bottom: 5px;
      position: relative;
      padding-left: 20px;

      &::before {
        content: '•';
        position: absolute;
        left: 0;
        color: ${({ theme }) => theme.colors.granto_button};
      }
    }
  }
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.granto_button};
  color: white;
  font-size: 1.5rem;
  border: none;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  margin-top: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.granto_button_hover};
  }
`;

interface MyFile {
  id: string;
  name: string;
  uploadDate: string;
  link: string;
  extracted_data: string;
}

const FileDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [file, setFile] = useState<MyFile | null>(null);

  useEffect(() => {
    const fetchFileDetails = async () => {
      try {
        const response = await axiosInstance.get(`/user_files/${id}`);
        setFile(response.data);
      } catch (error) {
        console.error('Erro ao buscar detalhes do arquivo:', error);
      }
    };

    if (id) {
      fetchFileDetails();
    }
  }, [id]);

  if (!file) {
    return <Loading show={true} />;
  }

  const Download = () => {
    axiosInstance.get(`/export_user_files/${file.id}`)
    .then((response) => {
      console.log('Arquivo enviado com sucesso:', response.data);
      window.open(response.data.pdf_url, '_blank');
    })
    .catch((error) => {
      console.error('Erro ao enviar o arquivo:', error.message);
    });
  }


  const processedExtractedData = file.extracted_data.split('\n').map((line, index) => {
    // Substituir * por ícone de bolinha
    if (line.trim().startsWith('* ')) {
      const formattedLine = line.trim().substring(2).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      return <li key={index} dangerouslySetInnerHTML={{ __html: formattedLine }} />;
    }
  
    // Aplicar negrito nas palavras específicas
    const formattedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
    return <p key={index} dangerouslySetInnerHTML={{ __html: formattedLine }} />;
  });
  
  return (
    <Container>
      <Head>
        <title>Detalhes do Arquivo - {file.name}</title>
        <meta name="description" content={`Detalhes do arquivo ${file.name}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Title>Detalhes do Arquivo</Title>
        <Description>
          <p><strong>Nome:</strong> {file.name}</p>
          <p><strong>Data de Upload:</strong> {file.uploadDate}</p>
          <p><a href={file.link} target="_blank" rel="noopener noreferrer">Clique aqui para visualizar o arquivo!</a></p>
          <br/><p><strong>Dados Extraídos:</strong></p>
          {processedExtractedData.length > 0 ? (
            <ul>
              {processedExtractedData}
            </ul>
          ) : (
            <p>Nenhum dado extraído disponível.</p>
          )}
        </Description>
        {/* implementar botao que retorna o arquivo contendo as informações */}
        <Button onClick={Download}>Clique aqui para exportar!</Button>
      </Main>
    </Container>
  );
};

export default FileDetailPage;
