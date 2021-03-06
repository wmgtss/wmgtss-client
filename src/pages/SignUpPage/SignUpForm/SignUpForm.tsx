import TextField from '../../../components/TextField/TextField';
import styles from './SignUpForm.module.scss';
import CenteredForm from '../../../components/CenteredForm/CenteredForm';
import FormButton from '../../../components/FormButton/FormButton';
import { Link } from 'react-router-dom';
import { Form, Formik, FormikErrors } from 'formik';
import AuthService, { RegisterDto } from '../../../services/AuthService';
import { emailRegex, passwordRegex } from '../../../utils/regex';
import { useAppDispatch } from '../../../redux/hooks';
import { login } from '../../../redux/slices/auth.slice';
import { setPwned } from '../../../redux/slices/pwned.slice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

type RegisterFormFields = RegisterDto & {
    passwordRepeat: string;
};

/**
 * Sign up form, rendered inside the Centered Form.
 * Using Formik for validation
 */
function SignUpForm() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const validate = (values: RegisterFormFields) => {
        const errors: FormikErrors<RegisterFormFields> = {};

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

        if (!values.passwordRepeat) {
            errors.passwordRepeat = 'Required';
        } else if (values.password !== values.passwordRepeat) {
            errors.passwordRepeat = 'Passwords must match';
        }

        return errors;
    };

    const submit = (values: RegisterFormFields, { resetForm }: any) => {
        setIsSubmitting(true);
        const user: RegisterDto = {
            email: values.email,
            name: values.name,
            password: values.password,
        };

        AuthService.register(user)
            .then((res) => {
                dispatch(login(res.data.user));
                if (res.data.pwned) {
                    dispatch(setPwned(res.data.pwned));
                    navigate('/yikes');
                } else {
                    navigate('/');
                }
            })
            .catch((err) => {
                setIsSubmitting(false);
                setError('A user already exists with that email');
                resetForm();
            });
    };

    return (
        <CenteredForm heading="Sign Up for WMGTSS" subheading={error}>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    passwordRepeat: '',
                }}
                validate={validate}
                onSubmit={submit}
            >
                <Form className={styles.form}>
                    <TextField name="name" placeholder="Full Name" />
                    <TextField type="email" name="email" placeholder="Email" />
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
                    <FormButton disabled={isSubmitting}>Sign Up</FormButton>
                </Form>
            </Formik>
            <p>
                Already have an account? <Link to="/login">Sign in!</Link>
            </p>
        </CenteredForm>
    );
}

export default SignUpForm;
