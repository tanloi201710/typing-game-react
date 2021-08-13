import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import React, { useCallback } from 'react';
import CloseIcon from '@material-ui/icons/Close';

import useStyles from './styles';

export default function MessageBox({ close }) {
    const classes = useStyles();

    const handleClose = useCallback(() => {
        close();
    }, [close]);
    return (
        <Card className={classes.msgContainer} raised>
            <div className={classes.cardHeader}>
                <Button onClick={handleClose}>
                    <CloseIcon />
                </Button>
            </div>
            <CardContent>
                <Typography variant="h4">This is message box</Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained">Click Me</Button>
            </CardActions>
        </Card>
    )
}
