import React, { useState, useEffect } from 'react';
import Pagination from '../Pagination';

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

  return (
    <div>
      <ul>
        {currentFiles.map(file => (
          <li key={file.id}>
            {file.name} - {file.uploadDate}
          </li>
        ))}
      </ul>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default FileListWithPagination;
