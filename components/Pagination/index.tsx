import React from 'react';
import * as S from './styles';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <S.PagContainer>
      <S.PagButton onClick={handlePrevious} disabled={currentPage === 1}>
        Anterior
      </S.PagButton>
      <S.PagSpan>Página {currentPage} de {totalPages}</S.PagSpan>
      <S.PagButton onClick={handleNext} disabled={currentPage === totalPages}>
        Próximo
      </S.PagButton>
    </S.PagContainer>
  );
};

export default Pagination;
