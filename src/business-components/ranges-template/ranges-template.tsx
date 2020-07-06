import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import TimeInputForm from '../../components/time-input-form';

export default () => (
    <Grid container justify='center'>
        <Grid item xs={5}>
            <Typography paragraph variant="h5">Time Ranges</Typography>
            <TimeInputForm
                name="range"
                label="Time Range (14:30 - 19:34)"
                pattern={/(?:[01]\d:[0-5][0-9]|2[0-3]:[0-5][0-9])-(?:[01]\d:[0-5][0-9]|2[0-3]:[0-5][0-9])/i}
                patternMessage="Please provide correct time range, like 09:30-14:30"
            />
        </Grid>
    </Grid>
);