import { styled } from "@mui/material";
import { Grid } from "@mui/material";
import React from "react";

const PREFIX = "Navbar";

const classes = {
  navLeft: `${PREFIX}-navLeft`,
  title: `${PREFIX}-title`
};

const StyledGrid = styled(Grid)(() => ({
  [`&.${classes.navLeft}`]: {
    display: "flex",
    backgroundColor: "green",
    flexDirection: "column",
  },
  [`&.${classes.title}`]: {
    padding: '10px',
    color: 'blue'
  }
}));


const navItem = [{item: 'Guide'},{item: 'New'},{item: 'Load'}];

const NavBar = () => {
  return (
    <StyledGrid container justifyContent="space-between" padding={1}>
      <Grid item>
        <Grid container className={classes.navLeft}>
          <Grid className={classes.title}>Uno Counter</Grid>
          <Grid item>Guide</Grid>
          <Grid item>New</Grid>
          <Grid item>Load</Grid>
        </Grid>
      </Grid>
      <Grid item>User</Grid>
    </StyledGrid>
  );
};

export default NavBar;
