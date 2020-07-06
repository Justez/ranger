import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Tab, Tabs } from '@material-ui/core';

import TasksTemplate from '../../business-components/tasks-template';
import RangesTemplate from '../../business-components/ranges-template';

type Props = {
    children: JSX.Element,
    value: number,
    index: number,
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.primary.light,
    },
}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (_: any, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Tasks" />
                    <Tab label="Ranges" />
                </Tabs>
            </AppBar>
            {value === 0 && <TasksTemplate />}
            {value === 1 && <RangesTemplate />}
        </div>
    );
}