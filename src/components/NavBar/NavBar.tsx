import styles from './NavBar.module.scss';
import logo from '../../static/logo.svg';
import AuthService from '../../services/AuthService';
import { useAppDispatch } from '../../redux/hooks';
import { logout as clearAuth } from '../../redux/slices/auth.slice';

export default function NavBar() {
    const dispatch = useAppDispatch();

    const logout = () => {
        AuthService.logout().then((res) => {
            dispatch(clearAuth());
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <img src={logo} alt="WMGTSS Logo" />
                <h1>WMGTSS</h1>
            </div>
            <p onClick={logout} className={styles.logout}>
                Logout
            </p>
        </div>
    );
}
