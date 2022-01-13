import TextField from '../TextField/TextField';
import styles from './BreachedPassword.module.scss';
import CenteredForm from '../CenteredForm/CenteredForm';
import FormButton from '../FormButton/FormButton';
import { Link, useNavigate } from 'react-router-dom';
import { passwordRegex } from '../../utils/regex';
import { Form, Formik, FormikErrors, FormikHelpers } from 'formik';
import warning from '../../static/warning.svg';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import UserService from '../../services/UserService';
import { setPwned } from '../../redux/slices/pwned.slice';

type ChangePasswordForm = {
    password: string;
    passwordRepeat: string;
};

function BreachedPassword() {
    const pwned = useAppSelector((state) => state.pwned.pwnedCount);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

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

    const submit = (
        values: ChangePasswordForm,
        formik: FormikHelpers<ChangePasswordForm>,
    ) => {
        UserService.changePassword(values.password).then((res) => {
            if (res.data.pwned) {
                dispatch(setPwned(res.data.pwned));
                formik.resetForm();
            } else {
                navigate('/');
            }
        });
    };

    return (
        <CenteredForm
            heading="Insecure Password"
            subheading={`Your password has been seen ${pwned} times in data breaches! Change it now to secure your account.`}
            icon={warning}
        >
            <Formik
                initialValues={{ password: '', passwordRepeat: '' }}
                validate={validate}
                onSubmit={submit}
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
                    <FormButton>Change Password</FormButton>
                </Form>
            </Formik>
            <p>
                <Link to="/">Use insecure password</Link>
            </p>
        </CenteredForm>
    );
}

export default BreachedPassword;
