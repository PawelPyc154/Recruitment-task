import React from 'react';
import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';

const Loader: React.FC = () => <CircularProgressStyled />;
export default Loader;

const CircularProgressStyled = styled(CircularProgress)`
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
  &.MuiCircularProgress-colorPrimary {
    color: #3498db;
  }
`;
