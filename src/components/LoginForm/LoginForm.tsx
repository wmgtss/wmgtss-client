import styles from './LoginForm.module.scss';
import TextField from '../TextField/TextField';
import CenteredForm from '../CenteredForm/CenteredForm';
import FormButton from '../FormButton/FormButton';
import { Link } from 'react-router-dom';
import { emailRegex } from '../../utils/regex';
import { Form, Formik, FormikErrors } from 'formik';
import AuthService, { LoginDto } from '../../services/AuthService';
import { useAppDispatch } from '../../redux/hooks';
import { login } from '../../redux/slices/auth.slice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function LoginForm() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState('');

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

    const submit = (values: LoginDto) => {
        AuthService.login(values)
            .then((res) => {
                dispatch(login(res.data));
                navigate('/');
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    setError('Invalid email or password');
                }
            });
    };

    return (
        <CenteredForm heading="Login to WMGTSS" subheading={error}>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={validate}
                onSubmit={submit}
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
