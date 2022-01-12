import TextField from '../TextField/TextField';
import styles from './LoginForm.module.scss';
import CenteredForm from '../CenteredForm/CenteredForm';
import FormButton from '../FormButton/FormButton';
import { Link } from 'react-router-dom';
import { emailRegex } from '../../utils/regex';
import { Form, Formik, FormikErrors } from 'formik';
import { LoginDto } from '../../services/AuthService';

function LoginForm() {
    const validate = (values: LoginDto) => {
        const errors: FormikErrors<LoginDto> = {};
        if (!values.email) {
            errors.email = 'Required';
        } else if (!emailRegex.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.password) errors.password = 'Required';

        return errors;
    };

    return (
        <CenteredForm heading="Login to WMGTSS">
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={validate}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                <Form className={styles.form}>
                    <TextField type="email" name="email" placeholder="Email" />
                    <TextField
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                    <FormButton onClick={console.log}>Login</FormButton>
                </Form>
            </Formik>
            <p>
                <Link to="/signup">Create an account</Link>
            </p>
        </CenteredForm>
    );
}

export default LoginForm;
