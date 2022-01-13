import styles from './Dashboard.module.scss';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { logout as clearAuth } from '../../redux/slices/auth.slice';
import AuthService from '../../services/AuthService';

export default function Dashboard() {
    const user = useAppSelector((state) => state.auth.user);
    const dispatch = useAppDispatch();

    const logout = () => {
        AuthService.logout().then((res) => {
            dispatch(clearAuth());
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <h1>Dashboard</h1>
                <p>{user?.email}</p>
                <p>{user?.name}</p>
                <br />
                <a href={void 0} onClick={logout}>
                    Logout
                </a>
            </div>
        </div>
    );
}
