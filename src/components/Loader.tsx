import React from 'react';
import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';

export interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => (
  <Container>
    <CircularProgressStyled />
  </Container>
);
export default Loader;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  position: absolute;
`;
const CircularProgressStyled = styled(CircularProgress)`
  &.MuiCircularProgress-colorPrimary {
    color: #3498db;
  }
`;
