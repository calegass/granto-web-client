import React, { useState } from 'react';
import { Container, Main, Title, Description, CodeTag } from "@/components/sharedstyles";
import FileUpload from "@/components/FileUpload";
import AuthModal from "@/components/AuthModal";
import dynamic from 'next/dynamic';
import { useAuth } from "@/context/AuthContext";

const Login = dynamic(() => import('@/components/Login'), { ssr: false });

export default function Home() {
  const { loggedIn } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
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
          onLoginOpen={handleOpenLoginModal} // Passando a nova função para abrir o modal de login
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
