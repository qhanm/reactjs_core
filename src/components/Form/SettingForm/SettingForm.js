import React from "react";
import TextFieldInput from "../../Elements/TextFieldInput";
import CheckboxField from "../../Elements/CheckboxField";
import {withFormik} from "formik";
import {connect} from 'react-redux';
import ButtonField from "../../Elements/ButtonField";

function SettingForm(props) {

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
                labelName="Email"
                attribute="email"
                txtError={errors.email }
                isTouched={touched.email}
                handleChange={ handleChange }
                handleBlur={handleBlur}
                value={values.email}
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
            <CheckboxField
                name="remember"
                checked={values.remember}
                value={"Remember"}
                labelName={"Remember me"}
                handleChange={ handleChange }
            />
            <ButtonField
                text="Sign In"
                type="submit"
                isFullWidth={true}
            />
        </form>
    )
}

const SettingFormWithFormik = withFormik({
    mapPropsToValues: () => ({
        email: '',
        password: '',
        remember: false,
    }),
    handleSubmit: (values, {props, setSubmitting }) => {

    },
})(SettingForm)

export default connect()(SettingFormWithFormik);