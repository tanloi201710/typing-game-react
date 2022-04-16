import { Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

function Word({ word }) {
    const classes = useStyles();
    return (
        <Typography 
            variant="body1" 
            color="textSecondary"
            className={classes.word}
        >
            {`${word}`}&nbsp;
        </Typography>
    )
}

export default Word;
