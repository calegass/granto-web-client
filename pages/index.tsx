import React, { useState } from 'react';
import { Container, Main, Title, Description, CodeTag } from "@/components/sharedstyles";
import FileUpload from "@/components/FileUpload";
import { AuthModal } from "@/components/AuthModal";
import Login from "@/components/Login";
import { useAuth } from "@/context/AuthContext";

export default function Home() {
  const { loggedIn, login } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false); // Estado para o modal de login
  const [fileToUpload, setFileToUpload] = useState<File | null>(null);

  const handleFileUpload = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Arquivo enviado com sucesso!');
      } else {
        console.error('Erro ao enviar arquivo:', response.statusText);
      }
    } catch (error: any) {
      console.error('Erro ao enviar arquivo:', error.message);
    }
  };

  const handleAuthenticateAndUpload = async () => {
    setShowAuthModal(false);
    setShowLoginModal(true); // Abrir o modal de login
  };

  const handleUploadWithoutAuth = async () => {
    setShowAuthModal(false);
    if (fileToUpload) {
      await handleFileUpload(fileToUpload);
      setFileToUpload(null); // Limpar o arquivo após o envio
    }
  };

  const handleCloseModal = () => {
    setShowAuthModal(false); // Fechar o modal sem limpar fileToUpload
  };

  const handleLoginSuccess = () => {
    setShowLoginModal(false); // Fechar o modal de login após o login bem-sucedido
    if (fileToUpload) {
      handleFileUpload(fileToUpload);
      setFileToUpload(null); // Limpar o arquivo após o envio
    }
  };

  const handleFileUploadPrompt = (file: File) => {
    setFileToUpload(file);
  };

  const handleFileSubmit = () => {
    if (fileToUpload) {
      if (loggedIn) {
        handleAuthenticateAndUpload();
      } else {
        setShowAuthModal(true);
      }
    }
  };

  const handleCancelFileUpload = () => {
    setFileToUpload(null); // Limpar o arquivo selecionado ao cancelar
  };

  return (
    <Container>
      <Main>
        <Title>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Title>
        <Description>
          Get started by editing
          <CodeTag>pages/index.tsx</CodeTag>
        </Description>
        <FileUpload
          onFileUpload={handleFileUploadPrompt}
          onSubmit={handleFileSubmit}
          fileToUpload={fileToUpload}
          onCancel={handleCancelFileUpload}
        />
        <AuthModal
          isOpen={showAuthModal}
          onClose={handleCloseModal}
          onAuthenticate={handleAuthenticateAndUpload}
          onUploadWithoutAuth={handleUploadWithoutAuth}
          onLoginOpen={() => setShowLoginModal(true)} // Passar a função para abrir o modal de login
        />
        <Login
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          onSuccess={handleLoginSuccess}
        />
      </Main>
    </Container>
  );
}
