import React, { useState } from 'react';
import { Container, Main, Title, Description, CodeTag } from "@/components/sharedstyles";
import FileUpload from "@/components/FileUpload";
import { AuthModal } from "@/components/AuthModal";
import { useAuth } from "@/context/AuthContext";

export default function Home() {
  const { loggedIn } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
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
    if (fileToUpload) {
      if (loggedIn) {
        await handleFileUpload(fileToUpload);
      } else {
        console.log('Autenticação necessária antes do envio');
      }
      setFileToUpload(null); // Limpar o arquivo após o envio ou autenticação
    }
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

  const handleFileUploadPrompt = (file: File) => {
    setFileToUpload(file);
  };

  const handleFileSubmit = () => {
    if (fileToUpload) {
      setShowAuthModal(true);
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
        />
      </Main>
    </Container>
  );
}
