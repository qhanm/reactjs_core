import React, {Component} from 'react';
import {Grid, makeStyles} from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import GroupIcon from '@material-ui/icons/Group';
import {Color} from "../../templates/DashboardTemplate/Theme";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    rootBoxPadding: {
        padding: '80px',
    }
}));


const DashboardPage = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <Grid container spacing={3} style={{padding: 5}}>
                    <Grid item xs={6} sm={3}>
                        <Paper className={classes.paper}>
                            <h2 className={`text-center ${ classes.rootBoxPadding }`}><GroupIcon fontSize="large"/>Users</h2>
                            <Grid container>
                                <Grid item xs className="text-center">
                                    <h5 style={Color.primary}>Total: 30</h5>
                                </Grid>
                                <Grid item xs className="text-center">
                                    <h5 style={Color.green}>Active: 20</h5>
                                </Grid>
                                <Grid item xs className="text-center">
                                    <h5 style={Color.red}>Block: 10</h5>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Paper className={classes.paper}>
                            <h2 className={`text-center ${ classes.rootBoxPadding }`}><GroupIcon fontSize="large"/>Users</h2>
                            <Grid container>
                                <Grid item xs className="text-center">
                                    <h5 style={Color.primary}>Total: 30</h5>
                                </Grid>
                                <Grid item xs className="text-center">
                                    <h5 style={Color.green}>Active: 20</h5>
                                </Grid>
                                <Grid item xs className="text-center">
                                    <h5 style={Color.red}>Block: 10</h5>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Paper className={classes.paper}>
                            <h2 className={`text-center ${ classes.rootBoxPadding }`}><GroupIcon fontSize="large"/>Users</h2>
                            <Grid container>
                                <Grid item xs className="text-center">
                                    <h5 style={Color.primary}>Total: 30</h5>
                                </Grid>
                                <Grid item xs className="text-center">
                                    <h5 style={Color.green}>Active: 20</h5>
                                </Grid>
                                <Grid item xs className="text-center">
                                    <h5 style={Color.red}>Block: 10</h5>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Paper className={classes.paper}>
                            <h2 className={`text-center ${ classes.rootBoxPadding }`}><GroupIcon fontSize="large"/>Users</h2>
                            <Grid container>
                                <Grid item xs className="text-center">
                                    <h5 style={Color.primary}>Total: 30</h5>
                                </Grid>
                                <Grid item xs className="text-center">
                                    <h5 style={Color.green}>Active: 20</h5>
                                </Grid>
                                <Grid item xs className="text-center">
                                    <h5 style={Color.red}>Block: 10</h5>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export default DashboardPage;