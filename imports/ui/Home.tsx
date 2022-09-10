import { Grid, styled } from '@mui/material';
import React, { useState } from 'react';
import MainTable from './client/MainTable';
import Menu from './client/Menu';
import NavBar from './client/NavBar';

const StyledDiv = styled(Grid)(() => ({
  // display: 'flex',
  // padding: '0 150px 0 150px',
  flexDirection: 'column'
}))
export const Home = () => {
  return (
    <StyledDiv xs={8} > 
      <NavBar />
      <Menu />
      <MainTable/>
    </StyledDiv>
  );
};
