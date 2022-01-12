import { Routes, Route, Navigate } from 'react-router-dom';
import styles from './App.module.scss';
import Error from '../Error/Error';
import SignUpPage from '../SignUpPage/SignUpPage';
import LoginPage from '../LoginPage/LoginPage';

function App() {
    return (
        <div className={styles.App}>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />

                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup/*" element={<SignUpPage />} />

                <Route
                    path="/*"
                    element={<Error title="404" message="Not Found" />}
                />
            </Routes>
        </div>
    );
}

export default App;
