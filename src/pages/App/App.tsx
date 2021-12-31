import LoginForm from '../../components/LoginForm/LoginForm';
import FullScreenForm from '../FullScreenForm/FullScreenForm';
import { Routes, Route, Navigate } from 'react-router-dom';
import styles from './App.module.scss';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

function App() {
    return (
        <div className={styles.App}>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />

                <Route
                    path="/login"
                    element={
                        <FullScreenForm>
                            <LoginForm />
                        </FullScreenForm>
                    }
                />
                <Route
                    path="/signup"
                    element={
                        <FullScreenForm>
                            <SignUpForm />
                        </FullScreenForm>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
