import TextField from '../TextField/TextField';
import styles from './LoginForm.module.scss';
import CenteredForm from '../CenteredForm/CenteredForm';
import FormButton from '../FormButton/FormButton';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function LoginForm() {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    function handleSubmit() {
        console.log(email);
        console.log(password);
    }

    return (
        <CenteredForm heading="Login to WMGTSS">
            <div className={styles.form}>
                <TextField
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    isPassword
                />
                <FormButton onClick={handleSubmit}>Login</FormButton>
            </div>
            <p>
                <Link to="/signup">Create an account</Link>
            </p>
        </CenteredForm>
    );
}

export default LoginForm;
