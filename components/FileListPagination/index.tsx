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
  onFileClick: (file: MyFile) => void;
}

const FileListWithPagination: React.FC<FileListWithPaginationProps> = ({ files, filesPerPage, onFileClick }) => {
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

  return (
    <S.FileListContainer>
      <ul>
        {currentFiles.map(file => (
          <S.FileItem key={file.id} onClick={() => onFileClick(file)}>
            <div className="file-name">{file.name}</div>
            <span className="file-date">{file.uploadDate}</span>
          </S.FileItem>
        ))}
      </ul>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </S.FileListContainer>
  );
};

export default FileListWithPagination;
