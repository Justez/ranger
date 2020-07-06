import React from 'react';
import { useForm } from "react-hook-form";
import { makeStyles, Theme } from '@material-ui/core/styles';
import { SubmitData } from './'

const useStyles = makeStyles((theme: Theme) => ({
    input: {
        height: 40,
        width: 200,
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

export default function TimeInputForm({ label, name, pattern, patternMessage }: Props) {
    const classes = useStyles();
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data: SubmitData) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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