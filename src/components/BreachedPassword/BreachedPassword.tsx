import TextField from '../TextField/TextField';
import styles from './BreachedPassword.module.scss';
import CenteredForm from '../CenteredForm/CenteredForm';
import FormButton from '../FormButton/FormButton';
import { Link } from 'react-router-dom';
import { passwordRegex } from '../../utils/regex';
import { Form, Formik, FormikErrors } from 'formik';
import warning from '../../static/warning.svg';

type ChangePasswordForm = {
    password: string;
    passwordRepeat: string;
};

function BreachedPassword() {
    const validate = (values: ChangePasswordForm) => {
        const errors: FormikErrors<ChangePasswordForm> = {};
        if (!values.password) {
            errors.password = 'Required';
        } else if (!passwordRegex.test(values.password)) {
            errors.password =
                'Include upper case, lower case, number, and special character';
        }

        if (!values.passwordRepeat) {
            errors.passwordRepeat = 'Required';
        } else if (values.password !== values.passwordRepeat) {
            errors.passwordRepeat = 'Passwords must match';
        }

        return errors;
    };

    return (
        <CenteredForm
            heading="Insecure Password"
            subheading="Your password has been seen 999 times in data breaches!
            Change it now to secure your account."
            icon={warning}
        >
            <Formik
                initialValues={{ password: '', passwordRepeat: '' }}
                validate={validate}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                <Form className={styles.form}>
                    <TextField
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                    <TextField
                        type="password"
                        name="passwordRepeat"
                        placeholder="Repeat Password"
                    />
                    <FormButton onClick={console.log}>
                        Change Password
                    </FormButton>
                </Form>
            </Formik>
            <p>
                <Link to="/dashboard">Use insecure password</Link>
            </p>
        </CenteredForm>
    );
}

export default BreachedPassword;
