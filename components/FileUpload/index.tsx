import React, { useState, useEffect } from 'react';
import { Button, ButtonContainer, FileName, FlexContainer, InputFile, Label } from '@/styles/fileupload';

interface FileUploadProps {
  onFileUpload: (file: File) => void;
  onSubmit: () => void;
  fileToUpload: File | null;
  onCancel: () => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload, onSubmit, fileToUpload, onCancel }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(fileToUpload);

  useEffect(() => {
    setSelectedFile(fileToUpload);
  }, [fileToUpload]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      onFileUpload(file);
    }
  };

  const handleSubmit = () => {
    if (selectedFile) {
      onSubmit(); // Notificar o componente pai para abrir o modal
    }
  };

  const handleCancel = () => {
    setSelectedFile(null); // Limpar o arquivo selecionado sem fazer upload
    onCancel(); // Notificar o componente pai sobre o cancelamento
  };

  return (
    <FlexContainer>
      {selectedFile ? (
        <div>
          <FileName>Arquivo selecionado: {selectedFile.name}</FileName>
          <ButtonContainer>
            <Button onClick={handleCancel}><span>&larr; Cancelar</span></Button>
            <Button onClick={handleSubmit}><span>Enviar &rarr;</span></Button>
          </ButtonContainer>
        </div>
      ) : (
        <Label htmlFor="file-upload">
          <span>Escolher arquivo &rarr;</span>
          <InputFile
            id="file-upload"
            type="file"
            accept=".pdf,.doc,.docx,.jpg,.png"
            onChange={handleFileChange}
          />
        </Label>
      )}
    </FlexContainer>
  );
};

export default FileUpload
