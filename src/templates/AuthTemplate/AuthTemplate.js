import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Footer from './Footer';
import LeftContent from './LeftContent';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function AuthTemplate(props) {
    const { Component, ...restRoute } = props;
    const classes = useStyles();
    return (
        <Route {...restRoute} render={(propsRoute) => {
            return (
                <Grid container component="main" className={classes.root}>
                    <CssBaseline />
                    <LeftContent />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <div className={classes.paper}>
                            <Component {...propsRoute} />
                            <Footer />
                        </div>
                    </Grid>
                </Grid>
            )
        }} />
    );
}

export default AuthTemplate;