import TextField from '../../components/TextField/TextField';
import styles from './BreachedPassword.module.scss';
import CenteredForm from '../../components/CenteredForm/CenteredForm';
import FormButton from '../../components/FormButton/FormButton';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { passwordRegex } from '../../utils/regex';
import { Form, Formik, FormikErrors, FormikHelpers } from 'formik';
import warning from '../../static/warning.svg';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import UserService from '../../services/UserService';
import { setPwned } from '../../redux/slices/pwned.slice';
import { useState } from 'react';

type ChangePasswordForm = {
    password: string;
    passwordRepeat: string;
};

/**
 * A form contained within CenteredForm that warns the user that their
 * password is not secure. This form allows them to change their password,
 * or continue with their bad password.
 */
function BreachedPassword() {
    const pwned = useAppSelector((state) => state.pwned.pwnedCount);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [isSubmitting, setIsSubmitting] = useState(false);

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
        setIsSubmitting(true);
        UserService.changePassword(values.password).then((res) => {
            if (res.data.pwned) {
                dispatch(setPwned(res.data.pwned));
                formik.resetForm();
                setIsSubmitting(false);
            } else {
                navigate('/');
            }
        });
    };

    return pwned ? (
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
                    <FormButton disabled={isSubmitting}>
                        Change Password
                    </FormButton>
                </Form>
            </Formik>
            <p>
                <Link to="/">Use insecure password</Link>
            </p>
        </CenteredForm>
    ) : (
        <Navigate to="/" replace />
    );
}

export default BreachedPassword;
