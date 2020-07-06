import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { makeStyles, Theme } from '@material-ui/core/styles';

import { State } from '../../store';
import { Ranges } from '../../store/settings-module/types';
import { actions } from '../../store/settings-module';
import { Typography, Grid } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';
import OKIcon from '@material-ui/icons/Done';


const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: 40,
        marginBottom: theme.spacing(2),
    },
    submit: {
        borderRadius: theme.shape.borderRadius,
        borderWidth: 0.5,
        height: 40,
        width: 40,
    },
    label: {
        display: 'flex',
        marginRight: theme.spacing(2),
        width: theme.spacing(30)
    },
    iconOK: {
        marginRight: theme.spacing(2),
        color: theme.palette.success.main
    },
    iconWarning: {
        marginRight: theme.spacing(2),
        color: theme.palette.error.main
    }
}));

interface DispatchProps {
    actions: {
        settings: typeof actions;
    };
}

type Props = {
    name: string;
    option: string;
}

interface StateProps {
    ranges: Ranges;
}

type OwnProps = Props & StateProps & DispatchProps

const TimeInputForm = ({ name, option, actions, ranges }: OwnProps) => {
    const classes = useStyles();
    const isvalid = name === 'time' ? ranges.some((range) => {
        const [from, to] = range.split('-');
        if (from < to) return from <= option && option <= to
        if (from > to) return from <= option || option <= to
        return from === option
    }) : false;

    const handleSubmit = () => actions.settings['remove' + name.charAt(0).toUpperCase() + name.slice(1)](option)

    return (
        <form onSubmit={handleSubmit}>
            <Grid container alignItems='center' className={classes.root}>
                <Grid item className={classes.label}>
                    {name === 'time' && isvalid && <OKIcon className={classes.iconOK} />}
                    {name === 'time' && !isvalid && <WarningIcon className={classes.iconWarning} />}
                    <Typography variant="h6">{option}</Typography>
                </Grid>
                <Grid item>
                    <input className={classes.submit} type="submit" value="-" />
                </Grid>
            </Grid>
        </form>
    );
}

const mapStateToProps = ({ ranges }: State): StateProps => ({
    ranges,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    actions: {
        settings: bindActionCreators(actions, dispatch),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(TimeInputForm);