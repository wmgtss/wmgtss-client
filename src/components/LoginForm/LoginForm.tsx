import TextField from '../TextField/TextField';
import styles from './LoginForm.module.scss';
import CenteredForm from '../CenteredForm/CenteredForm';
import FormButton from '../FormButton/FormButton';
import { Link } from 'react-router-dom';

function LoginForm() {
    return (
        <CenteredForm heading="Login to WMGTSS">
            <div className={styles.form}>
                <TextField placeholder="Email" />
                <TextField placeholder="Password" isPassword />
                <FormButton>Login</FormButton>
            </div>
            <p className={styles.existingAccount}>
                <Link to="/signup">Create an account</Link>
            </p>
        </CenteredForm>
    );
}

export default LoginForm;
