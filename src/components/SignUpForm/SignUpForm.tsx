import TextField from '../TextField/TextField';
import styles from './SignUpForm.module.scss';
import CenteredForm from '../CenteredForm/CenteredForm';
import FormButton from '../FormButton/FormButton';
import { Link } from 'react-router-dom';
import { Form, Formik, FormikErrors } from 'formik';
import { RegisterDto } from '../../services/AuthService';
import { emailRegex, passwordRegex } from '../../utils/regex';

function SignUpForm() {
    const validate = (values: RegisterDto) => {
        const errors: FormikErrors<RegisterDto> = {};

        if (!values.name) errors.name = 'Required';

        if (!values.email) {
            errors.email = 'Required';
        } else if (!emailRegex.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.password) {
            errors.password = 'Required';
        } else if (values.password.length < 8) {
            errors.password = 'Must be at least 8 characters';
        } else if (!passwordRegex.test(values.password)) {
            errors.password =
                'Include upper case, lower case, number, and special character';
        }

        return errors;
    };

    return (
        <CenteredForm heading="Sign Up for WMGTSS">
            <Formik
                initialValues={{ name: '', email: '', password: '' }}
                validate={validate}
                onSubmit={(values) => console.log(values)}
            >
                <Form className={styles.form}>
                    <TextField name="name" placeholder="Full Name" />
                    <TextField type="email" name="email" placeholder="Email" />
                    <TextField
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                    <FormButton onClick={console.log}>Sign Up</FormButton>
                </Form>
            </Formik>
            <p>
                Already have an account? <Link to="/login">Sign in!</Link>
            </p>
        </CenteredForm>
    );
}

export default SignUpForm;
