import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Head from "next/head";
import { Container, Main, Title, Description } from "@/components/sharedstyles";
import FileListWithPagination from '@/components/FileListPagination/FileListPagination';

interface MyFile {
    id: string;
    name: string;
    uploadDate: string;
}


const Profile = () => {
  const [files, setFiles] = useState<MyFile[]>([]);

//   useEffect(() => {
//     // Fetch files from the server (substitute with your actual API endpoint)
//     fetch('/api/files') // Replace with your API endpoint
//       .then(response => response.json())
//       .then(data => setFiles(data))
//       .catch(error => console.error('Error fetching files:', error));
//   }, []);

  useEffect(() => {
    // Lista de arquivos fictícios para teste
    const testFiles: MyFile[] = [
      { id: '1', name: 'file1.pdf', uploadDate: '2024-06-01' },
      { id: '2', name: 'file2.docx', uploadDate: '2024-06-02' },
      { id: '3', name: 'file3.jpg', uploadDate: '2024-06-03' },
      { id: '4', name: 'file4.png', uploadDate: '2024-06-04' },
      { id: '5', name: 'file5.doc', uploadDate: '2024-06-05' },
      { id: '6', name: 'file6.pdf', uploadDate: '2024-06-06' },
      { id: '7', name: 'file7.docx', uploadDate: '2024-06-07' },
      { id: '8', name: 'file8.jpg', uploadDate: '2024-06-08' },
      { id: '9', name: 'file9.png', uploadDate: '2024-06-09' },
      { id: '10', name: 'file10.doc', uploadDate: '2024-06-10' }
    ];
    setFiles(testFiles);
  }, []);

  return (
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
        <FileListWithPagination files={files} filesPerPage={5} />
      </Main>
    </Container>
  );
};

export default Profile;
