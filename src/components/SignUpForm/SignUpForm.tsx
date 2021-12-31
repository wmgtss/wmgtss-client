import TextField from '../TextField/TextField';
import styles from './SignUpForm.module.scss';
import CenteredForm from '../CenteredForm/CenteredForm';
import FormButton from '../FormButton/FormButton';
import { Link } from 'react-router-dom';

function SignUpForm() {
    return (
        <CenteredForm heading="Sign Up for WMGTSS">
            <div className={styles.form}>
                <TextField placeholder="Full Name" />
                <TextField placeholder="Email" />
                <TextField placeholder="Password" isPassword />
                <FormButton>Sign Up</FormButton>
            </div>
            <p className={styles.existingAccount}>
                Already have an account? <Link to="/login">Sign in!</Link>
            </p>
        </CenteredForm>
    );
}

export default SignUpForm;
