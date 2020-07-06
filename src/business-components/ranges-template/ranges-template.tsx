import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

type Props = {
    children: JSX.Element;
    value: number;
    index: number;
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SimpleTabs() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            asdasdad
        </div>
    );
}