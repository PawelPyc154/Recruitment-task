import React from 'react';
import { CircularProgress } from '@material-ui/core';
import styled from '../../utils/styled-components';

const Loader: React.FC = () => <CircularProgressStyled />;
export default Loader;

const CircularProgressStyled = styled(CircularProgress)`
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
  &.MuiCircularProgress-colorPrimary {
    color: ${(props) => props.theme.loader};
  }
`;
