import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import FullScreenForm from '../../components/FullScreenContainer/FullScreenContainer';
import { Routes, Route, Navigate } from 'react-router-dom';
import styles from './App.module.scss';
import NotFound from '../NotFound/NotFound';

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

                <Route path="/*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
