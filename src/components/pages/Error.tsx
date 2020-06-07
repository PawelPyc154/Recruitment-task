import React from 'react';
import styled from 'styled-components';

export interface ErrorProps {}

const Error: React.FC<ErrorProps> = () => <Container>Something went wrong!</Container>;

export default Error;

const Container = styled.div`
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 83px);
  color: red;
`;
