/*
import styled, { keyframes, css } from 'styled-components';

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;

const LoadingContainer = styled.div<{ $show: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 9999;
    opacity: ${({ $show }) => ($show ? 1 : 0)};
    pointer-events: ${({ $show }) => ($show ? 'all' : 'none')};
    transition: opacity 0.5s ease-in-out;
    ${({ $show }) => $show && css`
        animation: ${fadeIn} 0.5s;
    `}
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export { LoadingContainer, Spinner }*/

// loading.index.tsx:

import React from 'react';
import { LoadingContainer, Spinner } from '@/styles/loading';

interface LoadingProps {
  show: boolean;
}

const Loading: React.FC<LoadingProps> = ({ show }) => {
  return (
    <LoadingContainer $show={show}>
      <Spinner />
    </LoadingContainer>
  );
};

export default Loading;