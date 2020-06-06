import React from 'react';
import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';

export interface LoaderProps {
  height?: string;
}

const Loader: React.FC<LoaderProps> = ({ height }) => (
  <Container height={height}>
    <CircularProgressStyled />
  </Container>
);
export default Loader;

const Container = styled.div<LoaderProps>`
  width: 100%;
  height: ${({ height }) => height || '100%'};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CircularProgressStyled = styled(CircularProgress)`
  &.MuiCircularProgress-colorPrimary {
    color: #3498db;
  }
`;
