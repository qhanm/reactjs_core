import { FormControl, FormHelperText, Input, InputLabel } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import React from "react";
import {Helper} from "../../util/Helper";

const useStyles = makeStyles((theme) => ({
    formGroup: {
        marginTop: '.8rem'
    }
}))

function TextFieldInput(props) {
    const classes = useStyles();

    let {
        labelName,
        attribute,
        type,
        txtError,
        isTouched,
        handleChange,
        handleBlur,
        value
    } = props;

    const getType = (type) => {
        return type ? type : 'text';
    }

    return (
        <FormControl className={classes.formGroup} error={ Helper.convertStringToBoolean(txtError) && isTouched } fullWidth>
            <InputLabel>{ labelName }</InputLabel>
            <Input
                variant="outlined"
                required
                fullWidth
                name={ attribute }
                type={ getType(type) }
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            { Helper.convertStringToBoolean(txtError) && isTouched && <FormHelperText>{txtError}</FormHelperText> }

        </FormControl>
    )
}

export default TextFieldInput;