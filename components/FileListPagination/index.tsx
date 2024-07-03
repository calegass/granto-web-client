import React, { useState, useEffect } from 'react';
import Pagination from '../Pagination';
import * as S from './styles';

interface MyFile {
  id: string;
  name: string;
  uploadDate: string;
}

interface FileListWithPaginationProps {
  files: MyFile[];
  filesPerPage: number;
}

const FileListWithPagination: React.FC<FileListWithPaginationProps> = ({ files, filesPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentFiles, setCurrentFiles] = useState<MyFile[]>([]);

  useEffect(() => {
    const indexOfLastFile = currentPage * filesPerPage;
    const indexOfFirstFile = indexOfLastFile - filesPerPage;
    setCurrentFiles(files.slice(indexOfFirstFile, indexOfLastFile));
  }, [currentPage, files, filesPerPage]);

  const totalPages = Math.ceil(files.length / filesPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleClickItemFile = () =>{

  };

  return (
    <S.FileListContainer>
      <ul>
        {currentFiles.map(file => (
          <S.FileItem key={file.id}>
            {file.name} - <span>{file.uploadDate}</span>
          </S.FileItem>
        ))}
      </ul>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </S.FileListContainer>
  );
};

export default FileListWithPagination;
