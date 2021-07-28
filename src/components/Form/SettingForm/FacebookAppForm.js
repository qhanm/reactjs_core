import React from "react";
import TextFieldInput from "../../Elements/TextFieldInput";
import CheckboxField from "../../Elements/CheckboxField";
import {withFormik} from "formik";
import {connect} from 'react-redux';
import ButtonField from "../../Elements/ButtonField";

function FacebookAppForm(props) {

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;

    return (
        <form onSubmit={handleSubmit}>
            <TextFieldInput
                labelName="App Id"
                attribute="app_id"
                txtError={errors.app_id }
                isTouched={touched.app_id}
                handleChange={ handleChange }
                handleBlur={handleBlur}
                value={values.app_id}
            />
            <TextFieldInput
                labelName="Password"
                attribute="password"
                type="password"
                txtError={ errors.password }
                isTouched={touched.password}
                handleBlur={handleBlur}
                value={values.password}
                handleChange={ handleChange }
            />
            <ButtonField
                className="mt-3"
                text="Sign In"
                type="submit"
                isFullWidth={false}
            />
        </form>
    )
}

const FacebookAppFormWithFormik = withFormik({
    mapPropsToValues: () => ({
        email: '',
        password: '',
        remember: false,
        app_id: '',
    }),
    handleSubmit: (values, {props, setSubmitting }) => {

    },
})(FacebookAppForm)

export default connect()(FacebookAppFormWithFormik);