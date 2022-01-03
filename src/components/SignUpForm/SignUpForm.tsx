import TextField from '../TextField/TextField';
import styles from './SignUpForm.module.scss';
import CenteredForm from '../CenteredForm/CenteredForm';
import FormButton from '../FormButton/FormButton';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function SignUpForm() {
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    function handleSubmit() {
        console.log(name);
        console.log(email);
        console.log(password);
    }

    return (
        <CenteredForm heading="Sign Up for WMGTSS">
            <div className={styles.form}>
                <TextField
                    placeholder="Full Name"
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    isPassword
                />
                <FormButton onClick={handleSubmit}>Sign Up</FormButton>
            </div>
            <p>
                Already have an account? <Link to="/login">Sign in!</Link>
            </p>
        </CenteredForm>
    );
}

export default SignUpForm;
