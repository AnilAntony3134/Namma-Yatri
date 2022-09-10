import { Button, Grid, styled } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';

const PREFIX = 'menu';

const classes = {
    wrapper : `${PREFIX}-wrapper`,
    options : `${PREFIX}-options`
}

const StyledGrid = styled(Grid)(() => ({
    display: 'flex',
    widt: '100%',
    justifyContent: 'space-between',
    alignItems: 'space-between',
    [`& .${classes.wrapper}`]: {
        color: 'white',
        marginTop: '1rem',
        marginBottom: '2rem'
    },
    [`& .${classes.options}`]: {
        color: 'white'
    }

}))

const Menu = () => {
  return (
    <StyledGrid>
        <div className={classes.wrapper}>
            <Button variant="outlined" startIcon={<AddIcon />} className={classes.options}>
                Add Player
            </Button>
        </div>
        <div className={classes.wrapper}>
        <Button variant="outlined" startIcon={<ViewColumnIcon />} className={classes.options}>
                Options
            </Button>
        </div>
    </StyledGrid>
  )
}

export default Menu