import { styled } from '@mui/material';
import React, { useState } from 'react';
import NavBar from './client/NavBar';

const StyledDiv = styled('div')(() => ({
  display: 'flex',
  padding: '0 150px 0 150px',
  justifyContent: 'center',
  alignItems: 'center'
}))
export const Home = () => {
  return (
    <StyledDiv>
      <NavBar />
    </StyledDiv>
  );
};
