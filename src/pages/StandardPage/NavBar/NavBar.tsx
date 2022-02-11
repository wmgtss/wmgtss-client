import styles from './NavBar.module.scss';
import logo from '../../../static/logo.svg';
import AuthService from '../../../services/AuthService';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { logout as clearAuth } from '../../../redux/slices/auth.slice';
import { Link } from 'react-router-dom';

export default function NavBar() {
    const dispatch = useAppDispatch();
    const username = useAppSelector((state) => state.auth.user?.name);

    const logout = () => {
        AuthService.logout().then((res) => {
            dispatch(clearAuth());
            localStorage.clear();
        });
    };

    return (
        <div className={styles.container}>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <div className={styles.title}>
                    <img src={logo} alt="WMGTSS Logo" />
                    <h1>WMGTSS</h1>
                </div>
            </Link>
            <div className={styles.right}>
                <p className={styles.username}>{username}</p>
                <p onClick={logout} className="link">
                    Logout
                </p>
            </div>
        </div>
    );
}
