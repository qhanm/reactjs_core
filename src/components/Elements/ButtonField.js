import React from 'react';
import {Button, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    btn: {
        marginTop: '.8rem'
    }
}))

const ButtonField = (props) => {
    const classes = useStyles();
    const {
        type,
        color,
        isFullWidth,
        text
    } = props

    return (
        <>
            <Button
                className={classes.btn}
                type={ type ? type : 'button' }
                fullWidth={ isFullWidth }
                variant="contained"
                color={ color ? color : 'primary' }
            >
                { text }
            </Button>
        </>
    )
}

export default ButtonField;