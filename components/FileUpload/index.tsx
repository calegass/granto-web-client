import React, { useState } from 'react';
import { Button, ButtonContainer, FileName, FlexContainer, InputFile, Label } from './styles';

interface FileUploadProps {
  onFileUpload: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = () => {
    if (selectedFile) {
      onFileUpload(selectedFile);
      setSelectedFile(null); // Limpa o arquivo selecionado após o envio
    }
  };

  const handleCancel = () => {
    setSelectedFile(null); // Limpa o arquivo selecionado sem fazer upload
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

export default FileUpload;
