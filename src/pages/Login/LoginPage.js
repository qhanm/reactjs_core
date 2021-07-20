import React from 'react';
import LoginForm from '../../components/Form/LoginForm/LoginForm';
import {Avatar, Grid, Link, makeStyles, Typography} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
}));

function LoginPage(props) {

    const classes = useStyles();

    return (
        <>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <LoginForm propFormik={props} />
            <Grid className={classes.paper}  container>
                <Grid item xs>
                    <Link href="#" variant="body2">
                        Forgot password?
                    </Link>
                </Grid>
                <Grid item>
                    <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
            </Grid>
        </>
    );
}

export default LoginPage;