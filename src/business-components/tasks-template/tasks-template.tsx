import React from 'react';
import { connect } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';

import { State } from '../../store';
import TimeInputForm from '../../components/time-input-form';
import TimeRemoveForm from '../../components/time-remove-form';

type StateProps = State

const TasksTemplate = ({ times, ranges }: StateProps) => (
    <Grid container justify='center'>
        <Grid item xs={5}>
            <Typography paragraph variant="h5">Time Range Verifier</Typography>
            <TimeInputForm
                name="time"
                label="Time Value (14:30)"
                pattern={/^[01]\d:[0-5][0-9]|2[0-3]:[0-5][0-9]$/i}
                patternMessage="Please provide correct time format HH:MM, like 14:30"
            />
            {times.map(time => <TimeRemoveForm key={time} name="time" option={time} />)}
        </Grid>
        <Grid item xs={5}>
            <Typography paragraph variant="h5">Time Ranges</Typography>
            {ranges.map(range => <Typography key={range} variant="h6">{range}</Typography>)}
        </Grid>
    </Grid>
)

const mapStateToProps = ({ times, ranges }: State): StateProps => ({ times, ranges });

export default connect(mapStateToProps)(TasksTemplate);
