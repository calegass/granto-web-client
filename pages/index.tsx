// pages/index.tsx (ou Home.tsx)

import React, { useState } from 'react';
import { Container, Main, Title, Description, A } from "@/components/sharedstyles";
import FileUpload from "@/components/FileUpload";
import AuthModal from "@/components/AuthModal";
import dynamic from 'next/dynamic';
import { useAuth } from "@/context/AuthContext";
import Head from "next/head";
import axiosInstance from '@/utils/axiosInstance';
import { useRouter } from 'next/router'; // Para redirecionamento
import Loading from "@/components/Loading"; // Certifique-se de importar o componente de Loading
import styled from 'styled-components';

const Login = dynamic(() => import('@/components/Login'), { ssr: false });

export default function Home() {
  const { loggedIn } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [fileToUpload, setFileToUpload] = useState<File | null>(null);
  const [loading, setLoading] = useState(false); // Estado para o componente de loading
  const router = useRouter(); // Hook para redirecionamento

  const handleFileUpload = async (file: File) => {
    setLoading(true); // Ativar o loading
    const formData = new FormData();
    formData.append('file', file);
    formData.append('query',
        'RESPONDA EM PORTUGUÊS: ' +
        'Você está integrado com um leitor de contratos (apenas contratos) e a sua resposta já será mostrada para o usuário final que extrai informações chave, portanto: ' +
        'Extraia informações específicas, como objeto, valor, prazo, entre outras. Essa solução será importante para otimizar operações, especialmente no que diz respeito à cotação e formalização de seguros.' +
        'Preciso de: ' +
        'CNPJs; ' +
        'Valores numéricos que mensuram valor monetário; ' +
        'Classificação de acordo com palavras encontradas no texto; ' +
        'Empresa Contratante; ' +
        'Empresa Contratada; ' +
        'Vigência do contrato.'
        
      );
    try {
      const response = await axiosInstance.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      console.log('Arquivo enviado com sucesso:', response.data);
      setLoading(false); // Desativar o loading
      router.push(`/file/${response.data.file_id}`); // Redirecionar para a página de detalhes do arquivo
    } catch (error: any) {
      console.error('Erro ao enviar o arquivo:', error.message);
      setLoading(false); // Desativar o loading em caso de erro
    }
  };

  const handleAuthenticateAndUpload = async () => {
    setShowAuthModal(false);
    if (fileToUpload) {
      await handleFileUpload(fileToUpload);
      setFileToUpload(null);
    }
  };

  const handleUploadWithoutAuth = async () => {
    setShowAuthModal(false);
    if (fileToUpload) {
      await handleFileUpload(fileToUpload);
      setFileToUpload(null);
    }
  };

  const handleCloseModal = () => {
    setShowAuthModal(false);
  };

  const handleLoginSuccess = () => {
    setShowLoginModal(false);
    if (fileToUpload) {
      handleFileUpload(fileToUpload);
      setFileToUpload(null);
    }
  };

  const handleFileUploadPrompt = (file: File) => {
    setFileToUpload(file);
  };

  const handleFileSubmit = () => {
    if (fileToUpload) {
      if (loggedIn) {
        handleUploadWithoutAuth(); // Direto upload
      } else {
        setShowAuthModal(true);
      }
    }
  };

  const handleCancelFileUpload = () => {
    setFileToUpload(null);
  };

  const handleOpenLoginModal = () => {
    setShowAuthModal(false);
    setShowLoginModal(true);
  };

  const ContainerComFundoRoxo = styled.div`
    item-align: center;
    align-items: center;
    justify-content: center;



    display: flex;

    background-color: ${({ theme }) => theme.colors.granto_color};
    padding: 20px;

    border-radius: 2rem;
  `;

  return (
    <Container>
      <Head>
        <title>Scriptors - Início</title>
        <meta name="description" content="scriptors project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Title>
          Bem vindo ao projeto<br/>Scriptors!
        </Title>
        <Description>
          Fique a vontade para explorar o projeto e fazer o upload de arquivos/contratos,<br/>
          caso queira salvar o contrato em nossa base de dados, é necessário fazer login.<br/>
          <br/>Mais informações sobre o projeto, <A href="/info">clique aqui</A>.
          <br/>
        </Description>
        <FileUpload
          onFileUpload={handleFileUploadPrompt}
          onSubmit={handleFileSubmit}
          fileToUpload={fileToUpload}
          onCancel={handleCancelFileUpload}
        />
        <br/><br/><br/><br/>
        <ContainerComFundoRoxo>
        <img src="/granto-logo.png" alt="Scriptors" width="200" height="200" />
        <img src="/iftm-nit-1024x146.png" alt="Scriptors" width="512" height="73" />
        </ContainerComFundoRoxo>
        <AuthModal
          isOpen={showAuthModal}
          onClose={handleCloseModal}
          onAuthenticate={handleAuthenticateAndUpload}
          onUploadWithoutAuth={handleUploadWithoutAuth}
          onLoginOpen={handleOpenLoginModal} // Passando a nova função para abrir o modal de login
        />
        <Login
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          onSuccess={handleLoginSuccess}
        />
        <Loading show={loading} /> {/* Adicionando o componente de loading */}
      </Main>
    </Container>
  );
}
