import { Routes, Route } from 'react-router-dom';
import styles from './App.module.scss';
import Error from '../Error/Error';
import SignUpPage from '../SignUpPage/SignUpPage';
import LoginPage from '../LoginPage/LoginPage';
import { useAppDispatch } from '../../redux/hooks';
import { login, logout } from '../../redux/slices/auth.slice';
import UserService from '../../services/UserService';
import PrivateRoutes from '../../components/PrivateRoutes/PrivateRoutes';
import Dashboard from '../Dashboard/Dashboard';
import { useEffect } from 'react';
import BreachedPassword from '../../components/BreachedPassword/BreachedPassword';

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        UserService.getCurrentUser()
            .then((res) => {
                dispatch(login(res.data));
            })
            .catch(() => {
                dispatch(logout());
            });
    }, [dispatch]);

    return (
        <div className={styles.App}>
            <Routes>
                {/* Private Routes */}
                <Route path="/" element={<PrivateRoutes />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/yikes" element={<BreachedPassword />} />
                </Route>

                {/* Public Routes */}
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
