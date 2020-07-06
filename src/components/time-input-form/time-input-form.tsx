import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { useForm } from "react-hook-form";
import { makeStyles, Theme } from '@material-ui/core/styles';

import { SubmitData } from './'
import { actions } from '../../store/time-module';

const useStyles = makeStyles((theme: Theme) => ({
    form: {
        marginBottom: theme.spacing(5),
    },
    input: {
        height: 40,
        width: theme.spacing(30),
        padding: theme.spacing(1),
        marginRight: theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
        borderWidth: 0.5,
    },
    submit: {
        borderRadius: theme.shape.borderRadius,
        borderWidth: 0.5,
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.contrastText,
        height: 40,
        width: 40,
    },
    error: {
        color: theme.palette.error.main
    }
}));

type Props = {
    label: string;
    name: string;
    pattern: RegExp;
    patternMessage: string;
}

interface DispatchProps {
    actions: {
        time: typeof actions;
    };
}

const TimeInputForm = ({ label, name, pattern, patternMessage, actions }: Props & DispatchProps) => {
    const classes = useStyles();
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data: SubmitData) => {
        actions.time['add' + name.charAt(0).toUpperCase() + name.slice(1)](data[name])
    }

    return (
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <input
                className={classes.input}
                name={name}
                placeholder={label}
                ref={register({ required: true, pattern })}
            />
            <input className={classes.submit} type="submit" value="+"/>
            {errors[name]?.type === 'pattern' && <p className={classes.error}>{patternMessage}</p>}
            {errors[name]?.type === 'required' && <p className={classes.error}>Required!</p>}
        </form>
    );
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    actions: {
        time: bindActionCreators(actions, dispatch),
    },
});

export default connect(undefined, mapDispatchToProps)(TimeInputForm);
