import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    formGroup: {
        marginTop: '.8rem'
    }
}))

function CheckboxField(props) {

    const classes = useStyles();

    const {
        checked,
        value,
        color,
        labelName,
        handleChange,
        name
    } = props;

    const getColor = (color) =>{
        return color ? color : 'primary';
    }

    return (
        <FormControlLabel className={classes.formGroup}
            control={
                <Checkbox
                    name={name}
                    value={value}
                    checked={checked}
                    color={ getColor(color) }
                    onChange={ handleChange }
                />
            }
            label={labelName}
        />
    )
}

export default CheckboxField;