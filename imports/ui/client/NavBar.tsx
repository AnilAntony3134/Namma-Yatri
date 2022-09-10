import { Button, styled } from "@mui/material";
import { Grid } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import React from "react";

const PREFIX = "Navbar";

const classes = {
  navLeft: `${PREFIX}-navLeft`,
  title: `${PREFIX}-title`,
  navItem: `${PREFIX}-navItem`,
  userName: `${PREFIX}-userName`
};

const StyledGrid = styled(Grid)(() => ({
  [`& .${classes.navLeft}`]: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  [`& .${classes.title}`]: {
    padding: "1rem",
    color: "rgba(84, 38, 237, 1)",
    fontWeight: '600',
    marginRight: '1rem',
    fontSize: '1.4rem',
    borderRadius: '20px',
    marginLeft: '-1rem'
  },
  [`& .${classes.navItem}`]: {
    margin: '1rem',
    fontWeight: '500',
    color: 'grey',
    cursor: 'pointer',
    '&::after': {
      content: '""',
      width: '0%',
      height: '2px',
      backgroundColor: 'rgba(84, 38, 237)',
      display: 'block',
      transition: '0.5s',
    },
    '&:hover::after':{
      width: '100%'
    },
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: "rgba(255, 255, 255, 1)",
      // borderBottom: '1px solid rgba(0, 122, 255, 1)'
    },
    [`& .${classes.userName}`]: {
      display: 'flex',
      alignItems: 'center',

    }
  },
  [`& .${classes.userName}`]: {
    color: "rgba(84, 38, 237, 1)",
    borderColor: "rgba(84, 38, 237, 1)",
  }
}));

const navItem = [{ item: "Guide" }, { item: "New" }, { item: "Load" }];

const NavBar = () => {
  return (
    <StyledGrid container justifyContent="space-between" alignItems='center' padding={1}>
      <Grid item>
        <div className={classes.navLeft}>
          <Grid className={classes.title}>Uno Counter</Grid>
          <Grid className={classes.navItem}>Guide</Grid>
          <Grid className={classes.navItem}>New</Grid>
          <Grid className={classes.navItem}>Load</Grid>
        </div>
      </Grid>
      <Button variant="outlined" startIcon={<PersonIcon />} className={classes.userName}>
        User
      </Button>
    </StyledGrid>
  );
};

export default NavBar;
