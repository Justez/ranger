import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import TimeInputForm from '../../components/time-input-form';

export default () => (
    <Grid container justify='center' spacing={10}>
        <Grid item xs={5}>
            <Typography paragraph variant="h5">Time Range Verifier</Typography>
            <TimeInputForm
                name="time"
                label="Time Value (14:30)"
                pattern={/^[01]\d:[0-5][0-9]|2[0-3]:[0-5][0-9]$/i}
                patternMessage="Please provide correct time format HH:MM, like 14:30"
            />
        </Grid>
        <Grid item xs={5}>
            <Typography paragraph variant="h5">Time Ranges</Typography>
        </Grid>
    </Grid>
);